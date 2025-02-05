'use client';
import React, { useState, useEffect} from 'react';
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
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen max-w-screen overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
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