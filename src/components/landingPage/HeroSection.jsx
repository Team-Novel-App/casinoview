import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {useRouter} from 'next/navigation';

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1509478861672-91e9a2f90c04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhc2lub3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Level Up Your Gaming Experience",
    subtitle: "Join the ultimate gaming community where legends are born. Compete in tournaments, connect with fellow gamers, and embrace victory."
  },
  {
    image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FzaW5vfGVufDB8fDB8fHww",
    title: "Compete at the Highest Level",
    subtitle: "Enter tournaments with massive prize pools and prove your worth against the best players worldwide."
  },
  {
    image: "https://images.unsplash.com/photo-1491644386567-d98960637850?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Join Our Gaming Community",
    subtitle: "Connect with millions of players, share your achievements, and make lasting friendships in our vibrant community."
  },
  {
    image: "https://images.unsplash.com/photo-1626775238053-4315516eedc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FzaW5vfGVufDB8fDB8fHww",
    title: "Join Our Gaming ",
    subtitle: "Connect with millions of players, share your achievements, and make lasting friendships in our vibrant community."
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideInterval = useRef();
  const router = useRouter();
  const handleJoinCLick = () => {
    router.push('/users');
  } 
  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    }
  };

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 5000);
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            onTransitionEnd={handleTransitionEnd}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50 z-10" />
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover object-center transform scale-110 transition-transform duration-10000 ease-out animate-slow-zoom"
            />
          </div>
        ))}
      </div>

      <div className="relative z-20 h-full container mx-auto px-4 flex items-center">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl bg-amber-200 font-retro-signed leading-tight mb-6 animate-slide-up">
            {heroSlides[currentSlide].title.split(' ').map((word, i) => (
              <span
                key={i}
                className="inline-block animate-word-slide-up bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#db2777] text-transparent"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {word}{' '}
              </span>
            ))}
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-xl animate-fade-slide-up">
            {heroSlides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-slide-up-late">
            <button onClick={handleJoinCLick} className="gradient-border bg-gray-900/50 backdrop-blur-sm px-8 py-3 font-medium transition-transform hover:scale-105 flex items-center justify-center gap-2">
              Join Now <ChevronRight className="w-5 h-5" />
            </button>
            <button className="border border-game-primary hover:bg-game-primary/10 px-8 py-3 rounded-full font-medium transition backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'w-8 bg-game-primary'
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-900/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-game-primary transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-900/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-game-primary transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
}