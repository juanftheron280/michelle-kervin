import { FloralSprig, BotanicalBranch } from '../ui/FloralSvg'

/* Thin sketch-style SVG icons — 72x72 display */
const icons = {
  arrival: (
    <svg width="100%" height="100%" viewBox="0 0 40 28" fill="none" aria-hidden="true">
      <path d="M8 18 Q8 12 14 12 L22 10 Q28 8 32 12 L36 12 Q38 12 38 14 L38 18" stroke="#C9A96E" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 18 L38 18 Q40 18 40 20 L40 22 Q40 24 38 24 L4 24 Q2 24 2 22 L2 20 Q2 18 4 18Z" stroke="#C9A96E" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="10" cy="24" r="3.5" stroke="#C9A96E" strokeWidth="0.9" fill="none"/>
      <circle cx="10" cy="24" r="1.2" stroke="#C9A96E" strokeWidth="0.7" fill="none"/>
      <circle cx="30" cy="24" r="3.5" stroke="#C9A96E" strokeWidth="0.9" fill="none"/>
      <circle cx="30" cy="24" r="1.2" stroke="#C9A96E" strokeWidth="0.7" fill="none"/>
      <path d="M16 12 L18 18M24 11 L24 18" stroke="#C9A96E" strokeWidth="0.7" strokeLinecap="round"/>
    </svg>
  ),
  ceremony: (
    <svg width="100%" height="100%" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="13" cy="18" r="9" stroke="#C9A96E" strokeWidth="0.9" fill="none"/>
      <circle cx="23" cy="18" r="9" stroke="#C9A96E" strokeWidth="0.9" fill="none"/>
      <path d="M13 7 L15 9 L13 11 L11 9Z" stroke="#C9A96E" strokeWidth="0.7" fill="none"/>
      <line x1="13" y1="7" x2="13" y2="5" stroke="#C9A96E" strokeWidth="0.7" strokeLinecap="round"/>
    </svg>
  ),
  camera: (
    <svg width="100%" height="100%" viewBox="0 0 38 30" fill="none" aria-hidden="true">
      <rect x="4" y="10" width="30" height="18" rx="3" stroke="#C9A96E" strokeWidth="0.9" fill="none"/>
      <circle cx="19" cy="19" r="6" stroke="#C9A96E" strokeWidth="0.9" fill="none"/>
      <circle cx="19" cy="19" r="3.5" stroke="#C9A96E" strokeWidth="0.7" fill="none"/>
      <path d="M13 10 L13 7 Q13 5 15 5 L23 5 Q25 5 25 7 L25 10" stroke="#C9A96E" strokeWidth="0.9" strokeLinecap="round" fill="none"/>
      <circle cx="8" cy="14" r="1.2" stroke="#C9A96E" strokeWidth="0.7" fill="none"/>
    </svg>
  ),
  champagne: (
    <svg width="100%" height="100%" viewBox="0 0 30 38" fill="none" aria-hidden="true">
      <path d="M7 4 L10 18 Q10 22 9 24 L6 28" stroke="#C9A96E" strokeWidth="0.9" strokeLinecap="round" fill="none"/>
      <path d="M7 4 L4 18 Q4 22 5 24 L6 28" stroke="#C9A96E" strokeWidth="0.9" strokeLinecap="round" fill="none"/>
      <line x1="4" y1="28" x2="8" y2="28" stroke="#C9A96E" strokeWidth="0.9" strokeLinecap="round"/>
      <path d="M23 4 L26 18 Q26 22 25 24 L22 28" stroke="#C9A96E" strokeWidth="0.9" strokeLinecap="round" fill="none"/>
      <path d="M23 4 L20 18 Q20 22 21 24 L22 28" stroke="#C9A96E" strokeWidth="0.9" strokeLinecap="round" fill="none"/>
      <line x1="20" y1="28" x2="24" y2="28" stroke="#C9A96E" strokeWidth="0.9" strokeLinecap="round"/>
      <circle cx="8.5" cy="10" r="1" stroke="#C9A96E" strokeWidth="0.6" fill="none"/>
      <circle cx="22.5" cy="12" r="1" stroke="#C9A96E" strokeWidth="0.6" fill="none"/>
      <path d="M13 5 L17 2" stroke="#C9A96E" strokeWidth="0.7" strokeLinecap="round"/>
      <path d="M15 7 L19 5" stroke="#C9A96E" strokeWidth="0.7" strokeLinecap="round"/>
    </svg>
  ),
  dinner: (
    <svg width="100%" height="100%" viewBox="0 0 36 32" fill="none" aria-hidden="true">
      <ellipse cx="18" cy="26" rx="14" ry="3" stroke="#C9A96E" strokeWidth="0.9" fill="none"/>
      <path d="M4 26 Q4 12 18 12 Q32 12 32 26" stroke="#C9A96E" strokeWidth="0.9" strokeLinecap="round" fill="none"/>
      <path d="M15 12 Q15 8 18 8 Q21 8 21 12" stroke="#C9A96E" strokeWidth="0.9" strokeLinecap="round" fill="none"/>
      <ellipse cx="18" cy="8" rx="2" ry="1.5" stroke="#C9A96E" strokeWidth="0.8" fill="none"/>
    </svg>
  ),
  dance: (
    <svg width="100%" height="100%" viewBox="0 0 32 38" fill="none" aria-hidden="true">
      <circle cx="10" cy="4" r="2.5" stroke="#C9A96E" strokeWidth="0.8" fill="none"/>
      <path d="M10 7 L10 16 M7 10 L13 10" stroke="#C9A96E" strokeWidth="0.9" strokeLinecap="round"/>
      <path d="M10 16 L6 28 Q8 30 10 28 Q12 30 14 28 L10 16" stroke="#C9A96E" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="22" cy="4" r="2.5" stroke="#C9A96E" strokeWidth="0.8" fill="none"/>
      <path d="M22 7 L22 18 M19 10 L25 10" stroke="#C9A96E" strokeWidth="0.9" strokeLinecap="round"/>
      <path d="M19 18 L18 28 M25 18 L26 28" stroke="#C9A96E" strokeWidth="0.9" strokeLinecap="round"/>
    </svg>
  ),
  celebration: (
    <svg width="100%" height="100%" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path d="M14 8 L14 22" stroke="#C9A96E" strokeWidth="0.9" strokeLinecap="round"/>
      <path d="M14 8 L24 6 L24 16" stroke="#C9A96E" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
      <ellipse cx="12" cy="23" rx="3" ry="2" transform="rotate(-15 12 23)" stroke="#C9A96E" strokeWidth="0.8" fill="none"/>
      <ellipse cx="22" cy="17" rx="3" ry="2" transform="rotate(-15 22 17)" stroke="#C9A96E" strokeWidth="0.8" fill="none"/>
      <path d="M28 8 L29 11 L32 11 L29.5 13 L30.5 16 L28 14.5 L25.5 16 L26.5 13 L24 11 L27 11Z" stroke="#C9A96E" strokeWidth="0.7" fill="none" strokeLinejoin="round"/>
    </svg>
  ),
}

const events = [
  { time: '1:00 PM', label: 'Arrival', detail: 'Guests arrive and are welcomed with drinks', icon: icons.arrival },
  { time: '2:00 PM', label: 'Ceremony Begins', detail: 'The moment we have all waited for', icon: icons.ceremony },
  { time: '3:00 PM', label: 'Canapes & Photographs', detail: 'Celebrate and mingle while we capture memories', icon: icons.camera },
  { time: '5:00 PM', label: 'Reception Begins', detail: 'Doors open for the reception', icon: icons.champagne },
  { time: '6:00 PM', label: 'Dinner Is Served', detail: 'A feast to celebrate the occasion', icon: icons.dinner },
  { time: '7:00 PM', label: 'First Dance & Speeches', detail: 'Toasts, tears, and dancing', icon: icons.dance },
  { time: 'Evening', label: 'Celebrations Continue', detail: 'Dance the night away with us', icon: icons.celebration },
]

export default function OrderOfEvents() {
  return (
    <section id="the-day" className="section-cream py-24 px-4 relative overflow-hidden" style={{ scrollMarginTop: '60px' }}>
      {/* Botanical branch right side */}
      <div className="absolute right-0 top-0 bottom-0 pointer-events-none hidden lg:flex items-center botanical-drift-slow" style={{ opacity: 0.06 }}>
        <BotanicalBranch color="#0D0D0D" style={{ width: '200px' }} />
      </div>
      {/* Botanical branch left side, mirrored */}
      <div className="absolute left-0 top-0 bottom-0 pointer-events-none hidden lg:flex items-center botanical-drift-alt" style={{ opacity: 0.05, transform: 'scaleX(-1)' }}>
        <BotanicalBranch color="#0D0D0D" style={{ width: '160px' }} />
      </div>

      {/* Header */}
      <div className="text-center mb-16">
        <p className="section-label mb-3" data-reveal data-delay="1">30 July 2026</p>
        <div className="gold-rule mb-4" data-reveal data-delay="2" />
        <h2
          className="font-heading text-ink"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 4.5rem)', lineHeight: 1.1 }}
          data-reveal
          data-delay="3"
        >
          How the day will unfold
        </h2>
        <div className="flex justify-center mt-4 text-ink/25" data-reveal data-delay="4">
          <FloralSprig />
        </div>
        <p className="font-body text-sm italic text-ink/45 mt-4" data-reveal data-delay="5">
          Timeline to be confirmed closer to the date.
        </p>
      </div>

      {/* Timeline: text + icon | center line | icon + text */}
      <div className="max-w-3xl mx-auto relative">
        {/* Vertical gold line */}
        <div
          className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/25"
          style={{ transform: 'translateX(-50%)' }}
        />

        {events.map((ev, i) => {
          const isLeft = i % 2 === 0
          return (
            <div
              key={ev.time}
              className="relative flex items-center mb-14"
              data-reveal={isLeft ? 'left' : 'right'}
              data-delay={String((i % 4) + 1)}
            >
              {/* Left half */}
              <div className="w-1/2 pr-3 md:pr-8 flex items-center justify-end">
                {isLeft && (
                  <div className="flex items-center gap-2 md:gap-5">
                    {/* Text right-aligned */}
                    <div className="text-right">
                      <p className="section-label mb-0.5" style={{ color: '#C9A96E' }}>{ev.time}</p>
                      <p className="font-body font-semibold text-[12px] md:text-[14px] text-ink/85 leading-snug">{ev.label}</p>
                      <p className="font-body text-[10px] md:text-[11px] italic text-ink/45 leading-snug mt-0.5">{ev.detail}</p>
                    </div>
                    {/* Icon inner, adjacent to center line */}
                    <div className="flex-shrink-0 w-10 h-10 md:w-[72px] md:h-[72px]" style={{ opacity: 0.85 }}>{ev.icon}</div>
                  </div>
                )}
              </div>

              {/* Center dot */}
              <div
                className="absolute left-1/2 w-2.5 h-2.5 rounded-full bg-cream border border-gold/60 z-10 pulse-dot"
                style={{ transform: 'translate(-50%, 0)' }}
              />

              {/* Right half */}
              <div className="w-1/2 pl-3 md:pl-8 flex items-center justify-start">
                {!isLeft && (
                  <div className="flex items-center gap-2 md:gap-5">
                    {/* Icon inner, adjacent to center line */}
                    <div className="flex-shrink-0 w-10 h-10 md:w-[72px] md:h-[72px]" style={{ opacity: 0.85 }}>{ev.icon}</div>
                    {/* Text left-aligned */}
                    <div className="text-left">
                      <p className="section-label mb-0.5" style={{ color: '#C9A96E' }}>{ev.time}</p>
                      <p className="font-body font-semibold text-[12px] md:text-[14px] text-ink/85 leading-snug">{ev.label}</p>
                      <p className="font-body text-[10px] md:text-[11px] italic text-ink/45 leading-snug mt-0.5">{ev.detail}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer note */}
      <p className="text-center font-body text-[11px] tracking-widest uppercase text-ink/30 mt-4" data-reveal>
        All times are approximate
      </p>
    </section>
  )
}
