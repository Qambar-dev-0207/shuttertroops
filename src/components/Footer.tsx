import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ padding: '120px 0 60px', borderTop: '1px solid var(--grey-mid)', background: 'var(--white)' }}>
      <div className="container">
        <div className="grid-4" style={{ marginBottom: '100px', gap: '4rem' }}>
          <div style={{ gridColumn: 'span 2' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 700, display: 'block', marginBottom: '2rem' }}>
              SHUTTR<span style={{ color: 'var(--red)' }}>TROOPS</span>
            </span>
            <p style={{ color: '#666', lineHeight: 1.8, maxWidth: '400px', fontSize: '1rem' }}>
              We are a boutique creative agency dedicated to crafting premium visual narratives that command attention and drive meaningful impact for world-class brands.
            </p>
          </div>
          
          <div>
            <span className="section-num">LOCATIONS</span>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '1.5rem' }}>
              <li>
                <strong style={{ display: 'block', fontSize: '0.8rem', letterSpacing: '0.1rem', marginBottom: '0.25rem' }}>LUCKNOW</strong>
                <span style={{ fontSize: '0.9rem', color: '#666' }}>Gomti Nagar, UP 226010</span>
              </li>
              <li>
                <strong style={{ display: 'block', fontSize: '0.8rem', letterSpacing: '0.1rem', marginBottom: '0.25rem' }}>DUBAI</strong>
                <span style={{ fontSize: '0.9rem', color: '#666' }}>Business Bay, PO 12345</span>
              </li>
            </ul>
          </div>
          
          <div>
            <span className="section-num">RESOURCES</span>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem' }}>
              <li><Link to="/services" className="luxury-link">Services</Link></li>
              <li><Link to="/portfolio" className="luxury-link">Portfolio</Link></li>
              <li><Link to="/about" className="luxury-link">Our Story</Link></li>
              <li><Link to="/contact" className="luxury-link">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '40px', borderTop: '1px solid var(--grey-mid)' }}>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" className="luxury-link" style={{ fontSize: '0.65rem' }}>Instagram</a>
            <a href="#" className="luxury-link" style={{ fontSize: '0.65rem' }}>LinkedIn</a>
            <a href="#" className="luxury-link" style={{ fontSize: '0.65rem' }}>Youtube</a>
          </div>
          <span style={{ fontSize: '0.65rem', color: '#999', letterSpacing: '0.1rem' }}>
            © 2024 SHUTTRTROOPS — ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
