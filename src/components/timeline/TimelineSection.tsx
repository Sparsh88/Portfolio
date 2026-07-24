import React from 'react';
import { motion } from 'framer-motion';

export const TimelineSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      tag: 'RESEARCH & STRATEGY',
      title: 'Discovery & Planning',
      description: "Analyzing the client's specifications, identifying key challenges, planning database schema architectures, and outlining target deliverables.",
    },
    {
      step: '02',
      tag: 'WIREFRAMING & UI DESIGN',
      title: 'Visual Architecture',
      description: 'Establishing structural layouts, wireframing navigation grids, choosing color palettes, and refining typography systems inspired by premium modern designs.',
    },
    {
      step: '03',
      tag: 'CLEAN DEVELOPMENT',
      title: 'Agile Coding',
      description: 'Writing component-driven, modular React/Node.js code. Committing code frequently, managing feature-branches, and structuring reusable patterns.',
    },
    {
      step: '04',
      tag: 'TESTING & VALIDATION',
      title: 'Quality Assurance',
      description: 'Verifying API integrations, conducting cross-device UI validations, checking form states, and auditing accessibility details.',
    },
    {
      step: '05',
      tag: 'PERFORMANCE OPTIMIZATION',
      title: 'Refining & Tuning',
      description: 'Lazy-loading images and page routes, shrinking asset footprints, caching DB queries, and aiming for 95+ lighthouse audit metrics.',
    },
    {
      step: '06',
      tag: 'PRODUCTION LAUNCH',
      title: 'Deployment & Support',
      description: 'Configuring environment hooks, deploying the web assets to platforms like Vercel, Netlify, or AWS, and conducting post-launch telemetry checkups.',
    },
  ];

  return (
    <section id="timeline" className="pt-48 pb-24 scroll-mt-40 relative bg-black text-white border-t border-zinc-900 overflow-hidden">
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
            06 / WORKFLOW LIFECYCLE
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Development Process
          </h2>
        </motion.div>

        {/* 6 Step Cards Grid with Glowing Blue Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 card-hover-effect relative flex flex-col justify-between"
            >
              {/* Step Tag & Number */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-blue-500">
                  {item.tag}
                </span>
                <span className="text-3xl font-extrabold font-mono text-zinc-700/80 group-hover:text-blue-500/80 transition-colors select-none">
                  {item.step}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xl font-bold tracking-tight text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
