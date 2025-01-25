import React from 'react';

const games = [
  {
    title: "Apex Legends",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=1965",
    players: "50K+"
  },
  {
    title: "Valorant",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=2084",
    players: "45K+"
  },
  {
    title: "League of Legends",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070",
    players: "100K+"
  },
  {
    title: "CS:GO",
    image: "https://images.unsplash.com/photo-1548484352-ea579e5233a8?auto=format&fit=crop&q=80&w=1970",
    players: "80K+"
  }
];

export default function GamesSection() {
  return (
    <section id="games" className="py-32 bg-gray-100 dark:bg-gray-800/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Featured Games</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Dive into our selection of popular competitive games and start your journey to the top.
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg gradient-border">
              <div className="absolute inset-0 bg-gradient-to-r from-game-primary/20 via-game-secondary/20 to-game-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <img 
                src={game.image}
                alt={game.title}
                className="w-full h-[400px] object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex flex-col justify-end p-6 z-20">
                <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                <p className="text-gray-400">{game.players} Active Players</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}