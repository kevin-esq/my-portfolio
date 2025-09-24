import { Experience } from "./types";

export const experiences: Experience[] = [
  {
    id: 1,
    position: "Full-Stack Developer",
    company: "Mayasur Systems",
    location: "Chetumal, Q. Roo, Mexico",
    startDate: "2024-07",
    endDate: undefined,
    description:
      "Developing mobile and web applications with focus on performance and user experience. Contributing to team productivity through automation and organized workflows.",
    technologies: ["React Native", "TypeScript", "GPS Integration", "Mikrotik", "TP-Link"],
    achievements: [
      "Developed mobile application 'Fauna Silvestre' using React Native with GPS integration",
      "Improved application performance by 25% through efficient data handling",
      "Contributed to team productivity through automation and organized workflows",
      "Configured network infrastructure using Mikrotik and TP-Link equipment",
    ],
  },
  {
    id: 2,
    position: "Technology Intern",
    company: "Universidad Autónoma de Q. Roo",
    location: "Chetumal, Q. Roo, Mexico",
    startDate: "2022-09",
    endDate: "2023-03",
    description:
      "Built inventory management systems and tracking solutions using Microsoft Power Platform and SharePoint.",
    technologies: ["Power Apps", "SharePoint", "QR Technology", "Microsoft 365"],
    achievements: [
      "Built inventory system using Power Apps and SharePoint, reducing errors by 30%",
      "Developed QR-based tracking solution decreasing audit time by 40%",
      "Created course search interface improving satisfaction by 20%",
    ],
  },
];
