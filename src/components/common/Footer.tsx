import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Code, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { useSoundEffects } from '../../hooks/useSoundEffects';

export const Footer: React.FC = () => {
  const { playClick } = useSoundEffects();

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#000000] border-t border-slate-900 pt-16 pb-12 overflow-hidden">
      {/* Glow Ambient background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
                <Code className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Sparsh Chauhan
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Full Stack Developer & AI Engineer dedicated to building high-performance web applications, modern SaaS engines, and scalable REST architectures.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-emerald-400">
                Available for internships & full-time roles
              </span>
            </div>
          </div>

          {/* Navigation Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#about" onClick={playClick} className="hover:text-indigo-400 transition-colors">
                  About & Background
                </a>
              </li>
              <li>
                <a href="#projects" onClick={playClick} className="hover:text-indigo-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#skills" onClick={playClick} className="hover:text-indigo-400 transition-colors">
                  Tech Stack & Skills
                </a>
              </li>
              <li>
                <a href="#certificates" onClick={playClick} className="hover:text-indigo-400 transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#blog" onClick={playClick} className="hover:text-indigo-400 transition-colors">
                  Tech Articles
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex flex-col space-y-2 text-sm text-slate-400">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-indigo-400" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-indigo-400" />
                <span>LinkedIn Network</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={playClick}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Back to top button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Sparsh Chauhan. Engineered with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>using React 19 & Tailwind CSS.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-indigo-500/50 transition-all group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-indigo-400 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
