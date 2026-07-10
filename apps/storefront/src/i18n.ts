export type Locale = 'en' | 'ar';
export type ThemePreference = 'light' | 'dark' | 'system';

const messages = {
  en: {
    announcement: 'Complimentary shipping on orders over $250',
    home: 'Home',
    collection: 'Collection',
    craftsmanship: 'Craftsmanship',
    journal: 'Journal',
    search: 'Search',
    account: 'Account',
    bag: 'Bag',
    menu: 'Open navigation menu',
    main: 'Main content',
    footer: 'Crafted for the lasting impression.',
    copyright: '© 2026 LAST & LAUREL.',
    language: 'العربية',
    skip: 'Skip to main content',
  },
  ar: {
    announcement: 'شحن مجاني للطلبات التي تزيد عن ٢٥٠ دولارًا',
    home: 'الرئيسية',
    collection: 'المجموعة',
    craftsmanship: 'الحِرفية',
    journal: 'المجلة',
    search: 'بحث',
    account: 'الحساب',
    bag: 'الحقيبة',
    menu: 'فتح قائمة التنقل',
    main: 'المحتوى الرئيسي',
    footer: 'صُممت لانطباع يدوم.',
    copyright: '© ٢٠٢٦ لاست آند لوريل.',
    language: 'English',
    skip: 'تخطَّ إلى المحتوى الرئيسي',
  },
} as const;

export type MessageKey = keyof typeof messages.en;
export const translate = (locale: Locale, key: MessageKey) => messages[locale][key];
export const directionFor = (locale: Locale) => (locale === 'ar' ? 'rtl' : 'ltr');
