"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Github, 
  Home,
  Send,
  CheckCircle2
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

export const ContactSection = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate API call
    setTimeout(() => setFormState('success'), 1500);
  };

  const contactInfo = [
    { 
      id: "location",
      icon: <MapPin className="w-5 h-5" />, 
      label: "LOCATION", 
      value: "India",
      color: "text-blue-400"
    },
    { 
      id: "phone",
      icon: <Phone className="w-5 h-5" />, 
      label: "PHONE", 
      value: "+91 9346798175",
      color: "text-purple-400"
    },
    { 
      id: "email",
      icon: <Mail className="w-5 h-5" />, 
      label: "EMAIL", 
      value: "swapnatekkala1756@gmail.com",
      color: "text-pink-400"
    }
  ];

  const socialIcons = [
    { 
      icon: <Linkedin className="w-4 h-4" />, 
      href: "https://www.linkedin.com/in/tekkala-swapna-8624663a0/",
      id: "linkedin"
    },
    { 
      icon: <Github className="w-4 h-4" />, 
      href: "https://github.com/swapna1756",
      id: "github"
    },
    { 
      icon: <Home className="w-4 h-4" />, 
      onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
      id: "home"
    }
  ];

  return (
    <section id="contact" className="relative min-h-screen py-32 px-6 md:px-12 overflow-hidden flex items-center justify-center">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Identity & Cards */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-6xl md:text-8xl font-['Dancing_Script'] text-white mb-2 leading-none drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                Get In Touch
              </h2>
              <h3 className="text-primary text-xs md:text-sm tracking-[0.5em] uppercase font-bold mb-6">
                LET’S BUILD SOMETHING GREAT
              </h3>
              <p className="text-white/40 text-[11px] md:text-xs leading-relaxed max-w-md font-light tracking-[0.1em] uppercase">
                Whether it’s a project, collaboration, or opportunity — let’s connect and create something impactful together.
              </p>
            </motion.div>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.8 }}
                  whileHover={{ x: 10 }}
                  className="group relative glass-button p-5 rounded-2xl border border-white/5 flex items-center gap-6"
                >
                  <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${info.color} group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-white/20 text-[8px] tracking-[0.4em] font-bold uppercase mb-1">{info.label}</p>
                    <p className="text-white/80 text-xs md:text-sm font-medium tracking-wide">{info.value}</p>
                  </div>
                  <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={`w-1 h-1 rounded-full ${info.color.replace('text', 'bg')} shadow-[0_0_10px_currentColor]`} />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              {socialIcons.map((social, i) => (
                <motion.button
                  key={social.id}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + (i * 0.1), type: "spring" }}
                  whileHover={{ scale: 1.2, backgroundColor: "rgba(255, 77, 166, 0.2)" }}
                  onClick={() => social.onClick ? social.onClick() : window.open(social.href, '_blank')}
                  className="w-10 h-10 rounded-full glass-button border border-white/10 flex items-center justify-center text-white/40 hover:text-primary transition-all shadow-lg"
                >
                  {social.icon}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Ambient Glow behind Form */}
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-[3rem] -z-10" />
            
            <div className="glass-button rounded-[3rem] border border-white/10 p-8 md:p-12 bg-black/40 backdrop-blur-3xl shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] tracking-[0.4em] text-white/20 uppercase font-bold pl-1">Name</label>
                    <Input 
                      placeholder="Your name" 
                      required
                      className="bg-white/5 border-white/10 rounded-xl focus:border-primary/50 transition-all text-white placeholder:text-white/10 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] tracking-[0.4em] text-white/20 uppercase font-bold pl-1">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      required
                      className="bg-white/5 border-white/10 rounded-xl focus:border-primary/50 transition-all text-white placeholder:text-white/10 h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] tracking-[0.4em] text-white/20 uppercase font-bold pl-1">Subject</label>
                  <Select required>
                    <SelectTrigger className="bg-white/5 border-white/10 rounded-xl focus:border-primary/50 transition-all text-white h-12">
                      <SelectValue placeholder="Project Discussion" />
                    </SelectTrigger>
                    <SelectContent className="bg-black/90 border-white/10 backdrop-blur-xl text-white">
                      <SelectItem value="project">Project Discussion</SelectItem>
                      <SelectItem value="collab">Collaboration</SelectItem>
                      <SelectItem value="intern">Internship Opportunity</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] tracking-[0.4em] text-white/20 uppercase font-bold pl-1">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    required
                    className="bg-white/5 border-white/10 rounded-xl focus:border-primary/50 transition-all text-white placeholder:text-white/10 min-h-[150px] resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255, 77, 166, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formState !== 'idle'}
                  className={`w-full relative overflow-hidden h-14 rounded-2xl flex items-center justify-center gap-3 transition-all ${
                    formState === 'success' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gradient-to-r from-primary to-secondary text-white'
                  }`}
                >
                  {formState === 'idle' && (
                    <>
                      <span className="text-[10px] tracking-[0.4em] font-bold uppercase">Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                  {formState === 'sending' && (
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  )}
                  {formState === 'success' && (
                    <>
                      <span className="text-[10px] tracking-[0.4em] font-bold uppercase">Sent Successfully</span>
                      <CheckCircle2 className="w-5 h-5" />
                    </>
                  )}
                  
                  {/* Shimmer Effect */}
                  <motion.div 
                    initial={{ left: "-100%" }}
                    whileHover={{ left: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[30deg] pointer-events-none"
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
