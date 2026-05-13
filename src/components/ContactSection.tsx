
"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Github, 
  Home,
  Send,
  CheckCircle2,
  Sparkles,
  Zap,
  Globe
} from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const ContactSection = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');
  const sectionRef = useRef<HTMLElement>(null);
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-photo')?.imageUrl;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 2000);
  };

  const contactOrbs = [
    { 
      id: "phone",
      icon: <Phone className="w-5 h-5" />, 
      label: "Secure Line", 
      value: "+91 9346798175",
      color: "from-blue-400 to-cyan-400"
    },
    { 
      id: "email",
      icon: <Mail className="w-5 h-5" />, 
      label: "Neural Mail", 
      value: "swapnatekkala1756@gmail.com",
      color: "from-purple-400 to-pink-400"
    },
    { 
      id: "location",
      icon: <MapPin className="w-5 h-5" />, 
      label: "Nexus Point", 
      value: "India",
      color: "from-emerald-400 to-teal-400"
    }
  ];

  const socialNodes = [
    { 
      id: "linkedin",
      icon: <Linkedin className="w-5 h-5" />, 
      href: "https://www.linkedin.com/in/tekkala-swapna-8624663a0/",
      label: "Identity"
    },
    { 
      id: "github",
      icon: <Github className="w-5 h-5" />, 
      href: "https://github.com/swapna1756",
      label: "Source"
    },
    { 
      id: "home",
      icon: <Home className="w-5 h-5" />, 
      onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
      label: "Core"
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="relative min-h-screen py-32 px-6 md:px-12 overflow-hidden flex flex-col items-center justify-center">
      {/* Immersive Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[180px] rounded-full animate-pulse-glow" />
        
        {/* Animated Particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            animate={{
              x: [Math.random() * 100 + 'vw', Math.random() * 100 + 'vw'],
              y: [Math.random() * 100 + 'vh', Math.random() * 100 + 'vh'],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-8"
          >
            <Zap className="w-3 h-3 text-primary" />
            <span className="text-primary text-[9px] tracking-[0.4em] uppercase font-bold">Terminal Initialization</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-white mb-4 tracking-tighter leading-tight flex flex-wrap justify-center items-center gap-x-3 md:gap-x-5">
            <span>LET’S CREATE</span> 
            <span className="font-['Dancing_Script'] text-primary normal-case font-bold px-2" style={{ filter: "url(#bubble-gloss)" }}>The Future</span> 
            <span>TOGETHER</span>
          </h2>
          <motion.p 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-white/40 text-[10px] md:text-xs tracking-[0.5em] uppercase font-light max-w-2xl mx-auto mt-6"
          >
            Turning ideas into immersive digital realities.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT: Identity Node & Orbs */}
          <div className="flex flex-col items-center lg:items-start space-y-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
              {/* Holographic Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] border border-primary/20 rounded-full border-dashed"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-40px] border border-white/5 rounded-full"
              />
              
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 group bg-black/40 backdrop-blur-3xl shadow-[0_0_50px_rgba(255,77,166,0.2)]">
                {profileImage && (
                  <Image 
                    src={profileImage}
                    alt="Profile"
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                
                {/* Holographic Shimmer */}
                <motion.div 
                  animate={{ y: ["100%", "-100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-20 w-full z-20 pointer-events-none"
                />
              </div>

              {/* Floating Orbiting Orbs */}
              {contactOrbs.map((orb, i) => (
                <motion.div
                  key={orb.id}
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 10, 0]
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5
                  }}
                  className={`absolute z-30 group cursor-pointer ${
                    i === 0 ? "top-0 -right-8" : 
                    i === 1 ? "bottom-4 -left-12" : 
                    "top-1/2 -left-16 -translate-y-1/2"
                  }`}
                >
                  <div className={`relative w-16 h-16 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all shadow-2xl`}>
                    <div className={`absolute inset-0 rounded-full opacity-20 bg-gradient-to-br ${orb.color} blur-lg`} />
                    <div className="text-white/60 group-hover:text-primary transition-colors">
                      {orb.icon}
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute left-full ml-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-black/80 backdrop-blur-xl border border-white/10 p-3 rounded-xl min-w-[150px]">
                      <p className="text-[7px] tracking-[0.3em] text-white/30 uppercase font-bold mb-1">{orb.label}</p>
                      <p className="text-[10px] text-white font-medium">{orb.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-md"
            >
              <p className="text-white/60 text-sm leading-relaxed font-light tracking-wide italic">
                “Whether it’s cybersecurity, AI, development, or creative collaboration — let’s build something extraordinary and push the boundaries of what's possible.”
              </p>
            </motion.div>
          </div>

          {/* RIGHT: Holographic Form Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-[3rem] -z-10" />
            
            <div className="glass-button rounded-[3rem] border border-white/10 p-8 md:p-12 bg-black/40 backdrop-blur-3xl shadow-2xl overflow-hidden relative">
              {/* Decorative Corner Scan Lines */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-primary/20 rounded-tr-[3rem]" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-primary/20 rounded-bl-[3rem]" />

              <div className="mb-10 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-headline font-bold text-white uppercase tracking-tight">Open Communication Channel</h3>
                  <p className="text-[9px] tracking-[0.4em] text-primary font-bold uppercase mt-1">Status: Ready for Transmission</p>
                </div>
                <Globe className="w-8 h-8 text-primary/20 animate-pulse" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] tracking-[0.4em] text-white/20 uppercase font-bold pl-1">Identity Tag</label>
                    <Input 
                      placeholder="Your Name" 
                      required
                      className="bg-white/5 border-white/5 rounded-xl focus:border-primary/50 transition-all text-white placeholder:text-white/10 h-14"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] tracking-[0.4em] text-white/20 uppercase font-bold pl-1">Return Frequency</label>
                    <Input 
                      type="email" 
                      placeholder="Email Address" 
                      required
                      className="bg-white/5 border-white/5 rounded-xl focus:border-primary/50 transition-all text-white placeholder:text-white/10 h-14"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] tracking-[0.4em] text-white/20 uppercase font-bold pl-1">Protocol Purpose</label>
                  <Select required>
                    <SelectTrigger className="bg-white/5 border-white/5 rounded-xl focus:border-primary/50 transition-all text-white h-14">
                      <SelectValue placeholder="Select Purpose" />
                    </SelectTrigger>
                    <SelectContent className="bg-black/90 border-white/10 backdrop-blur-xl text-white">
                      <SelectItem value="collab">Creative Collaboration</SelectItem>
                      <SelectItem value="intern">Internship Opportunity</SelectItem>
                      <SelectItem value="project">Project Discussion</SelectItem>
                      <SelectItem value="partner">Creative Partnership</SelectItem>
                      <SelectItem value="networking">Tech Networking</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] tracking-[0.4em] text-white/20 uppercase font-bold pl-1">Data Transmission</label>
                  <Textarea 
                    placeholder="Enter message content..." 
                    required
                    className="bg-white/5 border-white/5 rounded-xl focus:border-primary/50 transition-all text-white placeholder:text-white/10 min-h-[150px] resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(255, 77, 166, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formState !== 'idle'}
                  className={`w-full relative overflow-hidden h-16 rounded-2xl flex items-center justify-center gap-4 transition-all ${
                    formState === 'success' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] hover:bg-right transition-[background-position] duration-500 text-white'
                  }`}
                >
                  {formState === 'idle' && (
                    <>
                      <span className="text-[11px] tracking-[0.5em] font-bold uppercase">Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                  {formState === 'sending' && (
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                    />
                  )}
                  {formState === 'success' && (
                    <>
                      <span className="text-[11px] tracking-[0.5em] font-bold uppercase">Transmission Successful</span>
                      <CheckCircle2 className="w-6 h-6" />
                    </>
                  )}
                  
                  {/* Light Sweep */}
                  <motion.div 
                    animate={{ left: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[30deg] pointer-events-none"
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM: Futuristic Social Nodes */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-10">
          {socialNodes.map((social, i) => (
            <motion.button
              key={social.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + (i * 0.1) }}
              whileHover={{ y: -10 }}
              onClick={() => social.onClick ? social.onClick() : window.open(social.href, '_blank')}
              className="group flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-2xl glass-button flex items-center justify-center text-white/40 group-hover:text-primary group-hover:border-primary/50 transition-all">
                <div className="absolute inset-0 rounded-2xl bg-primary/5 group-hover:bg-primary/5 transition-colors" />
                {social.icon}
              </div>
              <div className="text-left">
                <p className="text-[7px] tracking-[0.3em] text-white/20 uppercase font-bold">{social.label}</p>
                <p className="text-[10px] text-white/40 group-hover:text-white transition-colors uppercase tracking-[0.1em]">{social.id}</p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Closing Signature */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          className="mt-32 text-center"
        >
          <p className="text-white/10 text-[9px] tracking-[0.6em] uppercase font-light">
            © 2024 Swapna Tekkala • Neural Portfolio v4.0.2
          </p>
        </motion.div>
      </div>
    </section>
  );
};
