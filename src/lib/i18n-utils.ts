type TranslationFunction = (key: string) => string;

export function tOr(t: TranslationFunction, key: string, fallback: string): string {
  try {
    const value = t(key);
    if (typeof value === "string") return value;
    return fallback;
  } catch {
    return fallback;
  }
}

export function tRawOr<T>(
  t: { raw?: (key: string) => T | undefined },
  key: string,
  fallback: T
): T {
  try {
    const raw = t.raw?.(key);
    return raw ?? fallback;
  } catch {
    return fallback;
  }
}
