export type ThemeMode = 'dark' | 'light';
export type AccentTheme = 'violet' | 'cyan' | 'emerald' | 'rose';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Full Stack' | 'AI & ML' | 'SaaS' | 'Mobile/Web';
  image: string;
  techStack: string[];
  features: string[];
  architecture: string;
  challenges: string;
  solutions: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Databases' | 'AI' | 'Tools';
  icon: string;
  level: number; // 0 - 100
  experience: string;
  featured?: boolean;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  image: string;
  skills: string[];
  verifyUrl: string;
  downloadUrl?: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  type: 'education' | 'experience' | 'internship' | 'hackathon' | 'certification';
  description: string[];
  skills: string[];
}

export interface Achievement {
  title: string;
  value: string | number;
  suffix?: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  deliverables: string;
}
