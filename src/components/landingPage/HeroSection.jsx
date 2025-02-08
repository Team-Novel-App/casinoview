"use client";

import { useEffect, useState } from "react";
import Image from 'next/image'
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";
import { ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const heroSlides = [
  {
    image: "/assets/images/heroSectionImg/img2.jpg",
    title: "Discount at pre-registration",
    subtitle: "Join the ultimate gaming community where legends are born. Compete in tournaments, connect with fellow gamers, and embrace victory."
  },
  {
    image: "/assets/images/heroSectionImg/img1.jpg",
    title: "Spin the wheel of your success",
    subtitle: "Enter tournaments with massive prize pools and prove your worth against the best players worldwide."
  },
  {
    image: "/assets/images/heroSectionImg/img2.jpg",
    title: "Play Roulette and Win Big",
    subtitle: "Connect with millions of players, share your achievements, and make lasting friendships in our vibrant community."
  },
  {
    image: "/assets/images/heroSectionImg/img1.jpg",
    title: "Spin the wheel of your success",
    subtitle: "Enter tournaments with massive prize pools and prove your worth against the best players worldwide."
  },
  {
    image: "/assets/images/heroSectionImg/img2.jpg",
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
                  <Image
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    fill={true}
                    style={{objectFit: "cover"}}
                  />
                </div>
                <div className="relative z-20 h-full container mx-auto px-4 flex items-center">
                  <div className="max-w-3xl">
                  <h1 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-retro-signed leading-tight mb-4 sm:mb-6" 
                    data-aos="fade-up"
                  >
                    {slide.title}
                  </h1>
                    <p className="text-white text-base sm:text-lg mb-6 sm:mb-8 max-w-xl" data-aos="fade-up" data-aos-delay="500">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4" data-aos="fade-up" data-aos-delay="700">
                      <button className="text-white gradient-border bg-gray-900/50 backdrop-blur-sm px-6 sm:px-8 py-2 sm:py-3 font-medium transition-transform hover:scale-105 flex items-center justify-center gap-2">
                        Join Now <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                      <button className="text-white border border-game-primary hover:bg-game-primary/10 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium transition backdrop-blur-sm">
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
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="w-full max-w-3xl px-4"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={slide.image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-[10vh] sm:h-[12vh] object-cover rounded-md cursor-pointer opacity-75 hover:opacity-100 transition-opacity border-2 border-transparent hover:border-white"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}