import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {useRouter} from 'next/navigation';

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1509478861672-91e9a2f90c04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhc2lub3xlbnwwfHwwfHx8MA%3D%3D",
    title: "20 % off at pre-registration",
    subtitle: "Join the ultimate gaming community where legends are born. Compete in tournaments, connect with fellow gamers, and embrace victory."
  },
  {
    image: "https://media.istockphoto.com/id/883608066/photo/rows-of-casino-slot-machines.jpg?s=2048x2048&w=is&k=20&c=R8DG5k1m-TYEtJN17un9JpYBy_jCYQE3AoPPO4geGl0=",
    title: "Spin the wheel of your success",
    subtitle: "Enter tournaments with massive prize pools and prove your worth against the best players worldwide."
  },
  {
    image: "https://images.unsplash.com/photo-1491644386567-d98960637850?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Play Roulette and Win Big",
    subtitle: "Connect with millions of players, share your achievements, and make lasting friendships in our vibrant community."
  },
  {
    image: "https://media.istockphoto.com/id/1197737664/photo/slot-machine-rolling-drums.jpg?s=2048x2048&w=is&k=20&c=reSfMhLkD_iDe-tkVj72T_yi_z6w4auba8EXlyOM30I=",
    title: "Play Poker and Win Big",
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
          <h1 className="text-5xl md:text-7xl font-retro-signed leading-tight mb-6 animate-slide-up">
              <span
                className="inline-block animate-word-slide-up bg-clip-text bg-gradient-to-r from-[#a11111] to-[#df632a] text-transparent"
                style={{ animationDelay: 0.5 }}
              >
                {heroSlides[currentSlide].title}
              </span>
          </h1>
          <p className="text-lg mb-8 max-w-xl bg-clip-text bg-gradient-to-r from-[#a11111] to-[#df632a] text-transparent animate-fade-slide-up">
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