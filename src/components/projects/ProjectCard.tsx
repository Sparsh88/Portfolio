import React from 'react';
import { ExternalLink, Github, Layers, Sparkles, Shield, Code2, Cpu, ArrowUpRight } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const getBannerConfig = (id: string) => {
    switch (id) {
      case 'smartshop':
        return {
          gradient: 'from-blue-950/80 via-[#0d1527] to-[#111113]',
          icon: Layers,
          iconColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
          categoryTag: 'FULL-STACK E-COMMERCE',
        };
      case 'moneymate':
        return {
          gradient: 'from-purple-950/80 via-[#180e29] to-[#111113]',
          icon: Sparkles,
          iconColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
          categoryTag: 'AI & SAAS',
        };
      case 'job-portal':
        return {
          gradient: 'from-teal-950/80 via-[#0b2220] to-[#111113]',
          icon: Shield,
          iconColor: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
          categoryTag: 'ENTERPRISE WEB APP',
        };
      case 'chat-application':
        return {
          gradient: 'from-rose-950/80 via-[#270d18] to-[#111113]',
          icon: Code2,
          iconColor: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
          categoryTag: 'SAAS PLATFORM',
        };
      case 'ai-saas':
        return {
          gradient: 'from-amber-950/80 via-[#261b0c] to-[#111113]',
          icon: Cpu,
          iconColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
          categoryTag: 'UI/UX & BOOKING',
        };
      case 'travel-heaven':
      default:
        return {
          gradient: 'from-cyan-950/80 via-[#0c2328] to-[#111113]',
          icon: Code2,
          iconColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
          categoryTag: 'HEALTHCARE WEB APP',
        };
    }
  };

  const config = getBannerConfig(project.id);
  const IconComponent = config.icon;

  return (
    <div className="card-hover-effect overflow-hidden flex flex-col justify-between">
      
      {/* Top Graphic Card Banner matching Screenshots 3 & 4 */}
      <div className={`relative p-8 bg-gradient-to-b ${config.gradient} border-b border-zinc-900 flex flex-col items-center justify-center text-center space-y-4`}>
        {/* Top Category Badge */}
        <div className="absolute top-4 left-4 px-2.5 py-0.5 rounded-full bg-black/80 border border-zinc-800 text-[9px] font-mono tracking-wider text-slate-400 uppercase">
          {config.categoryTag}
        </div>

        {/* Central Icon Square */}
        <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${config.iconColor} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className="w-7 h-7" />
        </div>

        {/* Title inside banner */}
        <h4 className="text-lg font-bold text-white tracking-tight">
          {project.title}
        </h4>

        {/* Tech tags preview inside banner */}
        <div className="flex items-center gap-1.5 text-[9px] font-mono text-zinc-500">
          {project.techStack.slice(0, 3).map((t, idx) => (
            <span key={idx}>#{t.toLowerCase()}</span>
          ))}
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5 text-left">
        <div className="space-y-3">
          <div className="text-[10px] font-mono font-bold text-blue-500 tracking-wider uppercase">
            {config.categoryTag}
          </div>

          <h3 className="text-xl font-bold text-white tracking-tight transition-colors">
            {project.title}
          </h3>

          <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack Pills matching Screenshots 3 & 4 */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-xl bg-black/80 text-[10px] font-mono text-slate-300 border border-zinc-900"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* View Key Features Link */}
          <button
            onClick={() => onOpenModal(project)}
            className="pt-2 text-xs font-mono font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5 group/btn"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>View key features</span>
          </button>
        </div>

        {/* Bottom Action Buttons matching Screenshots 3 & 4 */}
        <div className="pt-4 border-t border-zinc-900 flex items-center justify-between gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-4 rounded-2xl bg-black hover:bg-zinc-900 text-slate-300 text-xs font-mono font-semibold border border-zinc-800 flex items-center gap-2 transition-all flex-1 justify-center"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Repository</span>
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-semibold shadow-lg shadow-blue-600/30 flex items-center gap-1.5 transition-all flex-1 justify-center hover:scale-105"
          >
            <span>Live Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

    </div>
  );
};
