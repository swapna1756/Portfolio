
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OrbitVisual } from "./OrbitVisual";

const roles = [
  "Cybersecurity Enthusiast",
  "AI Developer",
  "Full Stack Learner"
];

export const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
        if (displayedRole.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayedRole(currentRole.substring(0, displayedRole.length - 1));
        if (displayedRole.length === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-extrabold uppercase tracking-tighter text-primary drop-shadow-[0_0_10px_rgba(255,77,166,0.5)]"
          style={{ filter: "url(#bubble-gloss)" }}
        >
          ST
        </motion.div>
        
        <div className="flex gap-12">
          {["HOME", "SKILLS", "PROJECTS", "CONTACT"].map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1) }}
              className="text-[10px] tracking-[0.4em] text-white/60 hover:text-primary transition-all relative group uppercase font-medium"
            >
              {link}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#FF4DA6]" />
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-between container mx-auto px-12 pt-20">
        <div className="max-w-2xl">
          {/* Greeting Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full flex items-center gap-2">
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-medium">
                👋 Hello, I'm
              </span>
            </div>
          </motion.div>

          {/* Name Heading */}
          <div className="relative mb-4">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-[8vw] leading-none font-headline font-extrabold flex flex-wrap"
            >
              <span className="text-white mr-4">Swapna</span>
              <span 
                className="text-primary"
                style={{ filter: "url(#bubble-gloss)" }}
              >
                Tekkala
              </span>
            </motion.h1>
          </div>

          {/* Typing Role */}
          <div className="h-12 flex items-center mb-8">
            <span className="text-white/60 text-xl md:text-2xl font-light tracking-wide">
              I'm a <span className="text-primary font-medium border-r-2 border-primary pr-1 animate-pulse">{displayedRole}</span>
            </span>
          </div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/40 text-sm md:text-base leading-relaxed tracking-wide mb-12 max-w-lg font-light"
          >
            I am a passionate developer interested in cybersecurity, AI, and modern digital experiences. I enjoy building secure and interactive applications while exploring innovative technologies and creative web design.
          </motion.p>

          {/* Action Buttons */}
          <div className="flex gap-6">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 77, 166, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold shadow-[0_0_20px_rgba(255,77,166,0.2)] transition-shadow"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, background: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="glass-button px-10 py-4 rounded-full text-[10px] uppercase tracking-[0.4em] text-white font-bold"
            >
              Get In Touch
            </motion.button>
          </div>
        </div>

        {/* Right Side Visual */}
        <div className="hidden lg:block relative mr-12">
          <OrbitVisual />
        </div>
      </div>
    </div>
  );
};
