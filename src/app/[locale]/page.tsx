'use client';

import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
        {t('title')}
      </h1>
      <p className="mt-4 text-xl text-gray-600 max-w-xl">
        {t('subtitle')}
      </p>
    </div>
  );
}