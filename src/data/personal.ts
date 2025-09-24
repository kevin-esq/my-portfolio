export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
  languages: Array<{
    name: string;
    level: string;
  }>;
  interests: string[];
  competencies: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Kevin Esquivel",
  title: "Full-Stack Developer",
  subtitle: "Modern Web Applications | Backend Systems | Database Solutions",
  location: "Chetumal, Q. Roo, Mexico",
  phone: "(+52) 983-133-5666",
  email: "dev.kevinesquivel@gmail.com",
  linkedin: "https://linkedin.com/in/esquivelhernandez/",
  github: "https://github.com/kevin-esq",
  summary:
    "Dedicated Full-Stack Developer with solid foundation in modern web technologies and backend systems. Experienced in developing applications using React, Spring Boot, and .NET with focus on clean code and best practices. Proven ability to deliver functional solutions that solve real business problems.",
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Professional (B2+)" },
  ],
  interests: [
    "Cross-platform mobile solutions",
    "Backend architecture & microservices",
    "Database performance optimization",
    "Open source contributions",
    "DevOps & deployment automation",
  ],
  competencies: [
    "Clean Code Practices",
    "Problem Solving",
    "Database Design",
    "API Development",
    "Team Collaboration",
    "Continuous Learning",
    "Attention to Detail",
    "Git Workflows",
    "Code Review",
    "Debugging",
    "Testing",
    "Documentation",
  ],
};

export interface LearningArea {
  title: string;
  topics: string[];
}

export const continuousLearning: LearningArea[] = [
  {
    title: "Advanced React Patterns & Performance",
    topics: ["React Patterns", "Performance Optimization", "Modern Hooks"],
  },
  {
    title: "Cloud Architecture (AWS/Azure) fundamentals",
    topics: ["Cloud Deployment", "Serverless", "Microservices"],
  },
  {
    title: "Database optimization & performance tuning",
    topics: ["Query Optimization", "Indexing", "Performance Monitoring"],
  },
  {
    title: "Agile Development & Scrum practices",
    topics: ["Scrum", "Kanban", "Team Collaboration"],
  },
  {
    title: "Mobile development best practices",
    topics: ["React Native", "Cross-platform", "Mobile UX"],
  },
];

export interface CommunityActivity {
  platform: string;
  activity: string;
  description: string;
}

export const communityInvolvement: CommunityActivity[] = [
  {
    platform: "Stack Overflow",
    activity: "Active contributor",
    description: "Helping developers solve technical problems",
  },
  {
    platform: "Dev.to",
    activity: "Technical article writer",
    description: "Sharing knowledge and best practices",
  },
  {
    platform: "HackerRank",
    activity: "Problem solver",
    description: "Practicing algorithms and data structures",
  },
  {
    platform: "GitHub",
    activity: "Open source contributions",
    description: "Contributing to open source projects",
  },
];
