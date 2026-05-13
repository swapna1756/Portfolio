
"use client";

import React from "react";
import { motion } from "framer-motion";
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

const projects = [
  { title: "LinkArmor", desc: "Advanced security shielding for digital links." },
  { title: "AgriPredict", desc: "AI-driven predictive analysis for crop health." },
  { title: "Agricultural Wastewater System", desc: "IoT monitoring for sustainable water usage." }
];

export const PortfolioDashboard = () => {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-photo');

  return (
    <section id="dashboard" className="relative min-h-screen flex items-center justify-center p-6 md:p-12">
      {/* Background Cinematic Glows */}
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
        {/* Left Side: Profile Photo & Name */}
        <div className="w-full md:w-[40%] relative flex flex-col p-12 justify-end group">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          
          {/* Neon Glow Behind Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full group-hover:bg-primary/20 transition-colors duration-700" />

          {profileImage && (
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image 
                src={profileImage.imageUrl}
                alt={profileImage.description}
                fill
                className="object-cover object-top opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                data-ai-hint={profileImage.imageHint}
              />
            </motion.div>
          )}

          <div className="relative z-20">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-blue-400/80 text-[10px] tracking-[0.4em] uppercase font-medium mb-2 block"
            >
              Hello, I am
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="text-5xl md:text-6xl font-headline font-extrabold text-white mb-2 leading-tight"
            >
              Swapna <br /> <span className="text-primary" style={{ filter: "url(#bubble-gloss)" }}>Tekkala</span>
            </motion.h2>
          </div>
        </div>

        {/* Right Side: Content Sections */}
        <div className="flex-1 p-12 overflow-y-auto custom-scrollbar">
          <div className="space-y-12">
            {/* About Me */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h3 className="text-primary/60 text-[10px] tracking-[0.4em] uppercase font-bold mb-4">About Me</h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-lg font-light">
                I am a passionate developer interested in cybersecurity, AI, and modern digital experiences. I enjoy building secure and interactive applications while exploring innovative technologies and creative web design. My focus is on developing smart, user-friendly, and visually engaging solutions that combine functionality, security, and creativity.
              </p>
            </motion.section>

            {/* Education */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-primary/60 text-[10px] tracking-[0.4em] uppercase font-bold mb-4">Education</h3>
              <div className="border-l border-white/10 pl-6 py-2">
                <h4 className="text-white font-medium text-sm">B.Tech in Computer Science Engineering (Cyber Security)</h4>
                <p className="text-white/40 text-[11px] mb-1">Kalasalingam Academy of Research and Education</p>
                <p className="text-primary text-[10px] font-bold">CGPA: 8.78</p>
              </div>
            </motion.section>

            {/* Skills */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <h3 className="text-primary/60 text-[10px] tracking-[0.4em] uppercase font-bold mb-6">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 77, 166, 0.1)" }}
                    className="bg-white/5 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 group transition-all"
                  >
                    <span className="text-primary/60 group-hover:text-primary transition-colors">{skill.icon}</span>
                    <span className="text-white/60 text-[11px] font-medium tracking-wider">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Projects */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <h3 className="text-primary/60 text-[10px] tracking-[0.4em] uppercase font-bold mb-6">Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project) => (
                  <motion.div
                    key={project.title}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all cursor-pointer group"
                  >
                    <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                    <p className="text-white/30 text-[10px] leading-relaxed">{project.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Bottom Social Icons */}
          <div className="mt-16 flex items-center gap-4">
            {[
              { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: <Github className="w-4 h-4" />, href: "https://github.com", label: "GitHub" },
              { icon: <Mail className="w-4 h-4" />, href: "mailto:hello@example.com", label: "Email" },
              { icon: <Phone className="w-4 h-4" />, href: "tel:+1234567890", label: "Phone" },
              { icon: <Home className="w-4 h-4" />, href: "/", label: "Home" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : undefined}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 77, 166, 0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white/40 hover:text-primary transition-all shadow-[0_5px_15px_rgba(0,0,0,0.2)]"
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Parallax Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};
