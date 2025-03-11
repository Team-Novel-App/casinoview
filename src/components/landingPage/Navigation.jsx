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

export default function Navigation({ isScrolled }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const { user, logout } = useAuth()
    const router = useRouter()

    const handleJoinClick = () => {
        router.push('/users')
    }

    const handleLogout = () => {
        logout()
    }

    return (
        <nav
            className={`fixed left-0 right-0 mx-auto z-50 transition-all bg-gradient-to-r from-[#95ecb0]  to-[#43b692] duration-300 ${isScrolled ? 'w-full sm:px-4 py-5 lg:px-10 ' : 'w-[95%] border-white lg:rounded-full md:rounded-full sm:rounded-4xl mt-8 px-4 py-5'} `}>
            <div className=" px-4 w-full mr-10">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Dice6 className="w-9 h-9 text-[#4f46e5] animate-float" />
                        <span className="text-xl  bg-clip-text font-FontMarquee bg-gradient-to-r font-test from-[#4f46e5] via-[#605C66] to-[#322C3C] text-transparent">
                            CASINO PLAY
                        </span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <a
                            href="#home"
                            className="hover:text-[#4f46e5]  text-black ">
                            Home
                        </a>
                        <a
                            href="#games"
                            className="hover:text-[#4f46e5] text-black ">
                            Games
                        </a>
                        <a
                            href="#tournaments"
                            className="hover:text-[#4f46e5] text-black ">
                            Events
                        </a>
                        <a
                            href="#rules"
                            className="hover:text-[#4f46e5] text-black ">
                            Rules
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
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
                                    className="text-white hidden md:block gradient-border bg-gray-900 px-6 py-2 font-medium transition-transform hover:scale-105">
                                    Join Now
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white mt-4 p-4 rounded-lg">
                        {user && (
                            <div className="flex items-center bg-gray-100 rounded-lg shadow-md justify-between relative">
                                <p className="text-center font-semibold text-gray-800  px-4 py-2 ">
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
                        <div className="flex flex-col gap-4 mx-7 my-4">
                            <a
                                href="#home"
                                className="hover:text-game-primary text-black">
                                Home
                            </a>
                            <a
                                href="#games"
                                className="hover:text-game-primary text-black">
                                Games
                            </a>
                            <a
                                href="#tournaments"
                                className="hover:text-game-primary text-black">
                                Events
                            </a>
                            <a
                                href="#rules"
                                className="hover:text-game-primary text-black">
                                Rules
                            </a>
                        </div>
                        \
                        <div>
                            {user ? (
                                <div className="flex flex-col gap-2">
                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-white font-extralight gradient-border bg-gray-900  px-6 py-2">
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={handleJoinClick}
                                    className="text-white gradient-border bg-gray-900  px-6 py-2 font-medium w-full">
                                    Join Now
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

// import React, { useState, useEffect } from "react";
// import { Dice6, Menu, X, LogOut, User, Settings } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@/hooks/auth";
// import Image from "next/image";
// export default function Navigation({ isScrolled }) {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const { user, logout } = useAuth();
//   const router = useRouter();

//   const handleJoinClick = () => {
//     router.push("/users");
//   };

//   const handleLogout = () => {
//     logout();
//   };

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "glass-effect opacity-80 py-5" : "bg-transparent py-5"}`}>
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <Dice6 className="w-9 h-9 text-[#4f46e5] animate-float" />
//             <span className="text-xl font-bold bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#db2777] text-transparent">
//               CASINO PLAY
//             </span>
//           </div>

//           <div className="hidden md:flex items-center gap-8">
//             <a href="#home" className="hover:text-[#4f46e5] text-white">Home</a>
//             <a href="#games" className="hover:text-[#4f46e5] text-white">Games</a>
//             <a href="#tournaments" className="hover:text-[#4f46e5] text-white">Events</a>
//             <a href="#rules" className="hover:text-[#4f46e5] text-white">Rules</a>
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="md:hidden">
//               <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
//                 {isMobileMenuOpen ? <X /> : <Menu />}
//               </button>
//             </div>

//             {user ? (
//               <div className="relative">
//                 <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center space-x-2">
//                   <Image src={user?.avatar} alt="User" width={30} height={30} className="rounded-full border" />
//                   <span className="w-2 h-2 bg-green-500 rounded-full absolute bottom-1 right-1"></span>
//                 </button>

//                 {isProfileOpen && (
//                   <div className="absolute p-1 right-0 mt-2 w-47 bg-gray-300 shadow-lg rounded-lg overflow-hidden">
//                     <div className="p-2 flex items-center space-x-1 border-b">
//                       <Image src={user?.avatar} height={30} alt="user" width={30} className="rounded-full" />
//                       <div>
//                         <p className="text-xs text-black">{user?.name}</p>
//                       </div>
//                     </div>
//                     <button onClick={() => setIsProfileOpen(false)} className="absolute top-2 right-2 p-1 text-gray-500 hover:text-black">
//                       <X className="w-4 h-4 mt-2" />
//                     </button>
//                     <div className="p-1 text-black">
//                       <div className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 cursor-pointer">
//                         <User size={18} />
//                         <p className="text-xs font-extralight">My Profile</p>
//                       </div>
//                       <div className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 cursor-pointer">
//                         <Settings size={18} />
//                         <p className="text-xs font-extralight">Settings</p>
//                       </div>
//                     </div>
//                     <button onClick={handleLogout} className="flex text-xs gap-4 gradient-border bg-gray-900 px-6 py-1 font-medium w-full">
//                       <LogOut size={15} />
//                       <span>Logout</span>
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <button onClick={handleJoinClick} className="text-white hidden md:block gradient-border bg-gray-900 px-6 py-2 font-medium transition-transform hover:scale-105">
//                 Join Now
//               </button>
//             )}
//           </div>
//         </div>

//         {isMobileMenuOpen && (
//           <div className="md:hidden glass-effect mt-4 p-4 rounded-lg">
//             <div className="flex flex-col gap-4">
//               <a href="#home" className="hover:text-game-primary text-white">Home</a>
//               <a href="#games" className="hover:text-game-primary text-white">Games</a>
//               <a href="#tournaments" className="hover:text-game-primary text-white">Events</a>
//               <a href="#rules" className="hover:text-game-primary text-white">Rules</a>
//               {user ? (
//                 <div className="flex flex-col gap-2">
//                   <p className="text-center font-medium">Hello, {user?.name}</p>
//                   <button onClick={handleLogout} className="w-full text-white font-extralight gradient-border bg-gray-900  px-6 py-2">
//                     Logout
//                   </button>
//                 </div>
//               ) : (
//                 <button onClick={handleJoinClick} className="text-white gradient-border bg-gray-900  px-6 py-2 font-medium w-full">
//                   Join Now
//                 </button>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
