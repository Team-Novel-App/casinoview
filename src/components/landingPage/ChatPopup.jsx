import { Gamepad2, X, MessageCircle, Paperclip, Send, Image as ImageIcon, File } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";

const dummyMessages = [
  {
    id: '1',
    sender: 'User',
    message: 'Hi! I\'m interested in joining the next tournament.',
    timestamp: new Date(Date.now() - 1800000),
    attachments: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e',
        name: 'screenshot.jpg',
      },
    ],
  },
];

function ChatPopup() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isDraggingFile, setIsDraggingFile] = useState(false);
  const [hasChat, setHasChat] = useState(false);
  const [chatInfo,setChatInfo] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
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

  const fetchChat = async () => {
    try {
      const res = await axios.get('api/chats');
      if (res?.data && Object.keys(res.data).length > 0) {
        setMessages(res.data.messages || []);
        setChatInfo(res.data);
        setHasChat(true); 
      } else {
        setHasChat(false);
      }
    } catch (error) {
      console.log(error);
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

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      setNewMessage('');
      try {
        const res = await axios.post(`api/messages/${chatInfo.id}`, {
          message: newMessage.trim(),
        });
         setMessages([...messages, res.data.data]);
        console.log(res.data);
        
      }catch (error) {
        console.log(error);
    }
  };
}

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
  };
  console.log(messages);

  return (
    <>
      {user && (
        <button
          onClick={() => setIsOpen(true)}
          className={`fixed bottom-6 left-6 w-14 h-14 rounded-full bg-game-primary text-white flex items-center justify-center shadow-lg hover:bg-[#4f46e5] transition-colors z-50 ${
            isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
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
                  className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[400px] max-h-[600px]"
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${
                        msg.sender_id === user.id ? 'items-end' : 'items-start'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm text-gray-400">{msg.sender.name}</span>
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
                        {msg.attachments && msg.attachments.length > 0 && (
                          <div className="mt-2 space-y-2">
                            {msg.attachments.map((attachment, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2 p-2 rounded bg-gray-700/50"
                              >
                                {attachment.type === 'image' ? (
                                  <ImageIcon className="w-4 h-4" />
                                ) : (
                                  <File className="w-4 h-4" />
                                )}
                                <span className="text-sm truncate">{attachment.name}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                  {isDraggingFile && (
                    <div className="absolute inset-0 bg-game-primary/10 border-2 border-dashed border-[#4f46e5] rounded-lg flex items-center justify-center">
                      <p className="text-[#4f46e5] font-medium">Drop files to attach</p>
                    </div>
                  )}
                </div>

                <div className="p-4 border-t border-gray-800">
                  <div className="flex items-center gap-2">
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <Paperclip className="w-5 h-5" />
                    </button>
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