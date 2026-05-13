"use client";

import React from "react";
import { motion } from "framer-motion";

interface TOCProps {
  onNavigate: (id: string) => void;
}

export const TableOfContents = ({ onNavigate }: TOCProps) => {
  const cards = [
    { id: "certificates", title: "CERTIFICATES", number: "01" },
    { id: "projects", title: "PROJECTS", number: "02" },
    { id: "skills", title: "SKILLS", number: "03" },
    { id: "resume", title: "RESUME", number: "04" },
    { id: "contact", title: "GET IN TOUCH", number: "05" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="toc" className="relative min-h-screen flex items-center justify-center p-6 md:p-12 overflow-hidden bg-black/40 backdrop-blur-3xl">
      {/* Background Decorative Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 blur-[120px] rounded-full animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-20">
        {/* Left Side: Heading */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative lg:w-1/2"
        >
          {/* Ambient Glow behind heading */}
          <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full scale-150 opacity-50" />
          
          <motion.h2
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-4xl md:text-5xl lg:text-6xl leading-tight font-headline font-extrabold text-white uppercase tracking-tighter relative z-10"
            style={{ textShadow: "0 0 30px rgba(255, 77, 166, 0.4)" }}
          >
            TABLE OF <br /> <span className="text-white/40">CONTENT</span>
          </motion.h2>
        </motion.div>

        {/* Right Side: Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:max-w-xl"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              variants={item}
              whileHover={{ 
                scale: 1.05,
                translateY: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate(card.id)}
              className={`
                relative cursor-pointer group glass-button p-8 rounded-[2rem] border border-white/10
              `}
            >
              {/* Card Number */}
              <div className="text-primary/60 text-[10px] tracking-[0.4em] font-bold mb-4 uppercase">
                {card.number}
              </div>
              
              {/* Card Title */}
              <h3 className="text-white text-xl md:text-2xl font-headline font-extrabold tracking-tight group-hover:text-primary transition-colors">
                {card.title}
              </h3>

              {/* Decorative Corner Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-2xl group-hover:bg-primary/20 transition-all rounded-full" />
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                  className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[30deg]"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full pointer-events-none"
          animate={{
            x: [Math.random() * 1000 - 500, Math.random() * 1000 - 500],
            y: [Math.random() * 1000 - 500, Math.random() * 1000 - 500],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </section>
  );
};
