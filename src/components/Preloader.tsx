import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BLADE_COUNT = 8;

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<'closed' | 'open'>('closed');
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('open'), 1700);
    const t2 = setTimeout(() => {
      setDone(true);
      onComplete();
    }, 2900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--ink)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Outer lens housing — f-stop ring */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              width: 360,
              height: 360,
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 30%, #2a2a28 0%, #141413 60%)',
              boxShadow:
                'inset 0 0 0 2px #262626, inset 0 0 0 18px #1a1a18, inset 0 0 60px rgba(0,0,0,0.6), 0 40px 100px rgba(0,0,0,0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* F-stop tick marks around outer ring */}
            <svg
              viewBox="0 0 360 360"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
              aria-hidden
            >
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i * 360) / 24;
                const long = i % 3 === 0;
                return (
                  <line
                    key={i}
                    x1={180}
                    y1={20}
                    x2={180}
                    y2={long ? 30 : 26}
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth={long ? 1.4 : 0.8}
                    transform={`rotate(${angle} 180 180)`}
                  />
                );
              })}
              {/* F-stop labels */}
              {['1.4', '2', '2.8', '4', '5.6', '8', '11', '16'].map((stop, i) => {
                const angle = (i * 360) / 8 - 90;
                const r = 168;
                const x = 180 + r * Math.cos((angle * Math.PI) / 180);
                const y = 180 + r * Math.sin((angle * Math.PI) / 180);
                return (
                  <text
                    key={stop}
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="9"
                    fill="rgba(255,255,255,0.4)"
                    fontFamily="Sofia Sans, sans-serif"
                    fontWeight="700"
                    letterSpacing="0.5"
                  >
                    f/{stop}
                  </text>
                );
              })}
            </svg>

            {/* Inner aperture chamber */}
            <div
              style={{
                position: 'relative',
                width: 240,
                height: 240,
                borderRadius: '50%',
                background: '#0a0a0a',
                boxShadow: 'inset 0 0 30px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(255,255,255,0.06)',
                overflow: 'hidden',
              }}
            >
              {/* Iris blades */}
              {Array.from({ length: BLADE_COUNT }).map((_, i) => {
                const baseAngle = (i * 360) / BLADE_COUNT;
                return (
                  <motion.div
                    key={i}
                    initial={{ rotate: baseAngle, x: 0, y: 0 }}
                    animate={
                      phase === 'open'
                        ? { rotate: baseAngle + 38, x: 70 * Math.cos((baseAngle * Math.PI) / 180), y: 70 * Math.sin((baseAngle * Math.PI) / 180) }
                        : { rotate: baseAngle, x: 0, y: 0 }
                    }
                    transition={{ duration: 1.0, ease: [0.7, 0, 0.2, 1] }}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: 200,
                      height: 200,
                      transformOrigin: '0% 0%',
                      background: 'linear-gradient(135deg, #1a1a18 0%, #2a2a28 50%, #141413 100%)',
                      clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                      borderLeft: '1px solid rgba(255,255,255,0.04)',
                      borderRight: '1px solid rgba(0,0,0,0.6)',
                      zIndex: BLADE_COUNT - i,
                    }}
                  />
                );
              })}

              {/* Glass reflection inside aperture */}
              <motion.div
                animate={
                  phase === 'open'
                    ? { opacity: 1, scale: 1.4 }
                    : { opacity: 0.55, scale: 1 }
                }
                transition={{ duration: 1.0, ease: [0.7, 0, 0.2, 1] }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'radial-gradient(circle at 35% 35%, rgba(243, 115, 56, 0.28) 0%, rgba(243, 115, 56, 0) 45%), radial-gradient(circle at 70% 65%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Center signal-light dot — like reticle */}
              <motion.div
                animate={
                  phase === 'open'
                    ? { scale: 0, opacity: 0 }
                    : { scale: [0.8, 1, 0.8], opacity: [0.6, 1, 0.6] }
                }
                transition={
                  phase === 'open'
                    ? { duration: 0.4 }
                    : { duration: 1.6, repeat: Infinity, ease: 'easeInOut' }
                }
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: 10,
                  height: 10,
                  marginTop: -5,
                  marginLeft: -5,
                  borderRadius: '50%',
                  background: 'var(--signal-light)',
                  boxShadow: '0 0 18px rgba(243, 115, 56, 0.7)',
                  zIndex: 10,
                }}
              />
            </div>
          </motion.div>

          {/* Iris reveal — circular wipe to canvas */}
          <motion.div
            initial={{ clipPath: 'circle(0% at 50% 50%)' }}
            animate={
              phase === 'open'
                ? { clipPath: 'circle(150% at 50% 50%)' }
                : { clipPath: 'circle(0% at 50% 50%)' }
            }
            transition={{ duration: 1.1, ease: [0.7, 0, 0.2, 1], delay: 0.1 }}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'var(--canvas)',
              zIndex: -1,
            }}
          />

          {/* Brand mark + status */}
          <motion.div
            animate={phase === 'open' ? { opacity: 0, y: 14 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'absolute',
              bottom: '8%',
              left: 0,
              right: 0,
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: 13,
                letterSpacing: 4,
                color: 'rgba(255,255,255,0.55)',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: 8,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                style={{ width: 6, height: 6, borderRadius: '50%', background: '#CF4500' }}
              />
              REC · Loading reel
            </div>
            <div style={{ fontSize: 22, fontWeight: 500, color: '#fff', letterSpacing: '-0.02em' }}>
              SHUTTR<span style={{ color: 'var(--signal-light)' }}>TROOPS</span>
            </div>
          </motion.div>

          {/* Top corner crosshair marks — like camera viewfinder */}
          {[
            { top: 24, left: 24, rot: 0 },
            { top: 24, right: 24, rot: 90 },
            { bottom: 24, right: 24, rot: 180 },
            { bottom: 24, left: 24, rot: 270 },
          ].map((c, i) => (
            <motion.div
              key={i}
              animate={phase === 'open' ? { opacity: 0 } : { opacity: 0.5 }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'absolute',
                top: c.top,
                left: c.left,
                right: c.right,
                bottom: c.bottom,
                width: 28,
                height: 28,
                transform: `rotate(${c.rot}deg)`,
                pointerEvents: 'none',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: 14, height: 1.5, background: 'rgba(255,255,255,0.55)' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: 1.5, height: 14, background: 'rgba(255,255,255,0.55)' }} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
