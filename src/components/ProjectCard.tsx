import React from 'react';
import type { Project } from '../types';
import { 
  ArrowUpRight, 
  ShoppingBag, 
  Sparkles, 
  MessageSquare, 
  Briefcase, 
  Wallet, 
  Link2, 
  Layers
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenDetails: (project: Project) => void;
}

const PROJECT_ICONS: Record<string, React.ReactNode> = {
  smartshop: <ShoppingBag className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
  'skillforge-ai': <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
  'chat-application': <MessageSquare className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
  'job-portal': <Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
  moneymate: <Wallet className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  'url-shortener': <Link2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
};

const COLOR_THEMES = [
  {
    // Sky
    border: 'border-2 border-sky-300 dark:border-sky-900/80 hover:border-sky-500 dark:hover:border-sky-400 group-hover:border-sky-500',
    topBanner: 'bg-gradient-to-b from-sky-100/90 to-sky-50/50 dark:from-sky-950/40 dark:to-[#0A0A0A] border border-sky-200/80 dark:border-sky-900/60',
    bannerIconBg: 'bg-white dark:bg-[#141414] border border-sky-300 dark:border-sky-800 shadow-xs text-sky-600 dark:text-sky-400',
    tagBadge: 'bg-sky-100 dark:bg-sky-950 text-sky-900 dark:text-sky-200 border border-sky-300 dark:border-sky-800',
    categoryText: 'text-sky-700 dark:text-sky-400',
    techBadge: 'bg-sky-50 dark:bg-[#141414] text-sky-950 dark:text-sky-200 border border-sky-200 dark:border-sky-900/80 hover:bg-sky-100 dark:hover:bg-sky-950/40',
    shadowHover: 'hover:shadow-[0_20px_35px_-10px_rgba(14,165,233,0.25)]',
  },
  {
    // Amber
    border: 'border-2 border-amber-300 dark:border-amber-900/80 hover:border-amber-500 dark:hover:border-amber-400 group-hover:border-amber-500',
    topBanner: 'bg-gradient-to-b from-amber-100/90 to-amber-50/50 dark:from-amber-950/40 dark:to-[#0A0A0A] border border-amber-200/80 dark:border-amber-900/60',
    bannerIconBg: 'bg-white dark:bg-[#141414] border border-amber-300 dark:border-amber-800 shadow-xs text-amber-600 dark:text-amber-400',
    tagBadge: 'bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-800',
    categoryText: 'text-amber-700 dark:text-amber-400',
    techBadge: 'bg-amber-50 dark:bg-[#141414] text-amber-950 dark:text-amber-200 border border-amber-200 dark:border-amber-900/80 hover:bg-amber-100 dark:hover:bg-amber-950/40',
    shadowHover: 'hover:shadow-[0_20px_35px_-10px_rgba(245,158,11,0.25)]',
  },
  {
    // Rose
    border: 'border-2 border-rose-300 dark:border-rose-900/80 hover:border-rose-500 dark:hover:border-rose-400 group-hover:border-rose-500',
    topBanner: 'bg-gradient-to-b from-rose-100/90 to-rose-50/50 dark:from-rose-950/40 dark:to-[#0A0A0A] border border-rose-200/80 dark:border-rose-900/60',
    bannerIconBg: 'bg-white dark:bg-[#141414] border border-rose-300 dark:border-rose-800 shadow-xs text-rose-600 dark:text-rose-400',
    tagBadge: 'bg-rose-100 dark:bg-rose-950 text-rose-900 dark:text-rose-200 border border-rose-300 dark:border-rose-800',
    categoryText: 'text-rose-700 dark:text-rose-400',
    techBadge: 'bg-rose-50 dark:bg-[#141414] text-rose-950 dark:text-rose-200 border border-rose-200 dark:border-rose-900/80 hover:bg-rose-100 dark:hover:bg-rose-950/40',
    shadowHover: 'hover:shadow-[0_20px_35px_-10px_rgba(244,63,94,0.25)]',
  },
  {
    // Purple
    border: 'border-2 border-purple-300 dark:border-purple-900/80 hover:border-purple-500 dark:hover:border-purple-400 group-hover:border-purple-500',
    topBanner: 'bg-gradient-to-b from-purple-100/90 to-purple-50/50 dark:from-purple-950/40 dark:to-[#0A0A0A] border border-purple-200/80 dark:border-purple-900/60',
    bannerIconBg: 'bg-white dark:bg-[#141414] border border-purple-300 dark:border-purple-800 shadow-xs text-purple-600 dark:text-purple-400',
    tagBadge: 'bg-purple-100 dark:bg-purple-950 text-purple-900 dark:text-purple-200 border border-purple-300 dark:border-purple-800',
    categoryText: 'text-purple-700 dark:text-purple-400',
    techBadge: 'bg-purple-50 dark:bg-[#141414] text-purple-950 dark:text-purple-200 border border-purple-200 dark:border-purple-900/80 hover:bg-purple-100 dark:hover:bg-purple-950/40',
    shadowHover: 'hover:shadow-[0_20px_35px_-10px_rgba(168,85,247,0.25)]',
  },
  {
    // Emerald
    border: 'border-2 border-emerald-300 dark:border-emerald-900/80 hover:border-emerald-500 dark:hover:border-emerald-400 group-hover:border-emerald-500',
    topBanner: 'bg-gradient-to-b from-emerald-100/90 to-emerald-50/50 dark:from-emerald-950/40 dark:to-[#0A0A0A] border border-emerald-200/80 dark:border-emerald-900/60',
    bannerIconBg: 'bg-white dark:bg-[#141414] border border-emerald-300 dark:border-emerald-800 shadow-xs text-emerald-600 dark:text-emerald-400',
    tagBadge: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800',
    categoryText: 'text-emerald-700 dark:text-emerald-400',
    techBadge: 'bg-emerald-50 dark:bg-[#141414] text-emerald-950 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-900/80 hover:bg-emerald-100 dark:hover:bg-emerald-950/40',
    shadowHover: 'hover:shadow-[0_20px_35px_-10px_rgba(16,185,129,0.25)]',
  },
  {
    // Indigo
    border: 'border-2 border-indigo-300 dark:border-indigo-900/80 hover:border-indigo-500 dark:hover:border-indigo-400 group-hover:border-indigo-500',
    topBanner: 'bg-gradient-to-b from-indigo-100/90 to-indigo-50/50 dark:from-indigo-950/40 dark:to-[#0A0A0A] border border-indigo-200/80 dark:border-indigo-900/60',
    bannerIconBg: 'bg-white dark:bg-[#141414] border border-indigo-300 dark:border-indigo-800 shadow-xs text-indigo-600 dark:text-indigo-400',
    tagBadge: 'bg-indigo-100 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-200 border border-indigo-300 dark:border-indigo-800',
    categoryText: 'text-indigo-700 dark:text-indigo-400',
    techBadge: 'bg-indigo-50 dark:bg-[#141414] text-indigo-950 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-900/80 hover:bg-indigo-100 dark:hover:bg-indigo-950/40',
    shadowHover: 'hover:shadow-[0_20px_35px_-10px_rgba(99,102,241,0.25)]',
  },
];

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpenDetails }) => {
  const theme = COLOR_THEMES[index % COLOR_THEMES.length];
  const projectIcon = PROJECT_ICONS[project.id] || <Layers className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />;

  const hashtags = project.technologies
    .slice(0, 3)
    .map(t => `#${t.toLowerCase().replace(/[^a-z0-9]/g, '')}`)
    .join(' ');

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className={`group bg-white dark:bg-[#0D0D0D] rounded-3xl ${theme.border} p-5 flex flex-col justify-between transition-all duration-300 ease-out shadow-md ${theme.shadowHover}`}
    >
      <div>
        {/* Compact Top Feature Visual Banner */}
        <div 
          onClick={() => onOpenDetails(project)}
          className={`w-full rounded-2xl ${theme.topBanner} px-4 py-3.5 mb-4 flex flex-col items-center justify-center text-center relative cursor-pointer group/banner transition-all duration-300 hover:shadow-xs`}
        >
          {/* Top-Left Category & Preview Header */}
          <div className="w-full flex items-center justify-between mb-1.5">
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${theme.tagBadge} shadow-3xs`}>
              {project.type === 'fullstack' ? 'Full-Stack' : project.type === 'ai-saas' ? 'AI & SaaS' : 'Web App'}
            </span>
            <span className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-400 group-hover/banner:text-neutral-900 dark:group-hover/banner:text-white transition-colors flex items-center gap-0.5">
              <span>Preview</span>
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>

          {/* Centered Icon */}
          <div className={`w-11 h-11 rounded-xl ${theme.bannerIconBg} flex items-center justify-center my-1 group-hover/banner:scale-105 transition-transform duration-300`}>
            {projectIcon}
          </div>

          {/* Centered Title */}
          <h4 className="text-base font-bold text-neutral-950 dark:text-white tracking-tight">
            {project.title}
          </h4>

          {/* Hashtags */}
          <div className="text-[10px] font-mono font-medium text-neutral-500 dark:text-neutral-400 mt-0.5">
            {hashtags}
          </div>
        </div>

        {/* Lower Info Area */}
        <div className="space-y-1.5">
          <div className={`text-[10px] font-bold uppercase tracking-wider ${theme.categoryText}`}>
            {project.category}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal line-clamp-3">
            {project.shortDescription}
          </p>
        </div>

        {/* Compact Technologies Row */}
        <div className="mt-3.5 flex flex-wrap gap-1">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className={`px-2.5 py-0.5 text-[11px] font-semibold rounded-full ${theme.techBadge} transition-all duration-200 shadow-3xs`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span
              onClick={() => onOpenDetails(project)}
              className={`px-2 py-0.5 text-[11px] font-semibold rounded-full ${theme.techBadge} cursor-pointer hover:scale-105 transition-all shadow-3xs`}
            >
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* View Key Features Link */}
        <div className="mt-3">
          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center space-x-1 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:underline cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 dark:bg-neutral-200"></span>
            <span>View key features &amp; preview</span>
          </button>
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex items-center space-x-2.5 pt-4 mt-4 border-t border-neutral-200 dark:border-neutral-800">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center space-x-1.5 px-3 py-2 text-xs font-semibold text-neutral-900 dark:text-white bg-white dark:bg-[#141414] hover:bg-neutral-100 dark:hover:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-800 rounded-full transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-xs"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>Repository</span>
        </a>

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center space-x-1 px-3 py-2 text-xs font-semibold text-white bg-black dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 hover:-translate-y-0.5"
          >
            <span>Live Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        ) : (
          <button
            onClick={() => onOpenDetails(project)}
            className="flex-1 inline-flex items-center justify-center space-x-1 px-3 py-2 text-xs font-semibold text-white bg-black dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 hover:-translate-y-0.5"
          >
            <span>Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </motion.div>
  );
};
