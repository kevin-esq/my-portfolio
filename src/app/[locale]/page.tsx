"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronDownIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import { getFeaturedProjects } from "@/lib/data-utils";
import { useNavigation } from "@/hooks/useNavigation";
import Link from "next/link";

export default function HomePage() {
  const t = useTranslations("home");
  const { getLocalizedPath } = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  const featuredProjects = getFeaturedProjects();
  const roles = [t("roles.fullStack"), t("roles.frontend"), t("roles.backend"), t("roles.mobile")];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "projects" && entry.isIntersecting) setIsProjectsVisible(true);
          if (entry.target.id === "about" && entry.isIntersecting) setIsAboutVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    const projectsSection = document.getElementById("projects");
    const aboutSection = document.getElementById("about");
    if (projectsSection) observer.observe(projectsSection);
    if (aboutSection) observer.observe(aboutSection);

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [roles.length]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const Divider = () => (
    <div className="relative my-20 h-1 w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 opacity-50 blur-md" />
      <div className="relative h-1 w-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500" />
    </div>
  );

  return (
    <div className="from-background to-muted min-h-screen bg-gradient-to-b">
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-8 text-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-72 w-72 animate-pulse rounded-full bg-emerald-500/20 blur-3xl dark:bg-emerald-400/20" />
          <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-cyan-500/20 blur-3xl dark:bg-cyan-400/20" />
          <div className="animate-spin-slow absolute top-1/2 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-400/10 to-violet-400/10 blur-3xl" />
        </div>
        <div
          className={`mx-auto max-w-5xl transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-6">
            <span className="group border-primary/20 bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-md">
              <span className="bg-primary h-2 w-2 animate-ping rounded-full"></span>
              {t("availableForWork")}
            </span>
          </div>
          <h1 className="mb-6 text-6xl font-extrabold tracking-tight md:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 bg-clip-text text-transparent">
              {t("title")}
            </span>
            <br />
            <span className="text-foreground">{t("name")}</span>
          </h1>
          <div className="mb-8 flex h-16 items-center justify-center overflow-hidden">
            <h2 className="text-muted-foreground text-2xl font-light md:text-3xl">
              <span className="inline-block min-w-[300px] text-center">
                <span
                  key={currentRole}
                  className="animate-fade-in-up hover:text-primary inline-block transition-colors duration-500"
                >
                  {roles[currentRole]}
                </span>
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground hover:text-foreground mx-auto mb-12 max-w-3xl text-xl leading-relaxed transition-colors duration-300 md:text-2xl">
            {t("description")}
          </p>
          <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={() => scrollToSection("projects")}
              className="group focus:ring-primary relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:outline-none active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2 transition-all duration-200">
                {t("viewMyWork")}
                <ArrowRightIcon className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="group border-border bg-card text-foreground hover:border-primary hover:text-primary focus:ring-primary inline-flex items-center justify-center rounded-full border-2 px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:outline-none active:scale-95"
            >
              <span>{t("letsTalk")}</span>
            </button>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:bg-accent/50 hover:text-foreground focus:ring-accent rounded-full p-3 transition-all duration-200 hover:scale-110 focus:ring-2 focus:outline-none"
            >
              <ChevronDownIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      <Divider />

      <section
        id="about"
        className="from-muted/40 to-background bg-gradient-to-b px-8 py-20 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-6xl">
          <div
            className={`mb-16 text-center transition-all duration-1000 ${
              isAboutVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-foreground hover:text-primary mb-4 text-4xl font-bold transition-colors duration-300 md:text-5xl">
              {t("aboutMe")}
            </h2>
            <p className="text-muted-foreground hover:text-foreground mx-auto max-w-2xl text-xl transition-colors duration-300">
              {t("aboutDescription")}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "⚡",
                title: t("technicalSkills"),
                content: (
                  <ul className="text-muted-foreground space-y-2 text-left">
                    <li className="hover:text-primary transition-colors duration-200">
                      • {t("skills.frontend")}
                    </li>
                    <li className="hover:text-primary transition-colors duration-200">
                      • {t("skills.backend")}
                    </li>
                    <li className="hover:text-primary transition-colors duration-200">
                      • {t("skills.styling")}
                    </li>
                    <li className="hover:text-primary transition-colors duration-200">
                      • {t("skills.tools")}
                    </li>
                  </ul>
                ),
                gradient: "from-emerald-500/10 to-cyan-500/10",
              },
              {
                icon: "🚀",
                title: t("experience"),
                content: (
                  <p className="text-muted-foreground">
                    {t("experienceYears")} {t("experienceDescription")}
                  </p>
                ),
                gradient: "from-violet-500/10 to-rose-500/10",
              },
              {
                icon: "🎨",
                title: t("designFocus"),
                content: <p className="text-muted-foreground">{t("designDescription")}</p>,
                gradient: "from-amber-500/10 to-rose-500/10",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group border-border bg-card rounded-2xl border p-8 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                  isAboutVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.gradient} text-3xl`}
                >
                  {item.icon}
                </div>
                <h3 className="text-card-foreground mb-4 text-xl font-semibold">{item.title}</h3>
                {item.content}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <section id="projects" className="from-background to-muted bg-gradient-to-b px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <div
            className={`mb-16 text-center transition-all duration-1000 ${
              isProjectsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-foreground hover:text-primary mb-4 text-4xl font-bold md:text-5xl">
              {t("featuredProjects")}
            </h2>
            <p className="text-muted-foreground text-xl">{t("projectsSubtitle")}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group border-border bg-card relative overflow-hidden rounded-2xl border shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  isProjectsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <div className="bg-card/90 text-foreground rounded-lg px-4 py-2 text-sm font-medium backdrop-blur-sm">
                      Ver proyecto
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-background/40 text-foreground hover:bg-background/60 rounded-full p-2 backdrop-blur-sm hover:scale-110"
                      >
                        <ExternalLinkIcon className="h-4 w-4" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-background/40 text-foreground hover:bg-background/60 rounded-full p-2 backdrop-blur-sm hover:scale-110"
                      >
                        <GitHubIcon className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-foreground group-hover:text-primary mb-2 text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-accent text-accent-foreground rounded-full px-3 py-1 text-sm">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="group text-primary hover:bg-primary/10 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium hover:scale-105">
              {t("viewAllProjects")}
              <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      <Divider />

      <section
        id="contact"
        className="from-muted/40 to-background bg-gradient-to-b px-8 py-20 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-foreground hover:text-primary mb-6 text-4xl font-bold md:text-5xl">
            {t("letsWorkTogether")}
          </h2>
          <p className="text-muted-foreground hover:text-foreground mx-auto mb-8 max-w-2xl text-xl">
            {t("contactDescription")}
          </p>
          <Link
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 px-8 py-4 font-medium text-white hover:scale-105 hover:shadow-xl"
            href={getLocalizedPath("/contact")}
            style={{ textDecoration: "none" }}
          >
            {t("getInTouch")}
            <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1" />
          </Link>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:dev.kevinesquivel@gmail.com"
              className="group text-muted-foreground hover:bg-card hover:text-primary flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium hover:scale-105"
            >
              <MailIcon className="h-4 w-4" />
              Email
            </a>
            <a
              href="tel:+529831335666"
              className="group text-muted-foreground hover:bg-card hover:text-primary flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium hover:scale-105"
            >
              <PhoneIcon className="h-4 w-4" />
              Teléfono
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
