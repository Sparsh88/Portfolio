import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Terminal, 
  FileCode, 
  Globe, 
  Server, 
  Cpu, 
  Database, 
  GitBranch, 
  Github, 
  ShieldCheck, 
  Sparkles,
  Wrench,
  KeyRound
} from 'lucide-react';
import { FeaturedTechnologies } from './FeaturedTechnologies';

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Engineering',
      description: 'Building responsive, modern, and pixel-perfect user interfaces with smooth animations.',
      skills: [
        { name: 'React 19 / 18', level: 'EXPERT', dots: 3, icon: Code2 },
        { name: 'Tailwind CSS', level: 'EXPERT', dots: 3, icon: Layers },
        { name: 'JavaScript (ES6+)', level: 'EXPERT', dots: 3, icon: Terminal },
        { name: 'TypeScript', level: 'ADVANCED', dots: 3, icon: FileCode },
        { name: 'HTML5 & CSS3', level: 'EXPERT', dots: 3, icon: Globe },
      ],
    },
    {
      title: 'Backend Development',
      description: 'Designing scalable server architectures, secure APIs, and efficient background processing.',
      skills: [
        { name: 'Node.js', level: 'ADVANCED', dots: 3, icon: Server },
        { name: 'Express.js', level: 'ADVANCED', dots: 3, icon: Cpu },
        { name: 'REST APIs', level: 'EXPERT', dots: 3, icon: ShieldCheck },
        { name: 'JWT Authentication', level: 'ADVANCED', dots: 2, icon: KeyRound },
      ],
    },
    {
      title: 'Database Management',
      description: 'Structuring relational and non-relational database schemas, indexing, and query optimization.',
      skills: [
        { name: 'MongoDB', level: 'ADVANCED', dots: 3, icon: Database },
        { name: 'PostgreSQL', level: 'ADVANCED', dots: 2, icon: Database },
        { name: 'Prisma ORM', level: 'ADVANCED', dots: 2, icon: Database },
        { name: 'Mongoose', level: 'ADVANCED', dots: 3, icon: Database },
      ],
    },
    {
      title: 'Developer Tools & API',
      description: 'Managing deployments, version control, authentication protocols, and integration pipelines.',
      skills: [
        { name: 'Git', level: 'ADVANCED', dots: 3, icon: GitBranch },
        { name: 'GitHub', level: 'ADVANCED', dots: 3, icon: Github },
        { name: 'OpenAI & Gemini API', level: 'ADVANCED', dots: 2, icon: Sparkles },
        { name: 'Render & Vercel', level: 'ADVANCED', dots: 2, icon: Wrench },
      ],
    },
  ];

  return (
    <section id="skills" className="pt-48 pb-24 scroll-mt-40 relative bg-black text-white border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-14 text-left"
        >
          <div className="text-xs font-mono font-bold text-blue-500 tracking-widest uppercase">
            03 / SKILLS & TOOLKIT
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            My Tech Stack
          </h2>
        </motion.div>

        {/* 2x2 Category Grid matching Screenshot 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, cIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: cIdx * 0.12 }}
              className="p-8 card-hover-effect space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white tracking-tight transition-colors">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills List Rows */}
              <div className="space-y-3 pt-2">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="p-3 rounded-2xl bg-black/80 border border-zinc-900 flex items-center justify-between group/row hover:border-blue-500/50 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#111113] border border-zinc-800 flex items-center justify-center text-slate-300 group-hover/row:text-blue-400 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-white">
                          {skill.name}
                        </span>
                      </div>

                      {/* Level Label + Dots matching Screenshot 2 */}
                      <div className="flex items-center gap-2 text-[10px] font-mono tracking-wider">
                        <span className="text-slate-400 font-bold uppercase">{skill.level}</span>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 3 }).map((_, dIdx) => (
                            <span
                              key={dIdx}
                              className={`w-1.5 h-1.5 rounded-full ${
                                dIdx < skill.dots ? 'bg-blue-500' : 'bg-zinc-800'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Technologies Section (04 / TECHNOLOGY FOCUS) */}
        <FeaturedTechnologies />

      </div>
    </section>
  );
};
