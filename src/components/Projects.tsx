import React, { useState, useMemo } from 'react';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'fullstack' | 'ai-saas' | 'realtime' | 'utility'>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'all') return projectsData;
    return projectsData.filter(p => p.type === selectedFilter);
  }, [selectedFilter]);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full-Stack Apps' },
    { id: 'ai-saas', label: 'AI & SaaS' },
    { id: 'realtime', label: 'Real-Time WebRTC' },
    { id: 'utility', label: 'High Throughput Tools' },
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#F3F4F6] dark:bg-[#000000] scroll-mt-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-3">
            <div className="inline-block">
              <span className="bg-white dark:bg-[#0D0D0D] border-2 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-200 text-[11px] font-bold px-3.5 py-1 rounded-full tracking-wider uppercase shadow-xs">
                FEATURED WORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 dark:text-white uppercase tracking-tight leading-[1.1]">
              FEATURED PROJECTS
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl font-normal">
              Production-grade web applications, AI integrations, and real-time collaboration engines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer shadow-3xs ${
                  selectedFilter === tab.id
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-xs scale-105'
                    : 'bg-white dark:bg-[#0D0D0D] text-neutral-700 dark:text-neutral-300 border-2 border-neutral-300 dark:border-neutral-800 hover:border-neutral-500 dark:hover:border-neutral-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onOpenDetails={setActiveModalProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Architectural Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
};
