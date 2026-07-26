import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, GraduationCap, Github } from 'lucide-react';
import { GitHubStatsCard } from './GitHubStatsCard';

export const AchievementsSection: React.FC = () => {
  const highlights = [
    {
      id: 'projects',
      value: '7 Live',
      label: 'Projects Built',
      description: 'Production-ready web applications deployed live on Vercel with clean code architecture.',
      icon: Code2,
    },
    {
      id: 'cgpa',
      value: '8.53',
      label: 'Overall CGPA',
      description: 'Academic excellence in Computer Science Engineering at Lovely Professional University (LPU).',
      icon: GraduationCap,
    },
    {
      id: 'certs',
      value: '5 Verifiable',
      label: 'Certificates Earned',
      description: 'Verified credentials from Infosys Springboard, Coding Tantra, WNS, and AccentureEmph.',
      icon: Award,
    },
    {
      id: 'github',
      value: 'Sparsh88',
      label: 'GitHub Profile',
      description: 'Active open source contributions and full stack web application builds.',
      icon: Github,
    },
  ];

  return (
    <section className="pt-48 pb-24 scroll-mt-40 relative bg-black text-white border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-14 text-left"
        >
          <div className="text-xs font-mono font-bold text-blue-500 tracking-widest uppercase">
            08 / PERFORMANCE & IMPACT
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Key Achievements
          </h2>
        </motion.div>

        {/* 4 Highlight Metric Cards with Glowing Blue Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 card-hover-effect space-y-4 flex flex-col justify-between text-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center text-blue-400 mx-auto group-hover:scale-110 group-hover:border-blue-500/50 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-extrabold font-mono text-white tracking-tight transition-colors">
                    {item.value}
                  </h3>
                  <div className="text-xs font-bold text-slate-200">
                    {item.label}
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <GitHubStatsCard />
        </motion.div>

      </div>
    </section>
  );
};
