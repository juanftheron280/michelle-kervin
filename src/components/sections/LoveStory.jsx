import { FloralSprig, BotanicalBranch } from '../ui/FloralSvg'

const cards = [
  {
    number: '01',
    title: 'Where It All Began',
    body: 'They met at a cousin\'s 10th birthday party. Two kids who thought the other was kind of cute. The friendship lived on through Mxit messages and BBM chats until they found each other again at sixteen, both nervous, both quietly certain.',
    photo: '/love-story-1.png',
    rot: '-2deg',
  },
  {
    number: '02',
    title: 'The Kiss & The Years',
    body: 'At sixteen, at his cousin\'s wedding party, before she left, they kissed. Both were in other relationships. Neither planned it. It became their favourite story. Reconnecting at university gave them something they never had before: time. Through seasons of difficulty and loss, they held each other up and discovered they were in it for the long haul.',
    photo: '/love-story-2.jpeg',
    rot: '1.5deg',
  },
  {
    number: '03',
    title: 'The Proposal',
    body: 'January 2026. A weekend at Pont de Val in the Vaal. A picnic on the river. Kervin was nervous all day, his best friend waiting quietly nearby for moral support. Melissa knew it was coming. She cried anyway. He went down on one knee and promised her the world.',
    photo: '/love-story-3.jpeg',
    rot: '-1.5deg',
    objectPosition: 'center 15%',
  },
]

export default function LoveStory() {
  return (
    <section id="our-story" className="section-cream py-24 px-4 relative overflow-hidden" style={{ scrollMarginTop: '60px' }}>
      {/* Botanical background bottom right */}
      <div className="absolute bottom-0 right-0 pointer-events-none botanical-drift" style={{ opacity: 0.065 }}>
        <BotanicalBranch color="#0D0D0D" />
      </div>
      {/* Botanical background top left, mirrored */}
      <div className="absolute top-0 left-0 pointer-events-none botanical-drift-alt" style={{ opacity: 0.05, transform: 'scale(-1)' }}>
        <BotanicalBranch color="#0D0D0D" />
      </div>

      {/* Header */}
      <div className="text-center mb-16">
        <p className="section-label mb-3" data-reveal data-delay="1">Kervin &amp; Melissa</p>
        <div className="gold-rule-shimmer mb-4" data-reveal data-delay="2" />
        <h2
          className="font-heading text-ink"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 4.5rem)', lineHeight: 1.1 }}
          data-reveal
          data-delay="3"
        >
          Our Journey of Becoming
        </h2>
        <div className="flex justify-center mt-4 text-ink/30" data-reveal data-delay="4">
          <FloralSprig />
        </div>
        <p className="font-body text-sm italic text-ink/50 mt-5 max-w-md mx-auto leading-relaxed" data-reveal data-delay="5">
          Friendship. Love. Respect. Three words, ten years, one lifetime ahead.
        </p>
      </div>

      {/* Alternating timeline */}
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical gold line hidden on mobile */}
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gold/20"
          style={{ transform: 'translateX(-50%)' }}
        />

        {cards.map((card, i) => {
          const isLeft = i % 2 === 0
          return (
            <div
              key={card.number}
              className="relative mb-16 md:mb-20"
              data-reveal={isLeft ? 'left' : 'right'}
              data-delay={String((i % 4) + 1)}
            >
              <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isLeft ? '' : 'md:flex-row-reverse'}`}>

                {/* Text side */}
                <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-14 md:text-right' : 'md:pl-14 md:text-left'}`}>
                  <p
                    className="font-heading text-gold/25"
                    style={{ fontSize: '4rem', lineHeight: 1, marginBottom: '-0.5rem' }}
                  >
                    {card.number}
                  </p>
                  <p className="section-label mb-2" style={{ color: '#C9A96E' }}>{card.title}</p>
                  <div className={`w-8 h-px bg-gold/40 mb-4 ${isLeft ? 'md:ml-auto' : ''}`} />
                  <p className="font-body text-[15px] text-ink/70 leading-[1.85]">
                    {card.body}
                  </p>
                </div>

                {/* Centre dot desktop only */}
                <div
                  className="hidden md:flex absolute left-1/2 items-center justify-center w-3 h-3 rounded-full bg-cream border border-gold/60 z-10 pulse-dot"
                  style={{ transform: 'translate(-50%, 20px)' }}
                />

                {/* Image side — polaroid frame */}
                <div className="w-full md:w-1/2">
                  <div className={`${isLeft ? 'md:pl-14' : 'md:pr-14'} flex ${isLeft ? 'md:justify-start justify-center' : 'md:justify-end justify-center'}`}>
                    <div
                      className="polaroid"
                      style={{ '--rot': card.rot, maxWidth: '320px', width: '100%' }}
                    >
                      <img
                        src={card.photo}
                        alt={card.title}
                        className="w-full block object-cover"
                        style={{ aspectRatio: '4/3', objectPosition: card.objectPosition || 'center center' }}
                      />
                      <div className="flex items-center justify-center pt-1">
                        <span
                          className="font-heading text-ink/35"
                          style={{ fontSize: '0.9rem', letterSpacing: '0.04em' }}
                        >
                          K | M
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )
        })}
      </div>

      {/* Bottom quote */}
      <div className="text-center mt-8" data-reveal>
        <div className="gold-rule mb-6" />
        <p className="font-heading text-ink/60" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}>
          &ldquo;Finally getting to say the words, I do.&rdquo;
        </p>
        <div className="gold-rule mt-6" />
      </div>
    </section>
  )
}
