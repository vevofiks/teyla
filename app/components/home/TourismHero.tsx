"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react";
import {SECTIONS} from "../../data/index"
import {montserrat} from "../../font";

export default function TourismHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-slide logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % SECTIONS.length);
      }, 8000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, currentIndex]);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {
          // Autoplay policy might block play() if not muted
          console.log("Playback interrupted");
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, currentIndex]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black font-sans">
      {/* Background Video Layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <video
            ref={videoRef}
            autoPlay={isPlaying}
            muted={isMuted}
            loop
            playsInline
            className="h-full w-full object-cover transition-all duration-700"
            src={SECTIONS[currentIndex].video}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-center px-8 md:px-24">
        <div className="max-w-md text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className={` ${montserrat.className} uppercase mb-2 text-4xl font-bold tracking-tight md:text-5xl`}>
                {SECTIONS[currentIndex].title}
              </h1>
              <p className="mb-6 text-sm font-light leading-relaxed text-gray-300 md:text-base">
                {SECTIONS[currentIndex].description}
              </p>
              
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-emerald-500 hover:text-white">
                  more <ChevronRight size={14} />
                </button>
                
                {/* Video Controls */}
                <button 
                  onClick={togglePlay}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition hover:bg-white/20"
                >
                  {isPlaying ? <Pause size={16} fill="white" /> : <Play size={16} fill="white" className="ml-1" />}
                </button>
                <button 
                  onClick={toggleMute}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition hover:bg-white/20"
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Vertical Clickable Navigation */}
      <div className="absolute bottom-10 left-0 right-0 md:right-8 md:left-auto md:top-1/2 z-20 md:-translate-y-1/2">
        <div className="flex flex-row justify-center gap-8 md:flex-col md:items-end md:gap-5">
          {SECTIONS.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setCurrentIndex(index)}
              className="group flex flex-col items-center md:flex-row md:justify-end gap-2 md:gap-3 outline-none"
            >
              <span className={`text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 ${
                currentIndex === index ? "opacity-100" : "opacity-40 md:opacity-0 md:group-hover:opacity-100"
              }`}>
                {section.title}
              </span>
              {/* Horizontal line for mobile, Vertical for desktop */}
              <div className={`h-[2px] w-6 md:h-6 md:w-[2px] transition-all duration-500 ${
                currentIndex === index ? "bg-emerald-400 scale-x-150 md:scale-x-100 md:scale-y-150" : "bg-white/20"
              }`} />
            </button>
          ))}
        </div>
      </div>      
      {/* Decorative Bottom Bar */}
      <div className="absolute bottom-8 left-8 z-20 hidden md:block">
        <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
          <span>0{currentIndex + 1}</span>
          <div className="h-[1px] w-12 bg-white/30" />
          <span>0{SECTIONS.length}</span>
        </div>
      </div>
    </section>
  );
}