"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, Download, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Image from "next/image";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  description?: string;
}

const certificates: Certificate[] = [
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
    id: "3",
    title: "Full Stack Developer Certificate",
    issuer: "Certified Program",
    date: "2024",
    imageUrl: "https://picsum.photos/seed/cert3/800/600",
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
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenModal = (cert: Certificate, index: number) => {
    setSelectedCert(cert);
    setCurrentIndex(index);
  };

  const handleCloseModal = () => setSelectedCert(null);

  const handlePrev = () => {
    const nextIndex = (currentIndex - 1 + certificates.length) % certificates.length;
    setCurrentIndex(nextIndex);
    setSelectedCert(certificates[nextIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % certificates.length;
    setCurrentIndex(nextIndex);
    setSelectedCert(certificates[nextIndex]);
  };

  return (
    <section id="certificates" className="relative min-h-screen py-32 px-6 md:px-12 overflow-hidden bg-black/20">
      {/* Background Decorative Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
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
          <p className="text-white/40 text-sm tracking-[0.2em] uppercase font-light">
            Professional Learning & Achievements
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative glass-button p-4 rounded-[2rem] border border-white/10 flex flex-col h-full overflow-hidden"
            >
              {/* Image Preview */}
              <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6 bg-black/40">
                <Image
                  src={cert.imageUrl}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  data-ai-hint="certificate document preview"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Quick View Button */}
                <button
                  onClick={() => handleOpenModal(cert, index)}
                  className="absolute bottom-4 right-4 bg-primary text-primary-foreground p-3 rounded-full translate-y-12 group-hover:translate-y-0 transition-transform duration-300 shadow-[0_0_20px_#FF4DA6]"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 px-2 pb-2">
                <div className="text-primary/60 text-[9px] tracking-[0.4em] font-bold mb-2 uppercase">
                  {cert.issuer}
                </div>
                <h3 className="text-white text-lg font-headline font-bold leading-tight mb-4 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
              </div>

              {/* Actions */}
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
                  <button className="p-2 text-white/40 hover:text-primary transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/5 blur-2xl group-hover:bg-primary/20 transition-all rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
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
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-8 right-8 z-50 p-4 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Content */}
              <div className="w-full md:w-2/3 relative bg-black/40 h-full flex items-center justify-center">
                <Image
                  src={selectedCert.imageUrl}
                  alt={selectedCert.title}
                  fill
                  className="object-contain p-8 md:p-16"
                />
                
                {/* Navigation Controls */}
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

              {/* Sidebar Info */}
              <div className="flex-1 p-12 flex flex-col justify-center bg-black/20 border-l border-white/5">
                <div className="space-y-8">
                  <div>
                    <span className="text-primary text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">Certificate Authority</span>
                    <h3 className="text-white text-3xl font-headline font-extrabold tracking-tight mb-2">
                      {selectedCert.issuer}
                    </h3>
                  </div>
                  <div>
                    <span className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">Credential Title</span>
                    <p className="text-white/80 text-xl font-light leading-relaxed">
                      {selectedCert.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-6 pt-8">
                    <div className="flex flex-col">
                      <span className="text-white/20 text-[9px] tracking-[0.4em] uppercase font-bold mb-1">Issued Date</span>
                      <span className="text-white text-sm font-medium">{selectedCert.date}</span>
                    </div>
                  </div>
                  
                  <div className="pt-12 flex flex-col gap-4">
                    <button className="w-full bg-primary text-primary-foreground py-4 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold shadow-[0_0_30px_rgba(255,77,166,0.2)] hover:shadow-[0_0_50px_rgba(255,77,166,0.4)] transition-all flex items-center justify-center gap-3">
                      <Download className="w-4 h-4" /> Download Credential
                    </button>
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
