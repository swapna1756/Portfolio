"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Binary, 
  Code2, 
  Database, 
  Globe, 
  ShieldCheck, 
  Brain, 
  Wifi, 
  Github, 
  Sparkles
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const skills: Skill[] = [
  { name: "Python", icon: <Binary className="w-6 h-6" />, color: "#306998" },
  { name: "Java", icon: <Code2 className="w-6 h-6" />, color: "#007396" },
  { name: "SQL", icon: <Database className="w-6 h-6" />, color: "#00758F" },
  { name: "HTML", icon: <Globe className="w-6 h-6" />, color: "#E34F26" },
  { name: "Cybersecurity", icon: <ShieldCheck className="w-6 h-6" />, color: "#10B981" },
  { name: "AI/ML", icon: <Brain className="w-6 h-6" />, color: "#A855F7" },
  { name: "IoT", icon: <Wifi className="w-6 h-6" />, color: "#F43F5E" },
  { name: "GitHub", icon: <Github className="w-6 h-6" />, color: "#FFFFFF" },
];

const SkillOrb = ({ skill, index, total }: { skill: Skill; index: number; total: number }) => {
  // Calculate orbital position
  const angle = (index / total) * Math.PI * 2;
  const radius = 300; // Radius of the circle in pixels
  
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
      whileInView={{ 
        x, 
        y, 
        opacity: 1, 
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring", 
        stiffness: 50, 
        damping: 15, 
        delay: index * 0.08 + 0.5 
      }}
      whileHover={{ scale: 1.15, zIndex: 50 }}
      className="absolute"
    >
      {/* Connecting Line to Center */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-visible" width="1" height="1">
        <motion.line
          x1={-x}
          y1={-y}
          x2="0"
          y2="0"
          stroke="white"
          strokeOpacity="0.05"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: index * 0.1 }}
        />
      </svg>

      <div className="relative group cursor-pointer">
        {/* Glow Underlay */}
        <div 
          className="absolute inset-0 rounded-full blur-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-500"
          style={{ backgroundColor: skill.color }}
        />
        
        {/* Main Orb */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 2, 0]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative glass-button w-24 h-24 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center border border-white/10 group-hover:border-primary/50 transition-all duration-500 bg-black/60 backdrop-blur-xl"
        >
          <div className="mb-2" style={{ color: skill.color }}>
            {skill.icon}
          </div>
          <span className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] uppercase text-white/60 group-hover:text-white transition-colors text-center px-2">
            {skill.name}
          </span>
          
          {/* Internal Shimmer */}
          <motion.div 
            initial={{ x: "-100%" }}
            whileHover={{ x: "150%" }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] pointer-events-none"
          />
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/20"
              animate={{
                x: [0, (Math.random() - 0.5) * 80],
                y: [0, (Math.random() - 0.5) * 80],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{ left: '50%', top: '50%' }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative h-screen min-h-[900px] w-full overflow-hidden bg-black/40 backdrop-blur-3xl flex items-center justify-center">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vh] bg-primary/5 blur-[180px] rounded-full animate-pulse-glow" />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center justify-center h-full">
        {/* Top Branding */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="absolute top-24 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-primary text-[9px] tracking-[0.3em] uppercase font-bold">Neural Ecosystem</span>
          </div>
        </motion.div>

        {/* Central Hub */}
        <div className="relative flex items-center justify-center">
          {/* Main Central Circle */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative z-20 w-48 h-48 md:w-64 md:h-64 rounded-full bg-black/60 backdrop-blur-3xl border border-white/20 flex flex-col items-center justify-center shadow-[0_0_80px_rgba(255,77,166,0.2)]"
          >
            <motion.h2 
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-white font-headline text-3xl md:text-4xl font-extrabold tracking-tighter uppercase text-center"
            >
              MY <br />
              <span className="text-primary" style={{ filter: "url(#bubble-gloss)" }}>SKILLS</span>
            </motion.h2>
            
            <div className="absolute inset-[-20px] rounded-full border border-primary/20 animate-pulse" />
            <div className="absolute inset-[-40px] rounded-full border border-primary/5 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute inset-0 bg-primary/10 blur-[60px] rounded-full" />
          </motion.div>

          {/* Orbiting Skill Orbs */}
          <div className="absolute flex items-center justify-center">
            {skills.map((skill, index) => (
              <SkillOrb key={skill.name} skill={skill} index={index} total={skills.length} />
            ))}
          </div>
        </div>
      </div>

      {/* Global Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/10 rounded-full"
            animate={{
              x: [Math.random() * 100 + 'vw', Math.random() * 100 + 'vw'],
              y: [Math.random() * 100 + 'vh', Math.random() * 100 + 'vh'],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </section>
  );
};