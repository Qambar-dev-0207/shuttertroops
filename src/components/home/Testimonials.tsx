import { motion } from 'framer-motion';

const quotes = [
  {
    quote:
      'They didn\'t just edit our launch film — they re-wrote it in the timeline. Our hook retention jumped from 38% to 71% on the same footage.',
    name: 'Aanya Verma',
    role: 'Brand Lead, Aether',
    avatar: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-talking-with-a-male-friend-via-video-call-on-a-laptop-43821-large.mp4',
  },
  {
    quote:
      'ShuttrTroops is the only post house I trust without watching dailies. Color, sound, motion — they think like operators, not vendors.',
    name: 'Rohan Sethi',
    role: 'Founder, Lumière',
    avatar: 'https://assets.mixkit.co/videos/preview/mixkit-camera-man-recording-a-fashion-model-32877-large.mp4',
  },
  {
    quote:
      'Briefed Monday, master delivered Friday. Three platforms, six cuts, one consistent visual system. Insane value.',
    name: 'Maya Khan',
    role: 'CMO, Stratus',
    avatar: 'https://assets.mixkit.co/videos/preview/mixkit-young-mixed-race-woman-sketching-on-a-tablet-near-a-window-44648-large.mp4',
  },
];

const Testimonials = () => {
  return (
    <section style={{ padding: '96px 0', background: 'var(--canvas)', position: 'relative', overflow: 'hidden' }}>
      <div
        className="ghost-headline"
        style={{
          position: 'absolute',
          top: 60,
          left: '-3%',
          fontSize: 'clamp(7rem, 18vw, 14rem)',
          whiteSpace: 'nowrap',
          zIndex: 0,
        }}
      >
        words from the room
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem' }}>
          <div>
            <span className="eyebrow">Receipts</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1, fontWeight: 500, letterSpacing: '-0.02em' }}>
              Don't take<br />
              <span style={{ color: 'var(--signal)' }}>our word.</span>
            </h2>
          </div>
          <p style={{ maxWidth: 360, color: 'var(--slate)', fontSize: '1rem', lineHeight: 1.5 }}>
            Three of the brands we cut for, in their own words.
          </p>
        </div>

        {/* Connecting orbital arc */}
        <div style={{ position: 'relative' }}>
          <svg
            className="orbital-arc"
            viewBox="0 0 1200 80"
            preserveAspectRatio="none"
            style={{ position: 'absolute', top: -20, left: 0, width: '100%', height: 80, zIndex: 0 }}
            aria-hidden
          >
            <path d="M120,40 C 360,80 540,0 600,40 C 660,80 840,0 1080,40" stroke="currentColor" strokeWidth="1.3" fill="none" />
          </svg>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
              position: 'relative',
              zIndex: 1,
            }}
            className="testimonial-grid"
          >
            {quotes.map((q, idx) => (
              <motion.figure
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: 'var(--lifted)',
                  borderRadius: 40,
                  padding: '2.5rem',
                  border: '1px solid rgba(20,20,19,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  margin: 0,
                }}
              >
                <svg width="34" height="26" viewBox="0 0 34 26" fill="none" aria-hidden>
                  <path
                    d="M0 26V14C0 6.27 5.4 0 13.5 0v6C8.7 6 6 9 6 14h7.5v12H0zm20.5 0V14c0-7.73 5.4-14 13.5-14v6c-4.8 0-7.5 3-7.5 8H34v12H20.5z"
                    fill="var(--signal-light)"
                    opacity="0.85"
                  />
                </svg>

                <blockquote style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink)', fontWeight: 450, margin: 0, flex: 1 }}>
                  {q.quote}
                </blockquote>

                <figcaption style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 'auto' }}>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      background: 'var(--canvas)',
                      flexShrink: 0,
                    }}
                  >
                    <video src={q.avatar} autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--ink)' }}>{q.name}</div>
                    <div style={{ fontSize: 13, color: 'var(--slate)', fontWeight: 450 }}>{q.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <style>{`
            @media (max-width: 1024px) { .testimonial-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
