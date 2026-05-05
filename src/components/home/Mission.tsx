import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MagneticButton from '../MagneticButton';

const Mission = () => {
  return (
    <section className="bg-grey grainy">
      <div className="container grid-2">
        <div>
          <span className="section-num">03 / THE PRACTICE</span>
          <h2 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '2.5rem', lineHeight: 0.9 }}>
            Where <span style={{ fontStyle: 'italic' }}>Art</span> Meets <br />
            Digital <span style={{ color: 'var(--red)' }}>Science.</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: '2.5rem', lineHeight: 1.8 }}>
            For over a decade, we've been the silent engine behind some of the most compelling brand stories. Our approach is bespoke, treating every project as a unique piece of art backed by rigorous strategic planning.
          </p>
          <MagneticButton>
            <Link to="/about" className="luxury-link">Explore Heritage</Link>
          </MagneticButton>
        </div>
        <div style={{ aspectRatio: '16/10', background: 'var(--black)', position: 'relative', overflow: 'hidden' }}>
           <motion.img 
             initial={{ scale: 1.2 }}
             whileInView={{ scale: 1 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
             src="/src/assets/hero.png" 
             alt="Hero" 
             style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} 
           />
           <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', color: 'white' }}>
             <span className="section-num" style={{ marginBottom: '0.5rem' }}>LATEST WORK</span>
             <h3 className="serif" style={{ fontSize: '2rem' }}>The Art of Motion</h3>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
