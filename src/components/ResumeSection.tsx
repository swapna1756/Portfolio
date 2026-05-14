
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Download, 
  Eye, 
  User, 
  X,
  Mail,
  Phone,
  ExternalLink,
  Upload
} from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const ResumeSection = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [customResumeUri, setCustomResumeUri] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-photo')?.imageUrl;
  
  const resumeFileName = "Swapna ResumeFinal(2).pdf";
  const resumePath = customResumeUri || `/Swapna%20ResumeFinal(2).pdf`;

  useEffect(() => {
    const savedResume = localStorage.getItem('portfolio_resume_uri');
    if (savedResume) {
      setCustomResumeUri(savedResume);
    }
  }, []);

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setCustomResumeUri(base64);
        localStorage.setItem('portfolio_resume_uri', base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadClick = () => {
    setIsDownloading(true);
    setTimeout(() => setIsDownloading(false), 2000);
  };

  const contactData = {
    firstName: "TEKKALA",
    lastName: "SWAPNA",
    title: "Cybersecurity • AI • Innovation",
    email: "swapnatekkala1756@gmail.com",
    phone: "+91 9346798175"
  };

  return (
    <section id="resume" className="relative min-h-screen py-32 px-6 md:px-12 overflow-hidden flex items-center justify-center bg-black/40">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full animate-pulse-glow" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16 items-center">
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
            {contactData.title}
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
                alt={`${contactData.firstName} ${contactData.lastName}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            )}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:w-3/5 w-full"
        >
          <div className="relative glass-button rounded-[3rem] border border-white/10 p-8 md:p-12 overflow-hidden bg-black/40 backdrop-blur-3xl shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col justify-center items-center text-center py-10">
              <h3 className="text-4xl md:text-5xl font-headline font-extrabold mb-2 uppercase tracking-tight flex flex-wrap justify-center gap-x-4">
                <span className="text-white">{contactData.firstName}</span>
                <span className="text-primary" style={{ filter: "url(#bubble-gloss)" }}>{contactData.lastName}</span>
              </h3>
              
              <div className="flex flex-col items-center gap-3 mt-6 mb-12">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-white/60 text-sm tracking-widest">{contactData.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-white/60 text-sm tracking-widest">{contactData.phone}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6">
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleResumeUpload} 
                  className="hidden" 
                  accept=".pdf"
                />
                <motion.a
                  href={resumePath}
                  download={resumeFileName}
                  onClick={handleDownloadClick}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 77, 166, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden bg-primary text-primary-foreground px-8 py-5 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold flex items-center gap-3 transition-all shadow-lg cursor-pointer no-underline"
                >
                  <Download className="w-5 h-5" /> 
                  <span>{isDownloading ? "Starting..." : "Download Resume"}</span>
                </motion.a>

                <motion.button
                  onClick={() => setIsPreviewOpen(true)}
                  whileHover={{ scale: 1.05, background: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-button border-white/20 px-8 py-5 rounded-full text-[10px] uppercase tracking-[0.3em] text-white font-bold flex items-center gap-3"
                >
                  <Eye className="w-5 h-5" /> View Resume
                </motion.button>

                <motion.button
                  onClick={() => fileInputRef.current?.click()}
                  whileHover={{ scale: 1.05, background: "rgba(255, 255, 255, 0.05)" }}
                  className="p-5 rounded-full border border-white/10 text-white/40 hover:text-primary transition-all"
                  title="Upload/Replace Resume File"
                >
                  <Upload className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 blur-3xl -z-10" />
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
                    <h2 className="text-white text-xl font-headline font-bold uppercase tracking-tight">{resumeFileName}</h2>
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
                {resumePath.startsWith('data:') ? (
                  <iframe 
                    src={resumePath} 
                    className="w-full h-full border-none bg-white"
                    title="Resume PDF Viewer"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-8 text-center p-12">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                      <FileText className="w-12 h-12 text-primary" />
                    </div>
                    <div className="max-w-md space-y-4">
                      <h3 className="text-white text-2xl font-bold">Resume Link Ready</h3>
                      <p className="text-white/40 text-sm leading-relaxed">
                        To view your document, please ensure <span className="text-primary">{resumeFileName}</span> is in your project's public folder, or use the upload button to select it from your device.
                      </p>
                      <button 
                        onClick={() => fileInputRef.current?.click()}
                        className="glass-button px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold text-primary"
                      >
                        Upload Resume File
                      </button>
                    </div>
                  </div>
                )}
                
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                   <a 
                    href={resumePath} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary/60 hover:text-primary transition-colors text-[10px] uppercase tracking-widest font-bold bg-black/40 px-6 py-2 rounded-full backdrop-blur-md border border-primary/20"
                   >
                     <ExternalLink className="w-3 h-3" /> Open in New Tab
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
