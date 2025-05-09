'use client'

import React, { useState, useEffect } from 'react'
import {
    Dice6,
    Menu,
    X,
    LogOut,
    User,
    Settings,
    CreditCard,
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/auth'
import Image from 'next/image'
import useSWR from 'swr'
import axios from '@/lib/axios'

const fetchFnc = async () => {
    const response = await axios.get('api/chats/online');
    return response.data;
};

export default function Navigation({ isScrolled }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const { user, logout } = useAuth()
    const router = useRouter();
    const { data } = useSWR(
      user ? "/api/chats/online" : null, 
      fetchFnc,
      {
        revalidateOnFocus: false,
        refreshInterval: 60000, 
      }
    );
    
    const handleJoinClick = () => {
        router.push('/users')
    }

    const handleLogout = () => {
        logout()
    }

    return (
        <nav
            className={'fixed top-0 left-0 right-0 z-50 transition-all bg-gradient-to-r from-[#d5d3ae] via-[#a09a63] to-[#534c28] duration-300 w-full px-4 py-5'}>
            <div className="max-w-8xl mx-auto px-4">
                <div className="flex items-center justify-between w-full">
                    {/* Logo - Far Left */}
                    <div className="flex items-center gap-2">
                        <Dice6 className="w-9 h-9 text-[#4f46e5] animate-float" />
                        <span className="text-xl bg-clip-text font-FontMarquee bg-gradient-to-r font-test from-[#4f46e5] via-[#605C66] to-[#322C3C] text-transparent">
                            CASINO PLAY
                        </span>
                    </div>

                    {/* Center Navigation Links */}
                    <div className="hidden md:flex items-center gap-9 my-1 absolute left-1/2 transform -translate-x-1/2">
                        <a
                            href="#home"
                            className="text-[#0d012e] text-[20px] font-aldo transition-transform hover:scale-125 duration-200 hover:text-white">
                            Home
                        </a>
                        <a
                            href="#games"
                            className="text-[#0d012e] text-[20px] font-aldo transition-transform hover:scale-125 duration-200 hover:text-white">
                            Games
                        </a>
                        <a
                            href="#tournaments"
                            className="text-[#0d012e] text-[20px] font-aldo transition-transform hover:scale-125 duration-200 hover:text-white">
                            Events
                        </a>
                        <a
                            href="#rules"
                            className="text-[#0d012e] text-[20px] font-aldo transition-transform hover:scale-125 duration-200 hover:text-white">
                            Rules
                        </a>
                    </div>

                    {/* Profile/Join Button - Far Right */}
                    <div className="flex items-center gap-4 ml-auto">
                        <div className="md:hidden">
                            <button
                                onClick={() =>
                                    setIsMobileMenuOpen(!isMobileMenuOpen)
                                }
                                className="text-white p-2">
                                {isMobileMenuOpen ? <X /> : <Menu />}
                            </button>
                        </div>

                        {user ? (
                            <div className="relative hidden md:block">
                                <div>
                                    <button
                                        onClick={() =>
                                            setIsProfileOpen(!isProfileOpen)
                                        }
                                        className="flex items-center space-x-2">
                                        <Image
                                            src={user?.avatar}
                                            alt="User"
                                            width={30}
                                            height={30}
                                            className="rounded-full border"
                                        />
                                        <span className="w-2 h-2 bg-green-500 rounded-full absolute bottom-1 right-1"></span>
                                    </button>
                                </div>
                                {isProfileOpen && (
                                    <div className="absolute p-1 right-0 mt-2 w-47 bg-gray-300 shadow-lg rounded-lg overflow-hidden">
                                        <div className="p-2 flex items-center space-x-1 border-b">
                                            <Image
                                                src={user?.avatar}
                                                height={30}
                                                alt="user"
                                                width={30}
                                                className="rounded-full"
                                            />
                                            <div>
                                                <p className="text-xs text-black">
                                                    {user?.name}
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() =>
                                                setIsProfileOpen(false)
                                            }
                                            className="absolute top-2 right-2 p-1 text-gray-500 hover:text-black">
                                            <X className="w-4 h-4 mt-2" />
                                        </button>
                                        <div className="p-1 text-black">
                                            <div className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 cursor-pointer">
                                                <User size={18} />
                                                <p className="text-xs font-extralight">
                                                    My Profile
                                                </p>
                                            </div>
                                            <div className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 cursor-pointer">
                                                <Settings size={18} />
                                                <p className="text-xs font-extralight">
                                                    Settings
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={handleLogout}
                                            className="flex text-xs gap-4 gradient-border bg-gray-900 px-6 py-1 font-medium w-full">
                                            <LogOut size={15} />
                                            <span>Logout</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div>
                                <button
                                    onClick={handleJoinClick}
                                    className="text-black hidden md:block rounded-xl border-2 border-black boreder-opacity-40 font-aldo bg-[#bdbb9a] px-3 py-1 transition-transform hover:scale-105 hover:text-[#faf4bb] hover:border-white hover:bg-[#2b3133]">
                                    JOIN NOW
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden bg-gray-300 mt-4 p-4 rounded-lg">
                        {user && (
                            <div className="flex items-center bg-gray-400 rounded-lg shadow-md justify-between relative">
                                <p className="text-center font-semibold text-gray-800 px-4 py-2">
                                    Hello, {user?.name}{' '}
                                </p>
                                <div className="relative w-8 h-8">
                                    <Image
                                        src={user?.avatar}
                                        alt="User"
                                        width={30}
                                        height={30}
                                        className="rounded-full border w-full h-full"
                                    />
                                    <span className="w-2 h-2 bg-green-500 rounded-full absolute bottom-0 right-0 border border-white"></span>
                                </div>
                            </div>
                        )}
                        <div className="flex flex-col gap-3 mx-3 my-2 mb-4">
                            <a
                                href="#home"
                                className="hover:text-game-primary font-aldo text-[#0d012e]">
                                Home
                            </a>
                            <a
                                href="#games"
                                className="hover:text-game-primary font-aldo text-[#0d012e]">
                                Games
                            </a>
                            <a
                                href="#tournaments"
                                className="hover:text-game-primary font-aldo text-[#0d012e]">
                                Events
                            </a>
                            <a
                                href="#rules"
                                className="hover:text-game-primary font-aldo text-[#0d012e]">
                                Rules
                            </a>
                        </div>
                        <div>
                            {user ? (
                                <div className="flex flex-col gap-2">
                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-white font-extralight gradient-border bg-gray-900 px-6 py-2">
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={handleJoinClick}
                                    className="text-[#0d012e] bg-[#bdbb9a] rounded-xl border-2 font-aldo border-black boreder-opacity-40 px-6 py-2 font-medium w-full">
                                    JOIN NOW
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}