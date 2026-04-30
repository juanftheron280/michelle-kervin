import { BotanicalBranch } from '../ui/FloralSvg'

export default function VenueMap() {
  const address = '721 Klippan St, Montana, Pretoria, 0151'
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed&z=15`

  return (
    <section id="venue-map" className="section-cream py-24 px-4 relative overflow-hidden" style={{ scrollMarginTop: '60px' }}>
      {/* Botanical branch — top-right */}
      <div className="absolute right-0 top-0 pointer-events-none hidden lg:block botanical-drift" style={{ opacity: 0.06, transform: 'scaleX(-1)' }}>
        <BotanicalBranch color="#0D0D0D" style={{ width: '180px' }} />
      </div>
      {/* Botanical branch — bottom-left */}
      <div className="absolute left-0 bottom-0 pointer-events-none hidden lg:block botanical-drift-alt" style={{ opacity: 0.05 }}>
        <BotanicalBranch color="#0D0D0D" style={{ width: '140px' }} />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-3" data-reveal data-delay="1">Find Us</p>
          <div className="gold-rule mb-4" data-reveal data-delay="2" />
          <h2
            className="font-heading text-ink"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 4.5rem)', lineHeight: 1.1 }}
            data-reveal
            data-delay="3"
          >
            Venue Map
          </h2>
        </div>

        {/* Venue gates photo */}
        <div className="mb-10" data-reveal>
          <img
            src="/venue-gates.jpeg"
            alt="Bell and Blossom venue entrance"
            className="block mx-auto"
            style={{ maxWidth: '560px', width: '100%', borderRadius: '12px', border: '1px solid rgba(201,169,110,0.2)' }}
          />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10" data-reveal>
          <div className="flex-1 h-px bg-gold/20" />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="4" stroke="#C9A96E" strokeWidth="0.8" fill="none"/>
            <path d="M10 2 L10 4 M10 16 L10 18 M2 10 L4 10 M16 10 L18 10" stroke="#C9A96E" strokeWidth="0.8" strokeLinecap="round"/>
          </svg>
          <div className="flex-1 h-px bg-gold/20" />
        </div>

        {/* Google Maps embed */}
        <div
          className="w-full overflow-hidden border border-gold/20"
          style={{ height: '400px' }}
          data-reveal
        >
          <iframe
            title="Bell and Blossom Wedding Venue"
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.3) contrast(1.05)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Get directions link */}
        <div className="text-center mt-6" data-reveal>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.25em] uppercase text-ink/50 hover:text-gold transition-colors duration-200"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M11 1 L1 11 M11 1 L7 1 M11 1 L11 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}
