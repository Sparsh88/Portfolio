import React, { useState, useEffect } from 'react';
import { Search, FileText, Sparkles, Code, Folder, Award, Mail, X, ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { PROJECTS_DATA, PERSONAL_INFO } from '../../data/portfolioData';

export const CommandPalette: React.FC = () => {
  const { isCommandPaletteOpen, setIsCommandPaletteOpen } = useTheme();
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (isCommandPaletteOpen) {
      setQuery('');
    }
  }, [isCommandPaletteOpen]);

  if (!isCommandPaletteOpen) return null;

  const navigateTo = (selector: string) => {
    setIsCommandPaletteOpen(false);
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setIsCommandPaletteOpen(false);
    alert('Email address copied to clipboard!');
  };

  const items = [
    // Navigation
    { category: 'Navigation', label: 'Go to Hero Section', icon: Code, action: () => navigateTo('#hero') },
    { category: 'Navigation', label: 'Go to About & Education', icon: Sparkles, action: () => navigateTo('#about') },
    { category: 'Navigation', label: 'Go to Skills Grid', icon: Code, action: () => navigateTo('#skills') },
    { category: 'Navigation', label: 'Go to Services', icon: Sparkles, action: () => navigateTo('#services') },
    { category: 'Navigation', label: 'Go to Projects Showcase', icon: Folder, action: () => navigateTo('#projects') },
    { category: 'Navigation', label: 'Go to Process & Timeline', icon: Award, action: () => navigateTo('#timeline') },
    { category: 'Navigation', label: 'Go to Contact Section', icon: Mail, action: () => navigateTo('#contact') },

    // Projects
    ...PROJECTS_DATA.map((p) => ({
      category: 'Projects',
      label: `Project: ${p.title} (${p.subtitle})`,
      icon: Folder,
      action: () => navigateTo(`#projects`),
    })),

    // Actions
    { category: 'Actions', label: 'Copy Email Address to Clipboard', icon: Mail, action: handleCopyEmail },
    { category: 'Actions', label: 'Download Resume (PDF)', icon: FileText, action: () => window.open('/resume.pdf', '_blank') },
  ];

  const filteredItems = items.filter(
    (item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="w-full max-w-2xl glass-modal rounded-2xl shadow-2xl overflow-hidden border border-slate-800 animate-in zoom-in-95 duration-150">
        {/* Search Bar Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/50">
          <Search className="w-5 h-5 text-blue-400 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, search project, or section..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
            autoFocus
          />
          <button
            onClick={() => setIsCommandPaletteOpen(false)}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-sm text-slate-400">
              No matching commands or projects found.
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={item.action}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-sm text-slate-200 hover:bg-blue-600/20 hover:text-blue-300 border border-transparent hover:border-blue-500/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800/80 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium">{item.label}</div>
                      <div className="text-[11px] text-slate-500 font-mono uppercase">{item.category}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-blue-400 transition-opacity" />
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2.5 border-t border-slate-800/80 bg-slate-950/60 flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>Use search to navigate portfolio</span>
          <kbd className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
            ESC to close
          </kbd>
        </div>
      </div>
    </div>
  );
};
