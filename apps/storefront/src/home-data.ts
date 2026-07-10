import type { Locale } from './i18n';

type Localized = Record<Locale, string>;
export type Product = {
  id: string;
  slug: string;
  name: Localized;
  description: Localized;
  category: Localized;
  material: Localized;
  construction: Localized;
  price: number;
  compareAt?: number;
  image: 'oxford' | 'loafer' | 'derby';
  badge?: Localized;
  availability: 'available' | 'limited';
};

export const copy = {
  en: {
    heroEyebrow: 'The autumn last',
    heroTitle: 'Form follows the foot.',
    heroBody: 'A measured Oxford in chestnut calf, cut for the rooms that remember you.',
    shop: 'Explore the collection',
    craft: 'Inside the atelier',
    featured: 'No. 17 — The Aldwych',
    leather: 'Chestnut full-grain calf',
    construction: 'Goodyear welted',
    specLast: 'Last',
    specLastValue: 'Harrow 101',
    specFinish: 'Finish',
    specFinishValue: 'Hand burnished',
    specSole: 'Sole',
    specSoleValue: 'Oak-bark leather',
    categoriesEyebrow: 'The classics',
    categoriesTitle: 'A vocabulary of form',
    categoriesBody: 'Five enduring profiles, each resolved with a different measure of restraint.',
    anatomyEyebrow: 'Anatomy of a classic',
    anatomyTitle: 'The details carry the line.',
    anatomyBody:
      'A classical shoe reads as one whole, but it is built through deliberate relationships.',
    toe: 'Toe',
    vamp: 'Vamp',
    lacing: 'Lacing',
    welt: 'Welt',
    sole: 'Sole',
    heel: 'Heel',
    collectionEyebrow: 'Selected work',
    collectionTitle: 'Made for a considered wardrobe',
    viewAll: 'View all footwear',
    limited: 'Limited run',
    available: 'Available',
    materialEyebrow: 'Materials & construction',
    materialTitle: 'Built to be maintained.',
    materialBody:
      'Full-grain leather develops character through wear. Goodyear welting joins the upper, welt and sole in a construction that allows a skilled cobbler to replace the sole. Hand finishing gives each pair its own depth of tone.',
    materialList: [
      'Full-grain leather',
      'Goodyear welt construction',
      'Hand-applied finishing',
      'Replaceable leather soles',
    ],
    journalEyebrow: 'From the journal',
    journalTitle: 'Notes from the bench',
    read: 'Read the journal',
    newsletterTitle: 'Correspondence from the atelier',
    newsletterBody: 'Occasional notes on craft, care and the classical wardrobe.',
    emailLabel: 'Email address',
    emailPlaceholder: 'you@example.com',
    subscribe: 'Subscribe',
    newsletterDemo: 'This is a demonstration. Your address has not been stored.',
    newsletterInvalid: 'Enter a valid email address to continue.',
    footerTitle: 'LAST & LAUREL',
    footerNavTitle: 'Explore',
    footerServiceTitle: 'Client service',
    footerService: ['Delivery & returns', 'Care guide', 'Contact'],
    footerLinks: ['Footwear', 'Craftsmanship', 'Journal'],
    footerFine: 'Designed as a fictional portfolio experience.',
    closeMenu: 'Close navigation menu',
    theme: 'Theme',
    light: 'Light',
    dark: 'Dark',
    system: 'System',
  },
  ar: {
    heroEyebrow: 'قالب الخريف',
    heroTitle: 'الشكل يتبع القدم.',
    heroBody: 'حذاء أوكسفورد محسوب من جلد العجل الكستنائي، للأماكن التي تترك فيها حضوراً باقياً.',
    shop: 'اكتشف المجموعة',
    craft: 'داخل المشغل',
    featured: 'رقم ١٧ — ألدويتش',
    leather: 'جلد عجل كامل الحبيبات بلون الكستناء',
    construction: 'حياكة غوودير',
    specLast: 'القالب',
    specLastValue: 'هارو ١٠١',
    specFinish: 'التشطيب',
    specFinishValue: 'تلميع يدوي',
    specSole: 'النعل',
    specSoleValue: 'جلد مدبوغ بلحاء البلوط',
    categoriesEyebrow: 'الكلاسيكيات',
    categoriesTitle: 'مفردات الشكل',
    categoriesBody: 'خمسة قوالب أصيلة، لكل منها توازن مختلف بين البساطة والحضور.',
    anatomyEyebrow: 'تشريح الكلاسيكية',
    anatomyTitle: 'التفاصيل تحفظ الخط.',
    anatomyBody: 'يُقرأ الحذاء الكلاسيكي كوحدة واحدة، لكنه يُبنى بعلاقات مدروسة بين أجزائه.',
    toe: 'المقدمة',
    vamp: 'الرقعة الأمامية',
    lacing: 'الرباط',
    welt: 'الحافة المخيطة',
    sole: 'النعل',
    heel: 'الكعب',
    collectionEyebrow: 'اختيارات المشغل',
    collectionTitle: 'لخزانة مدروسة',
    viewAll: 'عرض جميع الأحذية',
    limited: 'إصدار محدود',
    available: 'متاح',
    materialEyebrow: 'المواد والبناء',
    materialTitle: 'صُنع ليُعتنى به.',
    materialBody:
      'يكتسب الجلد كامل الحبيبات شخصيته مع الاستعمال. تربط حياكة غوودير الجزء العلوي والحافة والنعل، ما يتيح للإسكافي الماهر استبدال النعل عند الحاجة. أما التشطيب اليدوي فيمنح كل زوج عمقاً خاصاً في اللون.',
    materialList: [
      'جلد كامل الحبيبات',
      'بناء بحياكة غوودير',
      'تشطيب يدوي متدرّج',
      'نعال جلدية قابلة للاستبدال',
    ],
    journalEyebrow: 'من المجلة',
    journalTitle: 'ملاحظات من طاولة العمل',
    read: 'اقرأ المجلة',
    newsletterTitle: 'رسائل من المشغل',
    newsletterBody: 'ملاحظات متباعدة عن الحرفة والعناية وخزانة الملابس الكلاسيكية.',
    emailLabel: 'البريد الإلكتروني',
    emailPlaceholder: 'name@example.com',
    subscribe: 'اشترك',
    newsletterDemo: 'هذه تجربة توضيحية. لم يُحفظ بريدك الإلكتروني.',
    newsletterInvalid: 'أدخل عنوان بريد إلكتروني صحيحاً للمتابعة.',
    footerTitle: 'لاست آند لوريل',
    footerNavTitle: 'استكشف',
    footerServiceTitle: 'خدمة العملاء',
    footerService: ['التوصيل والاسترجاع', 'دليل العناية', 'تواصل معنا'],
    footerLinks: ['الأحذية', 'الحِرفية', 'المجلة'],
    footerFine: 'تجربة خيالية صُممت لعرض الأعمال.',
    closeMenu: 'إغلاق قائمة التنقل',
    theme: 'المظهر',
    light: 'فاتح',
    dark: 'داكن',
    system: 'تلقائي',
  },
} as const;

export const categories: { title: Localized; description: Localized; icon: Product['image'] }[] = [
  {
    title: { en: 'Oxford', ar: 'أوكسفورد' },
    description: { en: 'A closed-laced study in precision.', ar: 'رباط مغلق يعبّر عن الدقة.' },
    icon: 'oxford',
  },
  {
    title: { en: 'Derby', ar: 'ديربي' },
    description: { en: 'An open-laced companion for long days.', ar: 'رباط مفتوح لأيام أطول.' },
    icon: 'derby',
  },
  {
    title: { en: 'Loafer', ar: 'لوفر' },
    description: { en: 'An easy profile, carefully proportioned.', ar: 'هيئة سهلة بتناسب مدروس.' },
    icon: 'loafer',
  },
  {
    title: { en: 'Monk strap', ar: 'مونك ستراب' },
    description: { en: 'A single buckle with quiet resolve.', ar: 'إبزيم واحد بحضور هادئ.' },
    icon: 'oxford',
  },
  {
    title: { en: 'Chelsea boot', ar: 'بوت تشيلسي' },
    description: { en: 'A clean ankle line in polished leather.', ar: 'خط كاحل نقي بجلد مصقول.' },
    icon: 'derby',
  },
];

export const products: Product[] = [
  {
    id: 'aldwych-oxford',
    slug: 'aldwych-oxford',
    name: { en: 'The Aldwych Oxford', ar: 'أوكسفورد ألدويتش' },
    description: {
      en: 'A closed-laced Oxford with a hand-burnished toe.',
      ar: 'أوكسفورد برباط مغلق ومقدمة ملوّنة يدوياً.',
    },
    category: { en: 'Oxford', ar: 'أوكسفورد' },
    material: { en: 'Chestnut calf', ar: 'جلد عجل كستنائي' },
    construction: { en: 'Goodyear welted', ar: 'حياكة غوودير' },
    price: 680,
    image: 'oxford',
    badge: { en: 'New last', ar: 'قالب جديد' },
    availability: 'available',
  },
  {
    id: 'cavendish-loafer',
    slug: 'cavendish-loafer',
    name: { en: 'The Cavendish Loafer', ar: 'لوفر كافنديش' },
    description: { en: 'A penny loafer in dark brown suede.', ar: 'لوفر بيني من شمواه بني داكن.' },
    category: { en: 'Loafer', ar: 'لوفر' },
    material: { en: 'English suede', ar: 'شمواه إنجليزي' },
    construction: { en: 'Blake stitched', ar: 'خياطة بليك' },
    price: 590,
    compareAt: 650,
    image: 'loafer',
    availability: 'limited',
  },
  {
    id: 'kent-derby',
    slug: 'kent-derby',
    name: { en: 'The Kent Derby', ar: 'ديربي كِنت' },
    description: {
      en: 'A rounded Derby finished with a stout sole.',
      ar: 'ديربي مستدير بنعل متين.',
    },
    category: { en: 'Derby', ar: 'ديربي' },
    material: { en: 'Black grain calf', ar: 'جلد عجل أسود محبب' },
    construction: { en: 'Storm welted', ar: 'حافة مخيطة واقية' },
    price: 720,
    image: 'derby',
    badge: { en: 'Atelier choice', ar: 'اختيار المشغل' },
    availability: 'available',
  },
];

export const journal = [
  {
    title: { en: 'The first polish is not the last', ar: 'التلميع الأول ليس الأخير' },
    body: {
      en: 'A simple routine for preserving depth without overworking the leather.',
      ar: 'روتين بسيط للحفاظ على عمق اللون من دون إرهاق الجلد.',
    },
  },
  {
    title: { en: 'Finding room at the toe', ar: 'مساحة مريحة عند المقدمة' },
    body: {
      en: 'Why a considered fit begins before the first step.',
      ar: 'لماذا تبدأ الراحة المدروسة قبل الخطوة الأولى.',
    },
  },
];
