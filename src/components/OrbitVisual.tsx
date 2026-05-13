
"use client";

import React from "react";
import { motion } from "framer-motion";

export const OrbitVisual = () => {
  return (
    <div className="relative w-[400px] h-[400px] flex items-center justify-center">
      {/* Central Initials Node */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 2, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative z-10 w-32 h-32 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(255,77,166,0.3)]"
      >
        <span 
          className="text-4xl font-extrabold text-primary"
          style={{ filter: "url(#bubble-gloss)" }}
        >
          ST
        </span>
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-pulse" />
      </motion.div>

      {/* Orbiting Rings */}
      <div className="absolute inset-0">
        {/* Ring 1 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border border-white/5 rounded-full"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#FF4DA6]" />
        </motion.div>

        {/* Ring 2 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-10 border border-white/5 rounded-full"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary shadow-[0_0_15px_#A855F7]" />
        </motion.div>

        {/* Ring 3 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-20 border border-white/5 rounded-full"
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/40 shadow-[0_0_10px_#FF4DA6]" />
        </motion.div>
      </div>

      {/* Background Decorative Circles */}
      <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Floating Particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          animate={{
            x: [Math.random() * 400 - 200, Math.random() * 400 - 200],
            y: [Math.random() * 400 - 200, Math.random() * 400 - 200],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};
