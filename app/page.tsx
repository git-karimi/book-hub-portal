'use client'

import { useState } from 'react'

const content = {
  fa: {
    dir: 'rtl',
    lang: 'fa',
    nav: { title: 'کانون کتاب' },
    hero: {
      eyebrow: 'پورتال پروژه‌ها',
      heading: 'Book Hub',
      sub: 'فضایی برای ایده‌هایی که به نرم‌افزار تبدیل شدند.',
    },
    projects: 'پروژه‌ها',
    web: 'طراحی وب',
    projectList: [
      {
        id: 'ketabkhaneh',
        tag: 'پلتفرم کتاب',
        tagColor: 'accent',
        title: 'کتابخانه',
        subtitle: 'پلتفرم اشتراک‌گذاری کتاب',
        desc: 'فضایی برای خرید، فروش، هدیه‌دادن، هدیه‌گرفتن و قرض کتاب. کاربران می‌توانند کتاب‌هایشان را ثبت کنند و با دیگران به اشتراک بگذارند.',
        features: ['خرید و فروش', 'هدیه کتاب', 'قرض کتاب', 'جستجوی پیشرفته'],
        link: 'https://app.book-hub.org',
        linkText: 'ورود به پلتفرم',
        highlight: true,
      },
      {
        id: 'iran',
        tag: 'مانیتورینگ',
        tagColor: 'warm',
        title: 'Iran Net Monitor',
        subtitle: 'بررسی وضعیت اینترنت ایران',
        desc: 'ابزاری برای مانیتورینگ لحظه‌ای وضعیت دسترسی به اینترنت در ایران. راهنمایی برای ارتباط با خانواده در شرایط قطعی اینترنت.',
        features: ['مانیتورینگ زنده', 'راهنمای ارتباط', 'اسکریپت خودکار', 'منابع معتبر'],
        link: 'https://iran.book-hub.org',
        linkText: 'مشاهده وضعیت',
        highlight: false,
      },
    ],
    webList: [
      {
        title: 'Luxussmooth',
        desc: 'سالن لیزر و زیبایی در فرانکفورت — طراحی وبسایت حرفه‌ای',
        location: 'Frankfurt, DE',
        link: 'https://luxussmooth.de/',
      },
      {
        title: 'Iranian Film Festival Frankfurt',
        desc: 'جشنواره فیلم ایرانی فرانکفورت — طراحی وبسایت رویداد',
        location: 'Frankfurt, DE',
        link: 'https://iranian-filmfestival-frankfurt.com/',
      },
      {
        title: 'Tattooing Baba',
        desc: 'استودیو تاتو در آلمان — طراحی وبسایت هنری',
        location: 'Germany, DE',
        link: 'https://tattooingbaba.de/',
      },
    ],
    footer: 'Book Hub · ساخته شده با ❤️',
  },
  de: {
    dir: 'ltr',
    lang: 'de',
    nav: { title: 'Book Hub' },
    hero: {
      eyebrow: 'Projekt-Portal',
      heading: 'Book Hub',
      sub: 'Ein Raum für Ideen, die zu Software wurden.',
    },
    projects: 'Projekte',
    web: 'Webdesign',
    projectList: [
      {
        id: 'ketabkhaneh',
        tag: 'Buchplattform',
        tagColor: 'accent',
        title: 'Ketabkhaneh',
        subtitle: 'Buchsharing-Plattform',
        desc: 'Eine Plattform zum Kaufen, Verkaufen, Verschenken, Empfangen und Verleihen von Büchern. Nutzer können ihre Bücher registrieren und mit anderen teilen.',
        features: ['Kaufen & Verkaufen', 'Bücher verschenken', 'Bücher leihen', 'Erweiterte Suche'],
        link: 'https://app.book-hub.org',
        linkText: 'Zur Plattform',
        highlight: true,
      },
      {
        id: 'iran',
        tag: 'Monitoring',
        tagColor: 'warm',
        title: 'Iran Net Monitor',
        subtitle: 'Internet-Status in Iran',
        desc: 'Ein Echtzeit-Monitoring-Tool für den Internetzugang im Iran. Kommunikationsleitfaden für den Kontakt zur Familie bei Internetausfällen.',
        features: ['Live-Monitoring', 'Kommunikationsguide', 'Auto-Skript', 'Verlässliche Quellen'],
        link: 'https://iran.book-hub.org',
        linkText: 'Status anzeigen',
        highlight: false,
      },
    ],
    webList: [
      {
        title: 'Luxussmooth',
        desc: 'Laser- und Beautysalon in Frankfurt — Professionelles Webdesign',
        location: 'Frankfurt, DE',
        link: 'https://luxussmooth.de/',
      },
      {
        title: 'Iranian Film Festival Frankfurt',
        desc: 'Iranisches Filmfestival Frankfurt — Event-Webdesign',
        location: 'Frankfurt, DE',
        link: 'https://iranian-filmfestival-frankfurt.com/',
      },
      {
        title: 'Tattooing Baba',
        desc: 'Tattoo-Studio in Deutschland — Künstlerisches Webdesign',
        location: 'Germany, DE',
        link: 'https://tattooingbaba.de/',
      },
    ],
    footer: 'Book Hub · Mit ❤️ gebaut',
  },
  en: {
    dir: 'ltr',
    lang: 'en',
    nav: { title: 'Book Hub' },
    hero: {
      eyebrow: 'Projects Portal',
      heading: 'Book Hub',
      sub: 'A space for ideas that became software.',
    },
    projects: 'Projects',
    web: 'Web Design',
    projectList: [
      {
        id: 'ketabkhaneh',
        tag: 'Book Platform',
        tagColor: 'accent',
        title: 'Ketabkhaneh',
        subtitle: 'Book Sharing Platform',
        desc: 'A platform for buying, selling, gifting, receiving, and lending books. Users can register their books and share them with others.',
        features: ['Buy & Sell', 'Gift Books', 'Lend Books', 'Advanced Search'],
        link: 'https://app.book-hub.org',
        linkText: 'Open Platform',
        highlight: true,
      },
      {
        id: 'iran',
        tag: 'Monitoring',
        tagColor: 'warm',
        title: 'Iran Net Monitor',
        subtitle: 'Iran Internet Status Monitor',
        desc: 'A real-time monitoring tool for internet access in Iran. Communication guide for staying in touch with family during internet disruptions.',
        features: ['Live Monitoring', 'Communication Guide', 'Auto Script', 'Reliable Sources'],
        link: 'https://iran.book-hub.org',
        linkText: 'View Status',
        highlight: false,
      },
    ],
    webList: [
      {
        title: 'Luxussmooth',
        desc: 'Laser & beauty salon in Frankfurt — Professional web design',
        location: 'Frankfurt, DE',
        link: 'https://luxussmooth.de/',
      },
      {
        title: 'Iranian Film Festival Frankfurt',
        desc: 'Iranian Film Festival Frankfurt — Event website design',
        location: 'Frankfurt, DE',
        link: 'https://iranian-filmfestival-frankfurt.com/',
      },
      {
        title: 'Tattooing Baba',
        desc: 'Tattoo studio in Germany — Artistic web design',
        location: 'Germany, DE',
        link: 'https://tattooingbaba.de/',
      },
    ],
    footer: 'Book Hub · Built with ❤️',
  },
}

type Lang = 'fa' | 'de' | 'en'

export default function Home() {
  const [lang, setLang] = useState<Lang>('fa')
  const t = content[lang]
  const isRtl = t.dir === 'rtl'

  return (
    <div
      dir={t.dir}
      style={{ fontFamily: isRtl ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif" }}
      className="min-h-screen"
    >
      <style>{`
        :root {
          --cream: #faf8f4;
          --ink: #18181b;
          --warm: #b8924a;
          --warm-light: #f5ede0;
          --soft: #71706b;
          --accent: #2c5f4a;
          --accent-light: #e6f2ed;
          --border: #e8e2da;
        }
        * { box-sizing: border-box; }
        body { background: var(--cream); margin: 0; }
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Vazirmatn:wght@300;400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500&display=swap');

        .fade-in { animation: fadeUp 0.6s ease both; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .card-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.1);
        }
        .lang-btn { transition: all 0.2s ease; }
        .lang-btn:hover { background: var(--warm-light); color: var(--warm); }
        .lang-btn.active { background: var(--ink); color: #fff; }
        .arrow-link { transition: transform 0.2s; display: inline-block; }
        .arrow-link:hover { transform: translateX(${isRtl ? '-4px' : '4px'}); }
        .section-line {
          width: 40px; height: 2px;
          background: var(--warm);
          display: inline-block;
          vertical-align: middle;
          margin: 0 12px;
        }
        .web-card { transition: background 0.2s ease; }
        .web-card:hover { background: var(--warm-light); }
        .highlight-ring {
          box-shadow: 0 0 0 2px var(--accent), 0 12px 40px rgba(44,95,74,0.12);
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(250,248,244,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        padding: '0 24px',
      }}>
        <div style={{
          maxWidth: 1000, margin: '0 auto',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          height: 60,
        }}>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 20,
            fontWeight: 700,
            color: 'var(--ink)',
            letterSpacing: '-0.02em',
          }}>
            Book Hub
          </span>

          {/* Lang switcher */}
          <div style={{ display: 'flex', gap: 4, background: '#efe9e0', borderRadius: 999, padding: 4 }}>
            {(['fa', 'de', 'en'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`lang-btn ${lang === l ? 'active' : ''}`}
                style={{
                  border: 'none', cursor: 'pointer',
                  padding: '4px 14px', borderRadius: 999,
                  fontSize: 13, fontWeight: 500,
                  background: lang === l ? 'var(--ink)' : 'transparent',
                  color: lang === l ? '#fff' : 'var(--soft)',
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ maxWidth: 1000, margin: '0 auto', padding: '80px 24px 64px' }}>
        <div className="fade-in">
          <div style={{
            display: 'inline-block',
            background: 'var(--warm-light)',
            color: 'var(--warm)',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '4px 14px',
            borderRadius: 999,
            marginBottom: 24,
          }}>
            {t.hero.eyebrow}
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(42px, 8vw, 80px)',
            fontWeight: 700,
            color: 'var(--ink)',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: 20,
          }}>
            {t.hero.heading}
          </h1>
          <p style={{
            fontSize: 18,
            color: 'var(--soft)',
            maxWidth: 480,
            lineHeight: 1.7,
          }}>
            {t.hero.sub}
          </p>
        </div>

        {/* Decorative bar */}
        <div style={{
          marginTop: 48,
          height: 1,
          background: 'linear-gradient(to right, var(--warm), transparent)',
        }} />
      </section>

      {/* PROJECTS */}
      <section style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px 80px' }}>
        <h2 style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--soft)',
          marginBottom: 32,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}>
          <span style={{ display: 'inline-block', width: 32, height: 2, background: 'var(--warm)' }} />
          {t.projects}
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {t.projectList.map((proj, i) => (
            <div
              key={proj.id}
              className={`card-hover fade-in ${proj.highlight ? 'highlight-ring' : ''}`}
              style={{
                animationDelay: `${i * 0.12}s`,
                background: proj.highlight ? '#fff' : '#fff',
                borderRadius: 20,
                padding: 32,
                border: proj.highlight ? 'none' : '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              {/* Tag */}
              <span style={{
                display: 'inline-block',
                background: proj.tagColor === 'accent' ? 'var(--accent-light)' : 'var(--warm-light)',
                color: proj.tagColor === 'accent' ? 'var(--accent)' : 'var(--warm)',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '3px 12px',
                borderRadius: 999,
                alignSelf: 'flex-start',
              }}>
                {proj.tag}
              </span>

              {/* Title */}
              <div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 26,
                  fontWeight: 700,
                  color: 'var(--ink)',
                  letterSpacing: '-0.02em',
                  marginBottom: 4,
                }}>
                  {proj.title}
                </h3>
                <p style={{ fontSize: 13, color: 'var(--soft)', fontWeight: 500 }}>
                  {proj.subtitle}
                </p>
              </div>

              {/* Desc */}
              <p style={{ fontSize: 15, color: 'var(--soft)', lineHeight: 1.75, flexGrow: 1 }}>
                {proj.desc}
              </p>

              {/* Features */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {proj.features.map((f) => (
                  <span key={f} style={{
                    background: 'var(--cream)',
                    border: '1px solid var(--border)',
                    borderRadius: 999,
                    padding: '3px 12px',
                    fontSize: 12,
                    color: 'var(--soft)',
                  }}>
                    {f}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  marginTop: 4,
                  background: proj.highlight ? 'var(--accent)' : 'var(--ink)',
                  color: '#fff',
                  borderRadius: 12,
                  padding: '10px 20px',
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                  alignSelf: 'flex-start',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                {proj.linkText}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  {isRtl
                    ? <><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></>
                    : <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>
                  }
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* WEB DESIGN */}
      <section style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px 96px' }}>
        <h2 style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--soft)',
          marginBottom: 32,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}>
          <span style={{ display: 'inline-block', width: 32, height: 2, background: 'var(--warm)' }} />
          {t.web}
        </h2>

        <div style={{
          background: '#fff',
          borderRadius: 20,
          border: '1px solid var(--border)',
          overflow: 'hidden',
        }}>
          {t.webList.map((site, i) => (
            <a
              key={site.title}
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              className="web-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '22px 28px',
                borderBottom: i < t.webList.length - 1 ? '1px solid var(--border)' : 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 18,
                    fontWeight: 600,
                    color: 'var(--ink)',
                  }}>
                    {site.title}
                  </span>
                  <span style={{
                    fontSize: 11,
                    background: 'var(--warm-light)',
                    color: 'var(--warm)',
                    padding: '2px 10px',
                    borderRadius: 999,
                    fontWeight: 600,
                  }}>
                    {site.location}
                  </span>
                </div>
                <p style={{ fontSize: 14, color: 'var(--soft)', margin: 0 }}>
                  {site.desc}
                </p>
              </div>
              <div className="arrow-link" style={{ marginInlineStart: 16, flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--warm)" strokeWidth="2">
                  {isRtl
                    ? <><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></>
                    : <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>
                  }
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '28px 24px',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: 13, color: 'var(--soft)' }}>{t.footer}</p>
      </footer>
    </div>
  )
}
