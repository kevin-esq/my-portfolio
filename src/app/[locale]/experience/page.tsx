"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import {
  BriefcaseIcon,
  GraduationCapIcon,
  AwardIcon,
  CalendarIcon,
  MapPinIcon,
  ExternalLinkIcon,
} from "lucide-react";
import { getExperience, getEducation, getCertifications } from "@/lib/data-utils";
import { tOr } from "@/lib/i18n-utils";

export default function ExperiencePage() {
  const t = useTranslations("experience");
  const tCommon = useTranslations("common");
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("work");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const workExperience = getExperience();

  const education = getEducation();

  const certifications = getCertifications();

  const formatPeriod = (start: string, end?: string) => {
    const startYear = start.slice(0, 4);
    const endYear = end ? end.slice(0, 4) : t("timeline.present");
    return `${startYear} - ${endYear}`;
  };

  const skillCategories = [
    {
      title: t("skills.technical"),
      skills: [
        { name: "JavaScript/TypeScript", level: 95 },
        { name: "React/React Native", level: 90 },
        { name: "Java/Spring Boot", level: 85 },
        { name: "C#/.NET Core", level: 80 },
        { name: "Node.js/Express", level: 75 },
        { name: "PostgreSQL/MySQL", level: 80 },
      ],
    },
    {
      title: t("skills.soft"),
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Clean Code Practices", level: 90 },
        { name: "Team Collaboration", level: 85 },
        { name: "Database Design", level: 80 },
        { name: "API Development", level: 90 },
        { name: "Git Workflows", level: 85 },
      ],
    },
  ];

  const tabs = [
    { key: "work", label: t("workExperience"), icon: BriefcaseIcon },
    { key: "education", label: t("education"), icon: GraduationCapIcon },
    { key: "certifications", label: t("certifications"), icon: AwardIcon },
  ];

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
            <p className="mx-auto max-w-3xl text-xl text-gray-900 md:text-2xl dark:text-slate-300"></p>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-8 py-20 dark:bg-slate-800/50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <div className="flex justify-center gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-all duration-200 ${
                    activeTab === tab.key
                      ? "bg-emerald-600 text-white shadow-lg"
                      : "border border-slate-300 bg-white text-gray-900 hover:border-emerald-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-emerald-400"
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-20">
        <div className="mx-auto max-w-6xl">
          {activeTab === "work" && (
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div
                  key={job.id}
                  className={`rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                    <div className="flex-1">
                      <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center">
                        <h3 className="text-2xl font-bold text-black dark:text-slate-50">
                          {tOr(t, `data.experience.${job.id}.position`, job.position)}
                        </h3>
                      </div>

                      <div className="mb-4 flex flex-col gap-4 text-gray-900 sm:flex-row dark:text-slate-300">
                        <div className="flex items-center gap-2">
                          <BriefcaseIcon className="h-4 w-4" />
                          {tOr(t, `data.experience.${job.id}.company`, job.company)}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPinIcon className="h-4 w-4" />
                          {tOr(t, `data.experience.${job.id}.location`, job.location)}
                        </div>
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4" />
                          {formatPeriod(job.startDate, job.endDate)}
                        </div>
                      </div>

                      <p className="mb-6 text-gray-900 dark:text-slate-300">
                        {tOr(t, `data.experience.${job.id}.description`, job.description)}
                      </p>

                      <div>
                        <h4 className="mb-3 font-semibold text-black dark:text-slate-50">
                          {t("timeline.achievements")}
                        </h4>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement: string, achIndex: number) => (
                            <li
                              key={achIndex}
                              className="flex items-start gap-2 text-gray-900 dark:text-slate-300"
                            >
                              <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green-500 dark:bg-green-400" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6">
                        <h4 className="mb-3 font-semibold text-black dark:text-slate-50">
                          {t("projectTech")}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech: string, techIndex: number) => (
                            <span
                              key={techIndex}
                              className="rounded-full bg-slate-100 px-3 py-1 text-sm text-gray-900 dark:bg-slate-700 dark:text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className={`rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-400/10 dark:to-blue-400/10">
                      <GraduationCapIcon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                    </div>

                    <div className="flex-1">
                      <h3 className="mb-2 text-2xl font-bold text-black dark:text-slate-50">
                        {tOr(t, `data.education.${edu.id}.degree`, edu.degree)}
                      </h3>

                      <div className="mb-4 flex flex-col gap-4 text-gray-900 sm:flex-row dark:text-slate-300">
                        <div className="flex items-center gap-2">
                          <BriefcaseIcon className="h-4 w-4" />
                          {tOr(t, `data.education.${edu.id}.institution`, edu.institution)}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPinIcon className="h-4 w-4" />
                          {tOr(t, `data.education.${edu.id}.location`, edu.location)}
                        </div>
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4" />
                          {formatPeriod(edu.startDate, edu.endDate)}
                        </div>
                      </div>

                      <p className="mb-4 text-gray-900 dark:text-slate-300">
                        {tOr(t, `data.education.${edu.id}.description`, edu.description)}
                      </p>

                      <div>
                        <h4 className="mb-3 font-semibold text-black dark:text-slate-50">
                          {tCommon("highlights", { default: "Highlights" })}
                        </h4>
                        <ul className="space-y-2">
                          {edu.highlights.map((highlight, highlightIndex) => (
                            <li
                              key={highlightIndex}
                              className="flex items-start gap-2 text-gray-900 dark:text-slate-300"
                            >
                              <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-500 dark:bg-purple-400" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "certifications" && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert, index) => (
                <div
                  key={cert.id}
                  className={`group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 transition-transform duration-300 group-hover:scale-110 dark:from-yellow-400/10 dark:to-orange-400/10">
                    <AwardIcon className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-black dark:text-slate-50">
                    {tOr(t, `data.certifications.${cert.id}.name`, cert.name)}
                  </h3>

                  <p className="mb-4 text-gray-900 dark:text-slate-300">
                    {tOr(t, `data.certifications.${cert.id}.issuer`, cert.issuer)} • {cert.date}
                  </p>

                  <div className="space-y-2">
                    <p className="text-sm text-emerald-500 dark:text-emerald-400">
                      Credential ID: {cert.credentialId}
                    </p>

                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none dark:text-emerald-400 dark:hover:text-emerald-300 dark:focus:ring-emerald-400"
                      >
                        {t("verifyCertificate")}
                        <ExternalLinkIcon className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-slate-100 px-8 py-20 dark:bg-slate-800/50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl dark:text-slate-50">
              {t("skills.title")}
            </h2>
            <p className="text-xl text-gray-900 dark:text-slate-300">{t("skillsSubtitle")}</p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800"
              >
                <h3 className="mb-8 text-2xl font-bold text-black dark:text-slate-50">
                  {category.title}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-medium text-black dark:text-slate-50">
                          {skill.name}
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-emerald-600 to-lime-600 transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
