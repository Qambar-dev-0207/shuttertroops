const tools = [
  { name: 'Premiere Pro',     stage: 'Edit',     glyph: 'Pr' },
  { name: 'DaVinci Resolve',  stage: 'Color',    glyph: 'Da' },
  { name: 'After Effects',    stage: 'Motion',   glyph: 'Ae' },
  { name: 'Pro Tools',        stage: 'Sound',    glyph: 'Pt' },
  { name: 'Photoshop',        stage: 'Stills',   glyph: 'Ps' },
  { name: 'Cinema 4D',        stage: '3D',       glyph: 'C4' },
  { name: 'Frame.io',         stage: 'Review',   glyph: 'F.' },
];

const Toolbelt = () => {
  return (
    <section style={{ padding: '64px 0', background: 'var(--canvas)', borderTop: '1px solid rgba(20,20,19,0.06)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
          <span className="eyebrow" style={{ marginBottom: 0 }}>Stack · Studio toolbelt</span>
          <span style={{ fontSize: 14, color: 'var(--slate)', letterSpacing: '-0.32px' }}>
            Industry-standard NLE, color, finishing — owned and licensed.
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '0.75rem',
          }}
          className="toolbelt-grid"
        >
          {tools.map((t) => (
            <div
              key={t.name}
              style={{
                background: 'var(--lifted)',
                border: '1px solid rgba(20,20,19,0.06)',
                borderRadius: 28,
                padding: '1.25rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 10,
                textAlign: 'center',
                transition: 'transform 0.3s, border-color 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(243,115,56,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(20,20,19,0.06)';
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: 'var(--ink)',
                  color: 'var(--canvas)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: 16,
                  letterSpacing: '-0.02em',
                }}
              >
                {t.glyph}
              </div>
              <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--ink)' }}>{t.name}</div>
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: 0.5,
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: 'var(--slate)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--signal-light)' }} />
                {t.stage}
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 1024px) { .toolbelt-grid { grid-template-columns: repeat(4, 1fr) !important; } }
          @media (max-width: 600px)  { .toolbelt-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        `}</style>
      </div>
    </section>
  );
};

export default Toolbelt;
