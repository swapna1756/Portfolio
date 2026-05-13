
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Download, 
  Eye, 
  User, 
  Award, 
  Briefcase, 
  GraduationCap, 
  X,
  ShieldCheck,
  Cpu
} from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const ResumeSection = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-photo')?.imageUrl;

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate a brief shimmer before download starts
    setTimeout(() => {
      setIsDownloading(false);
      const link = document.createElement('a');
      link.href = '/Swapna ResumeFinal(2).pdf';
      link.download = 'Swapna_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 800);
  };

  const resumeData = {
    name: "TEKKALA SWAPNA",
    title: "Cybersecurity • AI • Innovation",
    specialization: "Cyber Security",
    summary: "Computer Science Engineering Student with specialization in Cyber Security, with experience in hands-on AI based applications, IoT systems and web development. Familiar with Python, Java, SQL, cybersecurity, and machine learning concepts. Implemented projects such as phishing detection system and smart agricultural monitoring system.",
    education: [
      {
        degree: "Bachelor of Technology in Computer Science Engineering (Cyber Security)",
        institution: "Kalasalingam Academy of Research and Education, Tamil Nadu, India",
        period: "2023 — 2027",
        metric: "CGPA: 8.78"
      },
      {
        degree: "Board of Intermediate",
        institution: "Sri Chaitanya Junior College, Andhra Pradesh, India",
        period: "2021 — 2023",
        metric: "Percentage: 92%"
      }
    ],
    skills: {
      languages: ["Python", "Java", "SQL"],
      core: ["Cybersecurity", "IoT", "Machine Learning Basics"],
      soft: ["Communication", "Problem Solving", "Team Collaboration"]
    },
    projects: [
      { 
        name: "LinkArmor", 
        period: "Oct 2025 — Dec 2025",
        desc: "Developed an AI-powered phishing detection and cybersecurity monitoring platform. Built a cybersecurity dashboard with threat analytics and scan history." 
      },
      { 
        name: "AgriPredict", 
        period: "Jan 2026 — Feb 2026",
        desc: "Developed an AI-powered agricultural prediction platform using machine learning techniques for smart farming analysis." 
      },
      { 
        name: "Agricultural Wastewater Quality Monitoring", 
        period: "Jan 2026 — Apr 2026",
        desc: "Built a monitoring system based on IoT and ESP32 that can continuously measure water quality using pH, TDS, and turbidity sensors." 
      }
    ],
    publications: [
      {
        title: "Agricultural Wastewater Quality Monitoring System Using IoT",
        detail: "Acceptance • IJFMR • 2026"
      },
      {
        title: "LinkArmor – AI-Based Phishing Detection Platform",
        detail: "Accepted • International Conference on Sustainable Smart Computing and Communications • 2025"
      }
    ]
  };

  return (
    <section id="resume" className="relative min-h-screen py-32 px-6 md:px-12 overflow-hidden flex items-center justify-center">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full animate-pulse-glow" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16 items-center">
        {/* LEFT SIDE: Identity Node */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-8"
          >
            <User className="w-4 h-4 text-primary" />
            <span className="text-primary text-[10px] tracking-[0.3em] uppercase font-bold">Digital Identity</span>
          </motion.div>

          <h2 className="text-6xl md:text-7xl font-headline font-extrabold text-white mb-4 tracking-tighter uppercase leading-none">
            MY <br /> <span className="text-primary" style={{ filter: "url(#bubble-gloss)" }}>RESUME</span>
          </h2>
          <p className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-light mb-12">
            {resumeData.title}
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative w-64 h-80 rounded-[2.5rem] overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 border border-white/20 rounded-[2.5rem] z-20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            
            {profileImage && (
              <Image 
                src={profileImage}
                alt={resumeData.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            )}
            
            <motion.div 
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-primary/10 blur-2xl z-0 pointer-events-none" 
            />
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: Resume Dashboard */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:w-3/5 w-full"
        >
          <div className="relative glass-button rounded-[3rem] border border-white/10 p-8 md:p-12 overflow-hidden bg-black/40 backdrop-blur-3xl shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <div>
                <h3 className="text-3xl font-headline font-extrabold text-white mb-1 uppercase tracking-tight">
                  {resumeData.name}
                </h3>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#FF4DA6]" />
                  <span className="text-primary/80 text-[10px] tracking-[0.3em] font-bold uppercase">
                    Cyber Security Specialization
                  </span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <motion.button
                  onClick={handleDownload}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 77, 166, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden bg-primary text-primary-foreground px-6 py-3 rounded-full text-[9px] uppercase tracking-[0.3em] font-bold flex items-center gap-2 transition-all shadow-lg"
                >
                  <Download className="w-3 h-3" /> 
                  <span>{isDownloading ? "Initializing..." : "Download"}</span>
                  {isDownloading && (
                    <motion.div 
                      layoutId="shimmer"
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                </motion.button>
                <motion.button
                  onClick={() => setIsPreviewOpen(true)}
                  whileHover={{ scale: 1.05, background: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-button border-white/20 px-6 py-3 rounded-full text-[9px] uppercase tracking-[0.3em] text-white font-bold flex items-center gap-2"
                >
                  <Eye className="w-3 h-3" /> View Full
                </motion.button>
              </div>
            </div>

            {/* Scrollable Preview Area */}
            <div className="space-y-10 max-h-[500px] overflow-y-auto custom-scrollbar pr-4">
              {/* Summary */}
              <section className="space-y-3">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-primary" />
                  <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold">Summary</span>
                </div>
                <p className="text-white/60 text-[11px] leading-relaxed font-light">
                  {resumeData.summary}
                </p>
              </section>

              {/* Education */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold">Education</span>
                </div>
                <div className="space-y-4">
                  {resumeData.education.map((edu, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-white font-medium text-sm max-w-[70%]">{edu.degree}</h4>
                        <span className="text-primary/60 text-[9px] font-bold">{edu.period}</span>
                      </div>
                      <p className="text-white/40 text-[10px] mb-3">{edu.institution}</p>
                      <div className="inline-block bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                        <span className="text-primary text-[10px] font-bold tracking-widest">{edu.metric}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Skills */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <Cpu className="w-4 h-4 text-primary" />
                  <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold">Neural Core</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-[8px] tracking-widest text-white/20 uppercase mb-2">Languages</p>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.languages.map(s => <span key={s} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[9px] text-white/60">{s}</span>)}
                    </div>
                  </div>
                  <div>
                    <p className="text-[8px] tracking-widest text-white/20 uppercase mb-2">Core Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.core.map(s => <span key={s} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[9px] text-white/60">{s}</span>)}
                    </div>
                  </div>
                </div>
              </section>

              {/* Projects */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold">Projects</span>
                </div>
                <div className="space-y-3">
                  {resumeData.projects.map((proj) => (
                    <div key={proj.name} className="p-4 rounded-xl bg-white/5 border border-white/10 group hover:border-primary/30 transition-all">
                      <div className="flex justify-between items-center mb-1">
                        <h5 className="text-white text-xs font-bold">{proj.name}</h5>
                        <span className="text-primary/40 text-[8px] font-mono">{proj.period}</span>
                      </div>
                      <p className="text-white/40 text-[10px] leading-relaxed">{proj.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Publications */}
              <section className="space-y-4 pb-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold">Publications</span>
                </div>
                <div className="space-y-3">
                  {resumeData.publications.map((pub, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-white/80 text-[10px] leading-relaxed font-medium mb-1">{pub.title}</p>
                      <p className="text-primary/40 text-[8px] uppercase tracking-wider">{pub.detail}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl h-full bg-white/[0.03] border border-white/10 rounded-[3rem] overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="p-8 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-white text-xl font-headline font-bold uppercase tracking-tight">Swapna_Resume_Final.pdf</h2>
                    <p className="text-white/40 text-[9px] uppercase tracking-[0.3em]">Full Document Preview</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsPreviewOpen(false)}
                  className="p-4 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 bg-black/40 flex items-center justify-center p-12">
                <iframe 
                  src="/Swapna ResumeFinal(2).pdf" 
                  className="w-full h-full rounded-xl border border-white/10"
                  title="Resume PDF"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
