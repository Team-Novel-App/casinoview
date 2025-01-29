import React from 'react';
import { Gamepad2, Twitch, Youtube, Twitter, Disc as Discord } from 'lucide-react';

const sections = [
  {
    title: "Quick Links",
    links: ["Home", "About Us", "Tournaments", "Contact"]
  },
  {
    title: "Games",
    links: ["Apex Legends", "Valorant", "League of Legends", "CS:GO"]
  },
  {
    title: "Contact Us",
    items: [
      "support@gamerealm.com",
      "+1 (555) 123-4567",
      "123 Gaming Street",
      "Los Angeles, CA 90001"
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Gamepad2 className="w-8 h-8 text-game-primary" />
              <span className="text-xl  font-bold bg-clip-text bg-gradient-to-r from-game-primary via-game-secondary to-game-accent">
                GameRealm
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Level up your gaming experience with the ultimate gaming platform.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitch, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Discord, href: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-via-game-primary delay-200 ease-in-out duration-150 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">{section.title}</h4>
              <ul className="space-y-4">
                {(section.links || section.items).map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {section.links ? (
                      <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-game-primary transition-colors">
                        {item}
                      </a>
                    ) : (
                      <span className="text-gray-600 dark:text-gray-400">{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 mt-16 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 GameRealm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}