import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Code2, ShieldCheck, Flame } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 's1',
      title: 'Full-Stack Web Apps',
      description: 'Developing end-to-end web applications. Designing databases, building robust server layers in Express, and linking client interfaces in React.',
      icon: Globe,
    },
    {
      id: 's2',
      title: 'UI/UX Development',
      description: 'Crafting beautiful, modern frontends based on Apple/Vercel philosophies. Pixel-perfect styles, smooth layout micro-animations, and complete responsiveness.',
      icon: Code2,
    },
    {
      id: 's3',
      title: 'API & Auth Design',
      description: 'Engineering RESTful API endpoints. Setting up secure authentication schemes (JWT), cookies, CORS controls, and robust validation structures.',
      icon: ShieldCheck,
    },
    {
      id: 's4',
      title: 'Performance & SEO Tuning',
      description: 'Optimizing bundle structures, compressions, rendering pipelines, and layout shifts. Adding descriptor tags, OG labels, and structured sitemaps.',
      icon: Flame,
    },
  ];

  return (
    <section id="services" className="pt-48 pb-24 scroll-mt-40 relative bg-black text-white border-t border-zinc-900 overflow-hidden">
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
            05 / CORE COMPETENCIES
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Services I Offer
          </h2>
        </motion.div>

        {/* 2x2 Grid with Glowing Blue Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 card-hover-effect space-y-5 flex flex-col justify-between"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center border bg-black text-blue-400 border-zinc-800 group-hover:border-blue-500/50 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
