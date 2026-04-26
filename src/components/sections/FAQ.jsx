import { useState } from 'react'
import { FloralSprig, BotanicalBranch } from '../ui/FloralSvg'

const faqs = [
  {
    q: 'What should I wear?',
    a: 'Formal and dress to impress. Warm winter tones are the vibe — think rich plum, forest green, mustard, camel, rust, mocha, and terracotta. Any warm, deep colour works beautifully. Please avoid any shade of white or black — those are reserved for the bride and groom.',
  },
  {
    q: 'What time should I arrive?',
    a: 'Arrival and welcome drinks begin at 12:30 PM. The ceremony starts at 1:00 PM, so please arrive on time so we can begin together. Late arrivals may need to wait until the ceremony is complete before being seated.',
  },
  {
    q: 'Is there parking at the venue?',
    a: 'Yes. Bell and Blossom has on-site parking available at 721 Klippan St, Montana, Pretoria. Signage will guide you from the entrance.',
  },
  {
    q: 'Are children welcome?',
    a: 'We adore your little ones, but this is an adults-only celebration. We hope you can arrange childcare for the day so you can be fully present and enjoy the evening with us.',
  },
  {
    q: 'Do you have a gift registry?',
    a: 'There is no formal registry, but if you would like to bless us with a gift, we love shopping at YuppieChef, Volpes, @Home, and Cielo. Your presence and well-wishes are truly the greatest gift.',
  },
  {
    q: 'Will my dietary requirements be accommodated?',
    a: 'Absolutely. Please indicate any dietary requirements or allergies in your RSVP form and our kitchen will take care of the rest. There is no need to select a menu in advance.',
  },
  {
    q: 'By when should I RSVP?',
    a: 'Please RSVP as soon as you can so we can finalise numbers with the venue. We will share a formal RSVP deadline closer to the date. The sooner, the better.',
  },
  {
    q: 'Is there accommodation nearby?',
    a: 'Montana and the broader Pretoria North area have a good range of accommodation. We recommend searching Airbnb or Booking.com for places near Bell and Blossom. We will share more details as the date approaches.',
  },
]

const FAQItem = ({ q, a, delay }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gold/20" data-reveal data-delay={delay}>
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="font-body text-[14px] text-ink/80 group-hover:text-ink leading-snug transition-colors duration-200">
          {q}
        </span>
        <span
          className="flex-shrink-0 w-5 h-5 flex items-center justify-center transition-transform duration-300"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1 L7 13 M1 7 L13 7" stroke="#C9A96E" strokeWidth="1" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      <div className={`faq-answer ${open ? 'open' : ''}`}>
        <p className="font-body text-[13px] text-ink/55 leading-relaxed pb-5 pr-8 italic">
          {a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="section-cream py-24 px-4 relative overflow-hidden" style={{ scrollMarginTop: '60px' }}>
      {/* Botanical branch — bottom-left watermark */}
      <div className="absolute left-0 bottom-0 pointer-events-none hidden lg:block botanical-drift-alt" style={{ opacity: 0.055 }}>
        <BotanicalBranch color="#0D0D0D" style={{ width: '180px' }} />
      </div>
      {/* Botanical branch — top-right, mirrored */}
      <div className="absolute right-0 top-0 pointer-events-none hidden lg:block botanical-drift" style={{ opacity: 0.04, transform: 'scaleX(-1)' }}>
        <BotanicalBranch color="#0D0D0D" style={{ width: '140px' }} />
      </div>
      {/* Header */}
      <div className="text-center mb-14">
        <p className="section-label mb-3" data-reveal data-delay="1">Everything You Need to Know</p>
        <div className="gold-rule-shimmer mb-4" data-reveal data-delay="2" />
        <h2
          className="font-heading text-ink"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 4.5rem)', lineHeight: 1.1 }}
          data-reveal
          data-delay="3"
        >
          Frequently Asked
        </h2>
        <div className="flex justify-center mt-4 text-ink/25" data-reveal data-delay="4">
          <FloralSprig />
        </div>
      </div>

      {/* FAQ list */}
      <div className="max-w-2xl mx-auto">
        {faqs.map((item, i) => (
          <FAQItem key={item.q} {...item} delay={String((i % 5) + 1)} />
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-14" data-reveal>
        <div className="gold-rule mb-6" />
        <p className="font-body text-sm italic text-ink/40">
          Still have a question? Reach out and we will get back to you.
        </p>
      </div>

      {/* Site footer */}
      <footer className="mt-20 pt-10 border-t border-gold/15 text-center" data-reveal>
        <p
          className="font-heading text-ink/40"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}
        >
          Melissa &amp; Kervin
        </p>
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-ink/25 mt-2">
          30 July 2026 · Bell &amp; Blossom · Pretoria
        </p>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="h-px w-12 bg-gold/20" />
          <div className="w-1 h-1 rounded-full bg-gold/30" />
          <div className="h-px w-12 bg-gold/20" />
        </div>
        <p className="font-body text-[9px] tracking-widest uppercase text-ink/20 mt-4">
          wedlysite.co.za
        </p>
      </footer>
    </section>
  )
}
