import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import '../globals.css';

const SUPPORTED_LOCALES = ['en', 'es'] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

async function loadMessages(locale: Locale) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`[LOAD MESSAGES ERROR] Failed to load messages for locale "${locale}":`, error);
    return null;
  }
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!SUPPORTED_LOCALES.includes(locale as Locale)) {
    notFound();
  }

  const messages = await loadMessages(locale as Locale);

  if (!messages) {
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
      <body className="font-sans antialiased bg-gray-50 text-gray-900">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
