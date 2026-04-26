import { FloralSprig, BotanicalBranch } from '../ui/FloralSvg'

const events = [
  { time: '12:30 PM', label: 'Arrival', detail: 'Guests arrive and are welcomed with drinks' },
  { time: '1:00 PM', label: 'Guests Are Seated', detail: 'Please make your way to your seat' },
  { time: '1:15 PM', label: 'Ceremony Begins', detail: 'The moment we have all waited for' },
  { time: '2:00 PM', label: 'Cocktails & Photographs', detail: 'Celebrate and mingle while we capture memories' },
  { time: '3:00 PM', label: 'Reception Begins', detail: 'Doors open for the reception' },
  { time: '3:30 PM', label: 'Dinner Is Served', detail: 'A feast to celebrate the occasion' },
  { time: '5:00 PM', label: 'First Dance & Speeches', detail: 'Toasts, tears, and dancing' },
  { time: 'Evening', label: 'Celebrations Continue', detail: 'Dance the night away with us' },
]

export default function OrderOfEvents() {
  return (
    <section id="the-day" className="section-cream py-24 px-4 relative overflow-hidden" style={{ scrollMarginTop: '60px' }}>
      {/* Botanical branch — right side */}
      <div className="absolute right-0 top-0 bottom-0 pointer-events-none hidden lg:flex items-center botanical-drift-slow" style={{ opacity: 0.06 }}>
        <BotanicalBranch color="#0D0D0D" style={{ width: '200px' }} />
      </div>
      {/* Botanical branch — left side, mirrored */}
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
          Order of Events
        </h2>
        <div className="flex justify-center mt-4 text-ink/25" data-reveal data-delay="4">
          <FloralSprig />
        </div>
        <p className="font-body text-sm italic text-ink/45 mt-4" data-reveal data-delay="5">
          Timeline to be confirmed closer to the date.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-xl mx-auto relative">
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
              className={`relative flex items-start mb-10 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
              data-reveal={isLeft ? 'left' : 'right'}
              data-delay={String((i % 4) + 1)}
            >
              {/* Content */}
              <div className={`w-[45%] ${isLeft ? 'text-right pr-7' : 'text-left pl-7'}`}>
                <p className="section-label mb-1" style={{ color: '#C9A96E' }}>{ev.time}</p>
                <p className="font-body font-bold text-[14px] text-ink/85 mb-1">{ev.label}</p>
                <p className="font-body text-[12px] italic text-ink/50 leading-snug">{ev.detail}</p>
              </div>

              {/* Centre dot */}
              <div
                className="absolute left-1/2 w-3 h-3 rounded-full bg-cream border border-gold/60 z-10 pulse-dot"
                style={{ transform: 'translate(-50%, 4px)' }}
              />

              {/* Empty opposite side */}
              <div className="w-[45%]" />
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
