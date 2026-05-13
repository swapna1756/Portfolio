
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  Home, 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Database, 
  Globe,
  Binary
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const skills = [
  { name: "Python", icon: <Binary className="w-4 h-4" /> },
  { name: "Java", icon: <Code2 className="w-4 h-4" /> },
  { name: "SQL", icon: <Database className="w-4 h-4" /> },
  { name: "Cybersecurity", icon: <ShieldCheck className="w-4 h-4" /> },
  { name: "AI", icon: <Cpu className="w-4 h-4" /> },
  { name: "IoT", icon: <Globe className="w-4 h-4" /> },
  { name: "React", icon: <Code2 className="w-4 h-4" /> }
];

interface PortfolioDashboardProps {
  onTerminate?: () => void;
}

export const PortfolioDashboard = ({ onTerminate }: PortfolioDashboardProps) => {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-photo');
  const [activeInfo, setActiveInfo] = useState<string | null>(null);

  const socialIcons = [
    { 
      id: "linkedin",
      icon: <Linkedin className="w-4 h-4" />, 
      href: "https://www.linkedin.com/in/tekkala-swapna-8624663a0/", 
      label: "LinkedIn",
      type: "link" 
    },
    { 
      id: "github",
      icon: <Github className="w-4 h-4" />, 
      href: "https://github.com/swapna1756", 
      label: "GitHub",
      type: "link" 
    },
    { 
      id: "email",
      icon: <Mail className="w-4 h-4" />, 
      value: "swapnatekkala1756@gmail.com", 
      label: "Email",
      type: "tooltip" 
    },
    { 
      id: "phone",
      icon: <Phone className="w-4 h-4" />, 
      value: "+91 9346798175", 
      label: "Phone",
      type: "tooltip" 
    },
    { 
      id: "home",
      icon: <Home className="w-4 h-4" />, 
      onClick: onTerminate, 
      label: "Home",
      type: "action" 
    }
  ];

  const handleIconClick = (social: any) => {
    if (social.type === 'tooltip') {
      setActiveInfo(activeInfo === social.id ? null : social.id);
    } else if (social.type === 'action' && social.onClick) {
      social.onClick();
    } else if (social.type === 'link') {
      window.open(social.href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="dashboard" className="relative min-h-screen flex items-center justify-center p-6 md:p-12">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-6xl aspect-[16/10] bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row"
      >
        <div className="w-full md:w-[45%] relative flex flex-col p-12 justify-end group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent z-10" />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-all duration-1000 animate-pulse" />

          {profileImage && (
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              whileHover={{ scale: 1.05 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image 
                src={profileImage.imageUrl}
                alt={profileImage.description}
                fill
                priority
                className="object-cover object-center opacity-60 transition-all duration-1000 grayscale-[0.3] hover:grayscale-0"
                data-ai-hint={profileImage.imageHint}
              />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute top-8 left-8 z-20 w-12 h-12 rounded-full glass-button flex items-center justify-center border border-primary/30 shadow-[0_0_20px_rgba(255,77,166,0.3)]"
          >
            <span className="text-primary font-bold text-xs tracking-tighter" style={{ filter: "url(#bubble-gloss)" }}>ST</span>
          </motion.div>

          <div className="relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 mb-3"
            >
              <span className="w-8 h-[1px] bg-primary/50" />
              <span className="text-primary/80 text-[10px] tracking-[0.4em] uppercase font-bold">
                HELLO, I AM
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="text-5xl md:text-6xl font-headline font-extrabold text-white mb-2 leading-tight drop-shadow-2xl"
            >
              Swapna <br /> <span className="text-primary" style={{ filter: "url(#bubble-gloss)" }}>Tekkala</span>
            </motion.h2>
          </div>
        </div>

        <div className="flex-1 p-12 overflow-y-auto custom-scrollbar bg-black/20">
          <div className="space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-primary/60 text-[10px] tracking-[0.4em] uppercase font-bold">About Me</h3>
                <div className="flex-1 h-[1px] bg-white/5" />
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-lg font-light tracking-wide">
                I am a passionate developer interested in cybersecurity, AI, and modern digital experiences. I enjoy building secure and interactive applications while exploring innovative technologies and creative web design. My focus is on developing smart, user-friendly, and visually engaging solutions that combine functionality, security, and creativity.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-primary/60 text-[10px] tracking-[0.4em] uppercase font-bold">Education</h3>
                <div className="flex-1 h-[1px] bg-white/5" />
              </div>
              <div className="relative border-l border-primary/20 pl-8 py-2">
                <div className="absolute top-0 left-[-4px] w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#FF4DA6]" />
                <h4 className="text-white font-medium text-sm tracking-wide mb-1">B.Tech in Computer Science Engineering (Cyber Security)</h4>
                <p className="text-white/40 text-[11px] mb-2 font-light">Kalasalingam Academy of Research and Education</p>
                <div className="inline-block bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                  <p className="text-primary text-[10px] font-bold tracking-widest uppercase">CGPA: 8.78</p>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-primary/60 text-[10px] tracking-[0.4em] uppercase font-bold">Skills</h3>
                <div className="flex-1 h-[1px] bg-white/5" />
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "rgba(255, 77, 166, 0.15)",
                      borderColor: "rgba(255, 77, 166, 0.3)"
                    }}
                    className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex items-center gap-3 group transition-all"
                  >
                    <span className="text-primary/60 group-hover:text-primary transition-colors">{skill.icon}</span>
                    <span className="text-white/80 text-[11px] font-medium tracking-widest uppercase">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          <div className="mt-16 flex items-center gap-5 relative">
            {socialIcons.map((social) => (
              <div key={social.id} className="relative">
                <AnimatePresence>
                  {activeInfo === social.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: -55, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap z-50 px-5 py-2.5 rounded-2xl bg-black/80 backdrop-blur-2xl border border-primary/40 shadow-[0_0_30px_rgba(255,77,166,0.3)] text-white text-[11px] tracking-[0.2em] font-bold"
                    >
                      {social.value}
                      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black/80 border-r border-b border-primary/40 rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  onClick={() => handleIconClick(social)}
                  whileHover={{ 
                    scale: 1.15, 
                    backgroundColor: "rgba(255, 77, 166, 0.2)",
                    boxShadow: "0 0 20px rgba(255, 77, 166, 0.4)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white/40 hover:text-primary transition-all shadow-[0_8px_25px_rgba(0,0,0,0.3)]"
                  title={social.label}
                >
                  {social.icon}
                </motion.button>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
