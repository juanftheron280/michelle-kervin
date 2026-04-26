import { useRef, useState, useCallback, useEffect } from 'react'

const FADE_AT   = 2.0  // overlay starts fading at 2s
const FADE_DUR  = 1.5  // visual fade duration (seconds)
const REVEAL_AT = 3.0  // hero animations fire 2s before video ends

export default function EnvelopeIntro({ onReveal }) {
  const videoRef    = useRef(null)
  const fadeFired   = useRef(false)
  const revealFired = useRef(false)
  const [tapped,       setTapped]       = useState(false)
  const [posterGone,   setPosterGone]   = useState(false)
  const [fading,       setFading]       = useState(false)
  const [done,         setDone]         = useState(false)

  const handleTap = useCallback(() => {
    if (tapped) return
    setTapped(true)
    videoRef.current?.play()
  }, [tapped])

  // Only hide the poster once the video is actually rendering frames
  const handlePlay = useCallback(() => {
    setPosterGone(true)
  }, [])

  const handleTimeUpdate = useCallback(() => {
    const t = videoRef.current?.currentTime ?? 0
    if (!fadeFired.current && t >= FADE_AT) {
      fadeFired.current = true
      setFading(true)
      document.body.style.overflow = ''
    }
    if (!revealFired.current && t >= REVEAL_AT) {
      revealFired.current = true
      document.body.classList.remove('envelope-active')
      onReveal?.()
    }
  }, [onReveal])

  const handleEnded = useCallback(() => {
    if (!revealFired.current) {
      revealFired.current = true
      document.body.classList.remove('envelope-active')
      onReveal?.()
    }
    setDone(true)
  }, [onReveal])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.body.classList.add('envelope-active')
    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('envelope-active')
    }
  }, [])

  if (done) return null

  return (
    <div
      onClick={handleTap}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#0D0B08',
        cursor: tapped ? 'default' : 'pointer',
        opacity: fading ? 0 : 1,
        transition: fading ? `opacity ${FADE_DUR}s ease-out` : 'none',
        pointerEvents: fading ? 'none' : 'auto',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {/* Video — hidden until tapped, plays underneath poster */}
      <video
        ref={videoRef}
        src="/envelope.mp4"
        playsInline
        preload="auto"
        onPlay={handlePlay}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
          pointerEvents: 'none',
        }}
      />

      {/* Poster image — shown before tap, fades out when video starts */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: posterGone ? 0 : 1,
          transition: 'opacity 0.8s ease',
          pointerEvents: 'none',
        }}
      >
        <img
          src="/envelope-poster.png"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        />
      </div>

      {/* Tap hint */}
      <div
        style={{
          position: 'absolute',
          bottom: '9%',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          pointerEvents: 'none',
          transition: 'opacity 0.6s ease',
          opacity: tapped ? 0 : 1,
          whiteSpace: 'nowrap',
        }}
      >
        <p
          style={{
            fontFamily: 'Lora, Georgia, serif',
            fontSize: '10px',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'rgba(244,239,230,0.45)',
            animation: 'tapHintPulse 2.2s ease-in-out infinite',
          }}
        >
          Tap to open
        </p>
        <div
          style={{
            width: '24px',
            height: '1px',
            background: 'rgba(201,169,110,0.35)',
            margin: '8px auto 0',
          }}
        />
      </div>
    </div>
  )
}
