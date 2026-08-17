import React from 'react';
import { skillCategories } from '../data/skills';
import { TechIcon } from './TechIcons';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#F3F4F6] dark:bg-[#000000] scroll-mt-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-block">
            <span className="bg-white dark:bg-[#0D0D0D] border-2 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-200 text-[11px] font-bold px-3.5 py-1 rounded-full tracking-wider uppercase shadow-xs">
              EXPERTISE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 dark:text-white uppercase tracking-tight leading-[1.1]">
            SKILLS &amp; TECHNOLOGIES
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl font-normal">
            Core tech stack, frameworks, databases, and development tooling.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0D0D0D] rounded-3xl p-7 border-2 border-neutral-300 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-500 shadow-md hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-white tracking-tight">
                  {category.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed font-normal">
                  {category.description}
                </p>

                {/* Skills Badges with Icons */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-neutral-50 dark:bg-[#141414] text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-800 hover:border-black dark:hover:border-white transition-all duration-200 shadow-3xs hover:scale-105"
                    >
                      <TechIcon name={skill.name} className="w-4 h-4 shrink-0" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
