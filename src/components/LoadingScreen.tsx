import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const { theme } = useTheme();
  const [progress, setProgress] = useState(0);

  const isDark = theme === 'dark';

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1900; // Smooth 1.9s entrance transition

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculatedProgress = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(calculatedProgress);

      if (calculatedProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 400);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
      }}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center px-6 select-none transition-colors duration-300 ${
        isDark ? 'bg-[#000000] text-[#FFFFFF]' : 'bg-[#F8F7F4] text-[#292522]'
      }`}
    >
      {/* Centered Editorial Intro Content */}
      <div className="flex flex-col items-center justify-center w-full max-w-[380px] sm:max-w-[440px] px-4 -mt-4">
        
        {/* Name in Editorial Serif Typography (Yashita style) */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          className={`text-[2.6rem] sm:text-[3.4rem] md:text-[3.8rem] leading-[1.18] font-normal uppercase tracking-[0.24em] sm:tracking-[0.28em] text-center mb-6 pl-[0.24em] ${
            isDark ? 'text-[#F8F5EE]' : 'text-[#292522]'
          }`}
        >
          SPARSH<br />CHAUHAN
        </motion.h1>

        {/* 1px Minimalist Progress Bar Container */}
        <div className="w-full">
          <div className={`relative w-full h-[1px] overflow-hidden ${
            isDark ? 'bg-white/15' : 'bg-[#292522]/15'
          }`}>
            <motion.div
              className={`absolute top-0 left-0 h-full ${
                isDark ? 'bg-sky-400' : 'bg-[#7A2945]'
              }`}
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          {/* Clean Sub-text (ENTERING THE PORTFOLIO • 62%) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-center text-[10px] sm:text-[11px] font-normal uppercase tracking-[0.22em] mt-3 pl-[0.22em] ${
              isDark ? 'text-neutral-400' : 'text-[#514C47]'
            }`}
          >
            ENTERING THE PORTFOLIO • {progress}%
          </motion.div>
        </div>

      </div>

      {/* Subtle Bottom-Right Trademark / Label (matching Yashita bottom label) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={`absolute bottom-6 right-6 sm:bottom-8 sm:right-8 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium hidden sm:block ${
          isDark ? 'text-neutral-500' : 'text-[#514C47]/80'
        }`}
      >
        SPARSH CHAUHAN • FULL-STACK &amp; AI
      </motion.div>
    </motion.div>
  );
};
