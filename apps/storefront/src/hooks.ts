import { useEffect, useState } from 'react';
import { directionFor, type Locale, type ThemePreference } from './i18n';

const themeKey = 'last-laurel-theme';
export function useTheme() {
  const [preference, setPreference] = useState<ThemePreference>(
    () => (localStorage.getItem(themeKey) as ThemePreference | null) ?? 'system',
  );
  useEffect(() => {
    const media = matchMedia('(prefers-color-scheme: dark)');
    const update = () => {
      const resolved = preference === 'system' ? (media.matches ? 'dark' : 'light') : preference;
      document.documentElement.dataset.theme = resolved;
      document.documentElement.style.colorScheme = resolved;
    };
    update();
    media.addEventListener('change', update);
    localStorage.setItem(themeKey, preference);
    return () => media.removeEventListener('change', update);
  }, [preference]);
  return { preference, setPreference };
}

export function useLocale() {
  const [locale, setLocale] = useState<Locale>('en');
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = directionFor(locale);
  }, [locale]);
  return { locale, setLocale };
}
