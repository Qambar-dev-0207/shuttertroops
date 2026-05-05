import { Link } from 'react-router-dom';
import MagneticButton from '../MagneticButton';

const FinalCTA = () => {
  return (
    <section style={{ padding: '12rem 0', textAlign: 'center' }}>
      <div className="container">
        <h2 className="serif" style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', marginBottom: '3rem', lineHeight: 0.85, color: 'var(--white)'}}>Ready to redefine your <br /><span style={{ fontStyle: 'italic', color: 'var(--red)' }}>visual identity?</span></h2>
        <MagneticButton>
          <Link to="/contact" className="btn-minimal btn-red" style={{ padding: '1.5rem 4rem', fontSize: '1rem' }}>Get Started Today</Link>
        </MagneticButton>
      </div>
    </section>
  );
};

export default FinalCTA;
