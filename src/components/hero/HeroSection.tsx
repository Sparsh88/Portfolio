import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Download } from 'lucide-react';
import userProfilePic from 'C:/Users/hp/.gemini/antigravity-ide/brain/4475ed7e-2265-4d91-9c97-44268187db70/media__1784961243785.jpg';

const profilePic = userProfilePic || '/profile.jpg';

export const HeroSection: React.FC = () => {
  const handleScrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-black text-white">
      
      {/* Glow Blur Radial Lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column matching Screenshot 5 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill Badge matching Screenshot 5 */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c1a2c] border border-blue-600/40">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
              <span className="text-[11px] font-mono font-semibold text-blue-400 tracking-wider uppercase">
                AVAILABLE FOR INTERNSHIPS & PROJECTS
              </span>
            </div>

            {/* Main Heading matching Screenshot 5 */}
            <div className="space-y-1">
              <h1 className="text-4xl xs:text-5xl sm:text-7xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm
              </h1>
              <h1 className="text-4xl xs:text-5xl sm:text-7xl font-extrabold text-white tracking-tight leading-tight">
                Sparsh <span className="text-blue-500">Chauhan</span>
              </h1>
              <p className="text-lg sm:text-2xl font-semibold text-slate-400 pt-2">
                Full Stack Web Developer <span className="text-blue-500">•</span> CSE Student
              </p>
            </div>

            {/* Paragraph Text matching Screenshot 5 */}
            <p className="text-slate-400 text-sm sm:text-lg max-w-xl leading-relaxed">
              I build modern, scalable, and high-performance web applications with a strong focus on clean UI, seamless user experience, and real-world problem solving.
            </p>

            {/* 3 Buttons matching Screenshot 5 */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => handleScrollTo('#projects')}
                className="px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleScrollTo('#contact')}
                className="px-6 py-3.5 rounded-full bg-[#111113] hover:bg-zinc-800 text-slate-200 font-semibold text-sm border border-[#1e1e24] hover:border-zinc-700 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#111113] hover:bg-zinc-800 text-slate-200 font-semibold text-sm border border-[#1e1e24] hover:border-zinc-700 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>Resume</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Photo Frame with floating tags matching Screenshot 5 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[420px]">
              
              {/* Main Photo Card Container */}
              <div className="relative w-full h-full rounded-3xl bg-[#111113] border border-[#1e1e24] shadow-2xl p-2.5 overflow-hidden group">
                <img
                  src={profilePic}
                  alt="Sparsh Chauhan"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Tag Top Right matching Screenshot 5 */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/90 border border-zinc-800 text-[10px] font-mono text-slate-300 font-semibold shadow-lg backdrop-blur-md">
                  Express • MongoDB
                </div>

                {/* Floating Tag Bottom Left matching Screenshot 5 */}
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/90 border border-zinc-800 text-[10px] font-mono text-slate-300 font-semibold shadow-lg backdrop-blur-md">
                  React • Node.js
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
