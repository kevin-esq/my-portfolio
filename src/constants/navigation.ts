export const NAVIGATION_ROUTES = [
  {
    name: "home",
    href: "/",
    icon: "home",
  },
  {
    name: "about",
    href: "/about",
    icon: "user",
  },
  {
    name: "projects",
    href: "/projects",
    icon: "code",
  },
  {
    name: "experience",
    href: "/experience",
    icon: "briefcase",
  },
  {
    name: "contact",
    href: "/contact",
    icon: "mail",
  },
] as const;

export const SUPPORTED_LOCALES = ["en", "es"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const LOCALE_LABELS = {
  en: "English",
  es: "Español",
} as const;
