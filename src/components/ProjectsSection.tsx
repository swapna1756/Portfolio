"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck, Sprout, Droplets, Briefcase } from "lucide-react";
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
    subtitle: "AI-Powered Phishing Detection Platform",
    image: "https://picsum.photos/seed/linkarmor/800/600",
    link: "https://link-armor.vercel.app",
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    id: "agri-predict",
    title: "AgriPredict",
    subtitle: "AI-Based Agricultural Prediction System",
    image: "https://picsum.photos/seed/agripredict/800/600",
    link: "https://agripredictf.vercel.app",
    icon: <Sprout className="w-8 h-8" />
  },
  {
    id: "wastewater-iot",
    title: "Wastewater Monitoring",
    subtitle: "IoT-Based Water Quality Monitoring System",
    image: "https://picsum.photos/seed/wastewater/800/600",
    link: "https://github.com/swapna1756",
    icon: <Droplets className="w-8 h-8" />
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative min-h-screen py-32 px-6 md:px-12 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full animate-pulse-glow" />
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full animate-pulse-glow" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6"
          >
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-primary text-[10px] tracking-[0.3em] uppercase font-bold">Showcase</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-headline font-extrabold text-white mb-6 tracking-tighter uppercase">
            MY <span className="text-primary" style={{ filter: "url(#bubble-gloss)" }}>PROJECTS</span>
          </h2>
          <p className="text-white/40 text-sm tracking-[0.2em] uppercase font-light max-w-2xl mx-auto">
            Innovative Solutions & Digital Experiences
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              {/* Magnetic Interactive Card */}
              <div 
                onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                className="cursor-pointer glass-button p-6 rounded-[2.5rem] border border-white/10 flex flex-col h-full overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-8 bg-black/40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-80"
                    data-ai-hint="technology digital"
                  />
                  
                  {/* Floating Center Icon */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center shadow-[0_0_30px_rgba(255,77,166,0.4)] group-hover:scale-110 transition-transform duration-500">
                      <div className="text-primary drop-shadow-[0_0_10px_#FF4DA6]">
                        {project.icon}
                      </div>
                    </div>
                  </motion.div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="flex-1 text-center px-4">
                  <div className="text-primary/60 text-[9px] tracking-[0.4em] font-bold mb-3 uppercase">
                    Innovating Digital Space
                  </div>
                  <h3 className="text-white text-2xl font-headline font-extrabold mb-3 group-hover:text-primary transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-white/40 text-[11px] leading-relaxed uppercase tracking-widest font-light mb-8">
                    {project.subtitle}
                  </p>
                </div>

                {/* Action Footer */}
                <div className="flex items-center justify-center pt-4 border-t border-white/5">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-primary text-[10px] tracking-[0.3em] font-bold uppercase py-2"
                  >
                    Launch App <ExternalLink className="w-3 h-3" />
                  </motion.div>
                </div>

                {/* Corner Neon Glows */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Ambient Particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/20 rounded-full pointer-events-none"
          animate={{
            x: [Math.random() * 1000 - 500, Math.random() * 1000 - 500],
            y: [Math.random() * 1000 - 500, Math.random() * 1000 - 500],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </section>
  );
};
