import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section style={{ padding: '8rem 0 10rem', textAlign: 'center', background: 'var(--canvas)', position: 'relative', overflow: 'hidden' }}>
      <div
        className="ghost-headline"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(8rem, 22vw, 22rem)',
          whiteSpace: 'nowrap',
          zIndex: 0,
        }}
      >
        send footage
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span className="eyebrow" style={{ marginBottom: '2rem' }}>Ready when you are</span>
        <h2
          style={{
            fontSize: 'clamp(3rem, 9vw, 7rem)',
            marginBottom: '3rem',
            lineHeight: 0.98,
            fontWeight: 500,
            letterSpacing: '-0.02em',
          }}
        >
          You bring the footage.<br />
          <span style={{ color: 'var(--signal)' }}>We bring the story.</span>
        </h2>
        <div style={{ display: 'inline-flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/contact" className="btn-ink" style={{ padding: '16px 32px', fontSize: 16 }}>
            Brief the studio
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M0 5h12M9 1l3 4-3 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link to="/portfolio" className="btn-outline" style={{ padding: '16px 32px', fontSize: 16 }}>
            Watch reel first
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
