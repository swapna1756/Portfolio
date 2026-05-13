"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { 
  Binary, 
  Code2, 
  Database, 
  Cpu, 
  Globe, 
  Layers, 
  FileJson, 
  ShieldCheck, 
  Brain, 
  Wifi, 
  Github, 
  Activity, 
  Zap,
  Sparkles
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const skills: Skill[] = [
  { name: "Python", icon: <Binary className="w-6 h-6" />, color: "hsl(var(--primary))" },
  { name: "Java", icon: <Code2 className="w-6 h-6" />, color: "hsl(var(--secondary))" },
  { name: "SQL", icon: <Database className="w-6 h-6" />, color: "#3B82F6" },
  { name: "React", icon: <Cpu className="w-6 h-6" />, color: "#61DAFB" },
  { name: "HTML", icon: <Globe className="w-6 h-6" />, color: "#E34F26" },
  { name: "CSS", icon: <Layers className="w-6 h-6" />, color: "#1572B6" },
  { name: "JavaScript", icon: <FileJson className="w-6 h-6" />, color: "#F7DF1E" },
  { name: "Cybersecurity", icon: <ShieldCheck className="w-6 h-6" />, color: "#10B981" },
  { name: "AI/ML", icon: <Brain className="w-6 h-6" />, color: "#A855F7" },
  { name: "IoT", icon: <Wifi className="w-6 h-6" />, color: "#F43F5E" },
  { name: "GitHub", icon: <Github className="w-6 h-6" />, color: "#FFFFFF" },
  { name: "Streamlit", icon: <Activity className="w-6 h-6" />, color: "#FF4B4B" },
  { name: "ESP32", icon: <Zap className="w-6 h-6" />, color: "#FF9800" },
];

const FloatingBubble = ({ skill, index }: { skill: Skill; index: number }) => {
  // Generate random movement path
  const randomMovement = useMemo(() => ({
    x: [
      `${Math.random() * 80 + 10}vw`,
      `${Math.random() * 80 + 10}vw`,
      `${Math.random() * 80 + 10}vw`,
      `${Math.random() * 80 + 10}vw`,
    ],
    y: [
      `${Math.random() * 80 + 10}vh`,
      `${Math.random() * 80 + 10}vh`,
      `${Math.random() * 80 + 10}vh`,
      `${Math.random() * 80 + 10}vh`,
    ],
  }), []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 0.7, 
        scale: 1,
        x: randomMovement.x,
        y: randomMovement.y
      }}
      transition={{
        opacity: { duration: 1, delay: index * 0.1 },
        scale: { duration: 1, delay: index * 0.1 },
        x: { duration: 20 + Math.random() * 10, repeat: Infinity, ease: "linear" },
        y: { duration: 25 + Math.random() * 10, repeat: Infinity, ease: "linear" },
      }}
      whileHover={{ 
        scale: 1.2, 
        opacity: 1,
        zIndex: 50,
        transition: { duration: 0.3 }
      }}
      className="absolute cursor-pointer group"
      style={{ left: 0, top: 0 }}
    >
      <div className="relative">
        {/* Glow Underlay */}
        <div 
          className="absolute inset-0 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
          style={{ backgroundColor: skill.color }}
        />
        
        {/* Main Bubble */}
        <div className="relative glass-button w-24 h-24 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center p-4 border border-white/10 group-hover:border-primary/50 transition-all duration-500 shadow-2xl overflow-hidden backdrop-blur-xl bg-black/40">
          <motion.div 
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="mb-2 transition-colors duration-300 group-hover:text-primary"
            style={{ color: skill.color }}
          >
            {skill.icon}
          </motion.div>
          <span className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 group-hover:text-white transition-colors">
            {skill.name}
          </span>
          
          {/* Internal Shimmer */}
          <motion.div 
            initial={{ x: "-100%" }}
            whileHover={{ x: "150%" }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] pointer-events-none"
          />
        </div>

        {/* Floating Particles Around Bubble */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/20"
              animate={{
                x: [0, (Math.random() - 0.5) * 60],
                y: [0, (Math.random() - 0.5) * 60],
                opacity: [0, 0.5, 0],
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
    <section id="skills" className="relative h-screen min-h-[800px] w-full overflow-hidden bg-black/40 backdrop-blur-3xl">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-primary/5 blur-[150px] rounded-full animate-pulse-glow" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col pt-32 px-6 md:px-12 pointer-events-none">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 relative z-50 pointer-events-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-[10px] tracking-[0.3em] uppercase font-bold">Technological Ecosystem</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-headline font-extrabold text-white mb-4 tracking-tighter uppercase drop-shadow-[0_0_30px_rgba(255,77,166,0.3)]">
            MY <span className="text-primary" style={{ filter: "url(#bubble-gloss)" }}>SKILLS</span>
          </h2>
          <p className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-light max-w-2xl mx-auto">
            Technologies, Tools & Creative Development
          </p>
        </motion.div>

        {/* Floating Ecosystem */}
        <div className="absolute inset-0 z-0 pointer-events-auto overflow-hidden">
          {skills.map((skill, index) => (
            <FloatingBubble key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>

      {/* Global Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/10 rounded-full"
            animate={{
              x: [Math.random() * 100 + 'vw', Math.random() * 100 + 'vw'],
              y: [Math.random() * 100 + 'vh', Math.random() * 100 + 'vh'],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </section>
  );
};
