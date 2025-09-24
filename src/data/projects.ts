import { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Link Management API",
    description: "RESTful API for URL shortening with clean architecture principles",
    longDescription:
      "RESTful API for URL shortening with clean architecture principles. Implemented proper error handling, input validation, and structured logging for maintainable code.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    technologies: ["C#", ".NET Core", "RESTful APIs", "Clean Architecture"],
    category: "api",
    status: "completed",
    featured: true,
    github: "https://github.com/KevinEsquivel03/link-shortener-api",
    date: "2024-01",
    slug: "link-shortener-api",
  },
  {
    id: 2,
    title: "Inventory Management System",
    description: "Backend system with modular architecture for inventory operations",
    longDescription:
      "Backend system with modular architecture for inventory operations. Features comprehensive JPA implementation, service layer design, and unit testing.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
    technologies: ["Java", "Spring Boot", "JPA", "JUnit", "Maven"],
    category: "api",
    status: "completed",
    featured: true,
    github: "https://github.com/KevinEsquivel03/inventory-management-system",
    date: "2024-02",
    slug: "inventory-management-system",
  },
  {
    id: 3,
    title: "Wildlife Conservation App",
    description: "Mobile application with GPS functionality and form validation",
    longDescription:
      "Mobile application with GPS functionality, form validation, and paginated data display. Built with focus on user experience and code maintainability.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    technologies: ["React Native", "TypeScript", "GPS Integration", "Form Validation"],
    category: "mobile",
    status: "completed",
    featured: true,
    github: "https://github.com/KevinEsquivel03/fauna-silvestre-client",
    date: "2024-07",
    slug: "fauna-silvestre-app",
  },
];
