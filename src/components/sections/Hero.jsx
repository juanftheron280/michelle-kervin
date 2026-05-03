import { useState, useEffect, useRef, useCallback } from 'react'



/* ── Countdown ────────────────────────────────────────── */
const Countdown = () => {
  const target = new Date('2026-07-30T13:00:00+02:00')

  const calc = () => {
    const now = new Date()
    if (target <= now) return { mo: 0, d: 0, h: 0, m: 0 }

    let months = (target.getFullYear() - now.getFullYear()) * 12 + (target.getMonth() - now.getMonth())
    // If advancing `now` by `months` overshoots the target, pull back one month
    const testDate = new Date(now)
    testDate.setMonth(testDate.getMonth() + months)
    if (testDate > target) months--

    const afterMonths = new Date(now)
    afterMonths.setMonth(afterMonths.getMonth() + months)
    const remaining = target - afterMonths

    return {
      mo: months,
      d: Math.floor(remaining / 86400000),
      h: Math.floor((remaining % 86400000) / 3600000),
      m: Math.floor((remaining % 3600000) / 60000),
    }
  }

  const [t, setT] = useState(calc)
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 30000)
    return () => clearInterval(id)
  }, [])

  const pad = n => String(n).padStart(2, '0')

  return (
    <div className="mt-14 text-center hero-countdown">
      <p className="font-heading text-4xl md:text-5xl text-cream/75 mb-6" style={{ lineHeight: 1.2 }}>
        Forever starts in
      </p>
      <div className="flex items-start justify-center gap-4 md:gap-8">
        {[
          { val: pad(t.mo), label: 'Months' },
          { val: pad(t.d),  label: 'Days' },
          { val: pad(t.h),  label: 'Hours' },
          { val: pad(t.m),  label: 'Minutes' },
        ].map(({ val, label }, i) => (
          <div key={label} className="flex items-start">
            <div className="flex flex-col items-center">
              <span className="font-body text-4xl md:text-6xl font-bold text-cream tabular-nums leading-none tracking-tight">
                {val}
              </span>
              <span className="font-body text-[9px] tracking-[0.28em] text-cream/40 uppercase mt-2">
                {label}
              </span>
            </div>
            {i < 3 && (
              <span className="font-body text-2xl md:text-4xl font-bold text-cream/30 mx-1 md:mx-2 leading-none pt-0.5">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Corner lace — minimal, elegant (TL; mirrored via CSS) ─ */
const CornerLaceSVG = () => (
  <svg width="200" height="260" viewBox="0 0 200 260" fill="none" style={{ width: '100%', height: 'auto' }}>
    {/* Corner anchor */}
    <circle cx="5" cy="5" r="2.5" fill="#F4EFE6" opacity="0.5"/>

    {/* Top horizontal stem */}
    <path d="M5,16 C35,12 72,10 108,12 C138,14 168,11 194,13"
      stroke="#F4EFE6" strokeWidth="0.8" strokeLinecap="round" opacity="0.45"/>
    <circle cx="40" cy="12" r="1.6" fill="#F4EFE6" opacity="0.4"/>
    <circle cx="88" cy="11" r="1.6" fill="#F4EFE6" opacity="0.4"/>
    <circle cx="140" cy="12" r="1.6" fill="#F4EFE6" opacity="0.4"/>

    {/* 3 branches down from top stem */}
    <path d="M40,12 C37,24 32,34 27,44" stroke="#F4EFE6" strokeWidth="0.7" strokeLinecap="round" opacity="0.38"/>
    <ellipse cx="26" cy="49" rx="5" ry="10" transform="rotate(12 26 49)" stroke="#F4EFE6" strokeWidth="0.7" fill="none" opacity="0.38"/>
    <ellipse cx="16" cy="43" rx="3.5" ry="7" transform="rotate(-15 16 43)" stroke="#F4EFE6" strokeWidth="0.6" fill="none" opacity="0.28"/>

    <path d="M88,11 C85,23 80,31 76,40" stroke="#F4EFE6" strokeWidth="0.7" strokeLinecap="round" opacity="0.38"/>
    <ellipse cx="75" cy="45" rx="5" ry="10" transform="rotate(8 75 45)" stroke="#F4EFE6" strokeWidth="0.7" fill="none" opacity="0.38"/>
    <ellipse cx="65" cy="39" rx="3.5" ry="6.5" transform="rotate(-10 65 39)" stroke="#F4EFE6" strokeWidth="0.6" fill="none" opacity="0.28"/>

    <path d="M140,12 C138,22 134,30 130,37" stroke="#F4EFE6" strokeWidth="0.65" strokeLinecap="round" opacity="0.35"/>
    <ellipse cx="129" cy="41" rx="4" ry="8" transform="rotate(6 129 41)" stroke="#F4EFE6" strokeWidth="0.6" fill="none" opacity="0.33"/>

    {/* Left vertical stem */}
    <path d="M16,5 C12,42 10,80 12,118 C14,155 10,195 12,248"
      stroke="#F4EFE6" strokeWidth="0.8" strokeLinecap="round" opacity="0.45"/>
    <circle cx="12" cy="45" r="1.6" fill="#F4EFE6" opacity="0.4"/>
    <circle cx="11" cy="90" r="1.6" fill="#F4EFE6" opacity="0.4"/>
    <circle cx="12" cy="135" r="1.6" fill="#F4EFE6" opacity="0.4"/>
    <circle cx="11" cy="180" r="1.6" fill="#F4EFE6" opacity="0.4"/>

    {/* 3 branches right from vertical stem */}
    <path d="M12,45 C24,41 36,35 48,28" stroke="#F4EFE6" strokeWidth="0.7" strokeLinecap="round" opacity="0.38"/>
    <ellipse cx="53" cy="26" rx="5" ry="10" transform="rotate(-22 53 26)" stroke="#F4EFE6" strokeWidth="0.7" fill="none" opacity="0.38"/>
    <ellipse cx="44" cy="18" rx="3.5" ry="7" transform="rotate(-38 44 18)" stroke="#F4EFE6" strokeWidth="0.6" fill="none" opacity="0.28"/>

    <path d="M11,90 C22,86 32,80 42,73" stroke="#F4EFE6" strokeWidth="0.7" strokeLinecap="round" opacity="0.38"/>
    <ellipse cx="47" cy="71" rx="5" ry="10" transform="rotate(-18 47 71)" stroke="#F4EFE6" strokeWidth="0.7" fill="none" opacity="0.38"/>
    <ellipse cx="38" cy="63" rx="3.5" ry="6.5" transform="rotate(-32 38 63)" stroke="#F4EFE6" strokeWidth="0.6" fill="none" opacity="0.28"/>

    <path d="M12,135 C22,131 30,125 39,118" stroke="#F4EFE6" strokeWidth="0.65" strokeLinecap="round" opacity="0.35"/>
    <ellipse cx="43" cy="116" rx="4" ry="8" transform="rotate(-15 43 116)" stroke="#F4EFE6" strokeWidth="0.6" fill="none" opacity="0.33"/>

    {/* Diagonal connector */}
    <path d="M5,5 C14,16 24,28 32,44" stroke="#F4EFE6" strokeWidth="0.55" strokeLinecap="round" opacity="0.28"/>
    <ellipse cx="34" cy="48" rx="3" ry="6" transform="rotate(22 34 48)" stroke="#F4EFE6" strokeWidth="0.55" fill="none" opacity="0.25"/>

    {/* Curling tendrils */}
    <path d="M194,13 C198,10 200,13 197,16" stroke="#F4EFE6" strokeWidth="0.5" strokeLinecap="round" opacity="0.28"/>
    <path d="M12,248 C9,252 6,250 8,246" stroke="#F4EFE6" strokeWidth="0.5" strokeLinecap="round" opacity="0.28"/>
  </svg>
)

/* ── Floating dust particles ────────────────────────────── */
const particles = [
  { left: '12%', delay: '0s',   dur: '7s',  size: 3 },
  { left: '28%', delay: '1.4s', dur: '9s',  size: 2 },
  { left: '45%', delay: '0.6s', dur: '8s',  size: 4 },
  { left: '60%', delay: '2.2s', dur: '7.5s',size: 2 },
  { left: '73%', delay: '0.9s', dur: '10s', size: 3 },
  { left: '85%', delay: '1.8s', dur: '8.5s',size: 2 },
  { left: '22%', delay: '3.1s', dur: '9.5s',size: 3 },
  { left: '55%', delay: '2.7s', dur: '6.5s',size: 2 },
]

/* ── Hero ────────────────────────────────────────────────── */
export default function Hero() {
  const bgRef = useRef(null)
  const [showIntro, setShowIntro] = useState(false)
  const [introFading, setIntroFading] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowIntro(true)
    }
  }, [])

  const dismissIntro = useCallback(() => {
    setIntroFading(true)
    setTimeout(() => setShowIntro(false), 800)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) return
      if (!bgRef.current) return
      bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
    {showIntro && (
      <div
        className="fixed inset-0 z-50 bg-ink"
        style={{
          transition: 'opacity 0.8s ease',
          opacity: introFading ? 0 : 1,
          pointerEvents: introFading ? 'none' : 'auto',
        }}
      >
        <video
          autoPlay
          muted
          playsInline
          onEnded={dismissIntro}
          className="w-full h-full object-cover"
        >
          <source src="/hero-mobile-intro.mp4" type="video/mp4" />
        </video>
        <button
          onClick={dismissIntro}
          className="absolute bottom-8 right-6 font-body text-[10px] tracking-[0.25em] uppercase text-cream/40 hover:text-cream/70 transition-colors"
        >
          Skip
        </button>
      </div>
    )}
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-ink overflow-hidden">

      {/* ── Responsive background photos ──────────────────── */}
      <div className="absolute inset-0" style={{ overflow: 'hidden' }}>
        {/* Desktop: hands with ring */}
        <img
          ref={bgRef}
          src="/photos/edit_aug_6817.jpg"
          alt=""
          className="hidden md:block absolute left-0 w-full object-cover"
          style={{
            opacity: 0.28,
            willChange: 'transform',
            height: '130%',
            top: '-15%',
            objectPosition: 'center 40%',
          }}
        />
        {/* Mobile: couple portrait */}
        <img
          src="/photos/edit_aug_6870.jpg"
          alt=""
          className="block md:hidden absolute inset-0 w-full h-full object-cover object-top"
          style={{ opacity: 0.28 }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(13,13,13,0.75) 0%, rgba(13,13,13,0.45) 30%, rgba(13,13,13,0.45) 70%, rgba(13,13,13,0.9) 100%)',
          }}
        />
      </div>

      {/* ── Corner lace — minimal, 4 corners, sm+ only ───── */}
      <div className="absolute top-0 left-0 pointer-events-none w-[90px] sm:w-[160px] lg:w-[200px] opacity-[0.28] sm:opacity-[0.42] lg:opacity-[0.52]">
        <CornerLaceSVG />
      </div>
      <div className="absolute top-0 right-0 pointer-events-none w-[90px] sm:w-[160px] lg:w-[200px] opacity-[0.28] sm:opacity-[0.42] lg:opacity-[0.52]" style={{ transform: 'scaleX(-1)' }}>
        <CornerLaceSVG />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none w-[90px] sm:w-[160px] lg:w-[200px] opacity-[0.28] sm:opacity-[0.42] lg:opacity-[0.52]" style={{ transform: 'scaleY(-1)' }}>
        <CornerLaceSVG />
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none w-[90px] sm:w-[160px] lg:w-[200px] opacity-[0.28] sm:opacity-[0.42] lg:opacity-[0.52]" style={{ transform: 'scale(-1)' }}>
        <CornerLaceSVG />
      </div>

      {/* ── Floating dust particles ─────────────────────── */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute bottom-0 rounded-full bg-gold pointer-events-none"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: 0,
            animation: `floatUp ${p.dur} ease-in-out ${p.delay} infinite`,
          }}
          aria-hidden="true"
        />
      ))}

      {/* ── Main content ──────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center px-4 w-full">
        <div className="text-center hero-frame">
          <p className="section-label mb-6" style={{ color: 'rgba(244,239,230,0.55)', letterSpacing: '0.18em', fontSize: '9px' }}>
            You are cordially invited to the wedding celebration of
          </p>
          <h1
            className="font-heading text-cream leading-none hero-names"
            style={{ fontSize: 'clamp(3rem, 10vw, 4.5rem)' }}
          >
            Kervin &amp; Melissa
          </h1>
          <div className="gold-rule my-5" />
          <p className="font-body text-[10px] tracking-[0.3em] text-cream/45 uppercase">
            #CassimEverAfter
          </p>
        </div>

        <Countdown />
      </div>

    </section>
    </>
  )
}
