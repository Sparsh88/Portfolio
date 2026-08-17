import React from 'react';
import { Code2, GraduationCap, Award, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { profileData } from '../data/profile';

export const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: <Code2 className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
      iconBg: 'bg-sky-100 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 shadow-sky-100',
      border: 'border-2 border-sky-300 dark:border-sky-900/80 hover:border-sky-500 dark:hover:border-sky-400',
      badge: 'bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800',
      shadowHover: 'hover:shadow-[0_20px_35px_-10px_rgba(14,165,233,0.25)]',
      value: '7 Live',
      label: 'Projects Built',
      description: 'Production-ready web applications deployed live on Vercel with clean code architecture.',
      link: '#projects'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      iconBg: 'bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 shadow-emerald-100',
      border: 'border-2 border-emerald-300 dark:border-emerald-900/80 hover:border-emerald-500 dark:hover:border-emerald-400',
      badge: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
      shadowHover: 'hover:shadow-[0_20px_35px_-10px_rgba(16,185,129,0.25)]',
      value: '8.53',
      label: 'Overall CGPA',
      description: 'Academic excellence in Computer Science Engineering at Lovely Professional University (LPU).',
      link: '#about'
    },
    {
      icon: <Award className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
      iconBg: 'bg-amber-100 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 shadow-amber-100',
      border: 'border-2 border-amber-300 dark:border-amber-900/80 hover:border-amber-500 dark:hover:border-amber-400',
      badge: 'bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800',
      shadowHover: 'hover:shadow-[0_20px_35px_-10px_rgba(245,158,11,0.25)]',
      value: '5 Verifiable',
      label: 'Certificates Earned',
      description: 'Verified credentials from Infosys Springboard, Coding Tantra, WNS, and Accenture.',
      link: '#certificates'
    },
    {
      icon: <GithubIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      iconBg: 'bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 shadow-purple-100',
      border: 'border-2 border-purple-300 dark:border-purple-900/80 hover:border-purple-500 dark:hover:border-purple-400',
      badge: 'bg-purple-50 dark:bg-purple-950 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800',
      shadowHover: 'hover:shadow-[0_20px_35px_-10px_rgba(168,85,247,0.25)]',
      value: 'Sparsh88',
      label: 'GitHub Profile',
      description: 'Active open source contributions and full stack web application builds.',
      link: profileData.github,
      isExternal: true
    }
  ];

  return (
    <section id="achievements" className="py-20 sm:py-28 bg-[#F3F4F6] dark:bg-[#000000] border-t border-neutral-300 dark:border-neutral-800 scroll-mt-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-block">
            <span className="bg-white dark:bg-[#0D0D0D] border-2 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-200 text-[11px] font-bold px-3.5 py-1 rounded-full tracking-wider uppercase shadow-xs">
              MILESTONES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 dark:text-white uppercase tracking-tight leading-[1.1]">
            KEY ACHIEVEMENTS
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl font-normal">
            Quantifiable academic milestones, project deliveries, and developer benchmarks.
          </p>
        </div>

        {/* 4 Colored Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {achievements.map((item, idx) => {
            const CardWrapper = item.isExternal ? 'a' : 'div';
            return (
              <CardWrapper
                key={idx}
                {...(item.isExternal ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={`group bg-white dark:bg-[#0D0D0D] rounded-3xl p-7 ${item.border} shadow-md ${item.shadowHover} hover:-translate-y-2 transition-all duration-300 ease-out transform flex flex-col justify-between text-center relative cursor-pointer`}
              >
                <div>
                  {/* Colorful Top Icon Box */}
                  <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center mx-auto mb-5 shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>

                  {/* Value */}
                  <div className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
                    {item.value}
                  </div>

                  {/* Label Pill Badge */}
                  <div className="mt-2 inline-block">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${item.badge}`}>
                      {item.label}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-3.5 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom subtle indicator */}
                <div className="pt-4 mt-5 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-center text-[11px] font-semibold text-neutral-400 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};
