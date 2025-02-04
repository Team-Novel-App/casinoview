'use client';
import React, { useState, useEffect, Suspense } from 'react';
import Navigation from '@/components/landingPage/Navigation';
import HeroSection from '@/components/landingPage/HeroSection';
import Footer from '@/components/landingPage/Footer';
import ChatPopup from '@/components/landingPage/ChatPopup';

const FeaturesSection = React.lazy(() => import('@/components/landingPage/FeatureSection'));
const GamesSection = React.lazy(() => import('@/components/landingPage/GamesSection'));
const EventsSection = React.lazy(() => import('@/components/landingPage/EventsSection'));
const RulesSection = React.lazy(() => import('@/components/landingPage/RulesSection'));
const WhyChooseUS = React.lazy(() => import('@/components/landingPage/WhyChooseUs'));
const FAQSection = React.lazy(() => import('@/components/landingPage/FAQSection'));
const MarqueeText = React.lazy(() => import('@/components/landingPage/MarqueeText'));
const AboutUs = React.lazy(() => import('@/components/landingPage/AboutUs'));

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

      <Suspense fallback={<div>Loading...</div>}>
        <FeaturesSection />
        <GamesSection />
        <AboutUs />
        <EventsSection />
        <MarqueeText />
        <RulesSection />
        <WhyChooseUS />
        <FAQSection />
      </Suspense>

      <Footer />
      <ChatPopup />
    </div>
  );
}

export default Home;