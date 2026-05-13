"use client";

import React from "react";
import { motion } from "framer-motion";

export const BubbleTypography = () => {
  return (
    <div className="relative flex flex-col items-center justify-center select-none">
      <svg width="0" height="0">
        <defs>
          <filter id="bubble-gloss" x="-50%" y="-50%" width="200%" height="200%">
            {/* Base specular lighting for 3D effect */}
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
            <feSpecularLighting in="blur" surfaceScale="5" specularConstant="0.8" specularExponent="20" lightingColor="#ffffff" result="specOut">
              <fePointLight x="-100" y="-100" z="300" />
            </feSpecularLighting>
            <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOutIn" />
            <feComposite in="SourceGraphic" in2="specOutIn" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint" />
            
            {/* Outer Glow */}
            <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="dilated" />
            <feGaussianBlur in="dilated" stdDeviation="15" result="glowBlur" />
            <feFlood floodColor="#FF4DA6" floodOpacity="0.4" result="glowColor" />
            <feComposite in="glowColor" in2="glowBlur" operator="in" result="glow" />
            
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="litPaint" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-2"
      >
        <motion.h2 
          className="text-white/80 font-headline text-lg tracking-[0.4em] uppercase font-light mb-2"
          initial={{ letterSpacing: "1em", opacity: 0 }}
          animate={{ letterSpacing: "0.4em", opacity: 0.8 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          Welcome To My
        </motion.h2>
        
        <div className="relative">
          <motion.h1 
            className="text-[12vw] leading-none font-headline font-extrabold text-[#FF4DA6] uppercase drop-shadow-[0_20px_50px_rgba(255,77,166,0.3)]"
            style={{ filter: "url(#bubble-gloss)" }}
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 1, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            Portfolio
          </motion.h1>
        </div>
      </motion.div>
    </div>
  );
};
