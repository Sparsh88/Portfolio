import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and high-performance user interfaces',
    skills: [
      { name: 'React.js' },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Tailwind CSS' },
      { name: 'HTML5' },
      { name: 'CSS3' },
    ]
  },
  {
    title: 'Backend Development',
    description: 'Engineering robust REST APIs, authentication flows, and server-side logic',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'REST APIs' },
      { name: 'JWT Authentication' },
    ]
  },
  {
    title: 'Databases & ORM',
    description: 'Data modeling, schema migrations, and optimized persistence layers',
    skills: [
      { name: 'MongoDB' },
      { name: 'Mongoose' },
      { name: 'PostgreSQL' },
      { name: 'Prisma ORM' },
    ]
  },
  {
    title: 'Programming Languages',
    description: 'Core languages for algorithm design and software implementation',
    skills: [
      { name: 'C++' },
      { name: 'Java' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
    ]
  },
  {
    title: 'Tools & Platforms',
    description: 'Developer tooling, version control, and cloud deployment ecosystems',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Vercel' },
      { name: 'Render' },
    ]
  },
  {
    title: 'AI & Integrations',
    description: 'LLM context pipelines, third-party payment & media integrations',
    skills: [
      { name: 'Google Gemini API' },
      { name: 'Razorpay API' },
      { name: 'WebRTC' },
      { name: 'Socket.IO' },
    ]
  }
];
