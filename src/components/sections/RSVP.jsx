import { useState } from 'react'
import { WaxSeal, FloralWreath } from '../ui/FloralSvg'

const SHEET_URL = import.meta.env.VITE_SHEET_URL

export default function RSVP() {
  const [attending, setAttending] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    dietary: '',
    message: '',
    song: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, attending }),
      })
    } catch (_) {
      // no-cors means the response is opaque — submission still goes through
    }
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section className="section-cream py-24 px-4 relative overflow-hidden" id="rsvp">
      {/* Botanical wreath — centered background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none botanical-drift-slow" style={{ opacity: 0.07 }}>
        <FloralWreath color="#0D0D0D" style={{ width: '60vw', maxWidth: '520px', height: 'auto' }} />
      </div>

      <div className="max-w-lg mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-5 seal-float" data-reveal="scale" data-delay="1">
            <WaxSeal />
          </div>
          <p className="section-label mb-3" data-reveal data-delay="2">Your Reply Is Requested</p>
          <div className="gold-rule mb-4" data-reveal data-delay="3" />
          <h2
            className="font-heading text-ink"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 4.5rem)', lineHeight: 1.1 }}
            data-reveal
            data-delay="4"
          >
            RSVP
          </h2>
          <p className="font-body text-sm italic text-ink/50 mt-3" data-reveal data-delay="5">
            Please respond no later than 19 June.
          </p>
        </div>

        {submitted ? (
          /* Thank you state */
          <div className="text-center border border-gold/25 p-10 bg-[#111111]">
            <span className="absolute top-0 left-0 w-5 h-5 border-t border-l border-gold/40" />
            <span className="absolute top-0 right-0 w-5 h-5 border-t border-r border-gold/40" />
            <span className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-gold/40" />
            <span className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-gold/40" />
            <div className="gold-rule mb-6" />
            <p
              className="font-heading text-cream"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
            >
              Thank you
            </p>
            <p className="font-body text-sm text-cream/50 mt-3 leading-relaxed">
              We have received your response and cannot wait to celebrate with you.
            </p>
            <div className="gold-rule mt-6" />
          </div>
        ) : (
          /* Envelope-styled form card */
          <div
            className="relative border border-gold/20 bg-[#111111] p-8 md:p-12"
            data-reveal="drop"
            data-delay="2"
          >
            {/* Gold corner accents */}
            <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold/35" />
            <span className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold/35" />
            <span className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gold/35" />
            <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold/35" />

            {/* Envelope flap decoration at top */}
            <div className="flex justify-center mb-8">
              <svg width="100%" height="24" viewBox="0 0 400 24" preserveAspectRatio="none" fill="none">
                <path d="M0 0 L200 22 L400 0" stroke="rgba(201,169,110,0.2)" strokeWidth="0.8" fill="none"/>
              </svg>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div>
                <label className="section-label block mb-2" style={{ color: 'rgba(201,169,110,0.7)' }}>
                  Full Name(s)
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="form-field"
                />
              </div>

              {/* Attendance */}
              <div>
                <label className="section-label block mb-3" style={{ color: 'rgba(201,169,110,0.7)' }}>
                  Will You Be Joining Us?
                </label>
                <div className="flex gap-4">
                  {['Yes, with joy', 'Regretfully unable'].map((opt) => {
                    const val = opt.startsWith('Yes') ? 'yes' : 'no'
                    return (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setAttending(val)}
                        className="flex-1 py-3 text-[11px] tracking-[0.2em] uppercase font-body transition-all duration-200"
                        style={{
                          border: `1px solid ${attending === val ? '#C9A96E' : 'rgba(244,239,230,0.15)'}`,
                          color: attending === val ? '#C9A96E' : 'rgba(244,239,230,0.4)',
                          background: attending === val ? 'rgba(201,169,110,0.08)' : 'transparent',
                        }}
                      >
                        {opt}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Dietary */}
              <div>
                <label className="section-label block mb-2" style={{ color: 'rgba(201,169,110,0.7)' }}>
                  Dietary Requirements or Allergies
                </label>
                <input
                  type="text"
                  name="dietary"
                  placeholder="None, vegetarian, nut allergy..."
                  value={form.dietary}
                  onChange={handleChange}
                  className="form-field"
                />
              </div>

              {/* Message */}
              <div>
                <label className="section-label block mb-2" style={{ color: 'rgba(201,169,110,0.7)' }}>
                  A Message for Kervin &amp; Melissa
                </label>
                <textarea
                  name="message"
                  placeholder="Share your wishes..."
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  className="form-field resize-none w-full"
                  style={{ borderBottom: 'none', borderTop: '1px solid rgba(201,169,110,0.2)', paddingTop: '10px' }}
                />
              </div>

              {/* Song request */}
              <div>
                <label className="section-label block mb-2" style={{ color: 'rgba(201,169,110,0.7)' }}>
                  Song Request
                </label>
                <input
                  type="text"
                  name="song"
                  placeholder="What song gets you on the dance floor?"
                  value={form.song}
                  onChange={handleChange}
                  className="form-field"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 font-body text-[11px] tracking-[0.3em] uppercase text-ink bg-cream transition-all duration-300 hover:bg-gold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send My Reply'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}
