export default function PhotoUpload() {
  return (
    <section className="section-dark py-24 px-4 border-t border-gold/10">
      <div className="max-w-xl mx-auto text-center">
        {/* Envelope icon */}
        <div className="flex justify-center mb-10" data-reveal="scale" data-delay="1">
          <svg
            width="72"
            height="56"
            viewBox="0 0 72 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-cream/50"
          >
            <rect x="1" y="1" width="70" height="54" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <path d="M1 3 L36 30 L71 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
            <path d="M1 55 L26 30" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
            <path d="M71 55 L46 30" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
            <circle cx="36" cy="31" r="6" stroke="#6B1F1F" strokeWidth="1" fill="#6B1F1F" fillOpacity="0.8"/>
            <path d="M36 27 C36 27 32 30 32 33 C32 36 36 38 36 38 C36 38 40 36 40 33 C40 30 36 27 36 27Z"
              stroke="rgba(244,239,230,0.5)" strokeWidth="0.5" fill="none"/>
          </svg>
        </div>

        {/* Text */}
        <p className="section-label mb-3" data-reveal data-delay="2">Share Your Moments</p>
        <div className="gold-rule mb-5" data-reveal data-delay="3" />
        <h2
          className="font-heading text-cream mb-5"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 3.8rem)', lineHeight: 1.15 }}
          data-reveal
          data-delay="4"
        >
          Upload Your Photos
        </h2>
        <p className="font-body text-sm text-cream/50 leading-relaxed max-w-sm mx-auto mb-10" data-reveal data-delay="5">
          Captured a candid moment on the day? We would love to see it. Upload your photos and add them to our shared memory.
        </p>

        {/* CTA Button */}
        <a
          href="https://photos.app.goo.gl/1SX42vvqmyLxDV239"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-body text-[11px] tracking-[0.3em] uppercase text-ink bg-cream px-10 py-4 transition-all duration-300 hover:bg-gold hover:text-ink"
          data-reveal
          data-delay="6"
        >
          Upload Photos
        </a>
      </div>
    </section>
  )
}
