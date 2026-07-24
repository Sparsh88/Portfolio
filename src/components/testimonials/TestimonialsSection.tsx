import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Star, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#060911] border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-400 uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Peer & Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Recommendations and reviews from senior tech leads, product managers, and engineering colleagues.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-3xl p-8 border border-slate-800/80 hover:border-purple-500/40 transition-all flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-purple-500/20 absolute top-6 right-6 pointer-events-none group-hover:text-purple-500/40 transition-colors" />

              <div className="space-y-4 relative z-10">
                {/* Star Ratings */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-800/80">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-purple-500/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-indigo-400 font-mono">
                    {t.role} • {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
