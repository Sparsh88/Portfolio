import React from 'react';
import { Code, Flame, CheckCircle, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const LeetCodeStatsCard: React.FC = () => {
  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-800/80 relative overflow-hidden group">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Code className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">LeetCode DSA Stats</h3>
            <p className="text-xs text-slate-400 font-mono">@sparshchauhan</p>
          </div>
        </div>
        <a
          href={PERSONAL_INFO.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-white text-xs flex items-center gap-1 transition-all"
        >
          <span>View Profile</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Main Solved Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-indigo-500/10 border border-amber-500/20 flex items-center justify-between">
        <div>
          <div className="text-xs font-mono uppercase text-slate-400">Total Solved</div>
          <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono flex items-center gap-2">
            <span>500+</span>
            <span className="text-xs font-normal text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
              Top 15% Rank
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-amber-400 font-mono text-sm bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/20">
          <Flame className="w-4 h-4 text-amber-500 animate-bounce" />
          <span>250 Active Days</span>
        </div>
      </div>

      {/* Breakdown Bars */}
      <div className="space-y-3">
        {/* Easy */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-emerald-400">Easy (220 Solved)</span>
            <span className="text-slate-400">220 / 700</span>
          </div>
          <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
            <div className="h-full bg-emerald-400 rounded-full" style={{ width: '70%' }} />
          </div>
        </div>

        {/* Medium */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-amber-400">Medium (240 Solved)</span>
            <span className="text-slate-400">240 / 1400</span>
          </div>
          <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
            <div className="h-full bg-amber-400 rounded-full" style={{ width: '55%' }} />
          </div>
        </div>

        {/* Hard */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-rose-400">Hard (40 Solved)</span>
            <span className="text-slate-400">40 / 600</span>
          </div>
          <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
            <div className="h-full bg-rose-400 rounded-full" style={{ width: '30%' }} />
          </div>
        </div>
      </div>

      {/* Key DSA Topics */}
      <div className="space-y-2 pt-2 border-t border-slate-800/60">
        <div className="text-xs font-mono text-slate-400">Mastered DSA Topics</div>
        <div className="flex flex-wrap gap-1.5">
          {['Dynamic Programming', 'Graph Algorithms', 'Trees & Heaps', 'Sliding Window', 'Two Pointers', 'Backtracking', 'Binary Search'].map((topic, i) => (
            <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-900 text-[11px] text-slate-300 border border-slate-800 flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-amber-400" />
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
