import { motion } from 'framer-motion';
import BeforeAfter from '../BeforeAfter';

const ColorLab = () => {
  return (
    <section style={{ padding: '96px 0', background: 'var(--lifted)', position: 'relative', overflow: 'hidden' }}>
      <div
        className="ghost-headline"
        style={{
          position: 'absolute',
          top: 60,
          right: '-3%',
          fontSize: 'clamp(7rem, 18vw, 14rem)',
          whiteSpace: 'nowrap',
          textAlign: 'right',
          zIndex: 0,
        }}
      >
        the&nbsp;color&nbsp;is&nbsp;the&nbsp;mood
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
          <div>
            <span className="eyebrow">Color lab · DaVinci Resolve</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1, fontWeight: 500, letterSpacing: '-0.02em' }}>
              Before. After.<br />
              <span style={{ color: 'var(--signal)' }}>Same footage.</span>
            </h2>
          </div>
          <p style={{ maxWidth: 380, color: 'var(--slate)', fontSize: '1rem', lineHeight: 1.5 }}>
            Drag the handle. Left is the LOG capture from camera; right is the final graded master. Every project leaves the studio with a custom color pass.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <BeforeAfter
            rawSrc="https://assets.mixkit.co/videos/preview/mixkit-thick-forest-under-a-clear-sky-4547-large.mp4"
            gradedSrc="https://assets.mixkit.co/videos/preview/mixkit-thick-forest-under-a-clear-sky-4547-large.mp4"
            rawLabel="RAW · LOG"
            gradedLabel="GRADED · Master"
          />
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            marginTop: '2rem',
          }}
          className="lab-stats"
        >
          {[
            { k: '24+', l: 'Custom LUTs' },
            { k: '4K · 8K', l: 'Mastered ready' },
            { k: '5.1 / Stereo', l: 'Sound finishing' },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                background: 'var(--canvas)',
                borderRadius: 28,
                padding: '1.5rem 1.75rem',
                border: '1px solid rgba(20,20,19,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--signal-light)', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 500, letterSpacing: '-0.02em' }}>{s.k}</div>
                <div style={{ fontSize: 13, color: 'var(--slate)', letterSpacing: 0.3, textTransform: 'uppercase', fontWeight: 700 }}>{s.l}</div>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 768px) { .lab-stats { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  );
};

export default ColorLab;
