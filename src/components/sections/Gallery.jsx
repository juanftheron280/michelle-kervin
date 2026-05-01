import { BotanicalBranch, FloralWreath } from '../ui/FloralSvg'
import ImageGallery from '../ui/image-gallery'

const row1 = [
  '/photos/edit_aug_6801.jpg',
  '/photos/edit_aug_6817.jpg',
  '/photos/edit_aug_6811.jpg',
  '/photos/edit_aug_6836.jpg',
]

export default function Gallery() {
  return (
    <section id="gallery" className="section-dark py-24 px-4 relative overflow-hidden" style={{ scrollMarginTop: '60px' }}>
      {/* Botanical wreath centered watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none botanical-drift-slow" style={{ opacity: 0.12 }}>
        <FloralWreath color="#F4EFE6" style={{ width: '55vw', maxWidth: '500px', height: 'auto' }} />
      </div>
      {/* Botanical branch left side */}
      <div className="absolute left-0 top-1/2 pointer-events-none botanical-drift" style={{ opacity: 0.12, transform: 'translateY(-50%) scaleX(-1)' }}>
        <BotanicalBranch color="#F4EFE6" style={{ width: '200px' }} />
      </div>
      {/* Botanical branch right side */}
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
          Fragments of us
        </h2>
        <p className="font-body text-sm italic text-cream/40 mt-4" data-reveal data-delay="4">
          Captured in light. Kept forever.
        </p>
      </div>

      {/* Single row expanding gallery */}
      <div className="w-full relative z-10" data-reveal>
        <ImageGallery photos={row1} />
      </div>
    </section>
  )
}
