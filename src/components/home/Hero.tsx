import { useRef, useState } from 'react';
import { motion, MotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroProps {
  heroRef: React.RefObject<HTMLDivElement | null>;
  heroY: MotionValue<string>;
  heroOpacity: MotionValue<number>;
}

const REEL_URL =
  'https://assets.mixkit.co/videos/preview/mixkit-camera-man-recording-a-fashion-model-32877-large.mp4';

const Hero = ({ heroRef, heroY, heroOpacity }: HeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <section ref={heroRef} className="hero">
      <motion.div className="container" style={{ y: heroY, opacity: heroOpacity }}>
        <div className="hero-eyebrow-row">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ShuttrTroops · Brand Narrative Studio
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ fontSize: 14, color: 'var(--slate)', letterSpacing: '-0.32px' }}
          >
            Lucknow · Uttar Pradesh
          </motion.span>
        </div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          We don't just<br />
          press record.<br />
          We press <em>impact.</em>
        </motion.h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'end', marginTop: '2rem' }} className="hero-bottom-row">
          <motion.p
            className="hero-sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            At ShuttrTroops every frame is crafted like a weapon of attention — built to cut through digital noise. We don't just create content. We build brand narratives that spark movement, emotion and action.
          </motion.p>

          <motion.div
            className="hero-cta-row"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            style={{ justifyContent: 'flex-end' }}
          >
            <Link to="/portfolio" className="btn-ink">
              Watch the reel
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M0 5h12M9 1l3 4-3 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link to="/contact" className="btn-outline">Brief us</Link>
          </motion.div>
        </div>

        {/* Hero showreel — 40px stadium frame */}
        <motion.div
          className="reel-frame"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <video
            ref={videoRef}
            src={REEL_URL}
            muted
            loop
            playsInline
            poster=""
          />
          <div className="reel-overlay" />
          {!playing && (
            <button className="reel-play" onClick={togglePlay} aria-label="Play showreel">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            </button>
          )}
          {playing && (
            <button
              className="reel-play"
              onClick={togglePlay}
              aria-label="Pause"
              style={{ opacity: 0.0 }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = '0')}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            </button>
          )}
          <div className="reel-caption">
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(255,255,255,0.92)',
                color: 'var(--ink)',
                padding: '6px 14px',
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 0.4,
                textTransform: 'uppercase',
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--signal-light)' }} />
              Showreel · 2025
            </span>
          </div>
        </motion.div>

        {/* Value pills — what they do */}
        <div className="pill-row">
          <div className="value-pill">
            <h3>Production</h3>
            <p>Cinematic brand films and product shoots that frame the story as the hero.</p>
          </div>
          <div className="value-pill">
            <h3>Content</h3>
            <p>Reels, statics and scroll-stopping creatives engineered for conversion.</p>
          </div>
          <div className="value-pill">
            <h3>Digital</h3>
            <p>Influencer campaigns and digital strategies that grow real brand equity.</p>
          </div>
          <div className="value-pill">
            <h3>Narrative</h3>
            <p>Brand storytelling that earns memory — every pixel perfected, every story sharpened.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
