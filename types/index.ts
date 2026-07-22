export interface SocialLink {
  label: string;
  url: string;
  ariaLabel: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  detail: string;
}

export interface ProjectMedia {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectData {
  summary: string;
  source: string;
  dimensions: string;
  target?: string;
  variables: string[];
  privacy?: string;
}

export interface ProjectVideo {
  src: string;
  poster: string;
  title: string;
  description: string;
  duration: string;
}

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  status: string;
  shortDescription: string;
  fullDescription: string;
  context: string;
  problem: string;
  objectives: string[];
  role: string[];
  data: ProjectData;
  methodology: string[];
  pipeline: string[];
  features: string[];
  results: string[];
  technologies: string[];
  skills: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  notebookUrl: string | null;
  image: string;
  imageAlt: string;
  gallery: ProjectMedia[];
  video?: ProjectVideo;
  metrics: ProjectMetric[];
  challenges: string[];
  solutions: string[];
  lessons: string[];
  limits: string[];
  futureImprovements: string[];
  verificationNote: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  secondary?: boolean;
}

export interface EducationItem {
  period: string;
  degree: string;
  details?: string;
  institution?: string;
  skills: string[];
}
