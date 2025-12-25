"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";   
import React, { useRef, useEffect, useState } from "react";
import Link from 'next/link';
import { BadgeCheck, MapPin, Phone, ChevronRight } from 'lucide-react';
import { cn } from "@/app/lib/utils";
import { Montserrat } from "next/font/google";
import { montserrat } from "@/app/font";

interface Experience {
  id: number | string;
  name: string;
  image: string;
  category: string;
  location: string;
  contactInfo: string;
  slug: string;
  verifiedStatus: boolean;
}

export default function StickyExperienceSection() {
  const [data, setData] = useState<Experience[]>([]);
  const container = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Fetch Data
  useEffect(() => {
    fetch('/api/experiences')
      .then(res => res.json())
      .then(json => setData(json.experiences || json)); // Adjust based on your API structure
  }, []);

  // GSAP Animation Logic
  useGSAP(
    () => {
      if (data.length === 0) return;
      gsap.registerPlugin(ScrollTrigger);

      const cardElements = cardRefs.current;
      const totalCards = cardElements.length;

      // Set initial positions: first card visible, others tucked away at bottom
      gsap.set(cardElements[0], { y: "0%", scale: 1, rotation: 0 });
      for (let i = 1; i < totalCards; i++) {
        gsap.set(cardElements[i], { y: "100%", scale: 1, rotation: 0 });
      }

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky-wrapper",
          start: "top top",
          end: `+=${window.innerHeight * (totalCards - 1)}`,
          pin: true,
          scrub: 0.5,
          pinSpacing: true,
        },
      });

      // Stacking Animation
      for (let i = 0; i < totalCards - 1; i++) {
        const currentCard = cardElements[i];
        const nextCard = cardElements[i + 1];
        
        if (!currentCard || !nextCard) continue;

        scrollTimeline.to(currentCard, {
          scale: 0.85, // Slightly larger than original for better text readability
          rotation: -2, // Subtle tilt
          opacity: 0.6,
          duration: 1,
          ease: "none",
        }, i);

        scrollTimeline.to(nextCard, {
          y: "0%",
          duration: 1,
          ease: "none",
        }, i);
      }

      return () => {
        scrollTimeline.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: container, dependencies: [data] }
  );

  if (data.length === 0) return <div className="h-screen bg-gray-50 flex items-center justify-center">Loading Experiences...</div>;

  return (
    <ReactLenis root>
      <section className="" ref={container}>
        <div className="py-20 px-8 text-center">
            <h2 className={` ${montserrat.className} text-4xl md:text-5xl font-bold font-mono mb-4`}>Authentic Kerala Experiences</h2>
            <p className="text-gray-100 x-w-xl mx-auto uppercase tracking-widest text-xs">Scroll to explore Gods Own Country</p>
        </div>

        <div className="sticky-wrapper relative flex h-screen w-full items-center justify-center overflow-hidden px-4">
          <div className="relative h-[80vh] w-full max-w-4xl">
            {data.map((item, i) => (
              <div
                key={item.id}
                ref={(el) => { cardRefs.current[i] = el; }}
                className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden shadow-2xl"
                style={{ zIndex: i }}
              >
                {/* Image Layer */}
                <div className="absolute inset-0 w-full h-full">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                </div>

                {/* Content Layer (Overlayed on bottom of card) */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="bg-emerald-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                            {item.category}
                        </span>
                        {item.verifiedStatus && (
                            <span className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                                <BadgeCheck size={12} className="text-blue-400" /> Verified
                            </span>
                        )}
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold mb-4">{item.name}</h3>
                    
                    <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-300">
                        <div className="flex items-center gap-2 text-sm">
                            <MapPin size={16} className="text-emerald-400" /> {item.location}
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Phone size={16} className="text-emerald-400" /> {item.contactInfo}
                        </div>
                    </div>

                    <Link 
                        href={`/experience/${item.slug}`}
                        className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-emerald-500 hover:text-white transition-all group"
                    >
                        View Full Details 
                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </ReactLenis>
  );
}