import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 22,
    mass: 0.4,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: '0% 50%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: 'linear-gradient(90deg, var(--signal) 0%, var(--signal-light) 100%)',
        zIndex: 9998,
        pointerEvents: 'none',
        boxShadow: '0 1px 8px rgba(243, 115, 56, 0.4)',
      }}
    />
  );
};

export default ScrollProgress;
