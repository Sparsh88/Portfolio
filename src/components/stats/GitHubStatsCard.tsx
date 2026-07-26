import React, { useState, useEffect } from 'react';
import { GitCommit, GitPullRequest, Star, Trophy, ExternalLink, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface GitHubData {
  publicRepos: number;
  followers: number;
  following: number;
  avatarUrl: string;
  bio: string;
}

export const GitHubStatsCard: React.FC = () => {
  const [githubStats, setGithubStats] = useState<GitHubData>({
    publicRepos: 9,
    followers: 1,
    following: 0,
    avatarUrl: 'https://github.com/Sparsh88.png',
    bio: 'Full Stack Developer | B.Tech CSE at LPU',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://api.github.com/users/Sparsh88');
        if (res.ok) {
          const data = await res.json();
          setGithubStats({
            publicRepos: data.public_repos || 9,
            followers: data.followers || 1,
            following: data.following || 0,
            avatarUrl: data.avatar_url || 'https://github.com/Sparsh88.png',
            bio: data.bio || 'Full Stack Developer',
          });
        }
      } catch (err) {
        console.error('Failed to fetch live GitHub stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  return (
    <div className="card-hover-effect p-6 sm:p-8 space-y-6 relative overflow-hidden">
      
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={githubStats.avatarUrl}
            alt="Sparsh88 GitHub Avatar"
            className="w-12 h-12 rounded-2xl border border-zinc-800 object-cover shadow-md"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-white tracking-tight">GitHub Activity & Overview</h3>
              {loading && <RefreshCw className="w-3.5 h-3.5 text-emerald-400 animate-spin" />}
            </div>
            <p className="text-xs text-emerald-400 font-mono font-semibold">@Sparsh88</p>
          </div>
        </div>

        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-4 rounded-2xl bg-black hover:bg-zinc-900 text-slate-300 hover:text-white text-xs font-mono font-semibold border border-zinc-800 flex items-center gap-1.5 transition-all"
        >
          <span>View Profile</span>
          <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
        </a>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-black border border-zinc-900 hover:border-blue-500/60 transition-all text-center group/metric">
          <Trophy className="w-4 h-4 text-emerald-400 mx-auto mb-1.5 group-hover/metric:scale-110 transition-transform" />
          <div className="text-2xl font-bold text-white font-mono">{githubStats.publicRepos}</div>
          <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Public Repos</div>
        </div>

        <div className="p-4 rounded-2xl bg-black border border-zinc-900 hover:border-blue-500/60 transition-all text-center group/metric">
          <GitCommit className="w-4 h-4 text-emerald-400 mx-auto mb-1.5 group-hover/metric:scale-110 transition-transform" />
          <div className="text-2xl font-bold text-white font-mono">600+</div>
          <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Commits</div>
        </div>

        <div className="p-4 rounded-2xl bg-black border border-zinc-900 hover:border-blue-500/60 transition-all text-center group/metric">
          <GitPullRequest className="w-4 h-4 text-purple-400 mx-auto mb-1.5 group-hover/metric:scale-110 transition-transform" />
          <div className="text-2xl font-bold text-white font-mono">25+</div>
          <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Pull Requests</div>
        </div>

        <div className="p-4 rounded-2xl bg-black border border-zinc-900 hover:border-blue-500/60 transition-all text-center group/metric">
          <Star className="w-4 h-4 text-amber-400 mx-auto mb-1.5 group-hover/metric:scale-110 transition-transform" />
          <div className="text-2xl font-bold text-white font-mono">7 Live</div>
          <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Vercel Apps</div>
        </div>
      </div>

      {/* Official GitHub Contribution Matrix */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Official GitHub Contribution Matrix</span>
          <span className="text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Active Developer
          </span>
        </div>

        {/* GitHub Green Contribution Calendar SVG Chart */}
        <div className="rounded-2xl bg-black border border-zinc-900 hover:border-blue-500/40 transition-all p-5 flex flex-col items-center justify-center overflow-x-auto">
          <img
            src="https://ghchart.rshah.org/10b981/Sparsh88"
            alt="Sparsh88 GitHub Green Contribution Chart"
            className="w-full max-w-full h-auto min-h-[100px] object-contain filter contrast-125"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          {/* Legend */}
          <div className="flex items-center justify-end gap-2 w-full pt-3 text-[10px] font-mono text-slate-400">
            <span>Less</span>
            <span className="w-2.5 h-2.5 rounded-sm bg-[#161b22]" />
            <span className="w-2.5 h-2.5 rounded-sm bg-[#0e4429]" />
            <span className="w-2.5 h-2.5 rounded-sm bg-[#006d32]" />
            <span className="w-2.5 h-2.5 rounded-sm bg-[#26a641]" />
            <span className="w-2.5 h-2.5 rounded-sm bg-[#39d353]" />
            <span>More</span>
          </div>
        </div>
      </div>

      {/* Top Languages Stack Bar */}
      <div className="space-y-2 pt-2 border-t border-zinc-900">
        <div className="text-xs font-mono text-slate-400">Primary Code Base Distribution</div>
        <div className="h-2.5 rounded-full bg-black border border-zinc-900 overflow-hidden flex">
          <div className="h-full bg-yellow-400" style={{ width: '40%' }} title="JavaScript (40%)" />
          <div className="h-full bg-blue-500" style={{ width: '35%' }} title="TypeScript (35%)" />
          <div className="h-full bg-cyan-400" style={{ width: '15%' }} title="HTML/CSS (15%)" />
          <div className="h-full bg-emerald-500" style={{ width: '10%' }} title="C++ (10%)" />
        </div>
        <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-slate-400 pt-1">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />JavaScript (40%)</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500" />TypeScript (35%)</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />HTML/CSS (15%)</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />C++ (10%)</span>
        </div>
      </div>

    </div>
  );
};
