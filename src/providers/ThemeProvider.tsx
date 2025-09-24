"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
  storageKey?: string;
}

export function ThemeProvider({ children, storageKey = "theme" }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      storageKey={storageKey}
    >
      {children}
    </NextThemesProvider>
  );
}
