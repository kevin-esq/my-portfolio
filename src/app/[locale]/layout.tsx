import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ThemeProvider } from "../../providers/ThemeProvider";
import Navbar from "../../components/layout/Navbar";
import "../globals.css";

const SUPPORTED_LOCALES = ["en", "es"] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

async function loadLocales(locale: Locale) {
  try {
    return (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    console.error(
      `[LOAD LOCALES ERROR] Failed to load locales for locale "${locale}":`,
      error
    );
    return null;
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  readonly children: ReactNode;
  readonly params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!SUPPORTED_LOCALES.includes(locale as Locale)) {
    notFound();
  }

  const locales = await loadLocales(locale as Locale);

  if (!locales) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body>
          <main className="flex items-center justify-center min-h-screen p-8">
            <p className="text-lg text-red-500 font-semibold">
              Something went wrong loading translations.
            </p>
          </main>
        </body>
      </html>
    );
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          <NextIntlClientProvider locale={locale} messages={locales}>
            <Navbar />
            <main className="pt-16 min-h-screen bg-white dark:bg-gray-900">
              {children}
            </main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
