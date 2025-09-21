'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'projects', href: '/projects' },
  { name: 'experience', href: '/experience' },
  { name: 'contact', href: '/contact' }
];

const Navbar = () => {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActivePath = (href: string) => {
    const localePath = `/${locale}${href}`;
    return pathname === localePath || (href === '/' && pathname === `/${locale}`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link 
              href={`/${locale}`}
              className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200"
            >
              Kevin Minio
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={`/${locale}${item.href}`}
                  className={`${
                    isActivePath(item.href)
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  } px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-blue-300`}
                >
                  {t(item.name)}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Link
                href={`/en${pathname.substring(3)}`}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 ${
                  locale === 'en'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                EN
              </Link>
              <Link
                href={`/es${pathname.substring(3)}`}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 ${
                  locale === 'es'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                ES
              </Link>
            </div>
            
            <Link
              href={`/${locale}/contact`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              {t('contact')}
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={`/${locale}${item.href}`}
                className={`${
                  isActivePath(item.href)
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                } block px-3 py-2 text-base font-medium transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                {t(item.name)}
              </Link>
            ))}
            
            <div className="border-t border-gray-100 pt-3 mt-3">
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm font-medium text-gray-600">{t('language')}</span>
                <div className="flex space-x-2">
                  <Link
                    href={`/en${pathname.substring(3)}`}
                    className={`px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 ${
                      locale === 'en'
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    EN
                  </Link>
                  <Link
                    href={`/es${pathname.substring(3)}`}
                    className={`px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 ${
                      locale === 'es'
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    ES
                  </Link>
                </div>
              </div>
              
              <Link
                href={`/${locale}/contact`}
                className="block w-full mt-2 mx-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium text-center transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {t('contact')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;