'use client'


import { Gamepad2, X, MessageCircle, Paperclip, Send, Image as ImageIcon, File } from 'lucide-react';
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
import useEcho from '@/hooks/echo';
import VoiceRecorder from '../VoiceRecorder';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


function ChatPopup() {
  const { user } = useAuth();
  const echo = useEcho();
  const [unreadCount,setUnreadCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isDraggingFile, setIsDraggingFile] = useState(false);
  const [hasChat, setHasChat] = useState(false);
  const [chatInfo, setChatInfo] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      scrollToBottom();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [messages, isOpen]);

  useEffect(() => {
    fetchChat();
  }, []);

  useEffect(() => {
    if (isOpen && chatInfo) {
      fetchMessages(chatInfo.id);
    }
  }, [isOpen]);
  

  useEffect(() => {
    if (echo && chatInfo) {
      const channel = echo.private(`chat.messages.${chatInfo.id}`);
      channel.listen('MessageSent', (e) => {
        setMessages((prevMessages) => [...prevMessages, e.message]);
        if(!isOpen){
          setUnreadCount((prevCount) => prevCount + 1);
        }
        if(isOpen){
          axios.patch(`api/messages/markAsRead/${e.message.id}`);
        }
      });

      return () => {
        channel.stopListening('MessageSent');
      };
    }
  }, [echo, chatInfo,isOpen]);

  const fetchChat = async () => {
    try {
      const res = await axios.get('api/chats');
      if (res?.data && Object.keys(res.data).length > 0) {
       // setMessages(res.data.messages || []);
        setChatInfo(res.data);
        setHasChat(true);
        setUnreadCount(res.data.unread_count || 0)
      } else {
        setHasChat(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMessages = async (chatId) => {
    try {
      const res = await axios.patch(`api/messages/${chatId}`);
      setMessages(res.data);
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  };

  const handleCreateChat = async () => {
    try {
      const res = await axios.post('api/chats', {
        client_id: user.id,
      });
      if (res.data && res.data.chat) {
        setHasChat(true);
        setChatInfo(res.data.chat);
        setMessages([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSendMessage = useCallback(async () => {
    if (!newMessage.trim() && selectedFiles.length === 0) return;

    const formData = new FormData();
    formData.append('message', newMessage.trim());

    selectedFiles.forEach((file, index) => {
      formData.append(`attachments[${index}]`, file);
    });

    try {
      const res = await axios.post(`api/messages/${chatInfo.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setNewMessage('');
      setSelectedFiles([]);
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again.');
    }
  }, [newMessage, selectedFiles, chatInfo, messages]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDraggingFile(true);
  };

  const handleDragLeave = () => {
    setIsDraggingFile(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDraggingFile(false);
    const files = Array.from(e.dataTransfer.files);
    setSelectedFiles(files);
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const memoizedMessages = useMemo(() => messages, [messages]);

  return (
    <>
      {user && (
        <><button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full bg-game-primary text-white flex items-center justify-center shadow-lg hover:bg-[#4f46e5] transition-colors z-50 ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <MessageCircle className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full">
            {unreadCount}
          </span>
        )}
      </button>
        </>
      )}
      {isOpen && (
        <div className={`fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <div className="w-full max-w-2xl bg-gray-900 rounded-lg shadow-xl flex flex-col gradient-border animate-fade-scale-up">
            <div className="p-4 border-b border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Gamepad2 className="w-6 h-6 text-game-primary" />
                <h3 className="font-bold">Support Chat</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {hasChat ? (
              <>
                <div
                  className={`flex-1 overflow-y-auto p-4 space-y-4 min-h-[400px] max-h-[600px] ${
                    isDraggingFile ? 'bg-game-primary/10 border-2 border-dashed border-[#4f46e5]' : ''
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {memoizedMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${
                        msg.sender_id === user.id ? 'items-end' : 'items-start'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                      {msg.sender_id === user.id  && (
                        msg.is_read ? (
                               <span className="text-sm text-green-400">seen</span>
                           ) : (
                                    <span className="text-sm text-gray-500">sent</span>
                          )
                                )}
                        <span className="text-xs text-gray-500">
                          {new Date(msg.created_at).toLocaleTimeString()}
                        </span>
                      </div>
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          msg.sender_id === user.id
                            ? 'bg-[#4f46e5] text-white'
                            : 'bg-gray-800 text-gray-100'
                        }`}
                      >
                        <p className="whitespace-pre-wrap">{msg.message}</p>
                        {
                          msg.voice_message_path && (
                            <div className="mt-2">
                                <AudioPlayer
                            autoPlay={false}
                            // showJumpControls={false}
                            showPlayControl={false}
                            // showVolumeControl={false}
                            // showRepeatControl={false}
                            // showPlaylist={false}
                            // showSkipControls={false}
                            src={msg.voice_message_path} // From your Laravel API
                            onPlay={e => console.log("onPlay")}
                          />
                            </div>
                          )
                        }
                        {/* {msg.voice_message_path && (
                          <div className="mt-2">
                            <audio
                              controls
                              src={msg.voice_message_path}
                              className="w-full"
                            />
                          </div>
                        )} */}
                        {/* {msg.voice_message_path && (
  <div className="mt-2">
    <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
      <button
        onClick={() => {
          const audio = new Audio(msg.voice_message_path);
          audio.play().catch(e => console.error("Audio playback failed:", e));
        }}
        className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
        </svg>
      </button>
      
      <span className="text-sm text-gray-700 dark:text-gray-300">Voice Message</span>
      <a 
        href={msg.voice_message_path} 
        download
        className="ml-auto text-sm text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      >
        Download
      </a>
    </div>
    <audio
      controls
      src={msg.voice_message_path}
      className="w-full mt-2 hidden md:block"
    />
  </div>
)}   */}
                
                {msg.attachments && msg.attachments.map((attachment, index) => (
                            <div key={index}>
                              {attachment.file_type.includes('image') ? (
                                <img
                                  src={attachment.file_url}
                                  alt={attachment.file_name}
                                  className="max-w-full h-auto rounded-lg"
                                />
                              ) : (
                                <a
                                  href={attachment.file_url}
                                  download={attachment.file_name}
                                  className="text-sm text-blue-400 hover:text-blue-300"
                                >
                                  Download {attachment.file_name}
                                </a>
                              )}
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                <div className="p-4 border-t border-gray-800">
                  <div className="flex items-center gap-2">
                    <label htmlFor="file-input" className="cursor-pointer">
                      <Paperclip className="w-5 h-5" />
                    </label>
                    <input
                      type="file"
                      id="file-input"
                      multiple
                      style={{ display: 'none' }}
                      onChange={handleFileSelect}
                    />
                     <VoiceRecorder
                    onRecordingComplete={(audioBlob) => {
                      const formData = new FormData();
                      formData.append(
                        "voice_message",
                        audioBlob,
                        `voice-${Date.now()}.wav`
                      );
                      formData.append("chat_id", String(chatInfo?.id));

                      axios
                        .post(`api/messages/${chatInfo?.id}`, formData, {
                          headers: {
                            "Content-Type": "multipart/form-data",
                          },
                        })
                        .catch((error) => {
                          console.error("Error sending voice message:", error);
                          // Handle error appropriately
                        });
                    }}
                  />
                    <textarea
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-game-primary resize-none"
                      rows={1}
                    />
                    <button
                      onClick={handleSendMessage}
                      className="text-white bg-[#4f46e5] hover:bg-[#7c3aed] p-2 rounded-lg transition-colors"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                  {selectedFiles.length > 0 && (
                    <div className="mt-2 space-y-2">
                      {selectedFiles.map((file, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 rounded bg-gray-700/50">
                          <File className="w-4 h-4" />
                          <span className="text-sm truncate">{file.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center my-5">
                <button
                  onClick={handleCreateChat}
                  className="text-white bg-[#4f46e5] hover:bg-[#7c3aed] px-6 py-2 rounded-lg transition-colors"
                >
                  Start Conversation
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ChatPopup;