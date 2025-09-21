import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-5xl font-bold">{t('title')}</h1>
      <p className="mt-4 text-xl text-gray-600">{t('subtitle')}</p>
    </main>
  );
}