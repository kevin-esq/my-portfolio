"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useNavigation } from "@/hooks/useNavigation";
import { SUPPORTED_LOCALES, LOCALE_LABELS } from "@/constants/navigation";
import { Icon, IconName } from "@/components/ui/Icons";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { cn } from "@/lib/cn";

const Navbar = () => {
  const t = useTranslations("navigation");
  const tCommon = useTranslations("common");
  const { routes, locale, isActivePath, switchLocale, getLocalizedPath } = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-out",
          scrolled
            ? "border-b border-slate-200/60 bg-white/90 shadow-lg backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/90"
            : "border-b border-transparent bg-white/60 backdrop-blur-md dark:bg-slate-900/60"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <Link
                href={getLocalizedPath("/")}
                className="group flex items-center space-x-3 transition-all duration-300 hover:scale-105"
                style={{ textDecoration: "none" }}
              >
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-lime-600 text-base font-bold text-white shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-emerald-500/25">
                    K
                  </div>
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-emerald-500 to-lime-600 opacity-0 blur transition-all duration-500 group-hover:opacity-30 dark:group-hover:opacity-20" />
                </div>
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-xl font-bold text-transparent transition-all duration-300 dark:from-white dark:via-slate-100 dark:to-white">
                  Kevin Esquivel
                </span>
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-2">
                {routes.map((item) => {
                  const isActive = isActivePath(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={getLocalizedPath(item.href)}
                      className={cn(
                        "group relative rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300",
                        isActive
                          ? "bg-gradient-to-r from-emerald-50 to-emerald-100/50 text-emerald-700 shadow-md ring-1 shadow-emerald-500/10 ring-emerald-500/20 dark:from-emerald-900/40 dark:to-emerald-800/30 dark:text-emerald-300 dark:shadow-emerald-500/20 dark:ring-emerald-400/20"
                          : "text-slate-700 hover:bg-slate-50/80 hover:text-emerald-600 hover:shadow-md hover:shadow-slate-500/10 dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-emerald-400 dark:hover:shadow-slate-700/20"
                      )}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="flex items-center space-x-2">
                        <Icon
                          name={item.icon as IconName}
                          className={cn(
                            "h-4 w-4 transition-all duration-300",
                            isActive
                              ? "scale-110 text-emerald-600 dark:text-emerald-400"
                              : "group-hover:scale-105 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                          )}
                        />
                        <span className="transition-colors duration-300">{t(item.name)}</span>
                      </div>
                      {isActive && (
                        <div className="absolute -bottom-1 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 shadow-sm" />
                      )}
                      <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-emerald-500/5 to-lime-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="hidden items-center space-x-3 md:flex">
              <div className="rounded-lg p-1 transition-colors duration-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                <ThemeToggle />
              </div>

              <div className="group relative">
                <div className="flex cursor-pointer items-center space-x-2 rounded-xl bg-slate-50/80 px-4 py-2.5 ring-1 ring-slate-200/50 transition-all duration-300 hover:bg-slate-100/80 hover:shadow-md hover:shadow-slate-500/10 hover:ring-slate-300/50 dark:bg-slate-800/60 dark:ring-slate-700/50 dark:hover:bg-slate-700/60 dark:hover:shadow-slate-900/20 dark:hover:ring-slate-600/50">
                  <Icon name="globe" className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {locale.toUpperCase()}
                  </span>
                  <Icon
                    name="chevron-down"
                    className="h-3 w-3 text-slate-500 transition-transform duration-300 group-hover:rotate-180 dark:text-slate-400"
                  />
                </div>

                <div className="invisible absolute top-full right-0 mt-2 min-w-[160px] origin-top-right scale-95 rounded-xl border border-slate-200/80 bg-white/95 py-2 opacity-0 shadow-xl shadow-slate-500/10 backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:scale-100 group-hover:opacity-100 dark:border-slate-700/50 dark:bg-slate-800/95 dark:shadow-slate-900/20">
                  {SUPPORTED_LOCALES.map((lang) => (
                    <Link
                      key={lang}
                      href={switchLocale(lang)}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 text-sm transition-all duration-200 hover:scale-[1.02]",
                        locale === lang
                          ? "bg-gradient-to-r from-emerald-50 to-emerald-100/50 text-emerald-700 shadow-sm dark:from-emerald-900/30 dark:to-emerald-800/20 dark:text-emerald-300"
                          : "text-slate-700 hover:bg-slate-50/80 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-slate-700/50 dark:hover:text-emerald-400"
                      )}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{lang.toUpperCase()}</span>
                        <span className="text-xs opacity-70">{LOCALE_LABELS[lang]}</span>
                      </div>
                      {locale === lang && (
                        <div className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href={getLocalizedPath("/contact")}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-lime-600 px-6 py-2.5 font-medium text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none active:scale-95 dark:focus:ring-offset-slate-900"
                style={{ textDecoration: "none" }}
              >
                <div className="relative z-10 flex items-center space-x-2">
                  <Icon
                    name="mail"
                    className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                  />
                  <span>{t("contact")}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-emerald-600 to-lime-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "relative h-10 w-10 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:outline-none",
                  isOpen
                    ? "bg-emerald-50 text-emerald-600 ring-2 ring-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:ring-emerald-500/30"
                    : "text-slate-700 hover:bg-slate-100 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
                )}
                aria-label="Toggle navigation"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon
                    name={isOpen ? "x" : "menu"}
                    className="h-5 w-5 transition-transform duration-300"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-40 transition-all duration-500 md:hidden",
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <button
          className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-all duration-500"
          onClick={() => setIsOpen(false)}
        />

        <div
          className={cn(
            "absolute top-16 right-4 left-4 transform overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 shadow-2xl shadow-slate-500/10 backdrop-blur-xl transition-all duration-500 ease-out dark:border-slate-700/50 dark:bg-slate-800/95 dark:shadow-slate-900/20",
            isOpen ? "translate-y-0 scale-100 opacity-100" : "-translate-y-8 scale-95 opacity-0"
          )}
        >
          <div className="p-6">
            <div className="mb-6 space-y-2">
              {routes.map((item, index) => {
                const isActive = isActivePath(item.href);
                return (
                  <Link
                    key={item.name}
                    href={getLocalizedPath(item.href)}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "group flex items-center space-x-4 rounded-xl px-4 py-4 text-base font-medium transition-all duration-300 hover:scale-[1.02]",
                      isActive
                        ? "bg-gradient-to-r from-emerald-50 to-emerald-100/50 text-emerald-700 shadow-md ring-1 shadow-emerald-500/10 ring-emerald-500/20 dark:from-emerald-900/40 dark:to-emerald-800/30 dark:text-emerald-300 dark:shadow-emerald-500/20 dark:ring-emerald-400/20"
                        : "text-slate-700 hover:bg-slate-50/80 hover:text-emerald-600 hover:shadow-md hover:shadow-slate-500/5 dark:text-slate-300 dark:hover:bg-slate-700/50 dark:hover:text-emerald-400"
                    )}
                    style={{
                      textDecoration: "none",
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    <Icon
                      name={item.icon as IconName}
                      className={cn(
                        "h-5 w-5 transition-all duration-300",
                        isActive
                          ? "scale-110 text-emerald-600 dark:text-emerald-400"
                          : "group-hover:scale-110 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                      )}
                    />
                    <span className="flex-1">{t(item.name)}</span>
                    {isActive && (
                      <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 shadow-sm dark:bg-emerald-400" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="mb-6 rounded-xl bg-slate-50/50 p-4 dark:bg-slate-900/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Icon name="palette" className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {tCommon("themeTitle")}
                  </span>
                </div>
                <ThemeToggle />
              </div>
            </div>

            <div className="mb-6 rounded-xl bg-slate-50/50 p-4 dark:bg-slate-900/50">
              <div className="mb-4 flex items-center space-x-3">
                <Icon name="globe" className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  {t("language")}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {SUPPORTED_LOCALES.map((lang) => (
                  <Link
                    key={lang}
                    href={switchLocale(lang)}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-center space-x-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 hover:scale-[1.02]",
                      locale === lang
                        ? "bg-gradient-to-r from-emerald-500 to-lime-500 text-white shadow-lg shadow-emerald-500/25"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-emerald-600 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600 dark:hover:text-emerald-400"
                    )}
                    style={{ textDecoration: "none" }}
                  >
                    <span>{lang.toUpperCase()}</span>
                    <span className="text-xs opacity-80">{LOCALE_LABELS[lang]}</span>
                    {locale === lang && <Icon name="check" className="h-3 w-3" />}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href={getLocalizedPath("/contact")}
              onClick={() => setIsOpen(false)}
              className="group relative flex w-full items-center justify-center space-x-3 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-lime-600 px-6 py-4 font-medium text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30 active:scale-95"
              style={{ textDecoration: "none" }}
            >
              <Icon
                name="mail"
                className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-base">{t("contact")}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-emerald-600 to-lime-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
