import { FloralSprig, BotanicalBranch } from '../ui/FloralSvg'

const cards = [
  {
    number: '01',
    title: 'Where It All Began',
    body: 'They met at a cousin\'s 10th birthday party — two kids who thought the other was kind of cute. The friendship lived on through Mxit messages and BBM chats until they found each other again at sixteen, both nervous, both quietly certain.',
  },
  {
    number: '02',
    title: 'The Stolen Kiss',
    body: 'At sixteen, at his cousin\'s wedding party, before she left — they kissed. Both were in other relationships. Neither planned it. It became their favourite story, the one neither of them can tell without smiling.',
  },
  {
    number: '03',
    title: 'Built at Varsity',
    body: 'Reconnecting at university gave them something they never had before: time. They went from endless texts to endless hours. Through seasons of difficulty and loss, they held each other up and discovered they were in it for the long haul. Ten years and counting.',
  },
  {
    number: '04',
    title: 'The Proposal',
    body: 'January 2026. A weekend at Pont de Val in the Vaal. A picnic on the river. Kervin was nervous all day — his best friend waiting quietly nearby for moral support. Melissa knew it was coming. She cried anyway. He went down on one knee and promised her the world.',
  },
]

export default function LoveStory() {
  return (
    <section id="our-story" className="section-cream py-24 px-4 relative overflow-hidden" style={{ scrollMarginTop: '60px' }}>
      {/* Botanical background — bottom right */}
      <div className="absolute bottom-0 right-0 pointer-events-none botanical-drift" style={{ opacity: 0.065 }}>
        <BotanicalBranch color="#0D0D0D" />
      </div>
      {/* Botanical background — top left, mirrored */}
      <div className="absolute top-0 left-0 pointer-events-none botanical-drift-alt" style={{ opacity: 0.05, transform: 'scale(-1)' }}>
        <BotanicalBranch color="#0D0D0D" />
      </div>
      {/* Header */}
      <div className="text-center mb-16">
        <p className="section-label mb-3" data-reveal data-delay="1">Melissa &amp; Kervin</p>
        <div className="gold-rule-shimmer mb-4" data-reveal data-delay="2" />
        <h2
          className="font-heading text-ink"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 4.5rem)', lineHeight: 1.1 }}
          data-reveal
          data-delay="3"
        >
          Our Story
        </h2>
        <div className="flex justify-center mt-4 text-ink/30" data-reveal data-delay="4">
          <FloralSprig />
        </div>
        <p className="font-body text-sm italic text-ink/50 mt-5 max-w-md mx-auto leading-relaxed" data-reveal data-delay="5">
          Friendship. Love. Respect. Three words, ten years, one lifetime ahead.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, i) => (
          <div
            key={card.number}
            className="relative border border-gold/30 bg-cream p-8 md:p-10 card-hover"
            style={{ boxShadow: '0 2px 20px rgba(201,169,110,0.08)' }}
            data-reveal
            data-delay={String(i + 1)}
          >
            {/* Gold corner accents */}
            <span className="absolute top-0 left-0 w-5 h-5 border-t border-l border-gold/50" />
            <span className="absolute top-0 right-0 w-5 h-5 border-t border-r border-gold/50" />
            <span className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-gold/50" />
            <span className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-gold/50" />

            {/* Number */}
            <p
              className="font-heading text-gold/40 absolute top-5 right-7"
              style={{ fontSize: '3.5rem', lineHeight: 1 }}
            >
              {card.number}
            </p>

            {/* Content */}
            <div className="relative z-10">
              <p className="section-label mb-2" style={{ color: '#C9A96E' }}>{card.title}</p>
              <div className="w-8 h-px bg-gold/40 mb-4" />
              <p className="font-body text-[15px] text-ink/75 leading-[1.85]">
                {card.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom quote */}
      <div className="text-center mt-16" data-reveal>
        <div className="gold-rule mb-6" />
        <p className="font-heading text-ink/60" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}>
          &ldquo;Finally getting to say the words — I do.&rdquo;
        </p>
        <div className="gold-rule mt-6" />
      </div>
    </section>
  )
}
