
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  Home, 
  Camera
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

interface PortfolioDashboardProps {
  onTerminate?: () => void;
}

export const PortfolioDashboard = ({ onTerminate }: PortfolioDashboardProps) => {
  const defaultImage = PlaceHolderImages.find(img => img.id === 'profile-photo')?.imageUrl;
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [activeInfo, setActiveInfo] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load saved image on mount
  useEffect(() => {
    const savedImage = localStorage.getItem('portfolio_profile_image');
    if (savedImage) {
      setCustomImage(savedImage);
    }
  }, []);

  const displayImage = customImage || defaultImage;

  const saveImage = (base64: string) => {
    setCustomImage(base64);
    localStorage.setItem('portfolio_profile_image', base64);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        saveImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        saveImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
        <div 
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`w-full md:w-[45%] relative flex flex-col p-12 justify-end group overflow-hidden transition-colors duration-300 ${isDragging ? 'bg-primary/5' : ''}`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent z-10" />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[100px] rounded-full animate-pulse" />

          {displayImage && (
            <div className="absolute inset-0 w-full h-full">
              <Image 
                src={displayImage}
                alt="Profile"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          )}

          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => fileInputRef.current?.click()}
              className="glass-button p-6 rounded-2xl flex flex-col items-center gap-3 border-primary/30"
            >
              <Camera className="w-8 h-8 text-primary" />
              <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-white">Change Portrait</span>
            </motion.button>
          </div>

          <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />

          <div className="relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 mb-3"
            >
              <span className="w-8 h-[1px] bg-primary/50" />
              <span className="text-primary/80 text-[10px] tracking-[0.4em] uppercase font-bold">HELLO, I AM</span>
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

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute top-8 left-8 z-30 w-12 h-12 rounded-full glass-button flex items-center justify-center border border-primary/40 shadow-[0_0_20px_rgba(255,77,166,0.3)]"
          >
            <span className="text-primary font-bold text-sm tracking-tighter" style={{ filter: "url(#bubble-gloss)" }}>ST</span>
          </motion.div>
        </div>

        <div className="flex-1 p-12 overflow-y-auto custom-scrollbar bg-black/20">
          <div className="space-y-16">
            <motion.section
              id="about"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-primary/60 text-[10px] tracking-[0.4em] uppercase font-bold">About Me</h3>
                <div className="flex-1 h-[1px] bg-white/5" />
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-lg font-light tracking-wide">
                I am a passionate developer interested in cybersecurity, AI, and modern digital experiences. I enjoy building secure and interactive applications while exploring innovative technologies and creative web design.
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
                <h4 className="text-white font-medium text-sm tracking-wide mb-1">B.Tech in CSE (Cyber Security)</h4>
                <p className="text-white/40 text-[11px] mb-2 font-light">Kalasalingam Academy of Research and Education</p>
                <div className="inline-block bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                  <p className="text-primary text-[10px] font-bold tracking-widest uppercase">CGPA: 8.78</p>
                </div>
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
                      className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap z-50 px-5 py-2.5 rounded-2xl bg-black/80 backdrop-blur-2xl border border-primary/40 text-white text-[11px] tracking-[0.2em] font-bold"
                    >
                      {social.value}
                      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black/80 border-r border-b border-primary/40 rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>
                <motion.button
                  onClick={() => handleIconClick(social)}
                  whileHover={{ scale: 1.15, backgroundColor: "rgba(255, 77, 166, 0.2)" }}
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white/40 hover:text-primary transition-all shadow-lg"
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
