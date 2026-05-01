export default function VenueMap() {
  const address = '721 Klippan St, Montana, Pretoria, 0151'
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed&z=15`

  return (
    <section id="venue-map" className="section-dark py-24 px-4" style={{ scrollMarginTop: '60px' }}>
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-3" data-reveal data-delay="1">Find Us</p>
          <div className="gold-rule mb-4" data-reveal data-delay="2" />
          <h2
            className="font-heading text-cream"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 4.5rem)', lineHeight: 1.1 }}
            data-reveal
            data-delay="3"
          >
            Venue Map
          </h2>
        </div>

        {/* Venue gates photo — full width background image */}
        <div
          className="relative w-full mb-8 overflow-hidden"
          style={{ height: '55vh', minHeight: '300px', borderRadius: '12px' }}
          data-reveal
        >
          <img
            src="/venue-gates.jpeg"
            alt="Bell and Blossom venue entrance"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(13,13,13,0.1) 0%, rgba(13,13,13,0.45) 100%)', borderRadius: '12px' }}
          />
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
            className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.25em] uppercase text-cream/45 hover:text-gold transition-colors duration-200"
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
