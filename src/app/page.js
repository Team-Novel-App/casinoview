'use client'
import React, { useState, useEffect } from 'react';
import Navigation from '@/components/landingPage/Navigation';
import HeroSection from '@/components/landingPage/HeroSection';
import FeaturesSection from '@/components/landingPage/FeatureSection';
import GamesSection from '@/components/landingPage/GamesSection';
import EventsSection from '@/components/landingPage/EventsSection';
import RulesSection from '@/components/landingPage/RulesSection';
import Footer from '@/components/landingPage/Footer';
import ChatPopup from '@/components/landingPage/ChatPopup';
import WhyChooseUS from '@/components/landingPage/WhyChooseUs';
import FAQSection from '../components/landingPage/FAQSection';
import MarqueeText from '@/components/landingPage/MarqueeText';
// import LoginLinks from '@/app/LoginLinks'
// export const metadata = {
//     title: 'Laravel',
// }

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
    
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
      <Navigation isScrolled={isScrolled} />
      <HeroSection />
      <FeaturesSection />
      <GamesSection />
      <EventsSection />
      <MarqueeText />
      <RulesSection />
      <WhyChooseUS />
      <FAQSection/>
      <Footer />
      <ChatPopup />
    </div>
  );
}

export default Home;
