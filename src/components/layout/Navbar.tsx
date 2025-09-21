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
  const { routes, locale, isActivePath, switchLocale, getLocalizedPath } =
    useNavigation();
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-800/50"
            : "bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border-b border-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href={getLocalizedPath("/")}
                className="group flex items-center space-x-2"
              >
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm transition-transform duration-200 group-hover:scale-105">
                    K
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Kevin Esquivel
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {routes.map((item) => {
                  const isActive = isActivePath(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={getLocalizedPath(item.href)}
                      className={cn(
                        "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group",
                        isActive
                          ? "text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/30 shadow-sm"
                          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50/80 dark:hover:bg-gray-800/80 hover:shadow-sm"
                      )}
                    >
                      <div className="flex items-center space-x-2">
                        <Icon
                          name={item.icon as IconName}
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
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

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Language Switcher */}
              <div className="relative group">
                <div className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-gray-50/80 dark:bg-gray-800/80 hover:bg-gray-100/80 dark:hover:bg-gray-700/80 transition-colors duration-200">
                  <Icon
                    name="globe"
                    className="w-4 h-4 text-gray-600 dark:text-gray-400"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {locale.toUpperCase()}
                  </span>
                </div>

                <div className="absolute right-0 top-full mt-2 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {SUPPORTED_LOCALES.map((lang) => (
                    <Link
                      key={lang}
                      href={switchLocale(lang)}
                      className={cn(
                        "flex items-center px-4 py-2 text-sm transition-colors duration-200 whitespace-nowrap",
                        locale === lang
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:bg-gray-50"
                      )}
                    >
                      <span className="font-medium">{lang.toUpperCase()}</span>
                      <span className="ml-2 text-xs text-gray-500">
                        {LOCALE_LABELS[lang]}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href={getLocalizedPath("/contact")}
                className="inline-flex items-center px-4 py-2 rounded-md font-medium transition-all duration-200 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Icon name="mail" className="w-4 h-4 mr-2" />
                {t("contact")}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "relative w-10 h-10 rounded-lg transition-all duration-200",
                  isOpen
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                )}
                aria-label="Toggle navigation"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon
                    name={isOpen ? "x" : "menu"}
                    className="w-5 h-5 transition-transform duration-200"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        {/* Backdrop */}
        <button
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={cn(
            "absolute top-16 left-4 right-4 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 transform",
            isOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "-translate-y-4 scale-95 opacity-0"
          )}
        >
          <div className="p-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-1 mb-6">
              {routes.map((item) => {
                const isActive = isActivePath(item.href);
                return (
                  <Link
                    key={item.name}
                    href={getLocalizedPath(item.href)}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                      isActive
                        ? "bg-blue-50 text-blue-600 shadow-sm"
                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-600 hover:shadow-sm"
                    )}
                  >
                    <Icon
                      name={item.icon as IconName}
                      className={cn(
                        "w-5 h-5 transition-transform duration-200",
                        isActive ? "scale-110 text-blue-600" : ""
                      )}
                    />
                    <span>{t(item.name)}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Theme Toggle */}
            <div className="border-t border-gray-100 dark:border-gray-800 pt-4 mb-4">
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Theme
                </span>
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Language Switcher */}
            <div className="border-t border-gray-100 dark:border-gray-800 pt-4 mb-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 px-4">
                {t("language")}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {SUPPORTED_LOCALES.map((lang) => (
                  <Link
                    key={lang}
                    href={switchLocale(lang)}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                      locale === lang
                        ? "bg-blue-100 text-blue-700 ring-2 ring-blue-200"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    <Icon name="globe" className="w-4 h-4 mr-2" />
                    {LOCALE_LABELS[lang]}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile CTA Button */}
            <Link
              href={getLocalizedPath("/contact")}
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center px-4 py-3 rounded-md font-medium transition-all duration-200 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg"
            >
              <Icon name="mail" className="w-4 h-4 mr-2" />
              {t("contact")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
