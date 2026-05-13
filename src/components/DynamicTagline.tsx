"use client";

import React, { useState, useEffect } from "react";
import { generateDynamicTagline } from "@/ai/flows/generate-dynamic-tagline";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

export const DynamicTagline = () => {
  const [tagline, setTagline] = useState("Crafting digital dreams with a touch of elegance");
  const [isLoading, setIsLoading] = useState(false);
  const [industry, setIndustry] = useState("Digital Designer");

  const industries = [
    "Digital Designer",
    "Creative Director",
    "UI/UX Architect",
    "Visual Artist",
    "Software Alchemist"
  ];

  const handleRefresh = async () => {
    setIsLoading(true);
    try {
      const randomIndustry = industries[Math.floor(Math.random() * industries.length)];
      setIndustry(randomIndustry);
      const result = await generateDynamicTagline({ creativeIndustry: randomIndustry });
      setTagline(result.tagline);
    } catch (error) {
      console.error("Failed to generate tagline", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <AnimatePresence mode="wait">
        <motion.p
          key={tagline}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-white/60 font-body text-sm tracking-[0.2em] uppercase italic text-center max-w-md"
        >
          {tagline}
        </motion.p>
      </AnimatePresence>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleRefresh}
        disabled={isLoading}
        className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-primary/80 hover:text-primary transition-colors disabled:opacity-50"
      >
        <Sparkles className={`w-3 h-3 ${isLoading ? 'animate-spin' : ''}`} />
        {isLoading ? 'Dreaming...' : `Inspire Me (${industry})`}
      </motion.button>
    </div>
  );
};
