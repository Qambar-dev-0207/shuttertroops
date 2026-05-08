import { Link } from 'react-router-dom';

const colHeaderStyle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: 0.6,
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.55)',
  marginBottom: '1.5rem',
  display: 'block',
};

const linkStyle: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 450,
  color: '#fff',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
};

const Footer = () => {
  return (
    <footer
      style={{
        background: 'var(--ink)',
        color: '#fff',
        padding: '96px 0 56px',
        marginTop: 0,
      }}
    >
      <div className="container">
        {/* Conversational headline */}
        <h2
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 4.4rem)',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: 1.02,
            color: '#fff',
            maxWidth: 18 + 'ch',
            marginBottom: '4.5rem',
          }}
        >
          Got footage that<br />deserves a better cut?
        </h2>

        {/* 4-col grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255,255,255,0.18)',
          }}
          className="footer-grid"
        >
          <div>
            <span style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff', display: 'inline-flex', alignItems: 'center', gap: 8, letterSpacing: '-0.02em' }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                <circle cx="8" cy="11" r="7" fill="#CF4500" />
                <circle cx="14" cy="11" r="7" fill="#F37338" style={{ mixBlendMode: 'screen' }} />
              </svg>
              ShuttrTroops
            </span>
            <p style={{ marginTop: '1.5rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.55, fontSize: 15, maxWidth: 320, fontWeight: 450 }}>
              We don't just create content. We build brand narratives — every frame crafted like a weapon of attention.
            </p>
          </div>

          <div>
            <span style={colHeaderStyle}>Studio</span>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '0.85rem' }}>
              <li><Link to="/about" style={linkStyle}>About</Link></li>
              <li><Link to="/portfolio" style={linkStyle}>Work</Link></li>
              <li><Link to="/services" style={linkStyle}>Services</Link></li>
              <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <span style={colHeaderStyle}>Get in touch</span>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '0.85rem' }}>
              <li><a href="tel:+916392914668" style={linkStyle}>+91 6392 914 668</a></li>
              <li><Link to="/contact" style={linkStyle}>Send a brief ↗</Link></li>
              <li><Link to="/portfolio" style={linkStyle}>Watch the reel ↗</Link></li>
            </ul>
          </div>

          <div>
            <span style={colHeaderStyle}>Studio</span>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem' }}>
              <li>
                <strong style={{ display: 'block', fontSize: 13, letterSpacing: 0.4, marginBottom: 4, fontWeight: 700 }}>Lucknow</strong>
                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)' }}>
                  Dubagga, Lucknow<br />
                  UP 226101
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '2rem',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', letterSpacing: 0.3 }}>
            © 2026 ShuttrTroops · Frame by frame.
          </span>

          {/* Pill country/lang selector */}
          <button
            style={{
              background: 'transparent',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.4)',
              borderRadius: 999,
              padding: '8px 16px',
              fontSize: 13,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              cursor: 'pointer',
              fontWeight: 500,
            }}
          >
            🌐 India · EN
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <a href="#" aria-label="Instagram" style={{ color: '#fff' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
            </a>
            <a href="#" aria-label="LinkedIn" style={{ color: '#fff' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h4v16H4zM6 2.5A2.5 2.5 0 1 1 6 7.5a2.5 2.5 0 0 1 0-5zM10 8h4v2.2c.6-1 2-2.4 4.4-2.4 4 0 4.6 2.6 4.6 6V20h-4v-5.4c0-1.6-.4-3-2.2-3s-2.4 1.4-2.4 3V20h-4z" /></svg>
            </a>
            <a href="#" aria-label="YouTube" style={{ color: '#fff' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2c-.3-1-1-1.8-2-2.1C19 4.6 12 4.6 12 4.6s-7 0-9 .5c-1 .3-1.7 1.1-2 2.1C.5 9.2.5 12 .5 12s0 2.8.5 4.8c.3 1 1 1.8 2 2.1 2 .5 9 .5 9 .5s7 0 9-.5c1-.3 1.7-1.1 2-2.1.5-2 .5-4.8.5-4.8s0-2.8-.5-4.8zM9.8 15.6V8.4l6 3.6-6 3.6z" /></svg>
            </a>
            <a href="#" aria-label="X" style={{ color: '#fff' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.5 8.6L23 22h-7l-5.5-7-6.3 7H1l8-9.1L1 2h7.2l5 6.5L18.9 2z" /></svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
