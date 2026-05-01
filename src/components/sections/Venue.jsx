import { FloralSprig, BotanicalBranch } from '../ui/FloralSvg'

export default function Venue() {
  return (
    <section id="venue" className="section-cream py-24 px-4 relative overflow-hidden" style={{ scrollMarginTop: '60px' }}>
      {/* Botanical branch — top-right corner */}
      <div className="absolute right-0 top-0 pointer-events-none hidden lg:block botanical-drift" style={{ opacity: 0.06, transform: 'scaleX(-1)' }}>
        <BotanicalBranch color="#0D0D0D" style={{ width: '180px' }} />
      </div>
      {/* Botanical branch — bottom-left, mirrored */}
      <div className="absolute left-0 bottom-0 pointer-events-none hidden lg:block botanical-drift-alt" style={{ opacity: 0.05 }}>
        <BotanicalBranch color="#0D0D0D" style={{ width: '140px' }} />
      </div>

      {/* Header */}
      <div className="text-center mb-14">
        <p className="section-label mb-3" data-reveal data-delay="1">Save the Date</p>
        <div className="gold-rule mb-4" data-reveal data-delay="2" />
        <h2
          className="font-heading text-ink"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 4.5rem)', lineHeight: 1.1 }}
          data-reveal
          data-delay="3"
        >
          Date &amp; Venue
        </h2>
        <div className="flex justify-center mt-4 text-ink/25" data-reveal data-delay="4">
          <FloralSprig />
        </div>
      </div>

      {/* Two prominent circles */}
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16 mb-14" data-reveal>

        {/* Date circle */}
        <div className="flex flex-col items-center">
          <div
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              border: '1.5px solid rgba(201,169,110,0.55)',
              boxShadow: '0 0 0 8px rgba(201,169,110,0.06), 0 4px 24px rgba(201,169,110,0.12)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '24px',
              background: 'rgba(201,169,110,0.04)',
            }}
          >
            <p className="section-label mb-2" style={{ color: '#C9A96E' }}>Date</p>
            <p
              className="font-heading text-ink"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', lineHeight: 1.2 }}
            >
              30 July 2026
            </p>
            <p className="font-body text-[11px] tracking-[0.18em] uppercase text-ink/40 mt-2">
              Thursday
            </p>
          </div>
        </div>

        {/* Ornamental connector — hidden on mobile */}
        <div className="hidden sm:flex flex-col items-center gap-2">
          <div className="h-px w-12 bg-gold/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
          <div className="h-px w-12 bg-gold/30" />
        </div>

        {/* Venue circle */}
        <div className="flex flex-col items-center">
          <div
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              border: '1.5px solid rgba(201,169,110,0.55)',
              boxShadow: '0 0 0 8px rgba(201,169,110,0.06), 0 4px 24px rgba(201,169,110,0.12)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '24px',
              background: 'rgba(201,169,110,0.04)',
            }}
          >
            <p className="section-label mb-2" style={{ color: '#C9A96E' }}>Venue</p>
            <p
              className="font-heading text-ink"
              style={{ fontSize: 'clamp(1.4rem, 3.5vw, 1.9rem)', lineHeight: 1.25 }}
            >
              Bell &amp; Blossom
            </p>
            <p className="font-body text-[10px] tracking-[0.14em] uppercase text-ink/40 mt-2">
              Pretoria
            </p>
          </div>
        </div>
      </div>

      {/* Address + arrival */}
      <div className="text-center mb-8" data-reveal>
        <div className="flex items-center justify-center gap-2 mb-1">
          <svg width="12" height="16" viewBox="0 0 12 16" fill="none" className="text-gold flex-shrink-0 mt-0.5">
            <path d="M6 0C3.24 0 1 2.24 1 5c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5z"
              fill="currentColor" opacity="0.8"/>
            <circle cx="6" cy="5" r="1.8" fill="#F4EFE6"/>
          </svg>
          <p className="font-body text-[13px] text-ink/55">721 Klippan St, Montana, Pretoria, 0151</p>
        </div>
        <p className="font-body text-[11px] tracking-widest uppercase text-ink/35 mt-1">
          Arrival from 1:00 PM
        </p>
      </div>

      {/* Map reference */}
      <p className="text-center font-body text-[12px] italic text-ink/40" data-reveal>
        Find directions via the venue map below.
      </p>
    </section>
  )
}
