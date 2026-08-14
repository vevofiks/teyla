"use client";

import { motion } from "framer-motion";
import {
  Drama,
  Flame,
  Leaf,
  PawPrint,
  Sailboat,
  Swords,
  MapPin
} from "lucide-react";
import { STORIES } from "../../data/index";
import { montserrat } from "../../font";

const ICONS = {
  sailboat: Sailboat,
  flame: Flame,
  swords: Swords,
  drama: Drama,
  leaf: Leaf,
  "paw-print": PawPrint,
} as const;

export default function ActivityStories() {
  return (
    <section id="stories" className="relative min-h-[100dvh] bg-[#081c15] overflow-hidden px-4 py-20 md:px-10 md:py-28">
      {/* Ambient greenery glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[36rem] w-[36rem] rounded-full bg-emerald-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full bg-emerald-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-4 block">
            With Teyla
          </span>
          <h2 className={`${montserrat.className} text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white`}>
            Six Stories, One Kerala
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
            We don&apos;t just take you to places — we take you into them.
            One experience at a time, told the way it actually feels.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-3 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[300px] gap-3 md:gap-6">
          {STORIES.map((current, index) => {
            const Icon = ICONS[current.icon as keyof typeof ICONS] || MapPin;
            
            // Bento Grid Span Logic matching the 2-1, 1-2, 2-1 pattern universally
            let spanClass = "col-span-1"; 
            if (index === 0) spanClass = "col-span-2";
            if (index === 1) spanClass = "col-span-1";
            if (index === 2) spanClass = "col-span-1";
            if (index === 3) spanClass = "col-span-2";
            if (index === 4) spanClass = "col-span-2";
            if (index === 5) spanClass = "col-span-1";
            
            const isSmallCard = spanClass === "col-span-1";
            const titleSize = isSmallCard 
              ? "text-[10px] min-[400px]:text-sm sm:text-md md:text-xl lg:text-2xl" 
              : "text-sm min-[400px]:text-base sm:text-lg md:text-2xl lg:text-3xl";

            return (
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl ${spanClass}`}
              >
                {/* Image */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Top Badge (Hidden on desktop to match reference, visible on hover or mobile maybe? Let's just keep it elegant) */}
                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md z-10 transition-transform duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100 md:opacity-100">
                  <Icon size={14} className="text-emerald-400" />
                  {current.place}
                </div>

                {/* Content - Bottom Aligned */}
                <div className="absolute bottom-0 left-0 w-full p-2.5 sm:p-4 md:p-6 flex flex-col justify-end z-10">
                  <h3 className={`${montserrat.className} ${titleSize} font-bold text-white mb-0.5 md:mb-1 transform transition-transform duration-500 group-hover:-translate-y-1 uppercase tracking-wide break-words`}>
                    {current.title}
                  </h3>
                  
                  {/* Expandable Story Text (Fades in and expands on hover) */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-emerald-300/90 text-[10px] md:text-sm font-medium mb-1 md:mb-2">
                        {current.tagline}
                      </p>
                      <p className="text-gray-200/90 text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-3">
                        {current.story}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
