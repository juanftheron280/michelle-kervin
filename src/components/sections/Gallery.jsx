import { useState } from 'react'
import { BotanicalBranch, FloralWreath } from '../ui/FloralSvg'

const photos = [
  { file: 'edit_aug_6801.jpg', rot: -2 },
  { file: 'edit_aug_6811.jpg', rot: 1.5 },
  { file: 'edit_aug_6817.jpg', rot: -1 },
  { file: 'edit_aug_6829.jpg', rot: 2.5 },
  { file: 'edit_aug_6836.jpg', rot: -1.5 },
  { file: 'edit_aug_6857.jpg', rot: 0.8 },
  { file: 'edit_aug_6861.jpg', rot: -2.5 },
  { file: 'edit_aug_6862.jpg', rot: 1.2 },
  { file: 'edit_aug_6870.jpg', rot: -0.5 },
  { file: 'edit_aug_6875.jpg', rot: 2 },
  { file: 'edit_aug_6892.jpg', rot: -1.8 },
  { file: 'edit_aug_6901.jpg', rot: 1.8 },
  { file: 'edit_aug_6908.jpg', rot: -2.2 },
  { file: 'edit_aug_6913.jpg', rot: 0.5 },
  { file: 'edit_aug_6916.jpg', rot: -1.2 },
  { file: 'edit_aug_6923.jpg', rot: 2.2 },
  { file: 'edit_aug_6952.jpg', rot: -2.8 },
  { file: 'edit_aug_6994.jpg', rot: 1 },
  { file: 'edit_aug_7010.jpg', rot: -0.8 },
  { file: 'edit_aug_7012.jpg', rot: 2.5 },
]

const PREVIEW_COUNT = 8

export default function Gallery() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? photos : photos.slice(0, PREVIEW_COUNT)

  return (
    <section id="gallery" className="section-dark py-24 px-4 relative overflow-hidden" style={{ scrollMarginTop: '60px' }}>
      {/* Botanical wreath — centered watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none botanical-drift-slow" style={{ opacity: 0.12 }}>
        <FloralWreath color="#F4EFE6" style={{ width: '55vw', maxWidth: '500px', height: 'auto' }} />
      </div>
      {/* Botanical branch — left side */}
      <div className="absolute left-0 top-1/2 pointer-events-none botanical-drift" style={{ opacity: 0.12, transform: 'translateY(-50%) scaleX(-1)' }}>
        <BotanicalBranch color="#F4EFE6" style={{ width: '200px' }} />
      </div>
      {/* Botanical branch — right side */}
      <div className="absolute right-0 top-1/2 pointer-events-none botanical-drift-alt" style={{ opacity: 0.10, transform: 'translateY(-50%)' }}>
        <BotanicalBranch color="#F4EFE6" style={{ width: '160px' }} />
      </div>

      {/* Header */}
      <div className="text-center mb-16">
        <p className="section-label mb-3" data-reveal data-delay="1">Their Journey</p>
        <div className="gold-rule mb-4" data-reveal data-delay="2" />
        <h2
          className="font-heading text-cream"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 4.5rem)', lineHeight: 1.1 }}
          data-reveal
          data-delay="3"
        >
          Engagement Gallery
        </h2>
        <p className="font-body text-sm italic text-cream/40 mt-4" data-reveal data-delay="4">
          Captured in light. Kept forever.
        </p>
      </div>

      {/* Polaroid grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start">
        {visible.map(({ file, rot }, i) => (
          <div
            key={file}
            className="polaroid block w-full cursor-pointer"
            style={{ '--rot': `${rot}deg` }}
          >
            <img
              src={`/photos/${file}`}
              alt={`Melissa and Kervin — engagement photo ${i + 1}`}
              className="w-full object-cover block"
              style={{ aspectRatio: '3/4', filter: 'contrast(1.04) brightness(0.97)' }}
              loading="lazy"
            />
            <div className="flex items-center justify-center pt-1 pb-0.5">
              <span
                className="font-heading text-ink/30"
                style={{ fontSize: '0.95rem', letterSpacing: '0.04em' }}
              >
                M &amp; K
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Expand / collapse button */}
      {!expanded && (
        <div className="text-center mt-14" data-reveal>
          <button
            onClick={() => setExpanded(true)}
            className="inline-flex items-center gap-3 font-body text-[11px] tracking-[0.28em] uppercase text-cream/50 hover:text-gold border border-cream/20 hover:border-gold/40 px-8 py-4 transition-all duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1 L7 13 M1 7 L13 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            View Full Gallery
          </button>
          <p className="font-body text-[10px] tracking-widest text-cream/25 uppercase mt-3">
            {photos.length - PREVIEW_COUNT} more photos
          </p>
        </div>
      )}
    </section>
  )
}
