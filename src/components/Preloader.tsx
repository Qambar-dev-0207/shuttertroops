import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpening(true);
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 1000); // Wait for the iris reveal to finish
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const blades = Array.from({ length: 10 });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--black)',
            zIndex: 99999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Central Shutter Mechanism */}
          <div style={{ position: 'relative', width: '200px', height: '200px' }}>
            {/* Shutter Blades */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: '50%', border: '2px solid #222' }}>
              {blades.map((_, i) => (
                <motion.div
                  key={i}
                  animate={isOpening ? { 
                    rotate: (i * 36) + 60,
                    x: 100,
                    y: -100,
                    opacity: 0
                  } : { 
                    rotate: i * 36,
                    x: 0,
                    y: 0,
                    opacity: 1
                  }}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '150%',
                    height: '150%',
                    background: '#0a0a0a',
                    transformOrigin: '0% 0%',
                    clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                    border: '1px solid #1a1a1a',
                    zIndex: 10 - i,
                  }}
                />
              ))}
            </div>

            {/* Inner "Glass" Lens Effect */}
            <motion.div 
              animate={isOpening ? { scale: 10, opacity: 0 } : { scale: 1, opacity: 1 }}
              style={{
                position: 'absolute',
                inset: '10px',
                background: 'radial-gradient(circle at 30% 30%, #222, #000)',
                borderRadius: '50%',
                zIndex: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div style={{ width: '40px', height: '40px', border: '1px solid #333', borderRadius: '50%', opacity: 0.5 }} />
            </motion.div>
          </div>

          {/* Reveal Overlay - This expands to show the site */}
          <motion.div
            initial={{ clipPath: 'circle(0% at 50% 50%)' }}
            animate={isOpening ? { 
              clipPath: 'circle(150% at 50% 50%)' 
            } : { 
              clipPath: 'circle(0% at 50% 50%)' 
            }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'var(--white)', // Reveals the base site color
              zIndex: -1,
            }}
          />

          <motion.div
            animate={isOpening ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            style={{
              position: 'absolute',
              bottom: '10%',
              textAlign: 'center',
              color: 'white',
              letterSpacing: '0.5rem',
              fontSize: '0.7rem'
            }}
          >
            SHUTTR<span style={{ color: 'var(--red)' }}>TROOPS</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
