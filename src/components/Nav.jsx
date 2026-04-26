import { useState, useEffect } from 'react'

const links = [
  { label: 'Our Story',  href: '#our-story' },
  { label: 'Gallery',    href: '#gallery' },
  { label: 'The Day',    href: '#the-day' },
  { label: 'Dress Code', href: '#dress-code' },
  { label: 'Venue',      href: '#venue' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          transition: 'background 0.45s ease, border-color 0.45s ease',
          background: scrolled ? 'rgba(13,11,8,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'rgba(201,169,110,0.14)' : 'transparent'}`,
        }}
      >
        {/* ── Mobile layout: 3 equal columns so monogram stays centered ── */}

        {/* Left col — spacer on mobile, hidden on desktop */}
        <div className="flex-1 md:hidden" />

        {/* Monogram — centered on mobile, left-aligned on desktop */}
        <a
          href="#"
          className="flex-none md:flex-1"
          style={{
            fontFamily: 'Eyesome Script, cursive',
            fontSize: '1.85rem',
            color: '#C9A96E',
            textDecoration: 'none',
            lineHeight: 1,
            letterSpacing: '0.02em',
            whiteSpace: 'nowrap',
            textAlign: 'center',
          }}
        >
          M &amp; K
        </a>

        {/* Desktop center links */}
        <div
          className="hidden md:flex flex-1 justify-center"
          style={{ gap: '32px' }}
        >
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: 'Lora, Georgia, serif',
                fontSize: '10px',
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                color: 'rgba(244,239,230,0.55)',
                textDecoration: 'none',
                transition: 'color 0.25s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#C9A96E' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(244,239,230,0.55)' }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right col — hamburger (mobile) + RSVP (desktop) */}
        <div
          className="flex-1 flex justify-end items-center"
          style={{ gap: '16px' }}
        >
          {/* RSVP button — desktop only */}
          <a
            href="#rsvp"
            className="hidden md:inline-block"
            style={{
              fontFamily: 'Lora, Georgia, serif',
              fontSize: '10px',
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: '#C9A96E',
              textDecoration: 'none',
              border: '1px solid rgba(201,169,110,0.4)',
              padding: '8px 22px',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(201,169,110,0.1)'
              e.currentTarget.style.borderColor = '#C9A96E'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(201,169,110,0.4)'
            }}
          >
            RSVP
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '5px',
              width: '28px',
              height: '28px',
            }}
          >
            <span style={{
              display: 'block', width: '20px', height: '1px',
              background: '#C9A96E',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block', width: '20px', height: '1px',
              background: '#C9A96E',
              transition: 'opacity 0.3s ease',
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: '20px', height: '1px',
              background: '#C9A96E',
              transition: 'transform 0.3s ease',
              transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
            }} />
          </button>
        </div>
      </nav>

      {/* ── Mobile full-screen menu overlay ── */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 899,
          background: 'rgba(13,11,8,0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.35s ease',
        }}
      >
        {/* Monogram at top of menu */}
        <p style={{
          fontFamily: 'Eyesome Script, cursive',
          fontSize: '3rem',
          color: 'rgba(201,169,110,0.35)',
          lineHeight: 1,
          marginBottom: '32px',
          letterSpacing: '0.02em',
        }}>
          M &amp; K
        </p>

        {/* Gold divider */}
        <div style={{ width: '36px', height: '1px', background: 'rgba(201,169,110,0.3)', marginBottom: '40px' }} />

        {/* Links */}
        {[...links, { label: 'RSVP', href: '#rsvp', isRsvp: true }].map(l => (
          <a
            key={l.href}
            href={l.href}
            onClick={close}
            style={{
              display: 'block',
              marginBottom: l.isRsvp ? 0 : '28px',
              marginTop: l.isRsvp ? '36px' : 0,
              fontFamily: l.isRsvp ? 'Lora, Georgia, serif' : 'Eyesome Script, cursive',
              fontSize: l.isRsvp ? '10px' : '2rem',
              letterSpacing: l.isRsvp ? '0.3em' : '0.03em',
              textTransform: l.isRsvp ? 'uppercase' : 'none',
              color: l.isRsvp ? '#C9A96E' : 'rgba(244,239,230,0.8)',
              textDecoration: 'none',
              textAlign: 'center',
              transition: 'color 0.2s',
              border: l.isRsvp ? '1px solid rgba(201,169,110,0.4)' : 'none',
              padding: l.isRsvp ? '10px 32px' : '0',
            }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  )
}
