"use client";

import React, { useEffect, useRef } from "react";

interface Butterfly {
  x: number;
  y: number;
  size: number;
  angle: number;
  speed: number;
  oscillation: number;
  oscillationSpeed: number;
  hue: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
}

export const ButterflyOverlay = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const butterflies = useRef<Butterfly[]>([]);
  const trails = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    // Initialize butterflies
    butterflies.current = Array.from({ length: 5 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 8 + 6,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 1 + 0.5,
      oscillation: 0,
      oscillationSpeed: Math.random() * 0.1 + 0.05,
      hue: 330, // Pink
    }));

    const drawButterfly = (ctx: CanvasRenderingContext2D, b: Butterfly) => {
      ctx.save();
      ctx.translate(b.x, b.y);
      ctx.rotate(b.angle + Math.PI / 2);
      
      const wingSweep = Math.sin(b.oscillation) * 1.5;
      
      ctx.shadowBlur = 15;
      ctx.shadowColor = `hsla(${b.hue}, 100%, 65%, 0.8)`;
      ctx.fillStyle = `hsla(${b.hue}, 100%, 65%, 0.6)`;
      
      // Wing Left
      ctx.beginPath();
      ctx.ellipse(-b.size / 2, 0, b.size * Math.abs(wingSweep), b.size, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Wing Right
      ctx.beginPath();
      ctx.ellipse(b.size / 2, 0, b.size * Math.abs(wingSweep), b.size, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Trails
      for (let i = trails.current.length - 1; i >= 0; i--) {
        const p = trails.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;
        p.size *= 0.98;
        if (p.life <= 0) {
          trails.current.splice(i, 1);
        } else {
          ctx.fillStyle = `rgba(255, 77, 166, ${p.life})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Butterflies
      butterflies.current.forEach((b) => {
        b.angle += (Math.random() - 0.5) * 0.05;
        b.x += Math.cos(b.angle) * b.speed;
        b.y += Math.sin(b.angle) * b.speed;
        b.oscillation += b.oscillationSpeed;

        if (b.x < -50) b.x = canvas.width + 50;
        if (b.x > canvas.width + 50) b.x = -50;
        if (b.y < -50) b.y = canvas.height + 50;
        if (b.y > canvas.height + 50) b.y = -50;

        // Sparkle generation
        if (Math.random() > 0.8) {
          trails.current.push({
            x: b.x,
            y: b.y,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            life: 1,
            size: Math.random() * 2,
          });
        }

        drawButterfly(ctx, b);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" />;
};
