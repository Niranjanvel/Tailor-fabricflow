import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LandingIntroProps {
  onComplete: () => void;
}

export const LandingIntro = ({ onComplete }: LandingIntroProps) => {

  useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1] }}
    >
      {/* Fabric texture overlay */}
      <div className="absolute inset-0 opacity-10 fabric-texture" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-secondary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Text content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-heading font-bold text-secondary text-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1] }}
        >
          Abi Tailors
        </motion.h1>
      </div>

      {/* Fabric curtain effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-accent"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.2, delay: 3.5, ease: [0.25, 0.8, 0.25, 1] }}
        style={{ transformOrigin: "top" }}
      />
    </motion.div>
  );
};
