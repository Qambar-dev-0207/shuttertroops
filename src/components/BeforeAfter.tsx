import { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Props {
  rawSrc: string;
  gradedSrc: string;
  rawLabel?: string;
  gradedLabel?: string;
}

const BeforeAfter = ({
  rawSrc,
  gradedSrc,
  rawLabel = 'RAW · Camera',
  gradedLabel = 'GRADED · Final',
}: Props) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(0.5);
  const dragging = useRef(false);

  const updateFromX = useCallback((clientX: number) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    const next = (clientX - rect.left) / rect.width;
    setPos(Math.max(0, Math.min(1, next)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (dragging.current) updateFromX(e.clientX);
    };
    const onUp = () => (dragging.current = false);
    const onTouchMove = (e: TouchEvent) => {
      if (dragging.current && e.touches[0]) updateFromX(e.touches[0].clientX);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onUp);
    };
  }, [updateFromX]);

  return (
    <div
      ref={wrapRef}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 9',
        borderRadius: 40,
        overflow: 'hidden',
        background: '#0a0a0a',
        boxShadow: '0 24px 48px rgba(0,0,0,0.12)',
        userSelect: 'none',
        touchAction: 'none',
      }}
      onClick={(e) => updateFromX(e.clientX)}
    >
      {/* Graded (full layer, base) */}
      <video
        src={gradedSrc}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Raw (clipped layer) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          clipPath: `inset(0 ${(1 - pos) * 100}% 0 0)`,
          willChange: 'clip-path',
        }}
      >
        <video
          src={rawSrc}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'saturate(0.5) brightness(0.95) contrast(0.85)',
          }}
        />
      </div>

      {/* Labels */}
      <span
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          background: 'rgba(255,255,255,0.92)',
          color: 'var(--ink)',
          padding: '6px 14px',
          borderRadius: 999,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 0.6,
          textTransform: 'uppercase',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          opacity: pos > 0.08 ? 1 : 0,
          transition: 'opacity 0.2s',
        }}
      >
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#9A3A0A' }} />
        {rawLabel}
      </span>

      <span
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          background: 'var(--ink)',
          color: 'var(--canvas)',
          padding: '6px 14px',
          borderRadius: 999,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 0.6,
          textTransform: 'uppercase',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          opacity: pos < 0.92 ? 1 : 0,
          transition: 'opacity 0.2s',
        }}
      >
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--signal-light)' }} />
        {gradedLabel}
      </span>

      {/* Divider line + handle */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: `${pos * 100}%`,
          width: 2,
          background: 'rgba(255,255,255,0.85)',
          transform: 'translateX(-1px)',
          pointerEvents: 'none',
          boxShadow: '0 0 20px rgba(0,0,0,0.4)',
        }}
      />

      <motion.div
        onMouseDown={() => (dragging.current = true)}
        onTouchStart={() => (dragging.current = true)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: `${pos * 100}%`,
          transform: 'translate(-50%, -50%)',
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--ink)',
          cursor: 'ew-resize',
          boxShadow: '0 12px 30px rgba(0,0,0,0.35)',
          zIndex: 5,
        }}
      >
        <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
          <path d="M5 1L1 7l4 6M17 1l4 6-4 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>

      {/* Bottom hint */}
      <div
        style={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: 12,
          color: 'rgba(255,255,255,0.85)',
          letterSpacing: 0.4,
          textTransform: 'uppercase',
          fontWeight: 700,
          textShadow: '0 2px 8px rgba(0,0,0,0.6)',
          pointerEvents: 'none',
        }}
      >
        ← Drag · DaVinci Color Pass →
      </div>
    </div>
  );
};

export default BeforeAfter;
