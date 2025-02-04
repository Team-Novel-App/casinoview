'use client';
import React, { useState, useEffect, Suspense } from 'react';
import Navigation from '@/components/landingPage/Navigation';
import HeroSection from '@/components/landingPage/HeroSection';

const GamesSection = React.lazy(() => import('@/components/landingPage/GamesSection'));
const EventsSection = React.lazy(() => import('@/components/landingPage/EventsSection'));
const RulesSection = React.lazy(() => import('@/components/landingPage/RulesSection'));
const WhyChooseUS = React.lazy(() => import('@/components/landingPage/WhyChooseUs'));
const FAQSection = React.lazy(() => import('@/components/landingPage/FAQSection'));
const MarqueeText = React.lazy(() => import('@/components/landingPage/MarqueeText'));
const AboutUs = React.lazy(() => import('@/components/landingPage/AboutUs'));
const Footer = React.lazy(() => import('@/components/landingPage/Footer'));
const ChatPopup = React.lazy(() => import('@/components/landingPage/ChatPopup'));

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  const Preloader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );
};

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
      <Navigation isScrolled={isScrolled} />
      <HeroSection />    
      <GamesSection />
      <AboutUs />
      <EventsSection />
      <MarqueeText />
      <RulesSection />
      <WhyChooseUS />
      <FAQSection />
      <Footer />
      <ChatPopup />
    </div>
  );
}

export default Home;