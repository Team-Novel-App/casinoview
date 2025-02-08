"use client"
import React, { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'


export default function GamesSection() {
    const [showAll, setShowAll] = useState(false)
    const [screenWidth, setScreenWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0,
    )

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const games = [
        {
            title: 'Apex Legends',
            image: '/assets/images/gameSectionImg/img1.jpg',
            players: '50K+',
        },
        {
            title: 'Valorant',
            image: '/assets/images/gameSectionImg/img2.jpg',
            players: '45K+',
        },
        {
            title: 'League of Legends',
            image: '/assets/images/gameSectionImg/img3.jpg',
            players: '100K+',
        },
        {
            title: 'Hot Deco',
            image: '/assets/images/gameSectionImg/img4.jpg',
            players: '80K+',
        },
        {
            title: 'Game Time',
            image: '/assets/images/gameSectionImg/img5.jpg',
            players: '80K+',
        },
        {
            title: 'Poker',
            image: '/assets/images/gameSectionImg/img6.jpg',
            players: '80K+',
        },
        {
            title: 'Casino Night',
            image: '/assets/images/gameSectionImg/img7.jpg',
            players: '80K+',
        },
        {
            title: 'Hot Deco',
            image: '/assets/images/gameSectionImg/img8.jpg',
            players: '80K+',
        },
        {
            title: 'Hot Deco',
            image: '/assets/images/gameSectionImg/img9.jpeg',
            players: '80K+',
        },
        {
            title: 'Hot Deco',
            image: '/assets/images/gameSectionImg/img10.jpg',
            players: '80K+',
        },
        {
            title: 'Hot Deco',
            image: '/assets/images/gameSectionImg/img11.jpeg',
            players: '80K+',
        },
        {
            title: 'Hot Deco',
            image: '/assets/images/gameSectionImg/img12.jpeg',
            players: '80K+',
        },
    ]

    const handleJoinGameClick = gameTitle => {
        console.log(`Joining game: ${gameTitle}`)
    }

    const getDisplayedGames = () => {
        if (screenWidth >= 1536) {
            return games
        } else if (screenWidth >= 768) {
            return showAll ? games : games.slice(0, 8)
        } else {
            return showAll ? games : games.slice(0, 3)
        }
    }

    const displayedGames = getDisplayedGames()
    const shouldShowButton =
        screenWidth < 1536 && games.length > (screenWidth >= 768 ? 8 : 3)

    return (
        <section id="games" className="py-32  bg-gray-900">
            <div className="container mx-auto px-4">
                <h2
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    className="text-white text-4xl md:text-5xl font-bold text-center mb-4">
                    Featured Games
                </h2>
                <p
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                    Dive into our selection of popular competitive games and
                    start your journey to the top.
                </p>
                <div className="grid md:grid-cols-4  gap-6">
                    {displayedGames.map((game, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay={100 * (index + 1)}
                            className="group relative overflow-hidden rounded-lg gradient-border">
                            <div className="absolute inset-0 bg-gradient-to-r from-game-primary/20 via-game-secondary/20 to-game-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                            {/* <img
                                src={game.image}
                                alt={game.title}
                                className="w-full h-[400px] object-cover group-hover:scale-110 group-hover:blur-sm transition duration-500"
                            /> */}
                            <div className="w-full h-[400px] relative">
                            <Image
                                src={game.image}
                                alt={game.title}
                                fill={true}
                                style={{objectFit: "cover"}}
                                className="group-hover:scale-110 group-hover:blur-sm transition duration-500"
                            />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex flex-col justify-end p-6 z-20">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">
                                            {game.title}
                                        </h3>
                                        <p className="text-gray-400">
                                            {game.players} Active Players
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() =>
                                        handleJoinGameClick(game.title)
                                    }
                                    className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
                                    <span className="border border-white text-white px-4 py-2 rounded-lg">
                                        Play Game
                                    </span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {shouldShowButton && (
                    <div className="mt-8 text-center flex justify-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="text-white gradient-border bg-gray-900 px-6 py-2 font-medium flex items-center gap-2">
                            {showAll ? 'Show Less' : 'See More'}
                            {showAll ? (
                                <ChevronUp size={18} />
                            ) : (
                                <ChevronDown size={18} />
                            )}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
