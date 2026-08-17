export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle?: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl?: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  backendUrl?: string;
  featured: boolean;
  type: 'fullstack' | 'ai-saas' | 'realtime' | 'utility';
  architecture?: {
    frontend?: string;
    backend?: string;
    database?: string;
    aiOrSpecial?: string;
  };
  keyFeatures?: string[];
  metricsOrCredentials?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    icon?: string;
    level?: string;
    badgeColor?: string;
  }[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skillsLearned: string[];
}

export interface EducationInfo {
  degree: string;
  field: string;
  institution: string;
  timeline: string;
  location: string;
  description: string;
}

export interface ProfileInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  university: string;
  education: EducationInfo;
  github: string;
  linkedin: string;
  email: string;
  location: string;
  availabilityStatus: string;
}
