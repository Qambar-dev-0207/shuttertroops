import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const NotFound = () => {
  return (
    <PageTransition>
      <div style={{ paddingTop: 'var(--nav-height)', background: 'var(--canvas)', minHeight: '100vh' }}>
        <section style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
          <div
            className="ghost-headline"
            style={{
              position: 'absolute',
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: 'clamp(12rem, 30vw, 28rem)',
              whiteSpace: 'nowrap',
              zIndex: 0,
            }}
          >
            404
          </div>

          <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            {/* Camera shutter mark */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: 140,
                height: 140,
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 30%, #2a2a28 0%, #141413 60%)',
                margin: '0 auto 3rem',
                position: 'relative',
                boxShadow: 'inset 0 0 0 2px #262626, inset 0 0 0 8px #1a1a18, 0 24px 48px rgba(0,0,0,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <motion.div
                animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: 'var(--signal-light)',
                  boxShadow: '0 0 22px rgba(243, 115, 56, 0.7)',
                }}
              />
            </motion.div>

            <span className="eyebrow" style={{ marginBottom: '1.5rem' }}>Frame missing</span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                lineHeight: 1,
                marginBottom: '1.5rem',
              }}
            >
              This cut <span style={{ color: 'var(--signal)' }}>didn't render.</span>
            </motion.h1>

            <p style={{ maxWidth: 480, margin: '0 auto 3rem', color: 'var(--charcoal)', fontSize: 17, lineHeight: 1.55, fontWeight: 450 }}>
              The page you're looking for is on the cutting room floor. The link is broken or the file moved — let's get you back to a working timeline.
            </p>

            <div style={{ display: 'inline-flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link to="/" className="btn-ink">
                Back to home
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M0 5h12M9 1l3 4-3 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link to="/portfolio" className="btn-outline">
                Watch the reel
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default NotFound;
