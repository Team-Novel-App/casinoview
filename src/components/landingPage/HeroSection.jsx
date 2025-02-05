"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";
import {  ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1509478861672-91e9a2f90c04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhc2lub3xlbnwwfHwwfHx8MA%3D%3D",
    title: "20% off at pre-registration",
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
];

export default function HeroSection() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Set to true if you want animation only once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="home" className="relative h-screen flex flex-col overflow-hidden bg-gray-900">
      {/* Main Swiper - 85vh to make space for thumbnails */}
      <div className="relative h-[85vh]">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Thumbs]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          speed={1200} // Smooth transition
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          loop={true}
          thumbs={{ swiper: thumbsSwiper }}
          className="h-full"
        >
          {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
          <div className="relative w-full h-full min-h-[60vh] sm:min-h-[85vh]">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50 z-10" />
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="relative z-20 h-full container mx-auto px-4 flex items-center">
              <div className="max-w-3xl">
                <h1 className="text-white text-4xl md:text-6xl font-retro-signed leading-tight mb-6" data-aos="fade-up">
                  {slide.title}
                </h1>
                <p className="text-white text-lg mb-8 max-w-xl" data-aos="fade-up" data-aos-delay="500">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="700">
                  <button className="text-white gradient-border bg-gray-900/50 backdrop-blur-sm px-8 py-3 font-medium transition-transform hover:scale-105 flex items-center justify-center gap-2">
                    Join Now <ChevronRight className="w-5 h-5" />
                  </button>
                  <button className="text-white border border-game-primary hover:bg-game-primary/10 px-8 py-3 rounded-full font-medium transition backdrop-blur-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
          ))}
        </Swiper>
      </div>

      {/* Thumbnail Swiper */}
      <div className="relative h-[15vh] flex items-center justify-center bg-black/30">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          className="w-full max-w-3xl px-4"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={slide.image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-[12vh] object-cover rounded-md cursor-pointer opacity-75 hover:opacity-100 transition-opacity border-2 border-transparent hover:border-white"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
