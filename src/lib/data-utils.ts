import { projects } from "@/data/projects";
import { Project } from "@/data/types";
import { experiences } from "@/data/experience";
import { skills } from "@/data/skills";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";

export const getAllProjects = (): Project[] => {
  return projects;
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter((project) => project.category === category);
};

export const getRecentProjects = (limit: number = 3): Project[] => {
  return projects
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

export type ExperienceItem = (typeof experiences)[number];
export const getExperience = (): ExperienceItem[] => experiences;

export type SkillItem = (typeof skills)[number];
export const getSkills = (): SkillItem[] => skills;
export const getSkillsByCategory = (category: SkillItem["category"]): SkillItem[] =>
  skills.filter((s) => s.category === category);

export type EducationItem = (typeof education)[number];
export const getEducation = (): EducationItem[] => education;

export type CertificationItem = (typeof certifications)[number];
export const getCertifications = (): CertificationItem[] => certifications;
