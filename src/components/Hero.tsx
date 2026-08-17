import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

export const Hero: React.FC = () => {
  const handleResumeClick = () => {
    const resumePath = '/resume.pdf';
    fetch(resumePath, { method: 'HEAD' })
      .then(res => {
        if (!res.ok) {
          alert('Resume will be available for download shortly. You can also connect via LinkedIn or email.');
        }
      })
      .catch(() => {});
  };

  return (
    <section id="home" className="pt-32 sm:pt-36 pb-20 sm:pb-28 bg-[#F3F4F6] dark:bg-[#000000] overflow-hidden scroll-mt-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            
            {/* Status Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-violet-50 dark:bg-violet-950/70 border border-violet-200 dark:border-violet-800 shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 dark:bg-violet-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600 dark:bg-violet-400"></span>
              </span>
              <span className="text-[11px] font-bold text-violet-700 dark:text-violet-300 tracking-wider uppercase">
                AVAILABLE FOR INTERNSHIPS &amp; PROJECTS
              </span>
            </motion.div>

            {/* Name Overline */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-base sm:text-lg font-bold text-neutral-500 dark:text-neutral-400 tracking-tight"
            >
              Sparsh Chauhan
            </motion.div>

            {/* Balanced FULL-STACK DEVELOPER Heading */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-0.5"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 dark:text-white uppercase tracking-tight leading-[1.05]">
                FULL-STACK<br />
                <span className="text-neutral-400 dark:text-neutral-500">DEVELOPER</span>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal pt-1"
            >
              I am a Full-Stack Developer and a Computer Science &amp; Engineering student at Lovely Professional University. I specialize in building scalable, responsive, and user-centric web applications, bridging the gap between robust backend logic and seamless frontend experiences to deliver high-quality digital solutions.
            </motion.p>

            {/* Action Buttons: View Projects, Resume, Get In Touch */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3.5 text-sm font-semibold text-white bg-black hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleResumeClick}
                className="inline-flex items-center space-x-2 px-5 py-3.5 text-sm font-semibold text-neutral-900 dark:text-white bg-white dark:bg-[#0D0D0D] hover:bg-neutral-100 dark:hover:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-800 rounded-full transition-all duration-200 shadow-xs hover:-translate-y-0.5 active:scale-95"
              >
                <FileText className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                <span>Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-neutral-900 dark:text-white bg-white dark:bg-[#0D0D0D] hover:bg-neutral-100 dark:hover:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-800 rounded-full transition-all duration-200 shadow-xs hover:-translate-y-0.5 active:scale-95"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: User Portrait Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[380px] aspect-square rounded-full bg-white dark:bg-[#0D0D0D] p-3 border-2 border-neutral-300 dark:border-neutral-800 shadow-xl group hover:shadow-2xl transition-all duration-300">
              
              {/* Inner Circular Portrait Container */}
              <div className="w-full h-full rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 relative">
                <img
                  src={profileImg}
                  alt="Sparsh Chauhan - Full Stack Developer"
                  className="w-full h-full object-cover object-[50%_18%] scale-[1.35] group-hover:scale-[1.42] transition-transform duration-700 ease-out"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
