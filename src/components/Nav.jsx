import { useState, useEffect } from 'react'

const links = [
  { label: 'Our Story',  href: '#our-story' },
  { label: 'Gallery',    href: '#gallery' },
  { label: 'The Day',    href: '#the-day' },
  { label: 'Dress Code', href: '#dress-code' },
  { label: 'Venue',      href: '#venue' },
]

const linkStyle = {
  fontFamily: 'Lora, Georgia, serif',
  fontSize: '10px',
  letterSpacing: '0.26em',
  textTransform: 'uppercase',
  color: 'rgba(244,239,230,0.55)',
  textDecoration: 'none',
  transition: 'color 0.25s ease',
}

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
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
          justifyContent: 'space-between',
          padding: '0 28px',
          transition: 'background 0.45s ease, border-color 0.45s ease',
          background: scrolled ? 'rgba(13,11,8,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'rgba(201,169,110,0.14)' : 'transparent'}`,
        }}
      >
        {/* Monogram / wordmark */}
        <a
          href="#"
          style={{
            fontFamily: 'Eyesome Script, cursive',
            fontSize: '1.75rem',
            color: '#C9A96E',
            textDecoration: 'none',
            lineHeight: 1,
            letterSpacing: '0.02em',
          }}
        >
          M &amp; K
        </a>

        {/* Desktop nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="hidden md:flex">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              style={linkStyle}
              onMouseEnter={e => { e.currentTarget.style.color = '#C9A96E' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(244,239,230,0.55)' }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* RSVP (desktop) + hamburger (mobile) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
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

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <span style={{
              display: 'block', width: '22px', height: '1px', background: '#C9A96E',
              transition: 'transform 0.3s ease',
              transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block', width: '22px', height: '1px', background: '#C9A96E',
              transition: 'opacity 0.3s ease',
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: '22px', height: '1px', background: '#C9A96E',
              transition: 'transform 0.3s ease',
              transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 899,
          background: 'rgba(13,11,8,0.97)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px',
          transition: 'opacity 0.35s ease, pointer-events 0s',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {/* Gold rule top */}
        <div style={{ width: '40px', height: '1px', background: 'rgba(201,169,110,0.4)' }} />

        {[...links, { label: 'RSVP', href: '#rsvp' }].map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={close}
            style={{
              fontFamily: i === links.length ? 'Lora, Georgia, serif' : 'Eyesome Script, cursive',
              fontSize: i === links.length ? '11px' : '2.2rem',
              letterSpacing: i === links.length ? '0.3em' : '0.04em',
              textTransform: i === links.length ? 'uppercase' : 'none',
              color: i === links.length ? '#C9A96E' : 'rgba(244,239,230,0.82)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#C9A96E' }}
            onMouseLeave={e => { e.currentTarget.style.color = i === links.length ? '#C9A96E' : 'rgba(244,239,230,0.82)' }}
          >
            {l.label}
          </a>
        ))}

        {/* Gold rule bottom */}
        <div style={{ width: '40px', height: '1px', background: 'rgba(201,169,110,0.4)' }} />
      </div>
    </>
  )
}
