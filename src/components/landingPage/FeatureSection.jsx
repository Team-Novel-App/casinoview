import React from 'react';
import { Trophy, Users, Sword } from 'lucide-react';

const features = [
  {
    icon: Trophy,
    title: "Daily Tournaments",
    description: "Compete in daily tournaments across various games and win exciting prizes.",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: Users,
    title: "Active Community",
    description: "Join a thriving community of passionate gamers from around the world.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Sword,
    title: "Pro Coaching",
    description: "Learn from professional players and improve your gaming skills.",
    gradient: "from-pink-500 to-red-500"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-32 bg-white dark:bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Why Choose Us</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Experience gaming like never before with our unique features and community-driven platform.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="gradient-border p-1">
              <div className="bg-gray-900 p-8 rounded-lg h-full">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.gradient} p-4 mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}