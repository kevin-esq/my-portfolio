import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Script from "next/script";
import { ThemeProvider } from "../../providers/ThemeProvider";
import Navbar from "../../components/layout/Navbar";
import "../globals.css";

const SUPPORTED_LOCALES = ["en", "es"] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];

const STORAGE_KEY = "theme-preference";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

async function loadLocales(locale: Locale) {
  try {
    return (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    console.error(`[LOAD LOCALES ERROR] Failed to load locales for locale "${locale}":`, error);
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
          <main className="flex min-h-screen items-center justify-center p-8">
            <p className="text-lg font-semibold text-red-500">
              Something went wrong loading translations.
            </p>
          </main>
        </body>
      </html>
    );
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className="font-sans antialiased transition-colors duration-300"
        suppressHydrationWarning
      >
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storageKey = '${STORAGE_KEY}';
                  const theme = localStorage.getItem(storageKey) || 'system';

                  if (theme === 'system') {
                    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    document.documentElement.classList.add(systemTheme);
                    document.documentElement.setAttribute('data-theme', systemTheme);
                  } else if (theme === 'dark' || theme === 'light') {
                    document.documentElement.classList.add(theme);
                    document.documentElement.setAttribute('data-theme', theme);
                  }
                } catch (e) {
                  document.documentElement.classList.add('light');
                }
              })()
            `,
          }}
        />

        <ThemeProvider storageKey={STORAGE_KEY}>
          <NextIntlClientProvider locale={locale} messages={locales}>
            <Navbar />
            <main className="min-h-screen pt-16">{children}</main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
