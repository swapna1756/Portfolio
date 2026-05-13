"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BubbleTypography } from "@/components/BubbleTypography";
import { ButterflyOverlay } from "@/components/ButterflyOverlay";
import { GlimmerCursor } from "@/components/GlimmerCursor";
import { DynamicTagline } from "@/components/DynamicTagline";

export default function Home() {
  const [isEntering, setIsEntering] = useState(false);

  const handleEnter = () => {
    setIsEntering(true);
    // In a real app, this would route to a main dashboard/hero section
    // For now, we simulate the transition
    setTimeout(() => {
      window.scrollTo(0, window.innerHeight);
    }, 1200);
  };

  return (
    <main className="relative min-h-screen aurora-bg overflow-hidden">
      <GlimmerCursor />
      <ButterflyOverlay />
      
      {/* Background Glow Blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-secondary/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      <AnimatePresence>
        {!isEntering ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ 
              scale: 2, 
              filter: "blur(20px)",
              opacity: 0,
              transition: { duration: 1, ease: "easeInOut" }
            }}
            className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4"
          >
            {/* Header / Intro Sequence */}
            <BubbleTypography />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="flex flex-col items-center mt-12"
            >
              <DynamicTagline />

              <motion.button
                onClick={handleEnter}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 40px rgba(255, 77, 166, 0.3)"
                }}
                whileTap={{ scale: 0.9, rotate: 1 }}
                className="mt-16 glass-button px-10 py-4 rounded-full group overflow-hidden"
              >
                <span className="relative z-10 text-white/90 tracking-[0.5em] text-xs font-medium uppercase transition-colors group-hover:text-primary">
                  Click Enter To Explore
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </motion.button>
              
              <motion.div 
                className="mt-8 text-[10px] tracking-[0.3em] uppercase text-white/30"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Designed for the future
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            className="relative z-30 flex items-center justify-center min-h-screen"
          >
            <div className="text-center">
              <h2 className="text-6xl font-headline text-white mb-4">Welcome to the inner sanctum.</h2>
              <p className="text-white/40 tracking-widest uppercase">The journey begins here.</p>
              <button 
                onClick={() => setIsEntering(false)} 
                className="mt-8 text-primary hover:underline underline-offset-8 tracking-widest text-xs uppercase"
              >
                Back to intro
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Corners */}
      <div className="fixed top-8 left-8 border-l border-t border-white/10 w-12 h-12 pointer-events-none" />
      <div className="fixed top-8 right-8 border-r border-t border-white/10 w-12 h-12 pointer-events-none" />
      <div className="fixed bottom-8 left-8 border-l border-b border-white/10 w-12 h-12 pointer-events-none" />
      <div className="fixed bottom-8 right-8 border-r border-b border-white/10 w-12 h-12 pointer-events-none" />
    </main>
  );
}
