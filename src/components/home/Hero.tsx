import { motion, MotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import MagneticButton from '../MagneticButton';
import TextScramble from '../TextScramble';

interface HeroProps {
  heroRef: React.RefObject<HTMLDivElement | null>;
  heroY: MotionValue<string>;
  heroOpacity: MotionValue<number>;
}

const Hero = ({ heroRef, heroY, heroOpacity }: HeroProps) => {
  return (
    <section ref={heroRef} className="bg-white" style={{ overflow: 'hidden', paddingBottom: '40px' }}>
      <motion.div className="container" style={{ textAlign: 'center', y: heroY, opacity: heroOpacity }}>
        <motion.span 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="section-num">01 / BRAND EVOLUTION</motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', lineHeight: 0.85, marginBottom: '2rem' }}
          className="serif">
          Crafting <span style={{ fontStyle: 'italic', color: 'var(--red)' }}><TextScramble text="Exceptional" /></span><br /> 
          Digital Narratives.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="sub-title" style={{ margin: '0 auto 3rem', fontSize: '1.2rem', lineHeight: 1.6 }}>
          ShuttrTroops is a premium creative studio specialized in high-impact brand films and digital storytelling. We merge cinematic artistry with conversion-focused strategy.
        </motion.p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <MagneticButton>
            <Link to="/contact" className="btn-minimal btn-red">Start Your Project</Link>
          </MagneticButton>
          <MagneticButton>
            <Link to="/portfolio" className="btn-minimal">View Showreel</Link>
          </MagneticButton>
        </div>

        <div className="pill-grid">
          <div className="pill-item grainy">
            <h3 style={{ fontSize: '2.5rem' }}>Esthetic</h3>
            <p>Visual storytelling that captures the essence of luxury and precision.</p>
          </div>
          <div className="pill-item grainy">
            <h3 style={{ fontSize: '2.5rem' }}>Strategic</h3>
            <p>Data-driven narratives designed to convert attention into action.</p>
          </div>
          <div className="pill-item grainy">
            <h3 style={{ fontSize: '2.5rem' }}>Cinematic</h3>
            <p>High-end production quality that elevates your brand to world-class status.</p>
          </div>
          <div className="pill-item grainy">
            <h3 style={{ fontSize: '2.5rem' }}>Impactful</h3>
            <p>Content that doesn't just scroll—it resonates and lingers.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
