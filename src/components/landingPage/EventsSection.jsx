import React from 'react';
import { Crown } from 'lucide-react';

const events = [
  {
    title: "Apex Legends Championship",
    prize: "$10,000",
    date: "March 15, 2024",
    participants: "128 Teams",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    title: "Valorant Masters",
    prize: "$15,000",
    date: "March 20, 2024",
    participants: "64 Teams",
    gradient: "from-purple-500 to-pink-500"
  }
];

export default function EventsSection() {
  return (
    <section id="tournaments" className="py-32 bg-white dark:bg-transparent">
      <div className="container mx-auto px-4">
        <h2 
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Upcoming Events
        </h2>
        <p 
          data-aos="fade-down"
          data-aos-delay="100"
          className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          Join our competitive tournaments and prove your skills against the best players.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="gradient-border p-1"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 200}
            >
              <div className="bg-gray-900 p-8 rounded-lg">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-400">{event.date}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${event.gradient} p-3`}>
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="bg-gradient-to-r from-game-primary to-game-secondary text-white px-4 py-2 rounded-full">
                    Prize: {event.prize}
                  </span>
                  <span className="bg-gray-800 px-4 py-2 rounded-full">
                    {event.participants}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}