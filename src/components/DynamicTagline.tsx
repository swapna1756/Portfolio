
"use client";

import React from "react";
import { motion } from "framer-motion";

export const DynamicTagline = () => {
  const text = "CYBERSECURITY • AI • INNOVATION • DIGITAL EXPERIENCES";
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        {/* Ambient Glow Underlay */}
        <div className="absolute inset-0 -inset-x-20 bg-primary/5 blur-[40px] rounded-full pointer-events-none" />
        
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10 flex flex-wrap justify-center"
        >
          {letters.map((letter, index) => (
            <motion.span
              variants={child}
              key={index}
              className={`
                inline-block text-[10px] md:text-xs tracking-[0.6em] font-medium uppercase
                ${letter === "•" ? "text-primary px-2" : "text-white/80"}
                drop-shadow-[0_0_8px_rgba(255,77,166,0.3)]
              `}
              style={{
                textShadow: letter !== " " && letter !== "•" 
                  ? "0 0 15px rgba(168, 85, 247, 0.4), 0 0 5px rgba(255, 77, 166, 0.2)" 
                  : "none"
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
          
          {/* Shimmer / Light Sweep Effect */}
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "200%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "linear",
            }}
            className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[30deg] pointer-events-none"
          />
        </motion.div>
      </motion.div>

      {/* Subtle Bottom Accent */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="w-24 h-[1px] mt-6 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />
    </div>
  );
};
