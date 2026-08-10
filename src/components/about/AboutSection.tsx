import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { WhyWorkWithMe } from './WhyWorkWithMe';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="pt-48 pb-24 scroll-mt-40 relative bg-black text-white border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Screenshot 4 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-14 text-left"
        >
          <div className="text-xs font-mono font-bold text-blue-500 tracking-widest uppercase">
            01 / PROFESSIONAL PROFILE
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
        </motion.div>

        {/* Content Grid matching Screenshot 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: 3 Paragraphs & Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I am a passionate Full Stack Developer and 3rd-Year Computer Science Engineering Student at Lovely Professional University (LPU) with a strong foundation in modern web technologies. I specialize in building end-to-end web applications with React, Next.js, Node.js, Express, MongoDB, and TypeScript.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              My journey involves building SaaS platforms, AI-powered applications, and real-time platforms with clean architecture, responsive layouts, and robust backend integrations. I enjoy solving real-world challenges with clean code and intuitive user interfaces.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Beyond engineering, I actively participate in coding competitions like CodeClash, complete proctored certifications (Coding Tantra DSA, Infosys Springboard), and serve as a CyberSmart CSR intern educating government school students on cybersecurity.
            </p>

            {/* Bottom 3 Metrics Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-900">
              <div className="space-y-1">
                <div className="text-3xl font-extrabold font-mono text-white">95%+</div>
                <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">LIGHTHOUSE SCORE</div>
              </div>

              <div className="space-y-1">
                <div className="text-3xl font-extrabold font-mono text-white">100%</div>
                <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">MOBILE-FIRST UI</div>
              </div>

              <div className="space-y-1">
                <div className="text-3xl font-extrabold font-mono text-white">15+</div>
                <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">REPOS & DEV TOOLS</div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: 2 Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Card 1: B.Tech CSE Student */}
            <div className="p-7 card-hover-effect space-y-3 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">B.Tech CSE Student</h3>
                  <p className="text-xs font-mono text-blue-400">Lovely Professional University (LPU)</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pt-1">
                Currently pursuing Computer Science Engineering (3rd Year, CGPA: 8.53) with focus on MERN Stack, Data Structures & Algorithms, and AI integrations.
              </p>
            </div>

            {/* Card 2: Location Card with dot matrix grid */}
            <div className="p-7 card-hover-effect space-y-4 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">Location</h3>
                  <p className="text-xs font-mono text-blue-400">Phagwara, Punjab, India</p>
                </div>
              </div>

              {/* Status Pill Badge */}
              <div className="p-3 rounded-2xl bg-black/80 border border-zinc-900 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[11px] font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                  AVAILABLE FOR INTERNSHIPS & FREELANCE CONTRACTS
                </span>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Section 02 / CORE VALUES: Why Work With Me */}
        <WhyWorkWithMe />

      </div>
    </section>
  );
};
