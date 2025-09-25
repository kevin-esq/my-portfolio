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
    { icon: MapPinIcon, label: t("personalInfo.location"), value: personalInfo.location },
    { icon: MailIcon, label: t("personalInfo.email"), value: personalInfo.email },
    { icon: PhoneIcon, label: t("personalInfo.phone"), value: personalInfo.phone },
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
          <div className="absolute top-1/4 left-1/4 h-64 w-64 animate-pulse rounded-full bg-emerald-500/15 blur-3xl dark:bg-emerald-400/15" />
          <div className="absolute right-1/4 bottom-1/4 h-80 w-80 animate-pulse rounded-full bg-violet-500/15 blur-3xl dark:bg-violet-400/15" />
        </div>
        <div className="mx-auto max-w-6xl">
          <div
            className={`mb-16 text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="mb-6 bg-gradient-to-r from-emerald-600 via-cyan-500 to-violet-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl dark:from-emerald-400 dark:via-cyan-400 dark:to-violet-500">
              {t("title")}
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl md:text-2xl">
              {t("subtitle")}
            </p>
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div
              className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <div className="relative mx-auto flex h-80 w-80 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-violet-500/20 dark:from-emerald-400/20 dark:to-violet-400/20">
                <div className="bg-card flex h-72 w-72 items-center justify-center rounded-2xl shadow-lg">
                  <span className="text-6xl">👨‍💻</span>
                </div>
                <div className="absolute -inset-4 animate-pulse rounded-2xl bg-gradient-to-r from-emerald-600 via-cyan-500 to-violet-600 opacity-20 blur-xl" />
              </div>
            </div>
            <div
              className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="border-border bg-card rounded-2xl border p-8 shadow-lg transition-shadow hover:shadow-xl">
                <h3 className="text-foreground mb-6 text-2xl font-bold">{personalInfo.name}</h3>
                <p className="text-primary mb-4 text-lg font-medium">{personalInfo.title}</p>
                <p className="text-muted-foreground mb-6">{personalInfo.subtitle}</p>
                <div className="space-y-4">
                  {personalInfoDisplay.map((info, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <info.icon className="text-primary h-5 w-5" />
                      <span className="text-foreground">
                        <span className="font-medium">{info.label}:</span> {info.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="via-primary/40 my-20 h-px bg-gradient-to-r from-transparent to-transparent" />
          <div className="mb-16 text-center">
            <h2 className="text-foreground mb-6 text-3xl font-bold">{t("introduction")}</h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>
        </div>
      </section>
      <section className="from-muted/40 to-background bg-gradient-to-b px-8 py-20 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-foreground mb-4 text-4xl font-bold md:text-5xl">
              {t("skills.title")}
            </h2>
            <p className="text-muted-foreground text-xl">{t("skills.subtitle")}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {technicalSkills.map((skillGroup, index) => (
              <div
                key={index}
                className={`border-border bg-card rounded-2xl border p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <skillGroup.icon className="text-primary h-6 w-6" />
                  <h3 className="text-foreground text-lg font-semibold">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm"
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
      <section className="relative px-8 py-20">
        <div className="via-primary/40 absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent" />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-foreground mb-8 text-3xl font-bold">
                {t("technicalInterests.title")}
              </h2>
              <div className="space-y-6">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className={`border-border bg-card rounded-2xl border p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">{interest.emoji}</span>
                      <h3 className="text-foreground text-lg font-semibold">{interest.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-foreground mb-8 text-3xl font-bold">{t("competencies.title")}</h2>
              <div className="border-border bg-card rounded-2xl border p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-3">
                  {personalInfo.competencies.map((competency, index) => (
                    <div
                      key={index}
                      className="hover:bg-primary/5 flex items-center gap-2 rounded-lg p-2 transition-colors"
                    >
                      <div className="bg-primary h-2 w-2 rounded-full" />
                      <span className="text-muted-foreground text-sm">{competency}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="from-muted/40 to-background bg-gradient-to-b px-8 py-20 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-foreground mb-8 text-3xl font-bold">{t("languages.title")}</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {personalInfo.languages.map((language, index) => (
              <div
                key={index}
                className="border-border bg-card rounded-2xl border p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-foreground mb-2 text-lg font-semibold">{language.name}</h3>
                <p className="text-primary font-medium">{language.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
