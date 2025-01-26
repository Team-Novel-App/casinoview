import React, { useState } from 'react';
import { Gamepad2, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';



export default function Navigation({ isScrolled }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-8 h-8 text-game-primary animate-float" />
            <span className="text-xl font-bold bg-clip-text bg-gradient-to-r from-game-primary via-game-secondary to-game-accent">
              GameRealm
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-game-primary transition-colors">Home</a>
            <a href="#features" className="hover:text-game-primary transition-colors">Features</a>
            <a href="#games" className="hover:text-game-primary transition-colors">Games</a>
            <a href="#tournaments" className="hover:text-game-primary transition-colors">Tournaments</a>
            <a href="#rules" className="hover:text-game-primary transition-colors">Rules</a>
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
            <button className="hidden md:block gradient-border bg-gray-900 dark:bg-gray-900 px-6 py-2 font-medium transition-transform hover:scale-105">
              Join Now
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden glass-effect mt-4 p-4 rounded-lg">
            <div className="flex flex-col gap-4">
              <a href="#home" className="hover:text-game-primary transition-colors">Home</a>
              <a href="#features" className="hover:text-game-primary transition-colors">Features</a>
              <a href="#games" className="hover:text-game-primary transition-colors">Games</a>
              <a href="#tournaments" className="hover:text-game-primary transition-colors">Tournaments</a>
              <a href="#rules" className="hover:text-game-primary transition-colors">Rules</a>
              <button className="gradient-border bg-gray-900 dark:bg-gray-900 px-6 py-2 font-medium w-full">
                Join Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}