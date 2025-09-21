'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/providers/ThemeProvider';
import { cn } from '@/lib/utils';

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-600 dark:text-blue-400">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const SystemIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-gray-600 dark:text-gray-400">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse" />
    );
  }

  const themes = [
    { value: 'light', icon: SunIcon, label: 'Light' },
    { value: 'dark', icon: MoonIcon, label: 'Dark' },
    { value: 'system', icon: SystemIcon, label: 'System' }
  ] as const;

  return (
    <div className="relative group">
      <button
        onClick={() => {
          const currentIndex = themes.findIndex(t => t.value === theme);
          const nextIndex = (currentIndex + 1) % themes.length;
          setTheme(themes[nextIndex].value);
        }}
        className={cn(
          'w-10 h-10 rounded-lg transition-all duration-200 flex items-center justify-center border-2',
          'bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700',
          'border-gray-200 hover:border-gray-300 dark:border-gray-600 dark:hover:border-gray-500',
          'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100',
          'shadow-sm hover:shadow-md',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900',
          'transform hover:scale-105 active:scale-95'
        )}
        aria-label={`Switch to ${themes[(themes.findIndex(t => t.value === theme) + 1) % themes.length].label.toLowerCase()} mode`}
      >
        <div className="relative transition-transform duration-200">
          {theme === 'light' && <SunIcon />}
          {theme === 'dark' && <MoonIcon />}
          {theme === 'system' && <SystemIcon />}
        </div>
      </button>
      
      {/* Tooltip */}
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 dark:bg-gray-700 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
        {themes.find(t => t.value === theme)?.label} mode
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45" />
      </div>
    </div>
  );
};