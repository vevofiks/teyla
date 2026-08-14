"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PACKAGES } from "../../data/index";
import { montserrat } from "../../font";

export default function FeaturedPackages() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalPackages = PACKAGES.length;

  // Responsive card dimensions for precise translation
  const [cardWidth, setCardWidth] = useState(260);
  const [gap, setGap] = useState(16);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardWidth(320); // lg
        setGap(32);
      } else if (window.innerWidth >= 768) {
        setCardWidth(300); // md
        setGap(24);
      } else {
        setCardWidth(260); // base
        setGap(16);
      }
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      setActiveIndex((prev) => (prev + 1) % totalPackages);
    } else if (e.key === "ArrowLeft") {
      setActiveIndex((prev) => (prev - 1 + totalPackages) % totalPackages);
    }
  }, [totalPackages]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % totalPackages);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + totalPackages) % totalPackages);

  const activePackage = PACKAGES[activeIndex];

  return (
    <section id="packages" className="relative min-h-[100dvh] w-full overflow-hidden bg-black flex flex-col justify-center">
      {/* Background Image with smooth transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePackage.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={activePackage.image}
            alt={activePackage.name}
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient - darker on the left for text readability */}
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto w-full max-w-400 px-6 pt-28 pb-16 md:py-24 md:px-12 lg:px-20 h-full min-h-dvh flex flex-col justify-start md:justify-center overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10 md:gap-12 lg:gap-8">
          
          {/* Left Text Content */}
          <div className="w-full md:w-5/12 lg:w-1/2 flex flex-col justify-center text-white relative z-20">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-3 md:mb-4 block drop-shadow-md">
              Featured Packages
            </span>
            
            <h2 className={`${montserrat.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white mb-8 md:mb-12 drop-shadow-lg`}>
              Discover your perfect getaway in Kerala
            </h2>

            <AnimatePresence mode="wait">
              <motion.div
                key={`details-${activeIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mb-6 md:mb-8"
              >
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 uppercase tracking-wider leading-snug">
                  {activePackage.name}
                </h3>
                <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-md">
                  Experience the beauty of {activePackage.location} with our exclusive {activePackage.duration.toLowerCase()} package. 
                  Enjoy highlights like {activePackage.highlights.join(", ")} starting from just ₹{activePackage.priceFrom.toLocaleString("en-IN")}.
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center mt-2 md:mt-4">
              <a
                href={`/packages/${activePackage.id}`}
                className="inline-flex w-max items-center gap-3 rounded-full border border-white/50 bg-black/20 backdrop-blur-sm px-6 py-3 md:px-8 md:py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-black shadow-lg"
              >
                Explore Packages
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Right Cards Slider */}
          <div className="w-full md:w-7/12 lg:w-1/2 relative flex flex-col justify-center z-10">
            <div className="overflow-visible w-full">
              <div 
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{ 
                  gap: `${gap}px`,
                  transform: `translateX(calc(-${activeIndex} * (${cardWidth}px + ${gap}px)))` 
                }}
              >
                {PACKAGES.map((pkg, idx) => {
                  const isActive = idx === activeIndex;
                  const isPast = idx < activeIndex;
                  return (
                    <div 
                      key={pkg.id} 
                      onClick={() => setActiveIndex(idx)}
                      className={`relative shrink-0 overflow-hidden rounded-[2rem] cursor-pointer transition-all duration-700
                        ${isActive ? 'opacity-100 scale-100 z-20' : 
                          isPast ? 'opacity-0 scale-90 pointer-events-none z-0' : 
                          'opacity-60 scale-95 hover:opacity-80 z-10'}`}
                      style={{
                        width: `${cardWidth}px`,
                        height: cardWidth * 1.35, // Maintain aspect ratio
                      }}
                    >
                      <img 
                        src={pkg.image} 
                        alt={pkg.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className={`${montserrat.className} text-xl font-bold text-white mb-1`}>
                          {pkg.name}
                        </h3>
                        <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
                          {pkg.location}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Navigation Buttons Centered Below Active Card */}
            <div 
              className="hidden sm:flex items-center justify-center gap-4 mt-8 transition-all duration-700"
              style={{ width: `${cardWidth}px` }}
            >
              <button 
                onClick={prevSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/50 text-white hover:bg-white hover:text-black transition-colors backdrop-blur-sm bg-black/20"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/50 text-white hover:bg-white hover:text-black transition-colors backdrop-blur-sm bg-black/20"
              >
                <ArrowRight size={20} />
              </button>
            </div>
            
            {/* Mobile Navigation Buttons */}
            <div className="flex sm:hidden items-center justify-center gap-6 mt-8">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/50 text-white hover:bg-white hover:text-black transition-colors backdrop-blur-sm bg-black/20"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/50 text-white hover:bg-white hover:text-black transition-colors backdrop-blur-sm bg-black/20"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
