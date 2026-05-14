
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
  Cpu,
  Mail,
  Phone,
  ExternalLink
} from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const ResumeSection = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-photo')?.imageUrl;
  
  // Encoded file path to prevent 404 errors due to special characters
  // Ensure the file 'Swapna ResumeFinal(2).pdf' is in the 'public' folder
  const resumeFileName = "Swapna ResumeFinal(2).pdf";
  const resumePath = `/Swapna%20ResumeFinal(2).pdf`;

  const handleDownloadClick = () => {
    setIsDownloading(true);
    setTimeout(() => setIsDownloading(false), 2000);
  };

  const resumeData = {
    name: "TEKKALA SWAPNA",
    title: "Cybersecurity • AI • Innovation",
    contact: {
      phone: "+91-9346798175",
      email: "swapnatekkala1756@gmail.com",
      linkedin: "linkedin.com/in/tekkala-swapna-8624663a0",
      github: "github.com/swapna1756"
    },
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
        name: "LinkArmor - AI Phishing Detection", 
        period: "Oct 2025 — Dec 2025",
        desc: [
          "Developed an AI-powered phishing detection and cybersecurity monitoring platform.",
          "Built a cybersecurity dashboard with threat analytics and scan history.",
          "Implemented URL threat scoring, SSL verification, and domain inspection features."
        ]
      },
      { 
        name: "AgriPredict - AI Agriculture System", 
        period: "Jan 2026 — Feb 2026",
        desc: [
          "Developed an AI-powered agricultural prediction platform using machine learning.",
          "Built machine learning modules for crop prediction and agricultural monitoring.",
          "Engineered scalable data pipelines for real-time agricultural forecasting."
        ]
      },
      { 
        name: "IoT Wastewater Quality Monitoring", 
        period: "Jan 2026 — Apr 2026",
        desc: [
          "Built an agricultural wastewater monitoring system based on IoT and ESP32.",
          "Integrated pH, TDS, turbidity and temperature sensors for real-time monitoring.",
          "Programmed sensor data processing and alarm generation using C/C++."
        ]
      }
    ],
    publications: [
      {
        title: "Agricultural Wastewater Quality Monitoring System Using IoT",
        detail: "Acceptance • IJFMR • 2026"
      },
      {
        title: "LinkArmor – AI-Based Phishing Detection Platform",
        detail: "International Conference on Sustainable Smart Computing • 2025"
      }
    ]
  };

  return (
    <section id="resume" className="relative min-h-screen py-32 px-6 md:px-12 overflow-hidden flex items-center justify-center bg-black/40">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-background/40 to-transparent z-10" />
            
            {profileImage && (
              <Image 
                src={profileImage}
                alt={resumeData.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            )}
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
          <div className="relative glass-button rounded-[3rem] border border-white/10 p-8 md:p-12 overflow-hidden bg-black/20 backdrop-blur-3xl shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <div>
                <h3 className="text-3xl font-headline font-extrabold text-white mb-1 uppercase tracking-tight">
                  {resumeData.name}
                </h3>
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-3 h-3 text-primary" />
                    <span className="text-white/60 text-[10px] tracking-widest">{resumeData.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-3 h-3 text-primary" />
                    <span className="text-white/60 text-[10px] tracking-widest">{resumeData.contact.phone}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <motion.a
                  href={resumePath}
                  download={resumeFileName}
                  onClick={handleDownloadClick}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 77, 166, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden bg-primary text-primary-foreground px-6 py-4 rounded-full text-[9px] uppercase tracking-[0.3em] font-bold flex items-center gap-2 transition-all shadow-lg cursor-pointer no-underline"
                >
                  <Download className="w-4 h-4" /> 
                  <span>{isDownloading ? "Downloading..." : "Download Resume"}</span>
                  {isDownloading && (
                    <motion.div 
                      layoutId="shimmer"
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                </motion.a>

                <motion.button
                  onClick={() => setIsPreviewOpen(true)}
                  whileHover={{ scale: 1.05, background: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-button border-white/20 px-6 py-4 rounded-full text-[9px] uppercase tracking-[0.3em] text-white font-bold flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" /> View Resume
                </motion.button>
              </div>
            </div>

            <div className="space-y-10 max-h-[500px] overflow-y-auto custom-scrollbar pr-4">
              <section className="space-y-3">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-primary" />
                  <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold">Summary</span>
                </div>
                <p className="text-white/60 text-[11px] leading-relaxed font-light">
                  {resumeData.summary}
                </p>
              </section>

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

              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <Cpu className="w-4 h-4 text-primary" />
                  <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold">Neural Core</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <div>
                    <p className="text-[8px] tracking-widest text-white/20 uppercase mb-2">Soft Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.soft.map(s => <span key={s} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[9px] text-white/60">{s}</span>)}
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold">Projects</span>
                </div>
                <div className="space-y-4">
                  {resumeData.projects.map((proj) => (
                    <div key={proj.name} className="p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-primary/30 transition-all">
                      <div className="flex justify-between items-center mb-3">
                        <h5 className="text-white text-sm font-bold">{proj.name}</h5>
                        <span className="text-primary/40 text-[9px] font-mono">{proj.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {proj.desc.map((bullet, i) => (
                          <li key={i} className="flex gap-2 text-[10px] text-white/40 leading-relaxed">
                            <span className="text-primary">•</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-4 pb-4">
                <div className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-primary" />
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
              <div className="p-8 border-b border-white/5 flex items-center justify-between bg-black/40 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-white text-xl font-headline font-bold uppercase tracking-tight">Tekkala_Swapna_Resume.pdf</h2>
                    <p className="text-white/40 text-[9px] uppercase tracking-[0.3em]">Official Document Preview</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <motion.a 
                    href={resumePath}
                    download={resumeFileName}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest cursor-pointer no-underline"
                  >
                    <Download className="w-4 h-4" /> Download
                  </motion.a>
                  <button 
                    onClick={() => setIsPreviewOpen(false)}
                    className="p-4 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white transition-all"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="flex-1 bg-white/5 flex items-center justify-center overflow-hidden p-0 relative">
                <iframe 
                  src={resumePath} 
                  className="w-full h-full border-none bg-white"
                  title="Resume PDF Viewer"
                />
                
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                   <a 
                    href={resumePath} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary/60 hover:text-primary transition-colors text-[10px] uppercase tracking-widest font-bold bg-black/40 px-6 py-2 rounded-full backdrop-blur-md border border-primary/20"
                   >
                     <ExternalLink className="w-3 h-3" /> Open in New Tab if not loading
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
