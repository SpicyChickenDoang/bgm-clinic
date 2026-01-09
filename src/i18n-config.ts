export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'id'],
  localePrefix: 'as-needed',
} as const;

export type Locale = (typeof i18n)['locales'][number];
