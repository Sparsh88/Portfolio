import React, { useEffect } from 'react';
import type { Project } from '../types';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Database, 
  Server, 
  Code2, 
  Sparkles,
  Lock
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Backdrop click dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border-2 border-neutral-300 overflow-hidden z-10 my-8 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-[#F8F9FA]">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-neutral-200 text-neutral-900 uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-lg font-bold text-neutral-950">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-black hover:bg-neutral-200/70 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-7 flex-1 text-neutral-700 text-sm font-normal">
          
          {/* Visual Preview: Real Landing Page Screenshot in Browser Mockup Frame */}
          <div className="rounded-2xl overflow-hidden border-2 border-neutral-300 shadow-md bg-neutral-900">
            {/* Browser Header Bar */}
            <div className="h-8 px-4 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
              <div className="flex items-center space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
              </div>
              <div className="flex items-center px-3 py-0.5 rounded-md bg-neutral-800 text-[11px] font-mono text-neutral-300 max-w-[280px] truncate">
                <Lock className="w-3 h-3 mr-1.5 text-neutral-400" />
                {project.liveUrl ? new URL(project.liveUrl).hostname : `${project.id}.app`}
              </div>
              <div className="w-8 flex justify-end">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>

            {/* Real Screenshot Image */}
            {project.imageUrl ? (
              <div className="w-full bg-neutral-950 relative overflow-hidden max-h-[380px] sm:max-h-[440px]">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} live interface`}
                  className="w-full h-auto object-cover object-top"
                />
              </div>
            ) : (
              <div className="w-full h-56 bg-neutral-800 flex items-center justify-center text-neutral-400 text-xs">
                Preview interface
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Project Overview</h4>
            <p className="text-neutral-800 leading-relaxed text-sm sm:text-base font-normal">
              {project.fullDescription}
            </p>
          </div>

          {/* Architecture Breakdown */}
          {project.architecture && (
            <div className="bg-[#F8F9FA] rounded-2xl p-5 sm:p-6 border border-neutral-300 space-y-4 shadow-3xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-black" /> Architectural Implementation
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                {project.architecture.frontend && (
                  <div className="bg-white p-4 rounded-xl border border-neutral-300 shadow-3xs">
                    <div className="text-neutral-500 font-bold uppercase tracking-wider text-[10px] mb-1 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-black" /> Frontend Layer
                    </div>
                    <div className="text-neutral-900 font-semibold leading-relaxed">{project.architecture.frontend}</div>
                  </div>
                )}
                {project.architecture.backend && (
                  <div className="bg-white p-4 rounded-xl border border-neutral-300 shadow-3xs">
                    <div className="text-neutral-500 font-bold uppercase tracking-wider text-[10px] mb-1 flex items-center gap-1.5">
                      <Server className="w-3.5 h-3.5 text-black" /> Backend Services
                    </div>
                    <div className="text-neutral-900 font-semibold leading-relaxed">{project.architecture.backend}</div>
                  </div>
                )}
                {project.architecture.database && (
                  <div className="bg-white p-4 rounded-xl border border-neutral-300 shadow-3xs">
                    <div className="text-neutral-500 font-bold uppercase tracking-wider text-[10px] mb-1 flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-black" /> Database &amp; Persistence
                    </div>
                    <div className="text-neutral-900 font-semibold leading-relaxed">{project.architecture.database}</div>
                  </div>
                )}
                {project.architecture.aiOrSpecial && (
                  <div className="bg-white p-4 rounded-xl border border-neutral-300 shadow-3xs">
                    <div className="text-neutral-500 font-bold uppercase tracking-wider text-[10px] mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-black" /> Integrations &amp; Special APIs
                    </div>
                    <div className="text-neutral-900 font-semibold leading-relaxed">{project.architecture.aiOrSpecial}</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Key Technical Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">Key Technical Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-neutral-800 bg-[#F8F9FA] p-3.5 rounded-xl border border-neutral-300 shadow-3xs">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Badge List */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-semibold bg-neutral-100 text-neutral-900 rounded-full border border-neutral-300 shadow-3xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-neutral-200 bg-[#F8F9FA] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2 text-xs text-neutral-500 font-medium">
            <span>Verified Student Full-Stack Project</span>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 text-xs font-semibold text-neutral-900 bg-white hover:bg-neutral-100 border-2 border-neutral-300 rounded-full transition-colors shadow-3xs active:scale-95"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source Code</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 text-xs font-semibold text-white bg-black hover:bg-neutral-800 rounded-full transition-all shadow-md active:scale-95"
              >
                <span>Open Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
