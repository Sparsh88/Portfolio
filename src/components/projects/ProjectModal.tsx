import React from 'react';
import { X, ExternalLink, Github, Layers, AlertCircle, CheckCircle2, Cpu, Rocket } from 'lucide-react';
import { Project } from '../../types';
import { useSoundEffects } from '../../hooks/useSoundEffects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { playClick } = useSoundEffects();

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl glass-modal rounded-3xl shadow-2xl border border-slate-800 overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        
        {/* Header Image Overlay */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d121e] via-[#0d121e]/60 to-transparent" />

          {/* Close Button */}
          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-700/80 transition-all z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title Overlay Info */}
          <div className="absolute bottom-6 left-6 right-6 space-y-2 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-600/30 border border-indigo-500/40 text-xs font-mono text-indigo-300">
              {project.category}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-indigo-300 font-medium">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          
          {/* Performance Metrics Pills (If available) */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-xs font-mono text-slate-400 uppercase">{m.label}</div>
                  <div className="text-lg font-extrabold text-indigo-400 font-mono">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Overview Description */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Rocket className="w-5 h-5 text-indigo-400" />
              <span>Project Overview</span>
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Key Features & Capabilities</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Breakdown */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-400" />
              <span>System Architecture & Engineering</span>
            </h3>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-purple-500/20 text-xs text-slate-300 leading-relaxed font-mono">
              {project.architecture}
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-rose-500/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-rose-400">
                <AlertCircle className="w-4 h-4" />
                <span>Technical Challenge</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.challenges}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-emerald-500/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.solutions}
              </p>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-indigo-400" />
              <span>Tech Stack Used</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl bg-slate-900 text-xs font-mono font-medium text-slate-200 border border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTAs */}
        <div className="p-6 border-t border-slate-800/80 bg-slate-950/80 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-500">
            Frontend Only Client Demo | Vercel Ready
          </div>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 flex items-center gap-2 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 hover:scale-105 transition-all flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
