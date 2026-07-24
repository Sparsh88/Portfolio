import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Cpu, ShieldCheck } from 'lucide-react';

export const WhyWorkWithMe: React.FC = () => {
  const values = [
    {
      title: 'Clean & Scalable Code',
      icon: Code2,
      description: 'I write modular, component-based code designed to scale easily. I adhere to rigorous directory organization, custom hook abstractions, and design patterns that keep codebase clean.',
    },
    {
      title: 'Pixel-Perfect Layouts',
      icon: Layout,
      description: 'Every pixel, transition, and padding matters. I design interfaces from a mobile-first philosophy, building designs that scale smoothly across smartphones, tablets, and desktops.',
    },
    {
      title: 'Extreme Optimization',
      icon: Cpu,
      description: 'I optimize assets, minimize bundle footprints, and prevent layout shifts. My focus is on delivering blazing fast page load times and target Lighthouse performance metrics above 95.',
    },
    {
      title: 'Professional Security & API',
      icon: ShieldCheck,
      description: 'From schema validation to JWT authorization and REST endpoints, I implement solid practices to build secure backend routes and keep data safe.',
    },
  ];

  return (
    <div className="mt-20 pt-16 border-t border-zinc-900">
      {/* Subtitle Header matching User Screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="space-y-2 mb-12 text-left"
      >
        <div className="text-xs font-mono font-bold text-blue-500 tracking-widest uppercase">
          02 / CORE VALUES
        </div>
        <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Why Work With Me
        </h3>
      </motion.div>

      {/* 2x2 Cards Grid matching User Screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 card-hover-effect space-y-5 flex flex-col justify-between"
            >
              <div className="w-12 h-12 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center text-blue-400">
                <Icon className="w-6 h-6" />
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-bold tracking-tight text-white transition-colors">
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
