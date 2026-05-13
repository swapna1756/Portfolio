"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck, Sprout, Droplets, Briefcase, Brain } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    id: "link-armor",
    title: "LinkArmor",
    subtitle: "AI Phishing Detection",
    image: "https://picsum.photos/seed/linkarmor/800/600",
    link: "https://link-armor.vercel.app",
    icon: <ShieldCheck className="w-10 h-10" />
  },
  {
    id: "agri-predict",
    title: "AgriPredict",
    subtitle: "AI Agriculture System",
    image: "https://picsum.photos/seed/agripredict/800/600",
    link: "https://agripredictf.vercel.app",
    icon: <Sprout className="w-10 h-10" />
  },
  {
    id: "wastewater-iot",
    title: "IoT Monitoring",
    subtitle: "Wastewater Quality",
    image: "https://picsum.photos/seed/wastewater/800/600",
    link: "https://github.com/swapna1756",
    icon: <Droplets className="w-10 h-10" />
  },
  {
    id: "ai-virtual-analyzer",
    title: "AI Analyzer",
    subtitle: "Intelligent Insights",
    image: "https://picsum.photos/seed/aianalyzer/800/600",
    link: "https://ai-virality-analyzer-jun74unm3wpg2butva4tzc.streamlit.app/",
    icon: <Brain className="w-10 h-10" />
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative min-h-screen py-32 px-6 md:px-12 overflow-hidden flex flex-col justify-center">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full animate-pulse-glow" />
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full animate-pulse-glow" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6"
          >
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-primary text-[10px] tracking-[0.3em] uppercase font-bold">Showcase</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-white mb-4 tracking-tighter uppercase">
            MY <span className="text-primary" style={{ filter: "url(#bubble-gloss)" }}>PROJECTS</span>
          </h2>
          <p className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-light max-w-2xl mx-auto">
            Innovative Solutions & Digital Experiences
          </p>
        </motion.div>

        {/* Projects Grid - 4 in one line on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div 
                onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                className="cursor-pointer relative overflow-hidden bg-white/[0.03] backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 flex flex-col items-center text-center h-full transition-all duration-500 hover:border-primary/40 hover:bg-white/[0.06] shadow-2xl"
              >
                {/* Central 3D-style Node Container */}
                <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
                  {/* Rotating Multi-layered Background Glows */}
                  <motion.div 
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 rounded-full blur-xl"
                  />
                  
                  {/* Inner Node Circle */}
                  <div className="relative z-10 w-24 h-24 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-500 overflow-hidden shadow-inner">
                    <motion.div 
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="text-primary drop-shadow-[0_0_15px_rgba(255,77,166,0.6)]"
                    >
                      {project.icon}
                    </motion.div>
                    
                    {/* Inner Node Shimmer */}
                    <motion.div 
                      initial={{ left: "-100%" }}
                      whileHover={{ left: "100%" }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
                    />
                  </div>

                  {/* Outer Orbital Ring */}
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-10px] border border-primary/5 rounded-full border-dashed"
                  />
                </div>

                {/* Content */}
                <div className="space-y-2 relative z-10">
                  <h3 className="text-white text-xl font-headline font-extrabold tracking-tight group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/40 text-[9px] uppercase tracking-[0.3em] font-medium group-hover:text-white/60 transition-colors duration-300">
                    {project.subtitle}
                  </p>
                </div>

                {/* Interactive Light Sweep Overlay */}
                <motion.div
                  initial={{ x: "-150%", opacity: 0 }}
                  whileHover={{ x: "150%", opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-[-25deg] pointer-events-none"
                />

                {/* Button-like Indicator */}
                <div className="mt-8 pt-6 border-t border-white/5 w-full">
                  <span className="text-[8px] tracking-[0.5em] text-primary/60 uppercase font-bold group-hover:text-primary transition-colors">
                    Explore Node
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Ambient Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/20 rounded-full pointer-events-none"
          animate={{
            x: [Math.random() * 1000 - 500, Math.random() * 1000 - 500],
            y: [Math.random() * 1000 - 500, Math.random() * 1000 - 500],
            opacity: [0, 0.3, 0],
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