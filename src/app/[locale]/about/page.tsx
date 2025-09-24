"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import {
  MapPinIcon,
  MailIcon,
  PhoneIcon,
  CalendarIcon,
  CodeIcon,
  DatabaseIcon,
  ServerIcon,
  PaletteIcon,
} from "lucide-react";
import { getSkills } from "@/lib/data-utils";
import { personalInfo } from "@/data/personal";

export default function AboutPage() {
  const t = useTranslations("about");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const personalInfoDisplay = [
    {
      icon: MapPinIcon,
      label: t("personalInfo.location"),
      value: personalInfo.location,
    },
    {
      icon: MailIcon,
      label: t("personalInfo.email"),
      value: personalInfo.email,
    },
    {
      icon: PhoneIcon,
      label: t("personalInfo.phone"),
      value: personalInfo.phone,
    },
    {
      icon: CalendarIcon,
      label: t("personalInfo.availability"),
      value: t("personalInfo.availabilityValue"),
    },
  ];

  const allSkills = getSkills();

  const technicalSkills = [
    {
      category: t("skills.frontend"),
      icon: CodeIcon,
      skills: allSkills.filter((s) => s.category === "frontend").map((s) => s.name),
    },
    {
      category: t("skills.backend"),
      icon: ServerIcon,
      skills: allSkills.filter((s) => s.category === "backend").map((s) => s.name),
    },
    {
      category: t("skills.databases"),
      icon: DatabaseIcon,
      skills: allSkills.filter((s) => s.category === "database").map((s) => s.name),
    },
    {
      category: t("skills.tools"),
      icon: PaletteIcon,
      skills: allSkills.filter((s) => s.category === "tools").map((s) => s.name),
    },
  ];

  const interests = personalInfo.interests.map((interest, index) => ({
    title: interest,
    description: interest,
    emoji: ["🔧", "🏗️", "⚡", "🌐", "🚀"][index] || "💡",
  }));

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden px-8 py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-64 w-64 animate-pulse rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-400/10" />
          <div className="animation-delay-1000 absolute right-1/4 bottom-1/4 h-80 w-80 animate-pulse rounded-full bg-lime-500/10 blur-3xl dark:bg-lime-400/10" />
        </div>

        <div className="mx-auto max-w-6xl">
          <div
            className={`mb-16 transform text-center transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">
              <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-lime-600 bg-clip-text text-transparent dark:from-emerald-400 dark:via-emerald-300 dark:to-lime-400">
                {t("title")}
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-900 md:text-2xl dark:text-gray-300">
              {t("subtitle")}
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div
              className={`animation-delay-200 transform transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="relative">
                <div className="mx-auto flex h-80 w-80 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 dark:from-emerald-400/20 dark:to-green-400/20">
                  <div className="flex h-72 w-72 items-center justify-center rounded-2xl bg-gray-200 dark:bg-gray-700">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
                <div className="absolute -inset-4 animate-pulse rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 opacity-20 blur-xl" />
              </div>
            </div>

            <div
              className={`animation-delay-400 transform transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {personalInfo.name}
                </h3>
                <p className="mb-4 text-lg font-medium text-emerald-600 dark:text-emerald-400">
                  {personalInfo.title}
                </p>
                <p className="mb-6 text-gray-600 dark:text-gray-300">{personalInfo.subtitle}</p>

                <div className="space-y-4">
                  {personalInfoDisplay.map((info, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <info.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-gray-900 dark:text-gray-300">
                        <span className="font-medium">{info.label}:</span> {info.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              {t("introduction")}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-900 dark:text-gray-300">
              {personalInfo.summary}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-8 py-20 dark:bg-slate-800/50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
              {t("skills.title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t("skills.subtitle")}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {technicalSkills.map((skillGroup, index) => (
              <div
                key={index}
                className={`transform rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-1000 dark:border-slate-700 dark:bg-slate-800 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <skillGroup.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="mr-2 mb-2 inline-block rounded-full bg-slate-100 px-3 py-1 text-sm text-gray-700 dark:bg-slate-700 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
                {t("technicalInterests.title")}
              </h2>
              <div className="space-y-6">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className={`transform rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-1000 dark:border-slate-700 dark:bg-slate-800 ${
                      isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">{interest.emoji}</span>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                          {interest.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
                {t("competencies.title")}
              </h2>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <div className="grid grid-cols-2 gap-3">
                  {personalInfo.competencies.map((competency, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-slate-50 dark:hover:bg-slate-700"
                    >
                      <div className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{competency}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-8 py-20 dark:bg-slate-800/50">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
            {t("languages.title")}
          </h2>
          <div className="flex justify-center gap-8">
            {personalInfo.languages.map((language, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
              >
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {language.name}
                </h3>
                <p className="font-medium text-emerald-600 dark:text-emerald-400">
                  {language.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
