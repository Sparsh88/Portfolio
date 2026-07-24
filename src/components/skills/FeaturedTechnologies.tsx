import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Activity, Database } from 'lucide-react';

export const FeaturedTechnologies: React.FC = () => {
  const techItems = [
    {
      title: 'React 19 Core',
      tag: 'MODERN CLIENT UI',
      icon: Cpu,
      description: 'Hooks architecture, state management, client routing, context APIs, lazy rendering optimization, and concurrent features.',
    },
    {
      title: 'Node.js & Express',
      tag: 'API INFRASTRUCTURE',
      icon: ShieldCheck,
      description: 'RESTful architecture routing, robust middleware integration, token-based (JWT) auth, rate-limiting, and error handlers.',
    },
    {
      title: 'Tailwind Styling',
      tag: 'RESPONSIVE AESTHETICS',
      icon: Activity,
      description: 'Tailwind CSS framework, custom themes definitions, responsive media design, glassmorphism layouts, and CSS variable styling.',
    },
    {
      title: 'MongoDB Data Layer',
      tag: 'NOSQL DB ARCHITECTURE',
      icon: Database,
      description: 'Structuring JSON-based documents models, relational schema setups, Mongoose hooks/validations, indexing, and connection pools.',
    },
  ];

  return (
    <div className="mt-20 pt-16 border-t border-zinc-900">
      {/* Subtitle Header matching Screenshot 1 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="space-y-2 mb-12 text-left"
      >
        <div className="text-xs font-mono font-bold text-blue-500 tracking-widest uppercase">
          04 / TECHNOLOGY FOCUS
        </div>
        <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Featured Technologies
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm max-w-2xl">
          A deeper dive into the specific focus areas, architectures, and optimization strategies I apply across my primary engineering tools.
        </p>
      </motion.div>

      {/* 4 Cards Grid matching Screenshot 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {techItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 card-hover-effect space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 font-bold uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white tracking-tight transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
