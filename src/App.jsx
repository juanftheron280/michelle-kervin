import { useEffect, useState } from 'react'
import EnvelopeIntro from './components/EnvelopeIntro'
import Hero from './components/sections/Hero'
import LoveStory from './components/sections/LoveStory'
import Gallery from './components/sections/Gallery'
import PhotoUpload from './components/sections/PhotoUpload'
import OrderOfEvents from './components/sections/OrderOfEvents'
import DressCode from './components/sections/DressCode'
import Venue from './components/sections/Venue'
import RSVP from './components/sections/RSVP'
import FAQ from './components/sections/FAQ'

// Only show the envelope intro on mobile viewports
const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 768

export default function App() {
  const [showIntro, setShowIntro] = useState(isMobile)
  const [revealReady, setRevealReady] = useState(!isMobile())

  useEffect(() => {
    if (!revealReady) return

    const els = document.querySelectorAll('[data-reveal]')
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [revealReady])

  const handleReveal = () => {
    setRevealReady(true)
    // Small delay so the observer fires as the overlay is mid-fade,
    // making the hero animate in while the envelope is still visible
    setTimeout(() => setShowIntro(false), 2000)
  }

  return (
    <>
      {showIntro && <EnvelopeIntro onReveal={handleReveal} />}

      {/* Film grain texture overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <main>
        <Hero />
        <LoveStory />
        <Gallery />
        <PhotoUpload />
        <OrderOfEvents />
        <DressCode />
        <Venue />
        <RSVP />
        <FAQ />
      </main>
    </>
  )
}
