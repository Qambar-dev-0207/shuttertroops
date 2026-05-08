import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Mission = () => {
  return (
    <section className="surface-lifted" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Ghost watermark */}
      <div
        className="ghost-headline"
        style={{
          position: 'absolute',
          top: 80,
          left: -40,
          right: 0,
          fontSize: 'clamp(7rem, 18vw, 16rem)',
          textAlign: 'left',
          paddingLeft: '8%',
          zIndex: 0,
          whiteSpace: 'nowrap',
        }}
      >
        every&nbsp;pixel&nbsp;perfected
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid-2">
          <div>
            <span className="eyebrow">The practice</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '2rem', lineHeight: 1, fontWeight: 500, letterSpacing: '-0.02em' }}>
              We don't follow standards.<br />
              We <span style={{ color: 'var(--signal)' }}>set them.</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--charcoal)', marginBottom: '2.5rem', lineHeight: 1.55, maxWidth: 460, fontWeight: 450 }}>
              ShuttrTroops merges creativity with strategy to build meaningful brands that inspire and create impact. Every pixel is perfected, every story sharpened — built around emotional connection and the kind of attention that converts.
            </p>
            <Link to="/about" className="btn-outline">Inside the studio</Link>
          </div>

          {/* Circular portrait + satellite + orbital arc */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', minHeight: 420 }}>
            <svg
              className="orbital-arc"
              viewBox="0 0 600 500"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}
              aria-hidden
            >
              <path d="M40,260 C 140,40 460,40 560,260" stroke="currentColor" strokeWidth="1.2" fill="none" />
              <circle cx="40" cy="260" r="3" fill="currentColor" />
              <circle cx="560" cy="260" r="3" fill="currentColor" />
            </svg>

            <motion.div
              className="portrait-wrap"
              initial={{ scale: 0.92, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: 380, maxWidth: '88%', aspectRatio: '1 / 1', position: 'relative', zIndex: 1 }}
            >
              <div className="portrait" style={{ width: '100%', height: '100%' }}>
                <video
                  src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-person-editing-a-video-on-a-laptop-44819-large.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              <Link to="/portfolio" className="satellite" aria-label="See latest work">
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                  <path d="M0 7h17M14 1l5 6-5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>

        <div style={{ marginTop: '4rem', display: 'flex', alignItems: 'center', gap: '1.5rem', justifyContent: 'flex-start' }}>
          <span className="eyebrow">Latest cut</span>
          <span style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.02em' }}>The Art of Motion — 90s brand film</span>
        </div>
      </div>
    </section>
  );
};

export default Mission;
