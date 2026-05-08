import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    eyebrow: 'Pillar',
    title: 'Production',
    body: 'Cinematic brand films and product shoots — the studio behind every frame, lit and shot to read like cinema.',
    media: 'https://assets.mixkit.co/videos/preview/mixkit-camera-man-recording-a-fashion-model-32877-large.mp4',
  },
  {
    num: '02',
    eyebrow: 'Pillar',
    title: 'Content Creation',
    body: 'Reels, static creatives and scroll-stopping content built for conversion, not vanity metrics.',
    media: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-person-editing-a-video-on-a-laptop-44819-large.mp4',
  },
  {
    num: '03',
    eyebrow: 'Pillar',
    title: 'Digital Marketing',
    body: 'Strategic brand building, influencer campaigns and digital narratives that turn attention into action.',
    media: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-talking-with-a-male-friend-via-video-call-on-a-laptop-43821-large.mp4',
  },
];

const Process = () => {
  return (
    <section className="surface-canvas" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem' }}>
          <div>
            <span className="eyebrow">What we do</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1, fontWeight: 500, letterSpacing: '-0.02em', maxWidth: 16 + 'ch' }}>
              Three pillars.<br />
              <span style={{ color: 'var(--signal)' }}>One narrative.</span>
            </h2>
          </div>
          <p style={{ maxWidth: 360, color: 'var(--slate)', fontSize: '1rem', lineHeight: 1.5 }}>
            Production, content creation and digital marketing — all under one roof, all aimed at the same target: stories that spark movement, emotion and action.
          </p>
        </div>

        <div className="constellation" style={{ position: 'relative' }}>
          {/* Orbital arcs spanning between portraits */}
          <svg
            className="orbital-arc"
            viewBox="0 0 1200 380"
            preserveAspectRatio="none"
            style={{ position: 'absolute', top: 80, left: 0, width: '100%', height: 220, zIndex: 0 }}
            aria-hidden
          >
            <path d="M180,180 C 320,40 480,40 600,180" stroke="currentColor" strokeWidth="1.3" fill="none" />
            <path d="M600,180 C 720,320 880,320 1020,180" stroke="currentColor" strokeWidth="1.3" fill="none" />
          </svg>

          {steps.map((s, idx) => (
            <motion.div
              key={s.num}
              className="constellation-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative', zIndex: 1 }}
            >
              <div className="portrait-wrap" style={{ marginBottom: '2rem' }}>
                <div
                  className="portrait"
                  style={{
                    width: 260,
                    height: 260,
                    margin: '0 auto',
                    transform: idx === 1 ? 'translateY(20px)' : 'translateY(0)',
                  }}
                >
                  <video src={s.media} autoPlay muted loop playsInline />
                </div>
                <div
                  className="satellite"
                  style={{
                    bottom: 12,
                    right: 'calc(50% - 130px - 4px)',
                  }}
                  aria-hidden
                >
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <path d="M0 6h13M10 1l4 5-4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <span className="eyebrow" style={{ marginBottom: '0.75rem' }}>{s.eyebrow} · {s.num}</span>
              <h3 style={{ fontSize: '1.7rem', marginBottom: '0.75rem', fontWeight: 500, letterSpacing: '-0.02em' }}>{s.title}</h3>
              <p style={{ color: 'var(--slate)', lineHeight: 1.55, maxWidth: 320, margin: '0 auto', fontSize: '0.98rem' }}>{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
