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
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-gray-200/50 bg-white/90 shadow-lg backdrop-blur-md dark:border-gray-800/50 dark:bg-gray-900/90"
            : "border-b border-transparent bg-white/70 backdrop-blur-sm dark:bg-gray-900/70"
        )}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <Link href={getLocalizedPath("/")} className="group flex items-center space-x-2">
                <div className="relative">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-600 to-lime-600 text-sm font-bold text-white transition-transform duration-200 group-hover:scale-105">
                    K
                  </div>
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-emerald-600 to-lime-600 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                </div>
                <span className="text-xl font-bold text-black dark:text-gray-100">
                  Kevin Esquivel
                </span>
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {routes.map((item) => {
                  const isActive = isActivePath(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={getLocalizedPath(item.href)}
                      className={cn(
                        "group relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
                        isActive
                          ? "bg-emerald-50/80 text-emerald-600 shadow-sm dark:bg-emerald-900/30 dark:text-emerald-400"
                          : "text-gray-900 hover:bg-gray-50/80 hover:text-emerald-600 hover:shadow-sm dark:text-gray-300 dark:hover:bg-gray-800/80 dark:hover:text-emerald-400"
                      )}
                    >
                      <div className="flex items-center space-x-2">
                        <Icon
                          name={item.icon as IconName}
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            isActive ? "scale-110" : "group-hover:scale-105"
                          )}
                        />
                        <span>{t(item.name)}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="hidden items-center space-x-3 md:flex">
              <ThemeToggle />

              <div className="group relative">
                <div className="flex items-center space-x-1 rounded-lg bg-gray-50/80 px-3 py-2 transition-colors duration-200 hover:bg-gray-100/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80">
                  <Icon name="globe" className="h-4 w-4 text-gray-800 dark:text-gray-400" />
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                    {locale.toUpperCase()}
                  </span>
                </div>

                <div className="invisible absolute top-full right-0 mt-2 rounded-xl border border-gray-100 bg-white py-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 dark:border-gray-700 dark:bg-gray-800">
                  {SUPPORTED_LOCALES.map((lang) => (
                    <Link
                      key={lang}
                      href={switchLocale(lang)}
                      className={cn(
                        "flex items-center px-4 py-2 text-sm whitespace-nowrap transition-colors duration-200",
                        locale === lang
                          ? "bg-emerald-50 text-emerald-600"
                          : "text-gray-700 hover:bg-gray-50"
                      )}
                    >
                      <span className="font-medium">{lang.toUpperCase()}</span>
                      <span className="ml-2 text-xs text-gray-500">{LOCALE_LABELS[lang]}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href={getLocalizedPath("/contact")}
                className="inline-flex transform items-center rounded-md bg-gradient-to-r from-emerald-600 to-emerald-700 px-4 py-2 font-medium text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-emerald-700 hover:to-emerald-800 hover:shadow-xl focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:outline-none"
              >
                <Icon name="mail" className="mr-2 h-4 w-4" />
                {t("contact")}
              </Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "relative h-10 w-10 rounded-lg transition-all duration-200",
                  isOpen
                    ? "bg-emerald-50 text-emerald-600"
                    : "text-gray-700 hover:bg-gray-50 hover:text-emerald-600"
                )}
                aria-label="Toggle navigation"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon
                    name={isOpen ? "x" : "menu"}
                    className="h-5 w-5 transition-transform duration-200"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-40 transition-all duration-300 md:hidden",
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <button
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        <div
          className={cn(
            "absolute top-16 right-4 left-4 transform overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl transition-all duration-300",
            isOpen ? "translate-y-0 scale-100 opacity-100" : "-translate-y-4 scale-95 opacity-0"
          )}
        >
          <div className="p-4">
            <div className="mb-6 space-y-1">
              {routes.map((item) => {
                const isActive = isActivePath(item.href);
                return (
                  <Link
                    key={item.name}
                    href={getLocalizedPath(item.href)}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center space-x-3 rounded-xl px-4 py-3 text-base font-medium transition-all duration-200",
                      isActive
                        ? "bg-emerald-50 text-emerald-600 shadow-sm"
                        : "text-gray-700 hover:bg-gray-50 hover:text-emerald-600 hover:shadow-sm"
                    )}
                  >
                    <Icon
                      name={item.icon as IconName}
                      className={cn(
                        "h-5 w-5 transition-transform duration-200",
                        isActive ? "scale-110 text-emerald-600" : ""
                      )}
                    />
                    <span>{t(item.name)}</span>
                    {isActive && (
                      <div className="ml-auto h-2 w-2 animate-pulse rounded-full bg-emerald-600" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="mb-4 border-t border-gray-100 pt-4 dark:border-gray-800">
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-400">
                  {tCommon("themeTitle")}
                </span>
                <ThemeToggle />
              </div>
            </div>

            <div className="mb-4 border-t border-gray-100 pt-4 dark:border-gray-800">
              <p className="mb-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-400">
                {t("language")}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {SUPPORTED_LOCALES.map((lang) => (
                  <Link
                    key={lang}
                    href={switchLocale(lang)}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-center rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200",
                      locale === lang
                        ? "bg-emerald-100 text-emerald-700 ring-2 ring-emerald-200"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    <Icon name="globe" className="mr-2 h-4 w-4" />
                    {LOCALE_LABELS[lang]}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href={getLocalizedPath("/contact")}
              onClick={() => setIsOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-emerald-600 to-emerald-700 px-4 py-3 font-medium text-white shadow-lg transition-all duration-200 hover:from-emerald-700 hover:to-emerald-800"
            >
              <Icon name="mail" className="mr-2 h-4 w-4" />
              {t("contact")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
