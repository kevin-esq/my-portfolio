"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ExternalLinkIcon, SearchIcon, TagIcon } from "lucide-react";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import { getAllProjects } from "@/lib/data-utils";
import { tOr } from "@/lib/i18n-utils";

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const tCommon = useTranslations("common");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTech, setSelectedTech] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const allProjects = getAllProjects();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesTech =
      !selectedTech ||
      project.technologies.some((tech) => tech.toLowerCase().includes(selectedTech.toLowerCase()));
    const matchesSearch =
      !searchTerm ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesTech && matchesSearch;
  });

  const allTechnologies = Array.from(
    new Set(allProjects.flatMap((project) => project.technologies))
  ).sort();

  const categories = [
    { key: "all", label: t("categories.all") },
    { key: "web", label: t("categories.web") },
    { key: "mobile", label: t("categories.mobile") },
    { key: "desktop", label: t("categories.desktop") },
    { key: "api", label: t("categories.api") },
  ];

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedTech("");
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden px-8 py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-64 w-64 animate-pulse rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-400/10" />
          <div className="animation-delay-1000 absolute right-1/4 bottom-1/4 h-80 w-80 animate-pulse rounded-full bg-lime-500/10 blur-3xl dark:bg-lime-400/10" />
        </div>

        <div className="mx-auto max-w-6xl text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">
              <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-lime-600 bg-clip-text text-transparent dark:from-emerald-400 dark:via-emerald-300 dark:to-lime-400">
                {t("title")}
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-900 md:text-2xl dark:text-slate-300">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-8 py-8 dark:bg-slate-800/50">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-6 lg:flex-row">
            <div className="relative max-w-md flex-1">
              <SearchIcon className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-slate-400" />
              <input
                type="text"
                placeholder={tCommon("search")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white py-3 pr-4 pl-10 text-slate-900 focus:border-transparent focus:ring-2 focus:ring-emerald-500 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`rounded-lg px-4 py-2 font-medium transition-all duration-200 ${
                    selectedCategory === category.key
                      ? "bg-emerald-600 text-white shadow-lg"
                      : "border border-slate-300 bg-white text-gray-900 hover:border-emerald-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-emerald-400"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="relative">
              <select
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
                className="appearance-none rounded-lg border border-slate-300 bg-white px-4 py-3 pr-10 text-slate-900 focus:border-transparent focus:ring-2 focus:ring-emerald-500 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
              >
                <option value="">{t("filters.technology")}</option>
                {allTechnologies.map((tech) => (
                  <option key={tech} value={tech}>
                    {tech}
                  </option>
                ))}
              </select>
              <TagIcon className="pointer-events-none absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 transform text-slate-400" />
            </div>

            {(selectedCategory !== "all" || selectedTech || searchTerm) && (
              <button
                onClick={clearFilters}
                className="px-4 py-2 font-medium text-emerald-600 transition-colors duration-200 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
              >
                {t("filters.clear")}
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="px-8 py-20">
        <div className="mx-auto max-w-6xl">
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center">
              <div className="mb-6 text-6xl">🔍</div>
              <h3 className="mb-4 text-2xl font-semibold text-black dark:text-slate-50">
                {t("empty.title")}
              </h3>
              <p className="mb-8 text-gray-900 dark:text-slate-300">{t("empty.description")}</p>
              <button
                onClick={clearFilters}
                className="rounded-lg bg-emerald-600 px-6 py-3 text-white transition-colors duration-200 hover:bg-emerald-700"
              >
                {t("filters.clear")}
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8 flex items-center justify-between">
                <p className="text-gray-900 dark:text-slate-300">
                  {t("count", { count: filteredProjects.length, total: allProjects.length })}
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`group transform overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800 ${
                      isVisible ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/10" />

                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/30"
                            title={t("projectDetails.demo")}
                          >
                            <ExternalLinkIcon className="h-4 w-4" />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/30"
                            title={t("projectDetails.github")}
                          >
                            <GitHubIcon className="h-4 w-4" />
                          </a>
                        )}
                      </div>

                      <div className="absolute top-4 left-4">
                        <span className="rounded-full bg-emerald-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          {categories.find((cat) => cat.key === project.category)?.label ||
                            project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="mb-3 text-xl font-semibold text-black transition-colors duration-200 group-hover:text-emerald-600 dark:text-slate-50 dark:group-hover:text-emerald-400">
                        {tOr(t, `data.projects.${project.slug}.title`, project.title)}
                      </h3>
                      <p className="mb-4 line-clamp-3 text-gray-900 dark:text-slate-300">
                        {tOr(t, `data.projects.${project.slug}.description`, project.description)}
                      </p>

                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="rounded-full bg-slate-100 px-3 py-1 text-sm text-gray-900 dark:bg-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-500 dark:bg-slate-700 dark:text-slate-400">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {project.status && (
                        <div className="flex items-center gap-2">
                          <div
                            className={`h-2 w-2 rounded-full ${
                              project.status === "completed"
                                ? "bg-green-500"
                                : project.status === "in-progress"
                                  ? "bg-yellow-500"
                                  : "bg-gray-400"
                            }`}
                          />
                          <span className="text-sm text-slate-500 capitalize dark:text-slate-400">
                            {project.status.replace("-", " ")}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
