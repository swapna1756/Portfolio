"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, Download, X, ChevronLeft, ChevronRight, ZoomIn, FileText } from "lucide-react";
import Image from "next/image";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  isPdf?: boolean;
}

const DEFAULT_CERTS: Certificate[] = [
  {
    id: "1",
    title: "Introduction to Cyber Security",
    issuer: "Simplilearn SkillUp",
    date: "2023",
    imageUrl: "https://picsum.photos/seed/cert1/800/600",
  },
  {
    id: "2",
    title: "Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate",
    issuer: "Oracle",
    date: "2023",
    imageUrl: "https://picsum.photos/seed/cert2/800/600",
  },
  {
    id: "4",
    title: "Cyber Security Internship Certificate",
    issuer: "SkillDzire",
    date: "2023",
    imageUrl: "https://picsum.photos/seed/cert4/800/600",
  },
  {
    id: "5",
    title: "Python 3.4.3 Training Certificate",
    issuer: "IIT Bombay Spoken Tutorial",
    date: "2022",
    imageUrl: "https://picsum.photos/seed/cert5/800/600",
  },
  {
    id: "6",
    title: "Cyber Security Internship Acceptance Letter",
    issuer: "SkillDzire",
    date: "2023",
    imageUrl: "https://picsum.photos/seed/cert6/800/600",
  },
  {
    id: "7",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "2024",
    imageUrl: "https://picsum.photos/seed/cert7/800/600",
  },
];

export const CertificatesSection = () => {
  const [certs, setCerts] = useState<Certificate[]>([]);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio_certs');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Ensure "Full Stack Developer Certificate" is filtered out even if it was in localStorage
        const filtered = parsed.filter((c: Certificate) => c.title !== "Full Stack Developer Certificate");
        setCerts(filtered);
      } catch (e) {
        console.error("Failed to load certificates", e);
        setCerts(DEFAULT_CERTS);
      }
    } else {
      setCerts(DEFAULT_CERTS);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('portfolio_certs', JSON.stringify(certs));
    }
  }, [certs, isLoaded]);

  const handleOpenModal = (cert: Certificate, index: number) => {
    setSelectedCert(cert);
    setCurrentIndex(index);
  };

  const handleCloseModal = () => setSelectedCert(null);

  const handlePrev = () => {
    if (certs.length === 0) return;
    const nextIndex = (currentIndex - 1 + certs.length) % certs.length;
    setCurrentIndex(nextIndex);
    setSelectedCert(certs[nextIndex]);
  };

  const handleNext = () => {
    if (certs.length === 0) return;
    const nextIndex = (currentIndex + 1) % certs.length;
    setCurrentIndex(nextIndex);
    setSelectedCert(certs[nextIndex]);
  };

  const resetToDefaults = () => {
    if (confirm("Reset all certificates to original default view? All custom uploads will be lost.")) {
      setCerts(DEFAULT_CERTS);
      localStorage.removeItem('portfolio_certs');
    }
  };


  if (!isLoaded) return null;

  return (
    <section id="certificates" className="relative min-h-screen py-32 px-6 md:px-12 overflow-hidden bg-black/20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6"
          >
            <Award className="w-4 h-4 text-primary" />
            <span className="text-primary text-[10px] tracking-[0.3em] uppercase font-bold">Achievements</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-headline font-extrabold text-white mb-6 tracking-tighter uppercase">
            MY <span className="text-primary" style={{ filter: "url(#bubble-gloss)" }}>CERTIFICATES</span>
          </h2>
          <p className="text-white/40 text-sm tracking-[0.2em] uppercase font-light max-w-2xl mx-auto">
            Browse the certificate gallery and open each item for details.
          </p>
          
          <button 
            onClick={resetToDefaults}
            className="mt-8 text-white/20 hover:text-primary/60 transition-colors text-[9px] uppercase tracking-[0.3em]"
          >
            Restore Default View
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certs.map((cert, index) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="group relative glass-button p-4 rounded-[2rem] border border-white/10 flex flex-col h-full overflow-hidden"
            >
              <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6 bg-black/40">
                {cert.isPdf ? (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-white/5">
                    <FileText className="w-12 h-12 text-primary/40" />
                    <span className="text-[10px] text-white/40 tracking-[0.2em] uppercase">PDF Document View</span>
                  </div>
                ) : (
                  <Image
                    src={cert.imageUrl}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                )}
                
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-[2px]">
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleOpenModal(cert, index)}
                      className="p-3 rounded-full bg-white/10 hover:bg-primary/20 text-white transition-colors border border-white/10"
                      title="View Fullscreen"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              <div className="flex-1 px-2 pb-2">
                <div className="text-primary/60 text-[9px] tracking-[0.4em] font-bold mb-2 uppercase">
                  {cert.issuer}
                </div>
                <h3 className="text-white text-lg font-headline font-bold leading-tight mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h3>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                <span className="text-white/30 text-[10px] tracking-widest font-medium">
                  {cert.date}
                </span>
                <div className="flex gap-3">
                  <button 
                    onClick={() => handleOpenModal(cert, index)}
                    className="p-2 text-white/40 hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  {cert.imageUrl && !cert.isPdf && (
                    <a 
                      href={cert.imageUrl} 
                      download={`${cert.title}.png`}
                      className="p-2 text-white/40 hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
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
              className="relative w-full max-w-6xl aspect-[16/10] bg-white/[0.03] border border-white/10 rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-8 right-8 z-50 p-4 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full md:w-2/3 relative bg-black/40 h-full flex items-center justify-center p-8">
                {selectedCert.isPdf ? (
                  <div className="flex flex-col items-center gap-6">
                    <FileText className="w-32 h-32 text-primary" />
                    <p className="text-white text-center text-xl font-light">PDF Document View</p>
                    <a 
                      href={selectedCert.imageUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="glass-button px-8 py-3 rounded-full text-[10px] tracking-[0.3em] uppercase text-primary font-bold"
                    >
                      Open Document
                    </a>
                  </div>
                ) : (
                  <Image
                    src={selectedCert.imageUrl}
                    alt={selectedCert.title}
                    fill
                    className="object-contain p-4 md:p-12"
                  />
                )}
                
                <button
                  onClick={handlePrev}
                  className="absolute left-6 p-4 rounded-full bg-black/40 border border-white/5 text-white/40 hover:text-primary hover:border-primary/50 transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-6 p-4 rounded-full bg-black/40 border border-white/5 text-white/40 hover:text-primary hover:border-primary/50 transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 p-12 flex flex-col justify-center bg-black/20 border-l border-white/5">
                <div className="space-y-8">
                  <div>
                    <span className="text-primary text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">Authority</span>
                    <h3 className="text-white text-3xl font-headline font-extrabold tracking-tight mb-2">
                      {selectedCert.issuer}
                    </h3>
                  </div>
                  <div>
                    <span className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">Title</span>
                    <p className="text-white/80 text-xl font-light leading-relaxed">
                      {selectedCert.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                      <span className="text-white/20 text-[9px] tracking-[0.4em] uppercase font-bold mb-1">Date</span>
                      <span className="text-white text-sm font-medium">{selectedCert.date}</span>
                    </div>
                  </div>
                  
                  <div className="pt-8 flex flex-col gap-4">
                    {selectedCert.imageUrl && !selectedCert.isPdf && (
                      <a 
                        href={selectedCert.imageUrl} 
                        download={`${selectedCert.title}.png`}
                        className="w-full bg-white/10 hover:bg-white/20 text-white py-4 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold flex items-center justify-center gap-3 transition-colors"
                      >
                        <Download className="w-4 h-4" /> Save Copy
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};