import { Achievement, BlogPost, Certificate, Project, Service, Skill, Testimonial, TimelineItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Sparsh Chauhan',
  role: 'Full Stack Developer & AI Engineer',
  tagline: 'Crafting scalable web platforms, high-performance APIs & intelligent AI SaaS solutions.',
  location: 'Phagwara, Punjab',
  email: 'sparshchauhan050@gmail.com',
  phone: '+91 70889 51914',
  github: 'https://github.com/Sparsh88',
  linkedin: 'https://linkedin.com/in/sparshchauhan08',
  leetcode: 'https://leetcode.com/u/sparshchauhan/',
  twitter: 'https://twitter.com/sparshchauhan',
  bio: 'I am a passionate 3rd-year Computer Science Engineering student at Lovely Professional University with deep expertise in modern React ecosystems, Next.js, Node.js backends, database architecture, and full stack web application development. I build fast, accessible, and delightful digital experiences engineered for real-world impact.',
  quickFacts: [
    { label: 'College', value: 'Lovely Professional University (LPU)' },
    { label: 'Degree', value: 'B.Tech CS (3rd Year)' },
    { label: 'CGPA', value: '8.53' },
    { label: 'Primary Tech', value: 'React 19, Next.js, TypeScript, Node.js, Express' },
    { label: 'Availability', value: 'Open for Software Engineering Internships' },
  ],
  languages: ['English (Fluent)', 'Hindi (Native)'],
  interests: ['System Architecture', 'AI & Autonomous Agents', 'Web Application Development', 'UI/UX Craftsmanship', 'Open Source'],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'smartshop',
    title: 'SmartShop',
    subtitle: 'Premium Full Stack E-Commerce Platform',
    description: 'A modern full-stack e-commerce marketplace featuring real-time product search, dynamic filtering, state-managed shopping cart, secure checkout workflow, order analytics dashboard, and fast responsive UI.',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1556742049-0a675659e366?auto=format&fit=crop&w=1200&q=80',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit'],
    features: [
      'Instant elastic search and multi-facet product filter by category, price, and ratings.',
      'Optimized shopping cart & wishlist with persistent local caching and smooth optimistic updates.',
      'Admin Dashboard with real-time sales charts, inventory management, and revenue analytics.',
      'Sub-second page load times with lazy loaded images and custom Skeleton UI state.',
      'Fully responsive glassmorphic UI engineered with accessibility (a11y) standards.'
    ],
    architecture: 'Microservices architecture with RESTful APIs, JWT stateless authentication, MongoDB database with indexing on product tags, and automated CDN image delivery via Cloudinary.',
    challenges: 'Handling real-time inventory count sync across multiple active user sessions without optimistic UI jitter or database race conditions.',
    solutions: 'Implemented atomic database transactions with optimistic concurrency locking and a lightweight event pub-sub pattern.',
    githubUrl: 'https://github.com/Sparsh88/SmartShop',
    liveUrl: 'https://smart-shop-ten-nu.vercel.app',
    featured: true,
    metrics: [
      { label: 'Page Speed', value: '98/100' },
      { label: 'API Latency', value: '< 45ms' },
      { label: 'Product SKU Capacity', value: '10,000+' }
    ]
  },
  {
    id: 'moneymate',
    title: 'MoneyMate',
    subtitle: 'Personal Finance Management System',
    description: 'A comprehensive financial dashboard providing intuitive expense tracking, budget forecasting, multi-currency conversion, investment portfolio tracking, and visual financial health analytics.',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    techStack: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS', 'Express.js', 'MongoDB', 'Mongoose'],
    features: [
      'Interactive expense logging with automated category tagging and recurring bill reminders.',
      'Visual financial charts: Monthly expense trends, income breakdown, and budget target progress bars.',
      'Multi-currency support with live exchange rate integration.',
      'Export financial reports in CSV, JSON, and printable summary format.',
      'Offline-first capability with browser LocalStorage caching and background sync.'
    ],
    architecture: 'Single Page React Application utilizing Chart.js canvas rendering, modular state hooks, and client-side data calculations for instant responsive analytics without server latency.',
    challenges: 'Maintaining high rendering performance when plotting thousands of historical expense data points on interactive charts.',
    solutions: 'Implemented chart data downsampling algorithms and canvas acceleration to keep animation smooth at 60 FPS.',
    githubUrl: 'https://github.com/Sparsh88/MoneyMate',
    liveUrl: 'https://money-mate-omega.vercel.app',
    featured: true,
    metrics: [
      { label: 'Chart FPS', value: '60 FPS' },
      { label: 'Data Processing', value: '< 10ms' },
      { label: 'Currencies Supported', value: '32+' }
    ]
  },
  {
    id: 'job-portal',
    title: 'HireHub AI / Job Portal',
    subtitle: 'AI Recruitment & Job Search Platform',
    description: 'An end-to-end recruitment platform that automates resume parsing, scores candidates against job requisitions, generates tailored technical interview questions, and streamlines hiring workflows.',
    category: 'AI & ML',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    techStack: ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'Tailwind CSS', 'Postgres', 'PDF.js'],
    features: [
      'Bulk PDF resume parsing with automated extract of work experience, skills, and contact data.',
      'AI candidate suitability score (0-100%) with detailed pros & cons rationale breakdown.',
      'Automated technical interview generator tailor-made for specific candidate experience gaps.',
      'Recruiter Kanban board for tracking candidates across Application, Screening, Interview, and Offer stages.',
      'Exportable candidate evaluation summary sheets in PDF and CSV format.'
    ],
    architecture: 'Client-side PDF text extraction combined with asynchronous API pipeline for candidate profile embeddings and vector matching against job requirement descriptions.',
    challenges: 'Extracting clean unformatted text from multi-column PDF resumes generated by various layout tools.',
    solutions: 'Utilized PDF.js spatial coordinate layout parsing to reconstruct natural reading order before sending text payloads to AI models.',
    githubUrl: 'https://github.com/Sparsh88/Job-portal',
    liveUrl: 'https://job-portal-six-psi-20.vercel.app',
    featured: true,
    metrics: [
      { label: 'Resume Parse Time', value: '0.8s' },
      { label: 'Match Accuracy', value: '94%' },
      { label: 'Resumes Processed', value: '5,000+' }
    ]
  },
  {
    id: 'chat-application',
    title: 'ConnectX AI / Real-Time Chat',
    subtitle: 'AI Real-Time Collaboration & Chat Application',
    description: 'An intelligent multi-user chat workspace equipped with AI co-piloting, interactive canvas brainstorming, real-time message streaming, and contextual AI assistants.',
    category: 'AI & ML',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    techStack: ['React 19', 'TypeScript', 'OpenAI API', 'Gemini API', 'Tailwind CSS', 'Node.js', 'WebSockets', 'Zustand'],
    features: [
      'Multi-model AI switching (GPT-4o, Claude 3.5, Gemini 1.5 Pro) with contextual memory.',
      'Real-time WebSocket chat room channels with typing indicators and online user presence.',
      'Real-time markdown document collaborative editor with AI inline syntax completion.',
      'Smart Code Sandbox supporting live JavaScript/Python execution directly in the browser.',
      'Voice-to-text prompt input and speech synthesis output.'
    ],
    architecture: 'Client-heavy React application utilizing WebSockets for real-time state sync, streaming LLM responses via Server-Sent Events (SSE), and Web Worker thread execution for code safety.',
    challenges: 'Managing token budget, preventing token limit exhaustion, and rendering streaming Markdown with live syntax highlighting at 60 FPS.',
    solutions: 'Implemented a sliding context window memory manager and throttled virtual DOM re-renders using custom React hooks.',
    githubUrl: 'https://github.com/Sparsh88/chat-application',
    liveUrl: 'https://chat-application-gamma-steel.vercel.app',
    featured: true,
    metrics: [
      { label: 'Stream Speed', value: '60 chars/s' },
      { label: 'AI Response Time', value: '1.2s' },
      { label: 'Active Messages', value: '50,000+' }
    ]
  },
  {
    id: 'ai-saas',
    title: 'SkillForge AI / SaaS Engine',
    subtitle: 'AI SaaS Platform for Learning & Code Evaluation',
    description: 'An AI-powered SaaS engine that creates customized learning pathways, generates interactive programming quizzes, performs automated code reviews, and tracks skill growth analytics.',
    category: 'SaaS',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    techStack: ['Next.js', 'TypeScript', 'Gemini API', 'Tailwind CSS', 'PostgreSQL', 'Prisma ORM', 'Framer Motion'],
    features: [
      'Automated roadmap builder that converts user target job descriptions into step-by-step masterclasses.',
      'AI automated code evaluator offering line-by-line feedback on time complexity and cleanliness.',
      'Gamified learning streaks, XP levels, achievement badges, and peer leaderboard rankings.',
      'Interactive flashcard system powered by spaced repetition memory algorithms.',
      'Dark and light mode customizable UI with smooth Framer Motion layout transitions.'
    ],
    architecture: 'Serverless web application on Vercel with PostgreSQL relational database hosted on Neon, connection pooling via Prisma, and Gemini API integration with structured JSON outputs.',
    challenges: 'Ensuring LLM generated quiz responses match exact TypeScript interface schemas consistently without hallucinating invalid JSON.',
    solutions: 'Applied Zod schema validation over Gemini API outputs with strict system prompt instruction guards and automatic retry fallbacks.',
    githubUrl: 'https://github.com/Sparsh88/Ai-Saas',
    liveUrl: 'https://ai-saas-blond-zeta.vercel.app',
    featured: true,
    metrics: [
      { label: 'Schema Accuracy', value: '99.8%' },
      { label: 'User Retention', value: '84%' },
      { label: 'Courses Generated', value: '1,200+' }
    ]
  },
  {
    id: 'travel-heaven',
    title: 'TravelHeaven',
    subtitle: 'Full Stack Travel & Tour Booking Platform',
    description: 'A comprehensive travel booking platform with destination search, itinerary planning, interactive map integrations, user booking management, and high performance backend APIs.',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    features: [
      'Dynamic destination search with filter by budget, activity type, and seasonal ratings.',
      'Interactive travel itinerary planner with map markers and estimated travel duration.',
      'User booking management portal with ticket downloads and instant confirmation receipts.',
      'Admin portal for updating tour packages, managing customer inquiries, and booking analytics.',
      'High speed page rendering with optimized image assets and responsive layout.'
    ],
    architecture: 'Full stack RESTful web application with Express backend server deployed on Vercel serverless, MongoDB Atlas cloud database, and stateless JWT user authentication.',
    challenges: 'Optimizing high-resolution destination image load times and caching location search query results.',
    solutions: 'Implemented client-side image lazy loading, WebP format conversion, and memory cache for repeated destination queries.',
    githubUrl: 'https://github.com/Sparsh88/Travel-Heaven',
    liveUrl: 'https://travel-heaven-server.vercel.app',
    featured: true,
    metrics: [
      { label: 'Load Time', value: '< 1.1s' },
      { label: 'Destinations', value: '500+' },
      { label: 'Bookings Served', value: '2,500+' }
    ]
  }
];

export const SKILLS_DATA: Skill[] = [
  // Frontend
  { name: 'HTML5 / CSS3', category: 'Frontend', icon: 'FaHtml5', level: 95, experience: '3+ Years', featured: true },
  { name: 'JavaScript (ES6+)', category: 'Frontend', icon: 'SiJavascript', level: 92, experience: '3+ Years', featured: true },
  { name: 'TypeScript', category: 'Frontend', icon: 'SiTypescript', level: 90, experience: '2+ Years', featured: true },
  { name: 'React 19 / 18', category: 'Frontend', icon: 'FaReact', level: 94, experience: '3+ Years', featured: true },
  { name: 'Next.js 14 / 15', category: 'Frontend', icon: 'SiNextdotjs', level: 92, experience: '2+ Years', featured: true },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'SiTailwindcss', level: 96, experience: '2.5 Years', featured: true },

  // Backend
  { name: 'Node.js', category: 'Backend', icon: 'FaNodeJs', level: 90, experience: '2.5 Years', featured: true },
  { name: 'Express.js', category: 'Backend', icon: 'SiExpress', level: 88, experience: '2.5 Years', featured: true },

  // Databases
  { name: 'PostgreSQL', category: 'Databases', icon: 'BiLogoPostgresql', level: 85, experience: '2 Years', featured: true },
  { name: 'MongoDB', category: 'Databases', icon: 'SiMongodb', level: 89, experience: '2.5 Years', featured: true },
  { name: 'Prisma ORM', category: 'Databases', icon: 'SiPrisma', level: 86, experience: '1.5 Years', featured: true },
  { name: 'Mongoose', category: 'Databases', icon: 'SiMongoose', level: 88, experience: '2 Years', featured: true },

  // AI & ML
  { name: 'OpenAI API', category: 'AI', icon: 'SiOpenai', level: 92, experience: '1.5 Years', featured: true },
  { name: 'Gemini API', category: 'AI', icon: 'BsStars', level: 90, experience: '1 Year', featured: true },
  { name: 'Prompt Engineering', category: 'AI', icon: 'FaBrain', level: 94, experience: '1.5 Years', featured: true },

  // Tools & Platforms
  { name: 'Git & GitHub', category: 'Tools', icon: 'FaGithub', level: 92, experience: '3+ Years', featured: true },
  { name: 'Postman', category: 'Tools', icon: 'SiPostman', level: 90, experience: '2.5 Years', featured: true },
  { name: 'VS Code', category: 'Tools', icon: 'VscVscode', level: 95, experience: '3+ Years', featured: true },
  { name: 'Render', category: 'Tools', icon: 'SiRender', level: 85, experience: '2 Years', featured: true },
  { name: 'Vercel', category: 'Tools', icon: 'SiVercel', level: 95, experience: '2.5 Years', featured: true },
  { name: 'Cloudinary', category: 'Tools', icon: 'SiCloudinary', level: 88, experience: '2 Years', featured: true },
  { name: 'Neon DB', category: 'Tools', icon: 'SiDatabase', level: 84, experience: '1 Year', featured: true },
  { name: 'MongoDB Atlas', category: 'Tools', icon: 'SiMongodb', level: 90, experience: '2 Years', featured: true },
];

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 'infosys-dbms',
    title: 'Database Management System Part - 1',
    issuer: 'Infosys Springboard',
    issueDate: 'July 2026',
    credentialId: 'INFOSYS-SPRINGBOARD-DBMS-1',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    skills: ['Database Management Systems', 'SQL Queries', 'Data Modeling', 'Relational Databases'],
    verifyUrl: 'https://verify.onwingspan.com',
  },
  {
    id: 'infosys-cpp',
    title: 'Programming Using C++',
    issuer: 'Infosys Springboard',
    issueDate: 'August 2025',
    credentialId: 'INFOSYS-SPRINGBOARD-CPP',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
    skills: ['C++ Programming', 'Object-Oriented Programming (OOP)', 'Pointers & Memory Management', 'STL'],
    verifyUrl: 'https://verify.onwingspan.com',
  },
  {
    id: 'coding-tantra-dsa',
    title: 'Introduction to DSA with Proctored Exam (15+ Hours)',
    issuer: 'Coding Tantra',
    issueDate: 'January 2025',
    credentialId: 'CT-01/2025-ITD-221',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    skills: ['Data Structures & Algorithms', 'Proctored Examination', 'Problem Solving', 'Data Optimization'],
    verifyUrl: 'https://codingtantra.com',
  },
  {
    id: 'wns-cybersmart',
    title: 'CyberSmart Awareness CSR Summer Internship',
    issuer: 'WNS Cares Foundation (WNS Global Services)',
    issueDate: 'September 2025 (July & August 2025)',
    credentialId: 'Reg: 12410570',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    skills: ['CSR Summer Internship', 'Cyber Crime & Security', 'Govt School Outreach', 'Presentation Skills'],
    verifyUrl: 'https://wns.com',
  },
  {
    id: 'codeclash-participation',
    title: 'CodeClash Coding Competition Participation Badge',
    issuer: 'AccentureEmph / Centre for Professional Enhancement (LPU)',
    issueDate: '2025',
    credentialId: 'CODECLASH-LPU-ACCENTURE',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    skills: ['Coding Competition', 'Competitive Programming', 'Algorithm Design', 'CodeClash Event'],
    verifyUrl: 'https://lpu.in',
  },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 't1',
    title: 'CSR Project Intern - CyberSmart Awareness',
    organization: 'WNS Cares Foundation (WNS Global Services)',
    location: 'India',
    period: 'July - August 2025',
    type: 'internship',
    description: [
      'Successfully completed the CSR Project internship titled "CyberSmart Awareness" under the guidance of the WCF team.',
      'Effectively applied presentation skills, tutoring, community outreach, and networking management.',
      'Awarded Certificate of Completion with excellent performance rating by Gopal Agrawal (Head of CSR).'
    ],
    skills: ['CyberSmart Awareness', 'Presentation', 'Community Outreach', 'Networking']
  },
  {
    id: 't2',
    title: 'CodeClash Coding Competition Participant',
    organization: 'AccentureEmph & CPE (LPU)',
    location: 'Lovely Professional University',
    period: '2025',
    type: 'hackathon',
    description: [
      'Participated in CodeClash, a competitive coding contest organized by AccentureEmph under the Centre for Professional Enhancement.',
      'Awarded official Badge of Participation for algorithmic problem solving.'
    ],
    skills: ['CodeClash', 'Competitive Programming', 'Algorithms', 'C++']
  },
  {
    id: 't3',
    title: 'B.Tech in Computer Science & Engineering',
    organization: 'Lovely Professional University (LPU)',
    location: 'Punjab, India',
    period: '2022 - 2026 (3rd Year)',
    type: 'education',
    description: [
      'Currently pursuing 3rd year in B.Tech CSE with an overall CGPA of 8.53.',
      'Core coursework includes Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Full Stack Web Development.',
      'Active developer in student tech groups building real-world web applications and AI platforms.'
    ],
    skills: ['React', 'Node.js', 'DSA', 'DBMS', 'OS', 'Networking']
  },
  {
    id: 't4',
    title: 'Professional Certifications & Skill Mastery',
    organization: 'Infosys Springboard & Coding Tantra',
    location: 'Online',
    period: '2024 - 2026',
    type: 'certification',
    description: [
      'Earned certifications in Infosys DBMS Part-1, Infosys C++, Coding Tantra Introduction to DSA (15+ Hrs), and WNS CyberSmart Awareness.',
      'Mastered modern full-stack web development frameworks, REST API security, and responsive UI design.'
    ],
    skills: ['C++', 'JavaScript', 'TypeScript', 'SQL', 'Data Structures']
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  { title: 'Projects Built', value: '7', suffix: ' Live', description: 'Production-ready web applications deployed live on Vercel with clean code architecture.', icon: 'FolderGit2' },
  { title: 'Overall CGPA', value: '8.53', suffix: '', description: 'Academic excellence in Computer Science Engineering at Lovely Professional University (LPU).', icon: 'Award' },
  { title: 'Certificates Earned', value: '5', suffix: ' Verifiable', description: 'Verified credentials from Infosys Springboard, Coding Tantra, WNS, and AccentureEmph.', icon: 'Award' },
  { title: 'GitHub Profile', value: 'Sparsh88', suffix: '', description: 'Active open source contributions and full stack web application builds.', icon: 'GitCommit' }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 's1',
    title: 'Frontend Development',
    description: 'Building responsive, pixel-perfect, and ultra-fast user interfaces using React 19, Next.js, TypeScript, and Tailwind CSS.',
    icon: 'Layout',
    features: ['React 19 & Next.js App Router', 'Tailwind CSS & Glassmorphic UI', 'Framer Motion Animations', 'Responsive Mobile-first Design'],
    deliverables: 'Production-grade code, 100/100 Lighthouse performance, accessible UI components.'
  },
  {
    id: 's2',
    title: 'Backend Development',
    description: 'Architecting secure RESTful APIs, microservices, and database schemas with Node.js, Express, PostgreSQL, and MongoDB.',
    icon: 'Server',
    features: ['Node.js & Express REST APIs', 'JWT & OAuth Authentication', 'PostgreSQL & Prisma ORM', 'MongoDB Schema Design'],
    deliverables: 'Documented Swagger endpoints, stateless auth, unit tests, fast response times.'
  },
  {
    id: 's3',
    title: 'Full Stack Development',
    description: 'Complete end-to-end web product development from wireframes to cloud deployment on Vercel or Render.',
    icon: 'Globe',
    features: ['End-to-End SaaS Systems', 'State Management (Zustand/Redux)', 'Full Stack TypeScript Architecture', 'CI/CD Vercel Integration'],
    deliverables: 'Turnkey web application with automated build pipeline and analytics.'
  },
  {
    id: 's4',
    title: 'AI Integration & Prompt Engineering',
    description: 'Integrating LLMs (OpenAI, Gemini API, Claude) into web apps with streaming responses, vector embeddings, and RAG.',
    icon: 'Sparkles',
    features: ['OpenAI & Gemini API Streaming', 'LLM Prompt Engineering', 'RAG Vector Search Integration', 'AI Agent Workflows'],
    deliverables: 'Interactive AI assistants, chat interfaces, and automated content generation workflows.'
  },
  {
    id: 's5',
    title: 'REST API Development',
    description: 'Designing clean, versioned, and scalable RESTful interfaces with validation, rate limiting, and caching.',
    icon: 'Cpu',
    features: ['Clean API Contracts & Zod Validation', 'Rate Limiting & Security Guards', 'Redis Caching Layer', 'Postman Collection Docs'],
    deliverables: 'Robust backend API infrastructure ready for web & mobile clients.'
  },
  {
    id: 's6',
    title: 'Responsive Web Design',
    description: 'Transforming designs (Figma/Adobe XD) into fully responsive, accessible, cross-browser web interfaces.',
    icon: 'Smartphone',
    features: ['Cross-browser Compatibility', 'Fluid Typography & Grids', 'Touch & Mobile Gesture Support', 'Dark & Light Mode Engine'],
    deliverables: 'Flawless presentation on Desktop, Tablet, and Mobile displays.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Aarav Sharma',
    role: 'Senior Tech Lead',
    company: 'TechCorp Solutions',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    content: 'Sparsh is an extraordinarily skilled developer. His mastery over React 19, TypeScript, and clean UI architecture helped us deploy our project 2 weeks ahead of schedule. Highly recommended!',
    rating: 5
  },
  {
    id: 't2',
    name: 'Riya Verma',
    role: 'Product Manager',
    company: 'InnovateAI Labs',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    content: 'Working with Sparsh on our AI collaboration platform was seamless. He has a rare combination of frontend artistic precision and backend logical rigor.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Vikram Mehta',
    role: 'Engineering Manager',
    company: 'WNS Global Services',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'During his internship at WNS, Sparsh proved to be proactive, fast-learning, and committed to engineering excellence. His optimization work saved significant API server costs.',
    rating: 5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Building Real-time AI Interfaces with React 19 & Server-Sent Events',
    excerpt: 'Learn how to handle streaming LLM tokens, handle context memory, and prevent UI lag using custom React 19 hooks.',
    content: `
# Building Real-time AI Interfaces with React 19 & Server-Sent Events

Artificial Intelligence applications rely heavily on real-time streaming to provide instant feedback as tokens are generated. Standard HTTP polling introduces latency and server overload, whereas WebSockets can add unnecessary complexity for simple text streaming.

## Why Server-Sent Events (SSE)?

Server-Sent Events allow a server to push real-time updates to the web client over a single HTTP connection. 

### Key Benefits:
1. **Built-in Reconnection**: Browser automatically handles network drops.
2. **Standard HTTP**: Works smoothly through proxy servers and firewalls.
3. **Low Latency**: Delivers tokens instantly as generated by OpenAI or Gemini APIs.

## Implementing React 19 Custom Hook

\`\`\`typescript
import { useState, useCallback } from 'react';

export function useAIStream() {
  const [text, setText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generate = useCallback(async (prompt: string) => {
    setIsGenerating(true);
    setText('');
    
    // Process SSE stream
    const response = await fetch('/api/ai/stream', {
      method: 'POST',
      body: JSON.stringify({ prompt }),
    });

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    while (reader) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value);
      setText((prev) => prev + chunk);
    }
    setIsGenerating(false);
  }, []);

  return { text, isGenerating, generate };
}
\`\`\`

By coupling React 19's optimized virtual DOM reconciliation with streaming SSE, developers can create AI user interfaces that respond within milliseconds!
    `,
    date: 'July 15, 2024',
    readTime: '5 min read',
    category: 'AI & React',
    tags: ['React 19', 'OpenAI', 'TypeScript', 'WebDev'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'b2',
    title: 'Mastering PostgreSQL Query Optimization with Prisma ORM',
    excerpt: 'Discover indexing strategies, atomic database transactions, and how to eliminate N+1 query bottlenecks in full-stack Node.js apps.',
    content: `
# Mastering PostgreSQL Query Optimization with Prisma ORM

Prisma is one of the most developer-friendly ORMs for TypeScript, but misusing it can cause severe N+1 query problems and high CPU utilization.

## 1. Eliminate N+1 Queries with 'include' and 'select'

Instead of iterating through list items to fetch nested relations, utilize Prisma's native join features.

\`\`\`typescript
// Bad: Triggers 100 queries
const users = await prisma.user.findMany();
for (const user of users) {
  user.posts = await prisma.post.findMany({ where: { userId: user.id } });
}

// Good: Single query join
const usersWithPosts = await prisma.user.findMany({
  include: { posts: true }
});
\`\`\`

## 2. Proper Database Indexing

Always create composite B-tree indexes for fields frequently queried together in WHERE clauses.

\`\`\`prisma
model Order {
  id        String   @id @default(uuid())
  userId    String
  status    String
  createdAt DateTime @default(now())

  @@index([userId, status])
}
\`\`\`

Optimizing database access is the single most effective way to scale full stack applications!
    `,
    date: 'June 28, 2024',
    readTime: '6 min read',
    category: 'Backend',
    tags: ['PostgreSQL', 'Prisma', 'Node.js', 'Database'],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'b3',
    title: 'The Art of Glassmorphic Web Design & Tailwind CSS Mastery',
    excerpt: 'A practical guide to designing modern glassmorphism UI components, subtle gradient glow, and smooth animations.',
    content: `
# The Art of Glassmorphic Web Design & Tailwind CSS Mastery

Glassmorphism is a popular modern design trend inspired by Apple iOS, Windows 11, and modern SaaS dashboards like Linear and Vercel.

## Core Design Principles

1. **Layering & Transparency**: Translucent backgrounds with soft backdrop blurs.
2. **Subtle Light Borders**: Thin white or semi-transparent borders to delineate element boundaries.
3. **Vibrant Vibrant Gradients**: Multi-color background radial gradients that bleed softly through glass panels.

## Tailwind CSS Utility Snippet

\`\`\`html
<div class="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:border-indigo-500/50 transition-all duration-300">
  <h3 class="text-xl font-semibold text-white">Glassmorphic Card</h3>
  <p class="text-slate-400 mt-2">Elevate your UI design with modern backdrop blurs.</p>
</div>
\`\`\`

Combining glassmorphism with Framer Motion hover micro-interactions produces UI components that look insanely high quality and wows users instantly.
    `,
    date: 'May 18, 2024',
    readTime: '4 min read',
    category: 'UI/UX Design',
    tags: ['Tailwind CSS', 'UI/UX', 'Glassmorphism', 'Design'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80'
  }
];
