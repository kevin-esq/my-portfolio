"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  SendIcon,
  CheckCircleIcon,
  AlertCircleIcon,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import { personalInfo } from "@/data/personal";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => setIsVisible(true), []);

  const contactInfo = [
    {
      icon: MailIcon,
      label: t("info.email"),
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
    },
    {
      icon: PhoneIcon,
      label: t("info.phone"),
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone.replace(/[^+\d]/g, "")}`,
    },
    {
      icon: MapPinIcon,
      label: t("info.location"),
      value: personalInfo.location,
      link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        personalInfo.location
      )}`,
    },
    {
      icon: ClockIcon,
      label: t("info.response"),
      value: t("info.responseTime"),
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: t("social.github"),
      icon: GitHubIcon,
      url: personalInfo.github,
      color: "hover:text-gray-600",
    },
    {
      name: t("social.linkedin"),
      icon: LinkedInIcon,
      url: personalInfo.linkedin,
      color: "hover:text-blue-600",
    },
  ].filter((link) => link.url);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t("form.required");
    if (!formData.email.trim()) newErrors.email = t("form.required");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = t("form.invalidEmail");
    if (!formData.subject.trim()) newErrors.subject = t("form.required");
    if (!formData.message.trim()) newErrors.message = t("form.required");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormStatus("sending");
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (Math.random() > 0.2) {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
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
            <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
              {t("subtitle")}
            </p>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">{t("description")}</p>
          </div>
        </div>
      </section>

      <section className="px-8 py-20">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
          <div
            className={`animation-delay-200 transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="border-border bg-card dark:border-border dark:bg-card rounded-2xl border p-8 shadow-sm">
              <h2 className="text-foreground mb-8 text-3xl font-bold">{t("formTitle")}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {["name", "email", "subject"].map((field) => (
                  <div key={field}>
                    <label
                      htmlFor={field}
                      className="text-muted-foreground mb-2 block text-sm font-medium"
                    >
                      {t(`form.${field}`)} *
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      name={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleInputChange}
                      className={`focus:ring-ring w-full rounded-lg border px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:outline-none ${
                        errors[field]
                          ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                          : "border-border bg-background dark:border-border dark:bg-card"
                      }`}
                      placeholder={t(`placeholders.${field}`)}
                    />
                    {errors[field] && (
                      <p className="mt-1 flex items-center gap-1 text-sm text-red-600 dark:text-red-400">
                        <AlertCircleIcon className="h-4 w-4" />
                        {errors[field]}
                      </p>
                    )}
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="text-muted-foreground mb-2 block text-sm font-medium"
                  >
                    {t("form.message")} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`focus:ring-ring w-full resize-none rounded-lg border px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:outline-none ${
                      errors.message
                        ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                        : "border-border bg-background dark:border-border dark:bg-card"
                    }`}
                    placeholder={t("placeholders.message")}
                  />
                  {errors.message && (
                    <p className="mt-1 flex items-center gap-1 text-sm text-red-600 dark:text-red-400">
                      <AlertCircleIcon className="h-4 w-4" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className={`flex w-full items-center justify-center gap-2 rounded-lg px-6 py-4 font-medium text-white transition-all duration-200 ${
                    formStatus === "sending"
                      ? "cursor-not-allowed bg-gray-400"
                      : formStatus === "success"
                        ? "bg-green-600 hover:bg-green-700"
                        : formStatus === "error"
                          ? "bg-red-600 hover:bg-red-700"
                          : "bg-gradient-to-r from-emerald-600 to-lime-600 shadow-lg hover:scale-105 hover:from-emerald-700 hover:to-lime-700 hover:shadow-xl"
                  }`}
                >
                  {formStatus === "sending" && (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      {t("form.sending")}
                    </>
                  )}
                  {formStatus === "success" && (
                    <>
                      <CheckCircleIcon className="h-5 w-5" />
                      {t("form.success")}
                    </>
                  )}
                  {formStatus === "error" && (
                    <>
                      <AlertCircleIcon className="h-5 w-5" />
                      {t("form.error")}
                    </>
                  )}
                  {formStatus === "idle" && (
                    <>
                      <SendIcon className="h-5 w-5" />
                      {t("form.send")}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          <div
            className={`animation-delay-300 transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="border-border bg-card dark:border-border dark:bg-card mb-8 rounded-2xl border p-8 shadow-sm">
              <h2 className="text-foreground mb-8 text-3xl font-bold">{t("info.title")}</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                      <info.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith("http") ? "_blank" : undefined}
                          rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-foreground font-medium transition-colors duration-200 hover:text-emerald-600 dark:hover:text-emerald-400"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-border bg-card dark:border-border dark:bg-card rounded-2xl border p-8 shadow-sm">
              <h2 className="text-foreground mb-8 text-3xl font-bold">{t("social.title")}</h2>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group bg-background hover:bg-muted flex items-center gap-3 rounded-lg p-4 transition-all duration-200 hover:scale-105 ${social.color}`}
                  >
                    <social.icon className="text-foreground h-6 w-6 transition-transform duration-200 group-hover:scale-110" />
                    <span className="text-foreground font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-lime-50 p-6 dark:border-emerald-800 dark:from-emerald-900/20 dark:to-lime-900/20">
              <div className="mb-2 flex items-center gap-3">
                <div className="h-3 w-3 animate-pulse rounded-full bg-green-500" />
                <span className="font-semibold text-green-700 dark:text-green-400">
                  {t("info.availability")}
                </span>
              </div>
              <p className="text-green-600 dark:text-green-300">{t("availabilityNote")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
