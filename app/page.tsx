'use client'

import { useState, useEffect } from 'react'
import { PROJECTS, WEB_PROJECTS } from '../projects.config'

type Lang = 'fa' | 'de' | 'en'

const UI = {
  fa: { dir: 'rtl', eyebrow: 'پورتال پروژه‌ها', heroLine1: 'کانون', heroLine2: 'کتاب', heroSub: 'فضایی برای ایده‌هایی که به نرم‌افزار تبدیل شدند', scroll: 'اسکرول', s1: 'پروژه‌ها', s2: 'طراحی وب' },
  de: { dir: 'ltr', eyebrow: 'Projekt-Portal', heroLine1: 'Book', heroLine2: 'Hub', heroSub: 'Ein Raum für Ideen, die zu Software wurden', scroll: 'Scrollen', s1: 'Projekte', s2: 'Webdesign' },
  en: { dir: 'ltr', eyebrow: 'Projects Portal', heroLine1: 'Book', heroLine2: 'Hub', heroSub: 'A space for ideas that became software', scroll: 'Scroll', s1: 'Projects', s2: 'Web Design' },
}

export default function Home() {
  const [lang, setLang] = useState<Lang>('fa')
  const [scrolled, setScrolled] = useState(false)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const ui = UI[lang]
  const isRtl = ui.dir === 'rtl'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    const onMouse = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY })
    window.addEventListener('scroll', onScroll)
    window.addEventListener('mousemove', onMouse)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('mousemove', onMouse) }
  }, [])

  const arrowPath = isRtl
    ? <><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></>
    : <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>

  return (
    <div dir={ui.dir} style={{ background: '#fff', minHeight: '100vh', fontFamily: isRtl ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif", color: '#0a0a0a', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Vazirmatn:wght@300;400;500;600;700;800;900&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 2px; }
        ::-webkit-scrollbar-thumb { background: #0a0a0a; }

        .cursor-glow { position: fixed; pointer-events: none; z-index: 0; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle, rgba(0,0,0,0.035) 0%, transparent 65%); transform: translate(-50%,-50%); transition: left .5s ease, top .5s ease; }

        .nav { position: fixed; top:0; left:0; right:0; z-index:100; padding:0 48px; height:64px; display:flex; align-items:center; justify-content:space-between; transition:all .4s ease; }
        .nav.scrolled { background:rgba(255,255,255,.96); backdrop-filter:blur(20px); border-bottom:1px solid rgba(0,0,0,.05); }
        .nav-logo { font-family:'Bebas Neue',cursive; font-size:22px; letter-spacing:.1em; color:#0a0a0a; }
        .lang-group { display:flex; gap:2px; }
        .lang-pill { border:1px solid rgba(0,0,0,.1); background:transparent; color:rgba(0,0,0,.35); font-size:11px; font-weight:600; letter-spacing:.08em; padding:5px 12px; border-radius:999px; cursor:pointer; transition:all .2s ease; font-family:inherit; }
        .lang-pill:hover { border-color:#0a0a0a; color:#0a0a0a; }
        .lang-pill.active { background:#0a0a0a; color:#fff; border-color:#0a0a0a; }

        .hero { min-height:100vh; display:flex; flex-direction:column; justify-content:flex-end; padding:0 48px 80px; position:relative; overflow:hidden; }
        .hero-grid { position:absolute; inset:0; background-image:linear-gradient(rgba(0,0,0,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.04) 1px,transparent 1px); background-size:80px 80px; -webkit-mask-image:radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%); mask-image:radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%); }
        .hero-eyebrow { font-size:11px; font-weight:600; letter-spacing:.2em; text-transform:uppercase; color:rgba(0,0,0,.3); margin-bottom:20px; display:flex; align-items:center; gap:14px; animation:fadeUp .8s ease both .1s; }
        .hero-eyebrow::before { content:''; display:block; width:32px; height:1px; background:rgba(0,0,0,.25); flex-shrink:0; }
        .hero-title { font-family:'Bebas Neue',cursive; font-size:clamp(96px,17vw,230px); line-height:.88; letter-spacing:-.01em; color:#0a0a0a; position:relative; z-index:1; animation:fadeUp .8s ease both .2s; }
        .hero-title .outline { -webkit-text-stroke:2px #0a0a0a; color:transparent; }
        .hero-bottom { display:flex; align-items:flex-end; justify-content:space-between; margin-top:48px; gap:40px; animation:fadeUp .8s ease both .35s; }
        .hero-sub { font-size:16px; color:rgba(0,0,0,.4); max-width:380px; line-height:1.75; font-weight:300; }
        .hero-scroll { display:flex; flex-direction:column; align-items:center; gap:10px; color:rgba(0,0,0,.25); font-size:10px; letter-spacing:.18em; text-transform:uppercase; font-weight:600; flex-shrink:0; }
        .scroll-line { width:1px; height:52px; background:linear-gradient(to bottom,rgba(0,0,0,.3),transparent); animation:pulse 2.2s ease-in-out infinite; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scaleY(1)} 50%{opacity:.3;transform:scaleY(.6)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }

        .section { padding:120px 48px; }
        .section-inner { max-width:1200px; margin:0 auto; }
        .section-header { display:flex; align-items:center; gap:18px; margin-bottom:64px; }
        .section-num { font-family:'Bebas Neue',cursive; font-size:13px; letter-spacing:.15em; color:rgba(0,0,0,.18); }
        .section-label { font-size:11px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; color:rgba(0,0,0,.3); }
        .section-rule { flex:1; height:1px; background:rgba(0,0,0,.07); }

        .projects-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(360px,1fr)); gap:2px; }

        .pcard { position:relative; background:#fff; border:1px solid rgba(0,0,0,.06); padding:48px; overflow:hidden; text-decoration:none; color:inherit; display:block; }
        .pcard::before { content:''; position:absolute; inset:0; background:#0a0a0a; transform:translateY(102%); transition:transform .55s cubic-bezier(.76,0,.24,1); z-index:0; }
        .pcard:hover::before { transform:translateY(0); }
        .pcard-inner { position:relative; z-index:1; }
        .pcard-top { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:36px; }
        .pcard-num { font-family:'Bebas Neue',cursive; font-size:80px; line-height:1; color:rgba(0,0,0,.05); letter-spacing:-.02em; transition:color .3s ease; }
        .pcard:hover .pcard-num { color:rgba(255,255,255,.08); }
        .pcard-tag { font-size:10px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; padding:5px 12px; border-radius:999px; border:1px solid rgba(0,0,0,.09); color:rgba(0,0,0,.35); transition:all .3s ease; white-space:nowrap; }
        .pcard:hover .pcard-tag { border-color:rgba(255,255,255,.15); color:rgba(255,255,255,.5); }
        .pcard-title { font-family:'Bebas Neue',cursive; font-size:60px; line-height:.92; color:#0a0a0a; margin-bottom:6px; transition:color .3s ease; }
        .pcard:hover .pcard-title { color:#fff; }
        .pcard-en { font-size:11px; letter-spacing:.1em; text-transform:uppercase; font-weight:600; color:rgba(0,0,0,.25); margin-bottom:24px; transition:color .3s ease; }
        .pcard:hover .pcard-en { color:rgba(255,255,255,.3); }
        .pcard-desc { font-size:15px; line-height:1.8; color:rgba(0,0,0,.45); margin-bottom:28px; font-weight:300; transition:color .3s ease; }
        .pcard:hover .pcard-desc { color:rgba(255,255,255,.6); }
        .pcard-tags { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:40px; }
        .pcard-chip { font-size:10px; letter-spacing:.06em; padding:4px 10px; border-radius:3px; border:1px solid rgba(0,0,0,.08); color:rgba(0,0,0,.35); transition:all .3s ease; }
        .pcard:hover .pcard-chip { border-color:rgba(255,255,255,.12); color:rgba(255,255,255,.4); }
        .pcard-cta { display:inline-flex; align-items:center; gap:10px; background:#0a0a0a; color:#fff; padding:13px 24px; border-radius:3px; font-size:13px; font-weight:600; letter-spacing:.04em; transition:all .3s ease; }
        .pcard:hover .pcard-cta { background:#fff; color:#0a0a0a; }
        .pcard-arrow { width:15px; height:15px; transition:transform .3s ease; }
        .pcard:hover .pcard-arrow { transform:translateX(${isRtl ? '-4px' : '4px'}); }

        .web-list { border-top:1px solid rgba(0,0,0,.07); }
        .witem { display:flex; align-items:center; justify-content:space-between; padding:26px 0; border-bottom:1px solid rgba(0,0,0,.07); text-decoration:none; color:inherit; position:relative; transition:padding-inline-start .35s ease; }
        .witem::after { content:''; position:absolute; bottom:-1px; left:0; right:0; height:1px; background:#0a0a0a; transform:scaleX(0); transform-origin:${isRtl ? 'right' : 'left'}; transition:transform .45s cubic-bezier(.76,0,.24,1); }
        .witem:hover::after { transform:scaleX(1); }
        .witem:hover { padding-inline-start:20px; }
        .witem-left { display:flex; align-items:center; gap:24px; }
        .witem-num { font-family:'Bebas Neue',cursive; font-size:13px; letter-spacing:.12em; color:rgba(0,0,0,.15); min-width:26px; }
        .witem-name { font-family:'Bebas Neue',cursive; font-size:30px; letter-spacing:.02em; color:#0a0a0a; transition:letter-spacing .35s ease; }
        .witem:hover .witem-name { letter-spacing:.07em; }
        .witem-desc { font-size:13px; color:rgba(0,0,0,.3); transition:color .3s ease; }
        .witem:hover .witem-desc { color:rgba(0,0,0,.6); }
        .witem-arrow { width:20px; height:20px; opacity:.15; transition:opacity .3s ease,transform .3s ease; flex-shrink:0; }
        .witem:hover .witem-arrow { opacity:1; transform:translateX(${isRtl ? '-6px' : '6px'}); }

        .footer { padding:40px 48px; border-top:1px solid rgba(0,0,0,.06); display:flex; align-items:center; justify-content:space-between; }
        .footer-logo { font-family:'Bebas Neue',cursive; font-size:17px; letter-spacing:.12em; color:rgba(0,0,0,.18); }
        .footer-url { font-size:11px; color:rgba(0,0,0,.18); letter-spacing:.08em; }

        @media(max-width:768px){
          .nav{padding:0 20px}
          .hero{padding:0 20px 56px}
          .hero-title{font-size:clamp(72px,20vw,120px)}
          .section{padding:72px 20px}
          .pcard{padding:28px 24px}
          .projects-grid{grid-template-columns:1fr}
          .footer{padding:28px 20px;flex-direction:column;gap:10px}
        }
      `}</style>

      {/* Cursor glow */}
      <div className="cursor-glow" style={{ left: mouse.x, top: mouse.y }} />

      {/* NAV */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <span className="nav-logo">Book Hub</span>
        <div className="lang-group">
          {(['fa', 'de', 'en'] as Lang[]).map(l => (
            <button key={l} className={`lang-pill ${lang === l ? 'active' : ''}`} onClick={() => setLang(l)}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-eyebrow">{ui.eyebrow}</div>
        <div className="hero-title">
          <div>{ui.heroLine1}</div>
          <div className="outline">{ui.heroLine2}</div>
        </div>
        <div className="hero-bottom">
          <p className="hero-sub">{ui.heroSub}</p>
          <div className="hero-scroll">
            <div className="scroll-line" />
            <span>{ui.scroll}</span>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" style={{ background: '#f9f9f9' }}>
        <div className="section-inner">
          <div className="section-header">
            <span className="section-num">01</span>
            <span className="section-label">{ui.s1}</span>
            <div className="section-rule" />
          </div>
          <div className="projects-grid">
            {PROJECTS.map((proj, i) => (
              <a key={proj.id} href={proj.link} target="_blank" rel="noopener noreferrer" className="pcard">
                <div className="pcard-inner">
                  <div className="pcard-top">
                    <span className="pcard-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="pcard-tag">{proj.label[lang]}</span>
                  </div>
                  <div className="pcard-title">{proj.title[lang]}</div>
                  <div className="pcard-en">{proj.titleSub}</div>
                  <p className="pcard-desc">{proj.desc[lang]}</p>
                  <div className="pcard-tags">
                    {proj.tags[lang].map(tag => <span key={tag} className="pcard-chip">{tag}</span>)}
                  </div>
                  <span className="pcard-cta">
                    {proj.cta[lang]}
                    <svg className="pcard-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{arrowPath}</svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WEB DESIGN */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-num">02</span>
            <span className="section-label">{ui.s2}</span>
            <div className="section-rule" />
          </div>
          <div className="web-list">
            {WEB_PROJECTS.map((site, i) => (
              <a key={site.title} href={site.link} target="_blank" rel="noopener noreferrer" className="witem">
                <div className="witem-left">
                  <span className="witem-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <div className="witem-name">{site.title}</div>
                    <div className="witem-desc">{site.desc[lang]}</div>
                  </div>
                </div>
                <svg className="witem-arrow" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="1.5">{arrowPath}</svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span className="footer-logo">Book Hub</span>
        <span className="footer-url">book-hub.org</span>
      </footer>
    </div>
  )
}
