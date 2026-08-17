import React from 'react';
import { Code, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F3F4F6] dark:bg-[#000000] border-y border-neutral-300 dark:border-neutral-800 scroll-mt-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="space-y-4"
        >
          <div className="inline-block">
            <span className="bg-white dark:bg-[#0D0D0D] border-2 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-200 text-[11px] font-bold px-3.5 py-1 rounded-full tracking-wider uppercase shadow-xs">
              ABOUT ME
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 dark:text-white uppercase tracking-tight leading-[1.1]">
            PASSIONATE DEVELOPER,<br />
            <span className="text-neutral-400 dark:text-neutral-500">PROBLEM SOLVER.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-2">
          
          {/* Left Column: Narrative & Focus Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 space-y-5 text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm sm:text-base font-normal"
          >
            <p>
              I am a passionate <strong className="text-neutral-950 dark:text-white font-semibold">Full Stack Developer</strong> and <strong className="text-neutral-950 dark:text-white font-semibold">Computer Science Engineering Student</strong> at <strong className="text-neutral-950 dark:text-white font-semibold">Lovely Professional University (LPU)</strong> with a strong foundation in modern web technologies. I specialize in building end-to-end web applications with React, Next.js, Node.js, Express, MongoDB, and TypeScript.
            </p>

            <p>
              My journey involves building SaaS platforms, AI-powered applications, and real-time platforms with clean architecture, responsive layouts, and robust backend integrations. I enjoy solving real-world challenges with clean code and intuitive user interfaces.
            </p>

            <p>
              Beyond engineering, I actively participate in coding competitions like CodeClash, complete proctored certifications (Coding Tantra DSA, Infosys Springboard), and serve as a CyberSmart CSR intern educating government school students on cybersecurity.
            </p>

            {/* Core Focus Cards */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-4.5 rounded-2xl bg-white dark:bg-[#0D0D0D] border-2 border-neutral-300 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-500 flex items-start space-x-3.5 shadow-md hover:shadow-xl transition-all duration-300 ease-out"
              >
                <div className="w-9 h-9 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shrink-0 shadow-xs">
                  <Code className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-950 dark:text-white uppercase tracking-wider">End-to-End Engineering</h4>
                  <p className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-1">SaaS, Real-time collaboration, & robust RESTful APIs</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-4.5 rounded-2xl bg-white dark:bg-[#0D0D0D] border-2 border-neutral-300 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-500 flex items-start space-x-3.5 shadow-md hover:shadow-xl transition-all duration-300 ease-out"
              >
                <div className="w-9 h-9 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shrink-0 shadow-xs">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-950 dark:text-white uppercase tracking-wider">Competitive & Social</h4>
                  <p className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-1">CodeClash participant, certifications & CSR initiatives</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Education & Affiliations Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 group bg-white dark:bg-[#0D0D0D] rounded-3xl p-7 sm:p-8 border-2 border-neutral-300 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-500 shadow-md hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 space-y-7 cursor-default"
          >
            {/* Top Badge */}
            <div className="inline-block">
              <span className="bg-violet-50 dark:bg-violet-950/70 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800 text-[11px] font-bold px-3 py-1 rounded-md tracking-wider uppercase shadow-3xs group-hover:bg-violet-100 dark:group-hover:bg-violet-900 transition-colors">
                EDUCATION &amp; AFFILIATIONS
              </span>
            </div>

            {/* Timeline List */}
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-2 before:w-0.5 before:bg-neutral-300 dark:before:bg-neutral-800 group-hover:before:bg-neutral-400 transition-colors">
              
              {/* Item 1: Degree */}
              <div className="relative pl-7 space-y-1">
                <div className="absolute left-[5px] top-1.5 w-2 h-2 rounded-full bg-violet-600 ring-4 ring-violet-100 dark:ring-violet-950" />
                
                <div className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">
                  2024 — 2028 (EXPECTED)
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-white group-hover:text-black dark:group-hover:text-white tracking-tight transition-colors">
                  Bachelor of Technology (B.Tech)
                </h3>

                <div className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                  Computer Science and Engineering
                </div>

                <div className="text-xs text-neutral-500 dark:text-neutral-400 pt-0.5">
                  Lovely Professional University (LPU) • Punjab, India
                </div>
              </div>

              {/* Item 2: CSR */}
              <div className="relative pl-7 space-y-1">
                <div className="absolute left-[5px] top-1.5 w-2 h-2 rounded-full bg-sky-500 ring-4 ring-sky-100 dark:ring-sky-950" />
                
                <div className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                  2024 — PRESENT
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-white group-hover:text-black dark:group-hover:text-white tracking-tight transition-colors">
                  CyberSmart CSR Intern
                </h3>

                <div className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                  Social Impact &amp; Cybersecurity Awareness
                </div>

                <div className="text-xs text-neutral-500 dark:text-neutral-400 pt-0.5">
                  Educating government school students on cybersecurity & digital safety
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
