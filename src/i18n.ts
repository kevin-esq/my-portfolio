import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "es"] as const;

export default getRequestConfig(async ({ locale }) => {
  const validLocale = locale || "en";

  return {
    locale: validLocale,
    messages: (await import(`./messages/${validLocale}.json`)).default,
  };
});
