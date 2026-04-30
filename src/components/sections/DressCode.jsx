import { BotanicalBranch } from '../ui/FloralSvg'

const cardStyle = {
  borderRadius: '16px',
  border: '1px solid rgba(201,169,110,0.22)',
  boxShadow: '0 2px 4px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.45), 0 24px 48px rgba(0,0,0,0.3), inset 0 1px 0 rgba(201,169,110,0.08)',
  transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s cubic-bezier(0.16,1,0.3,1)',
  overflow: 'hidden',
  background: 'rgba(20,18,14,0.6)',
  display: 'flex',
  flexDirection: 'column',
}

const cardHoverStyle = {
  transform: 'translateY(-10px)',
  boxShadow: '0 4px 8px rgba(0,0,0,0.3), 0 16px 40px rgba(0,0,0,0.55), 0 40px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(201,169,110,0.35)',
}

function IllustrationCard({ src, alt, label, caption, revealDir, delay, restriction }) {
  return (
    <div data-reveal={revealDir} data-delay={delay} className="flex flex-col h-full">
      <div
        style={cardStyle}
        className="flex-1"
        onMouseEnter={e => Object.assign(e.currentTarget.style, cardHoverStyle)}
        onMouseLeave={e => Object.assign(e.currentTarget.style, cardStyle)}
      >
        {/* Image container — full natural height, no crop */}
        <div style={{ overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
          <img
            src={src}
            alt={alt}
            className="w-full block"
            style={{ filter: 'contrast(1.03) brightness(0.97)', transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)', display: 'block' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
          />
          {/* Bottom gradient for depth */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ height: '40%', background: 'linear-gradient(to top, rgba(13,11,8,0.55) 0%, transparent 100%)', pointerEvents: 'none' }}
          />
          {/* Gold corner accents */}
          <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold/40" style={{ borderRadius: '16px 0 0 0' }} />
          <span className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold/40" style={{ borderRadius: '0 16px 0 0' }} />
        </div>

        {/* Label inside card */}
        <div className="px-6 py-5 text-center flex-1 flex flex-col items-center justify-center">
          <p className="section-label mb-1" style={{ color: '#C9A96E' }}>{label}</p>
          <div className="w-6 h-px bg-gold/30 mx-auto my-2" />
          <p className="font-body text-[12px] text-cream/45 italic">{caption}</p>
          {restriction && (
            <p
              className="font-body text-[10px] tracking-[0.22em] uppercase mt-3"
              style={{
                color: 'rgba(201,169,110,0.7)',
                border: '1px solid rgba(201,169,110,0.3)',
                display: 'inline-block',
                padding: '3px 10px',
              }}
            >
              {restriction}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function DressCode() {
  return (
    <section id="dress-code" className="section-dark py-24 px-4 relative overflow-hidden" style={{ scrollMarginTop: '60px' }}>
      {/* Botanical branch — right side */}
      <div className="absolute right-0 top-0 pointer-events-none hidden lg:block botanical-drift" style={{ opacity: 0.13 }}>
        <BotanicalBranch color="#F4EFE6" style={{ width: '200px' }} />
      </div>
      {/* Botanical branch — left side, mirrored */}
      <div className="absolute left-0 bottom-0 pointer-events-none hidden lg:block botanical-drift-alt" style={{ opacity: 0.11, transform: 'scaleX(-1)' }}>
        <BotanicalBranch color="#F4EFE6" style={{ width: '160px' }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3" data-reveal data-delay="1">How to Dress</p>
          <div className="gold-rule mb-4" data-reveal data-delay="2" />
          <h2
            className="font-heading text-cream"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 4.5rem)', lineHeight: 1.1 }}
            data-reveal
            data-delay="3"
          >
            Dress Code
          </h2>
          <p className="font-body text-sm text-cream/45 italic mt-5 max-w-md mx-auto leading-relaxed" data-reveal data-delay="4">
            Formal attire. Warm winter tones encouraged. Please avoid any shade of white or black. Those are reserved for the bride and groom.
          </p>
        </div>

        {/* Colour palette card — first */}
        <div data-reveal data-delay="1" className="mb-16">
          <p className="font-body text-[11px] tracking-[0.28em] uppercase text-cream/35 text-center mb-6">
            Colour Inspiration
          </p>
          <div
            className="max-w-2xl mx-auto"
            style={{
              borderRadius: '16px',
              border: '1px solid rgba(201,169,110,0.2)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.4), 0 16px 48px rgba(0,0,0,0.35)',
              overflow: 'hidden',
              transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s cubic-bezier(0.16,1,0.3,1)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.45), 0 24px 64px rgba(0,0,0,0.4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.4), 0 16px 48px rgba(0,0,0,0.35)'
            }}
          >
            <div style={{ overflow: 'hidden', lineHeight: 0 }}>
              <img
                src="/dresscode-palette.png"
                alt="Colour palette, warm winter tones for the wedding"
                className="w-full block"
                style={{ transform: 'scale(1.05)', transformOrigin: 'center center' }}
              />
            </div>
          </div>
          <p className="font-body text-[10px] tracking-widest uppercase text-cream/25 text-center mt-5">
            Any warm, earthy tone within this range is welcome
          </p>
        </div>

        {/* Ladies + Gentlemen illustration cards — stacked, full image */}
        <div className="grid grid-cols-1 gap-10 max-w-2xl mx-auto">
          <IllustrationCard
            src="/dresscode-ladies.jpeg"
            alt="Ladies dress code, formal gowns in warm tones"
            label="Ladies"
            caption="Formal gowns and elegant dresses in warm, earthy tones."
            revealDir="left"
            delay="1"
            restriction="No white"
          />
          <IllustrationCard
            src="/dresscode-men.jpeg"
            alt="Gentlemen dress code, formal suits in warm tones"
            label="Gentlemen"
            caption="Suits and blazers in rich, deep colours."
            revealDir="right"
            delay="2"
            restriction="No black"
          />
        </div>
      </div>
    </section>
  )
}
