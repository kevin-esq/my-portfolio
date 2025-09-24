"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDownIcon, ArrowRightIcon, ExternalLinkIcon } from "lucide-react";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import { getFeaturedProjects } from "@/lib/data-utils";

export default function HomePage() {
  const t = useTranslations("home");
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const featuredProjects = getFeaturedProjects();

  const roles = [t("roles.fullStack"), t("roles.frontend"), t("roles.backend"), t("roles.mobile")];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-8 text-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-64 w-64 animate-pulse rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-400/10" />
          <div className="animation-delay-1000 absolute right-1/4 bottom-1/4 h-80 w-80 animate-pulse rounded-full bg-lime-500/10 blur-3xl dark:bg-lime-400/10" />
          <div className="animate-spin-slow absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-emerald-500/5 dark:bg-emerald-400/5" />
        </div>

        <div
          className={`mx-auto max-w-5xl transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 dark:border-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400"></span>
              {t("availableForWork")}
            </span>
          </div>

          <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-lime-600 bg-clip-text text-transparent dark:from-emerald-400 dark:via-emerald-300 dark:to-lime-400">
              {t("title")}
            </span>
            <br />
            <span className="text-foreground">{t("name")}</span>
          </h1>

          <div className="mb-8 flex h-16 items-center justify-center">
            <h2 className="text-muted-foreground text-2xl font-light md:text-3xl">
              <span className="inline-block min-w-[300px] text-center">
                <span key={currentRole} className="animate-fade-in-up inline-block">
                  {roles[currentRole]}
                </span>
              </span>
            </h2>
          </div>

          <p className="text-muted-foreground mx-auto mb-12 max-w-3xl text-xl leading-relaxed md:text-2xl">
            {t("description")}
          </p>

          <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-emerald-600 to-lime-600 px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-900"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t("viewMyWork")}
                <ArrowRightIcon className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-lime-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 bg-white px-8 py-4 text-lg font-medium text-gray-900 transition-all duration-300 hover:scale-105 hover:border-emerald-500 hover:text-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-400 dark:focus:ring-offset-slate-900"
            >
              {t("letsTalk")}
            </button>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="rounded-full p-2 text-slate-400 transition-colors duration-200 hover:text-slate-600 dark:hover:text-slate-200"
              aria-label={t("scrollDown")}
            >
              <ChevronDownIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-100 px-8 py-20 dark:bg-slate-800/50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-foreground mb-4 text-4xl font-bold md:text-5xl">{t("aboutMe")}</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              {t("aboutDescription")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="group bg-card border-border hover:border-primary rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-3xl transition-transform duration-300 group-hover:scale-110 dark:bg-emerald-400/20">
                ⚡
              </div>
              <h3 className="text-card-foreground mb-4 text-xl font-semibold">
                {t("technicalSkills")}
              </h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• {t("skills.frontend")}</li>
                <li>• {t("skills.backend")}</li>
                <li>• {t("skills.styling")}</li>
                <li>• {t("skills.tools")}</li>
              </ul>
            </div>

            <div className="group bg-card border-border hover:border-primary rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-500/10 text-3xl transition-transform duration-300 group-hover:scale-110 dark:bg-lime-400/20">
                🚀
              </div>
              <h3 className="text-card-foreground mb-4 text-xl font-semibold">{t("experience")}</h3>
              <p className="text-muted-foreground">
                {t("experienceYears")} {t("experienceDescription")}
              </p>
            </div>

            <div className="group bg-card border-border hover:border-primary rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-3xl transition-transform duration-300 group-hover:scale-110 dark:bg-emerald-400/20">
                🎨
              </div>
              <h3 className="text-card-foreground mb-4 text-xl font-semibold">
                {t("designFocus")}
              </h3>
              <p className="text-muted-foreground">{t("designDescription")}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl dark:text-slate-50">
              {t("featuredProjects")}
            </h2>
            <p className="text-xl text-gray-900 dark:text-slate-300">{t("projectsSubtitle")}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/10" />

                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white/20 p-2 text-white transition-colors duration-200 hover:bg-white/30"
                      >
                        <ExternalLinkIcon className="h-4 w-4" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white/20 p-2 text-white transition-colors duration-200 hover:bg-white/30"
                      >
                        <GitHubIcon className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-black dark:text-slate-50">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-gray-900 dark:text-slate-300">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600 dark:bg-slate-700 dark:text-slate-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 font-medium text-emerald-600 transition-colors duration-200 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">
              {t("viewAllProjects")}
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-100 px-8 py-20 dark:bg-slate-800/50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-black md:text-5xl dark:text-slate-50">
            {t("letsWorkTogether")}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-900 dark:text-slate-300">
            {t("contactDescription")}
          </p>
          <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-lime-600 px-8 py-4 font-medium text-white transition-transform duration-200 hover:scale-105 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-slate-900">
            {t("getInTouch")}
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
