export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  gallery?: string[];
  technologies: string[];
  category: "web" | "mobile" | "desktop" | "api";
  status: "completed" | "in-progress" | "archived";
  featured: boolean;
  github?: string;
  demo?: string;
  date: string;
  slug: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "tools" | "design";
  level: "beginner" | "intermediate" | "advanced" | "expert";
  icon?: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  highlights: string[];
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}
