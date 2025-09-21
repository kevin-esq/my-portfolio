"use client";

import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent mb-6">
          {t("title")}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-balance">
          {t("subtitle")}
        </p>

        {/* Decorative elements */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-full opacity-20 dark:opacity-10 animate-float blur-3xl" />
          </div>
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="modern-card p-6 text-center group hover:scale-105 transition-transform duration-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:rotate-12 transition-transform duration-200">
                  ⚡
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Fast Development
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Modern tools and practices for rapid delivery
                </p>
              </div>

              <div className="modern-card p-6 text-center group hover:scale-105 transition-transform duration-200">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:rotate-12 transition-transform duration-200">
                  🎨
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Beautiful Design
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  User-centered interfaces with attention to detail
                </p>
              </div>

              <div className="modern-card p-6 text-center group hover:scale-105 transition-transform duration-200">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:rotate-12 transition-transform duration-200">
                  🚀
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  High Performance
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Optimized applications for best user experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
