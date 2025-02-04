import React from 'react';
import { motion } from 'framer-motion';

const games = [
  {
    title: "Apex Legends",
    image: "https://i.pinimg.com/736x/76/2b/93/762b935cd60ef95b4ce14ab1c8c30f88.jpg",
    players: "50K+"
  },
  {
    title: "Valorant",
    image: "https://i.pinimg.com/736x/2e/0e/d7/2e0ed7d83502ab38cbbd3b95cbcce6cd.jpg",
    players: "45K+"
  },
  {
    title: "League of Legends",
    image: "https://i.pinimg.com/736x/40/ff/19/40ff199be8ebc229b63c3e9078a02abf.jpg",
    players: "100K+"
  },
  {
    title: "Hot Deco",
    image: "https://amusnet.com/_next/image?url=https%3A%2F%2Fbackend.careers-amusnet.com%2F%2Fsites%2Fdefault%2Ffiles%2Fgames%2FHot_Deco_1920_x_540_px.webp&w=1920&q=75",
    players: "80K+"
  },
  {
    title: "Game Time",
    image: "https://i.pinimg.com/736x/f8/3b/6c/f83b6ce80a4fa63a305d55329a6fcd28.jpg",
    players: "80K+"
  },
  {
    title: "Poker",
    image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/casino-poker-games-design-template-69422079995f8294845f054a881649d8_screen.jpg?ts=1698499096",
    players: "80K+"
  },
  {
    title: "Casino Night",
    image: "https://coreldrawdesign.com/resources/previews/preview-vector-vertical-poster-template-for-casino-night-and-gambling-1714994425.jpg",
    players: "80K+"
  },
  {
    title: "Hot Deco",
    image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/casino%2C-casino-night%2Cpoker-design-template-300ec225ae8feddb73b0ceabd320e637.jpg?ts=1696319548",
    players: "80K+"
  },
  {
    title: "Hot Deco",
    image: "https://www.shutterstock.com/image-photo/3d-cartoon-title-that-says-260nw-2524957269.jpg",
    players: "80K+"
  },
  {
    title: "Hot Deco",
    image: "https://c8.alamy.com/comp/KHCKTN/gambling-dice-casino-poster-on-green-KHCKTN.jpg",
    players: "80K+"
  },
  {
    title: "Hot Deco",
    image: "https://roarcdn.fitting-solutions.at/borgata/casino/en/blog/wp-content/uploads/2023/10/10000648/Header_-Rise-of-Olympus-100-1024x1024.jpg?lossy=1&ssl=1",
    players: "80K+"
  },
  {
    title: "Hot Deco",
    image: "https://high5games.com/wp-content/uploads/2024/02/Homepage_Mobile_88Drums.jpg",
    players: "80K+"
  },
];

export default function GamesSection() {

   const handleJoinGameClick = (gameTitle) => {
    console.log(`Joining game: ${gameTitle}`);
  };

  return (
    <section id="games" className="py-32 bg-gray-100 dark:bg-gray-800/20">
      <div className="container mx-auto px-4">
        <h2 
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Featured Games
        </h2>
        <p 
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          Dive into our selection of popular competitive games and start your journey to the top.
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <div 
              key={index} 
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={100 * (index + 1)}
              className="group relative overflow-hidden rounded-lg gradient-border"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-game-primary/20 via-game-secondary/20 to-game-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <img 
                src={game.image}
                alt={game.title}
                className="w-full h-[400px] object-cover group-hover:scale-110 group-hover:blur-sm transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex flex-col justify-end p-6 z-20">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                    <p className="text-gray-400">{game.players} Active Players</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleJoinGameClick(game.title)} 
                  className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
                  <span className="border border-white text-white px-4 py-2 rounded-lg">
                    Join Game
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
