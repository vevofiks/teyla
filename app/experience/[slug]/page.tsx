"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { MapPin, Phone, ArrowLeft, BadgeCheck, Star, Clock, Calendar, ShieldCheck, User } from "lucide-react";
import { montserrat } from "@/app/font";

interface Experience {
  id: string;
  name: string;
  location: string;
  category: string;
  verifiedStatus: boolean;
  contactInfo: string;
  slug: string;
  image: string;
}

export default function ExperienceDetails() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [experience, setExperience] = useState<Experience | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/experiences");
        const json = await res.json();
        const data: Experience[] = json.experiences || json;
        const found = data.find((e) => e.slug === slug);
        setExperience(found || null);
      } catch (error) {
        console.error("Error fetching experience:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#05110d] flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-t-2 border-emerald-500 rounded-full"
        />
      </div>
    );
  }

  if (!experience) {
    return (
      <div className="min-h-screen bg-[#05110d] text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Experience Not Found</h1>
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 bg-emerald-500 px-6 py-3 rounded-full hover:bg-emerald-600 transition-colors"
        >
          <ArrowLeft size={18} /> Go Back
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#05110d] text-white selection:bg-emerald-500/30">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={experience.image}
            alt={experience.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#05110d]" />
        </motion.div>

        {/* Top Nav */}
        <div className="absolute top-0 mt-20 md:mt-6 w-full px-6 py-4 md:p-10 flex justify-between items-center z-20">
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/20 backdrop-blur-xl border border-white/20 hover:bg-black/40 hover:scale-105 active:scale-95 transition-all text-white group shadow-xl"
            aria-label="Go back"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-black/40 border border-white/20 text-white backdrop-blur-md text-xs font-bold tracking-widest uppercase shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></span>
                {experience.category}
              </span>
              {experience.verifiedStatus && (
                <span className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-900/40 border border-blue-400/30 text-blue-200 backdrop-blur-md text-xs font-bold uppercase shadow-lg">
                  <BadgeCheck size={14} className="text-blue-400" /> Verified Partner
                </span>
              )}
            </div>
            
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight ${montserrat.className} drop-shadow-xl`}>
              {experience.name}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-200">
              <div className="group flex items-center gap-3 text-sm md:text-base bg-black/40 hover:bg-black/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 transition-all duration-300 cursor-default shadow-lg">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                   <MapPin size={16} className="text-white group-hover:text-emerald-400 transition-colors duration-300" />
                </div>
                <span className="font-medium tracking-wide">{experience.location}</span>
              </div>
              
              <a href={`tel:${experience.contactInfo}`} className="group flex items-center gap-3 text-sm md:text-base bg-black/40 hover:bg-black/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 transition-all duration-300 shadow-lg">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                   <Phone size={16} className="text-white group-hover:text-emerald-400 transition-colors duration-300" />
                </div>
                <span className="font-medium tracking-wide">{experience.contactInfo}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-2 space-y-12"
        >
          <div>
            <h2 className={`text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 ${montserrat.className}`}>
              About the Experience
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Immerse yourself in the breathtaking beauty of {experience.location} with our exclusive {experience.category.toLowerCase()} experience. Designed for travelers seeking authenticity, this journey offers a perfect blend of culture, nature, and relaxation. Whether you're navigating serene landscapes or engaging with local traditions, the {experience.name} guarantees memories that will last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 text-emerald-400">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Duration</h3>
              <p className="text-gray-400">Flexible timings tailored to your schedule. Typically spans 4 to 6 hours.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 text-emerald-400">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Availability</h3>
              <p className="text-gray-400">Open year-round. Advance booking recommended during peak seasons.</p>
            </div>
          </div>
        </motion.div>

        {/* Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="lg:col-span-1"
        >
          <div className="sticky top-24 p-8 mt-7 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-6">Book this Experience</h3>
            <div className="space-y-5 mb-8">
              <div className="flex items-center gap-4 text-gray-300 pb-5 border-b border-white/10">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <ShieldCheck size={20} className="text-emerald-400" />
                </div>
                <div>
                    <h4 className="font-semibold text-white">Secure Booking</h4>
                    <p className="text-xs text-gray-400">Encrypted transactions</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300 pb-5 border-b border-white/10">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <User size={20} className="text-emerald-400" />
                </div>
                <div>
                    <h4 className="font-semibold text-white">Expert Guide</h4>
                    <p className="text-xs text-gray-400">Local professionals</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300 pb-2">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Star size={20} className="text-yellow-400" />
                </div>
                <div>
                    <h4 className="font-semibold text-white">Top Rated</h4>
                    <p className="text-xs text-gray-400">4.9/5 Average Rating</p>
                </div>
              </div>
            </div>
            <button className="w-full py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              Contact Host
            </button>
            <p className="text-center text-xs text-gray-500 mt-4 flex justify-center items-center gap-1">
              <ShieldCheck size={12} /> No payment required at this stage
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
