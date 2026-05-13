
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
  ExternalLink,
  ShieldCheck,
  Brain,
  Cpu
} from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const ResumeSection = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-photo')?.imageUrl;

  const resumeData = {
    name: "Tekkala Swapna",
    title: "Cybersecurity • AI • Innovation",
    specialization: "Cyber Security",
    cgpa: "8.78",
    education: "B.Tech in CSE (Cyber Security) - Kalasalingam Academy of Research and Education",
    skills: ["Python", "Java", "SQL", "Cybersecurity", "IoT", "Machine Learning"],
    projects: [
      { name: "LinkArmor", desc: "AI-Based Phishing Detection Platform" },
      { name: "AgriPredict", desc: "AI-Based Agricultural Prediction System" },
      { name: "Wastewater Monitoring", desc: "IoT-Based Water Quality Monitoring" }
    ],
    publications: [
      "Agricultural Wastewater Quality Monitoring System Using IoT",
      "LinkArmor – AI-Based Phishing Detection Platform"
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
            {/* Glass Frame Border */}
            <div className="absolute inset-0 border border-white/20 rounded-[2.5rem] z-20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            
            {profileImage && (
              <Image 
                src={profileImage}
                alt="Swapna Tekkala"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                data-ai-hint="anime character portrait"
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
                    {resumeData.specialization} Specialization
                  </span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <motion.a
                  href="/Swapna ResumeFinal(2).pdf"
                  download
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 77, 166, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-[9px] uppercase tracking-[0.3em] font-bold flex items-center gap-2 transition-all shadow-lg"
                >
                  <Download className="w-3 h-3" /> Download
                </motion.a>
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
            <div className="space-y-10 max-h-[450px] overflow-y-auto custom-scrollbar pr-4">
              {/* Education */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold">Academic Status</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h4 className="text-white font-medium text-sm mb-2">{resumeData.education}</h4>
                  <div className="inline-block bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                    <span className="text-primary text-[10px] font-bold tracking-widest">CGPA: {resumeData.cgpa}</span>
                  </div>
                </div>
              </section>

              {/* Skills Grid */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <Cpu className="w-4 h-4 text-primary" />
                  <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold">Neural Core</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {resumeData.skills.map((skill) => (
                    <div key={skill} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] text-white/60 tracking-widest uppercase hover:border-primary/40 hover:text-white transition-all">
                      {skill}
                    </div>
                  ))}
                </div>
              </section>

              {/* Projects & Publications */}
              <div className="grid md:grid-cols-2 gap-8">
                <section className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold">Modules</span>
                  </div>
                  <div className="space-y-3">
                    {resumeData.projects.map((proj) => (
                      <div key={proj.name} className="p-4 rounded-xl bg-white/5 border border-white/10 group hover:border-primary/30 transition-all">
                        <h5 className="text-white text-xs font-bold mb-1">{proj.name}</h5>
                        <p className="text-white/40 text-[9px] uppercase tracking-wider">{proj.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="space-y-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold">Verification</span>
                  </div>
                  <div className="space-y-3">
                    {resumeData.publications.map((pub, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-white/60 text-[10px] leading-relaxed italic">"{pub}"</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            {/* Corner Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 blur-3xl pointer-events-none" />
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
                {/* Simulated PDF Preview */}
                <div className="w-full h-full max-w-4xl bg-white/95 rounded-xl shadow-2xl flex flex-col items-center justify-center text-black/20 p-20 text-center">
                  <FileText className="w-24 h-24 mb-6" />
                  <h4 className="text-2xl font-headline font-bold mb-4 text-black/60">Digital Document Interface</h4>
                  <p className="text-sm max-w-md mb-12">
                    In a production environment, the actual PDF document "Swapna ResumeFinal(2).pdf" would be rendered here via an iframe or PDF.js.
                  </p>
                  <a 
                    href="/Swapna ResumeFinal(2).pdf" 
                    target="_blank"
                    className="bg-black text-white px-12 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black/80 transition-all"
                  >
                    Open Document Link
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
