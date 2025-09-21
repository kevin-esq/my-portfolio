import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { NAVIGATION_ROUTES } from '@/constants/navigation';

export const useNavigation = () => {
  const locale = useLocale();
  const pathname = usePathname();

  const isActivePath = (href: string) => {
    const localePath = `/${locale}${href}`;
    return pathname === localePath || (href === '/' && pathname === `/${locale}`);
  };

  const getLocalizedPath = (href: string, targetLocale?: string) => {
    const currentLocale = targetLocale || locale;
    return `/${currentLocale}${href}`;
  };

  const switchLocale = (targetLocale: string) => {
    const currentPath = pathname.substring(3);
    return `/${targetLocale}${currentPath}`;
  };

  return {
    routes: NAVIGATION_ROUTES,
    locale,
    pathname,
    isActivePath,
    getLocalizedPath,
    switchLocale
  };
};