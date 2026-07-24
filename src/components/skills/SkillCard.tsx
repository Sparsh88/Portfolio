import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../types';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="glass-card rounded-2xl p-5 border border-slate-800/80 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all group relative overflow-hidden"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:text-white group-hover:bg-indigo-600 transition-all">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">
              {skill.name}
            </h4>
            <span className="text-[11px] text-slate-400 font-mono">
              {skill.experience}
            </span>
          </div>
        </div>
        <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
          {skill.level}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1">
        <div className="h-2 rounded-full bg-slate-900 overflow-hidden p-0.5 border border-slate-800/60">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${skill.level}%` }}
          />
        </div>
        <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 pt-1">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            {skill.category}
          </span>
          <span>Proficiency</span>
        </div>
      </div>
    </motion.div>
  );
};
