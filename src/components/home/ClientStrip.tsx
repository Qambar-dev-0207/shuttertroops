const clients = [
  'Aether',
  'Lumière',
  'Stratus',
  'Nordhaus',
  'Voltaic',
  'Halcyon',
  'Meridian',
  'Onyx',
  'Stellaris',
  'Kindred',
];

const ClientStrip = () => {
  return (
    <section
      style={{
        padding: '64px 0',
        background: 'var(--canvas)',
        borderTop: '1px solid rgba(20,20,19,0.06)',
        borderBottom: '1px solid rgba(20,20,19,0.06)',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <span className="eyebrow" style={{ marginBottom: 0 }}>Trusted by</span>
          <span style={{ fontSize: 14, color: 'var(--slate)' }}>120+ brands · 18 countries</span>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '4rem',
          whiteSpace: 'nowrap',
          animation: 'client-marquee 38s linear infinite',
          willChange: 'transform',
        }}
      >
        {[...clients, ...clients, ...clients].map((c, i) => (
          <span
            key={i}
            style={{
              fontSize: '2.5rem',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              color: 'var(--slate)',
              fontFamily: 'Sofia Sans, sans-serif',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4rem',
            }}
          >
            {c}
            <span
              aria-hidden
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--signal-light)',
                opacity: 0.5,
              }}
            />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes client-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
};

export default ClientStrip;
