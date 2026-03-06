# Book Hub Portal

پورتال اصلی book-hub.org — ساخته‌شده با Next.js 14 + Tailwind CSS

## نصب و راه‌اندازی محلی

```bash
npm install
npm run dev
```

باز کن: http://localhost:3000

## دپلوی روی Vercel

### روش ۱ — از طریق GitHub (توصیه‌شده)

1. این فولدر را به یک repository جدید در GitHub آپلود کن
2. وارد [vercel.com](https://vercel.com) شو
3. روی **New Project** کلیک کن
4. repository را انتخاب کن — Vercel تمام تنظیمات Next.js را خودکار تشخیص می‌دهد
5. روی **Deploy** کلیک کن

### روش ۲ — از طریق CLI

```bash
npm i -g vercel
vercel
```

## تنظیم دامین book-hub.org

بعد از دپلوی در Vercel:

1. در داشبورد Vercel، پروژه را باز کن
2. برو به **Settings → Domains**
3. دامین `book-hub.org` را اضافه کن
4. در SiteGround، DNS رکوردها را آپدیت کن:
   - رکورد `A` را به IP Vercel تغییر بده
   - یا `CNAME` برای www به `cname.vercel-dns.com`

## ساختار پروژه

```
book-hub-portal/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx        ← تمام محتوا اینجاست
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## اضافه‌کردن پروژه جدید

فایل `app/page.tsx` را باز کن. آبجکت `content` در ابتدای فایل هست.
برای هر زبان (fa/de/en) یک آیتم جدید به آرایه `projectList` یا `webList` اضافه کن.
