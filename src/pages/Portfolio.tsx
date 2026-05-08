import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import VideoLightbox, { type LightboxVideo } from '../components/VideoLightbox';

interface Project extends LightboxVideo {
  year: string;
}

const projects: Project[] = [
  { title: 'The Urban Pulse', category: 'Production', year: '2024', url: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4', description: 'Aerial brand film for a real-estate launch — 60s cinematic cut, color graded in DaVinci.' },
  { title: 'Neon Nights',     category: 'Digital',    year: '2024', url: 'https://assets.mixkit.co/videos/preview/mixkit-city-traffic-at-night-from-above-4444-large.mp4', description: 'Influencer-led nightlife campaign across 12 creators, unified visual system.' },
  { title: 'Velocity',        category: 'Production', year: '2024', url: 'https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4', description: 'Automotive TVC, 30s + cutdowns — shot anamorphic, sound designed in-house.' },
  { title: 'Ethereal States', category: 'Content',    year: '2023', url: 'https://assets.mixkit.co/videos/preview/mixkit-thick-forest-under-a-clear-sky-4547-large.mp4', description: 'Wellness brand short — narrative voice-over, scored bespoke.' },
  { title: 'Cyber Silk',      category: 'Content',    year: '2023', url: 'https://assets.mixkit.co/videos/preview/mixkit-waves-coming-to-the-shore-line-at-a-beach-4462-large.mp4', description: 'Product reveal Reel cut for a textile launch — 9:16 native, 3s hook.' },
  { title: 'Monolith',        category: 'Production', year: '2022', url: 'https://assets.mixkit.co/videos/preview/mixkit-traveler-walking-towards-a-frozen-lake-in-the-mountains-with-his-32814-large.mp4', description: 'Documentary brand film — 4-minute long form, festival cut.' },
];

const filters = ['All', 'Production', 'Content', 'Digital'] as const;

const Portfolio = () => {
  const [active, setActive] = useState<LightboxVideo | null>(null);
  const [filter, setFilter] = useState<typeof filters[number]>('All');

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <PageTransition>
      <div style={{ paddingTop: 'var(--nav-height)', background: 'var(--canvas)' }}>
        {/* Header */}
        <section style={{ background: 'var(--canvas)', paddingBottom: 32 }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
              <div>
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eyebrow">
                  Selected work · 2022 — 2024
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    fontSize: 'clamp(3rem, 9vw, 7rem)',
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    lineHeight: 0.98,
                    maxWidth: '14ch',
                  }}
                >
                  Every cut. <span style={{ color: 'var(--signal)' }}>Every frame.</span>
                </motion.h1>
              </div>
              <p style={{ maxWidth: 360, fontSize: 16, color: 'var(--charcoal)', lineHeight: 1.5, fontWeight: 450 }}>
                Hover any tile to play. Each film here was edited, colored and mixed in our studio — no white-labelled vendors.
              </p>
            </div>
          </div>
        </section>

        {/* Filter chips */}
        <section style={{ padding: '0 0 24px' }}>
          <div className="container">
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <span className="eyebrow" style={{ marginBottom: 0, marginRight: 8 }}>Filter</span>
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 999,
                    border: '1px solid ' + (filter === f ? 'var(--ink)' : 'rgba(20,20,19,0.15)'),
                    background: filter === f ? 'var(--ink)' : 'transparent',
                    color: filter === f ? 'var(--canvas)' : 'var(--ink)',
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: '-0.32px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {f}
                  <span
                    style={{
                      marginLeft: 8,
                      fontSize: 11,
                      color: filter === f ? 'var(--signal-light)' : 'var(--slate)',
                      fontWeight: 700,
                    }}
                  >
                    {f === 'All' ? projects.length : projects.filter((p) => p.category === f).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid of stadium video tiles */}
        <section style={{ padding: '24px 0 96px' }}>
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.5rem',
              }}
              className="portfolio-grid"
            >
              <AnimatePresence mode="popLayout">
              {filtered.map((project, idx) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: idx * 0.04 }}
                  style={{ position: 'relative', cursor: 'pointer' }}
                  onClick={() => setActive(project)}
                  onMouseEnter={(e) => {
                    const v = e.currentTarget.querySelector('video');
                    if (v) (v as HTMLVideoElement).play();
                  }}
                  onMouseLeave={(e) => {
                    const v = e.currentTarget.querySelector('video');
                    if (v) {
                      (v as HTMLVideoElement).pause();
                      (v as HTMLVideoElement).currentTime = 0;
                    }
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: 40,
                      overflow: 'hidden',
                      aspectRatio: '4 / 3',
                      background: '#0a0a0a',
                      boxShadow: '0 18px 36px rgba(0,0,0,0.08)',
                    }}
                  >
                    <video
                      src={project.url}
                      muted
                      loop
                      playsInline
                      style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.92)' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.7) 100%)',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 24,
                        left: 28,
                        right: 28,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        gap: 16,
                      }}
                    >
                      <div>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 6,
                            color: 'var(--canvas)',
                            fontSize: 12,
                            fontWeight: 700,
                            letterSpacing: 0.5,
                            textTransform: 'uppercase',
                            marginBottom: 6,
                          }}
                        >
                          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--signal-light)' }} />
                          {project.category} · {project.year}
                        </span>
                        <h3
                          style={{
                            color: 'var(--canvas)',
                            fontSize: 'clamp(1.4rem, 2.4vw, 2rem)',
                            fontWeight: 500,
                            letterSpacing: '-0.02em',
                            margin: 0,
                            lineHeight: 1.05,
                          }}
                        >
                          {project.title}
                        </h3>
                      </div>
                      <div className="video-card-satellite" style={{ width: 52, height: 52 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7L8 5z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              </AnimatePresence>
            </div>

            <style>{`
              @media (max-width: 768px) {
                .portfolio-grid { grid-template-columns: 1fr !important; }
              }
            `}</style>
          </div>
        </section>

        <VideoLightbox video={active} onClose={() => setActive(null)} />

        {/* CTA */}
        <section style={{ padding: '6rem 0 8rem', background: 'var(--canvas)' }}>
          <div
            className="container"
            style={{
              background: 'var(--ink)',
              color: 'var(--canvas)',
              borderRadius: 40,
              padding: '4rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '2rem',
            }}
          >
            <h2 style={{ color: 'var(--canvas)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.05, maxWidth: '20ch' }}>
              Project on the table?<br />Let's read the brief.
            </h2>
            <Link to="/contact" className="btn-outline" style={{ background: 'var(--canvas)', color: 'var(--ink)', borderColor: 'var(--canvas)' }}>
              Send a brief
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M0 5h12M9 1l3 4-3 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Portfolio;
