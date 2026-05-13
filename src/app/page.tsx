
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
              transition={{ delay: 0.8, duration: 1 }}
              className="flex flex-col items-center w-full"
            >
              <DynamicTagline />

              <motion.button
                onClick={handleEnter}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(255, 77, 166, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 glass-button px-10 py-4 rounded-full group overflow-hidden"
              >
                <span className="relative z-10 text-white/90 tracking-[0.5em] text-[10px] font-medium uppercase transition-colors group-hover:text-primary">
                  Initialize Access
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </motion.button>
              
              <motion.div 
                className="mt-12 text-[9px] tracking-[0.4em] uppercase text-white/20 font-light"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Secure Terminal v4.0.2
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            className="relative z-30 flex items-center justify-center min-h-screen"
          >
            <div className="text-center px-6">
              <h2 className="text-4xl md:text-6xl font-headline text-white mb-6 tracking-tight">System Access Granted</h2>
              <p className="text-white/40 tracking-[0.3em] uppercase text-xs">Decryption Complete • Network Stable</p>
              <button 
                onClick={() => setIsEntering(false)} 
                className="mt-12 text-primary/60 hover:text-primary transition-colors tracking-[0.4em] text-[10px] uppercase border-b border-primary/20 pb-2"
              >
                Terminate Session
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Corners */}
      <div className="fixed top-8 left-8 border-l border-t border-white/10 w-8 h-8 pointer-events-none" />
      <div className="fixed top-8 right-8 border-r border-t border-white/10 w-8 h-8 pointer-events-none" />
      <div className="fixed bottom-8 left-8 border-l border-b border-white/10 w-8 h-8 pointer-events-none" />
      <div className="fixed bottom-8 right-8 border-r border-b border-white/10 w-8 h-8 pointer-events-none" />
    </main>
  );
}
