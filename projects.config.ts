// ═══════════════════════════════════════════════════════════
// PROJECTS CONFIG — برای اضافه‌کردن پروژه جدید فقط اینجا بیا
// ═══════════════════════════════════════════════════════════

export interface Project {
  id: string
  link: string
  tags: {
    fa: string[]
    de: string[]
    en: string[]
  }
  label: { fa: string; de: string; en: string }
  title: { fa: string; de: string; en: string }
  titleSub: string          // نام انگلیسی زیر عنوان (همیشه ثابت)
  desc: { fa: string; de: string; en: string }
  cta: { fa: string; de: string; en: string }
}

export interface WebProject {
  title: string             // نام سایت (همیشه ثابت)
  link: string
  desc: { fa: string; de: string; en: string }
}

// ─────────────────────────────────────────
// ۱. پروژه‌های اصلی — هر پروژه جدید اینجا اضافه کن
// ─────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    id: 'ketabkhaneh',
    link: 'https://app.book-hub.org',
    label: { fa: 'پلتفرم کتاب', de: 'Buchplattform', en: 'Book Platform' },
    title: { fa: 'کتابخانه', de: 'Ketabkhaneh', en: 'Ketabkhaneh' },
    titleSub: 'Ketabkhaneh',
    desc: {
      fa: 'خرید، فروش، هدیه و قرض کتاب میان کاربران. یک اکوسیستم کامل برای دوستداران کتاب.',
      de: 'Kaufen, verkaufen, verschenken und verleihen von Büchern. Ein vollständiges Ökosystem für Bücherliebhaber.',
      en: 'Buy, sell, gift, and lend books between users. A complete ecosystem for book lovers.',
    },
    tags: {
      fa: ['خرید و فروش', 'هدیه کتاب', 'قرض کتاب', 'جستجو'],
      de: ['Kaufen & Verkaufen', 'Verschenken', 'Verleihen', 'Suche'],
      en: ['Buy & Sell', 'Gift Books', 'Lend Books', 'Search'],
    },
    cta: { fa: 'ورود به پلتفرم', de: 'Zur Plattform', en: 'Open Platform' },
  },
  {
    id: 'iran',
    link: 'https://iran.book-hub.org',
    label: { fa: 'مانیتورینگ', de: 'Monitoring', en: 'Monitoring' },
    title: { fa: 'ایران نت', de: 'Iran Net', en: 'Iran Net' },
    titleSub: 'Iran Net Monitor',
    desc: {
      fa: 'پایش لحظه‌ای وضعیت اینترنت ایران. راهنمای ارتباط با خانواده در شرایط قطعی.',
      de: 'Echtzeit-Überwachung des Internetzugangs im Iran. Kommunikationsleitfaden bei Ausfällen.',
      en: 'Real-time monitoring of internet access in Iran. Communication guide during outages.',
    },
    tags: {
      fa: ['مانیتورینگ زنده', 'راهنمای ارتباط', 'اسکریپت خودکار'],
      de: ['Live-Monitoring', 'Kommunikationsguide', 'Auto-Skript'],
      en: ['Live Monitoring', 'Communication Guide', 'Auto Script'],
    },
    cta: { fa: 'مشاهده وضعیت', de: 'Status anzeigen', en: 'View Status' },
  },
  {
    id: 'roman-converter',
    link: 'https://converter.book-hub.org',
    label: { fa: 'ابزار تاریخ', de: 'Datums-Tool', en: 'Date Tool' },
    title: { fa: 'مبدل تاریخ رومی', de: 'Röm. Datumsrechner', en: 'Roman Date Converter' },
    titleSub: 'Roman Date Converter',
    desc: {
      fa: 'تبدیل تاریخ‌های لاتین به تقویم مدرن. برای دانشجویان، مورخان و پژوهشگران متون لاتین و تاریخ روم.',
      de: 'Konvertiert historische römische Kalenderangaben (Kalenden, Nonen, Iden) in moderne Gregorianische Daten. Für Historiker und Latinisten.',
      en: 'Converts Latin calendar expressions (Kalends, Nones, Ides) into modern Gregorian dates. For students, historians, and classicists.',
    },
    tags: {
      fa: ['تقویم رومی', 'تاریخ یولیانی', 'تاریخ گرگوری', 'متون لاتین'],
      de: ['Römischer Kalender', 'Julianisch', 'Gregorianisch', 'Lateinische Texte'],
      en: ['Roman Calendar', 'Julian Date', 'Gregorian', 'Latin Texts'],
    },
    cta: { fa: 'باز کردن ابزار', de: 'Tool öffnen', en: 'Open Tool' },
  },

  // ─── پروژه جدید بعدی رو اینجا اضافه کن ───
  // {
  //   id: 'my-new-project',
  //   link: 'https://newproject.book-hub.org',
  //   label: { fa: '...', de: '...', en: '...' },
  //   title: { fa: '...', de: '...', en: '...' },
  //   titleSub: 'New Project',
  //   desc: { fa: '...', de: '...', en: '...' },
  //   tags: { fa: [...], de: [...], en: [...] },
  //   cta: { fa: '...', de: '...', en: '...' },
  // },
]

// ─────────────────────────────────────────
// ۲. پروژه‌های طراحی وب — اینجا اضافه کن
// ─────────────────────────────────────────
export const WEB_PROJECTS: WebProject[] = [
  {
    title: 'Luxussmooth',
    link: 'https://luxussmooth.de/',
    desc: {
      fa: 'سالن لیزر و زیبایی — فرانکفورت',
      de: 'Laser & Beauty Salon — Frankfurt',
      en: 'Laser & Beauty Salon — Frankfurt',
    },
  },
  {
    title: 'Iranian Film Festival',
    link: 'https://iranian-filmfestival-frankfurt.com/',
    desc: {
      fa: 'جشنواره فیلم ایرانی فرانکفورت',
      de: 'Iranisches Filmfestival Frankfurt',
      en: 'Iranian Film Festival Frankfurt',
    },
  },
  {
    title: 'Tattooing Baba',
    link: 'https://tattooingbaba.de/',
    desc: {
      fa: 'استودیو تاتو — آلمان',
      de: 'Tattoo-Studio — Deutschland',
      en: 'Tattoo Studio — Germany',
    },
  },

  // ─── سایت جدید رو اینجا اضافه کن ───
  // {
  //   title: 'New Website',
  //   link: 'https://example.de/',
  //   desc: { fa: '...', de: '...', en: '...' },
  // },
]
