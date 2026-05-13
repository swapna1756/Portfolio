"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

export const GlimmerCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sparkles = useRef<{ x: number, y: number, id: number, life: number }[]>([]);
  const [renderSparkles, setRenderSparkles] = useState<any[]>([]);

  const smoothX = useSpring(0, { stiffness: 250, damping: 25 });
  const smoothY = useSpring(0, { stiffness: 250, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      smoothX.set(e.clientX);
      smoothY.set(e.clientY);

      // Add trail
      sparkles.current.push({
        x: e.clientX,
        y: e.clientY,
        id: Math.random(),
        life: 1.0
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    const interval = setInterval(() => {
      sparkles.current = sparkles.current
        .map(s => ({ ...s, life: s.life - 0.05 }))
        .filter(s => s.life > 0);
      setRenderSparkles([...sparkles.current]);
    }, 30);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      clearInterval(interval);
    };
  }, [smoothX, smoothY]);

  return (
    <>
      <style jsx global>{`
        * { cursor: none !important; }
      `}</style>
      
      {renderSparkles.map(s => (
        <div
          key={s.id}
          className="fixed pointer-events-none z-[9998] rounded-full bg-primary"
          style={{
            left: s.x,
            top: s.y,
            width: `${s.life * 4}px`,
            height: `${s.life * 4}px`,
            opacity: s.life,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 ${s.life * 10}px #FF4DA6`
          }}
        />
      ))}

      <motion.div
        className="fixed pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.5 : 1,
            rotate: isHovering ? 45 : 0
          }}
          className="relative w-8 h-8"
        >
          {/* Butterfly Icon Placeholder Shape */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-4 bg-primary rounded-full blur-[1px]" />
            <motion.div 
              animate={{ rotateY: [0, 60, 0] }}
              transition={{ repeat: Infinity, duration: 0.2 }}
              className="absolute left-[-4px] w-4 h-6 bg-primary/40 rounded-[40%_60%_60%_40%] blur-[2px] border border-primary/50" 
            />
            <motion.div 
              animate={{ rotateY: [0, -60, 0] }}
              transition={{ repeat: Infinity, duration: 0.2 }}
              className="absolute right-[-4px] w-4 h-6 bg-primary/40 rounded-[60%_40%_40%_60%] blur-[2px] border border-primary/50" 
            />
          </div>
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150" />
        </motion.div>
      </motion.div>
    </>
  );
};
