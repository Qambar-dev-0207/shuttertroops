const awards = [
  { y: '2024', t: 'Kyoorius Creative Awards', n: 'Brand Film · Shortlist' },
  { y: '2024', t: 'Vega Digital Awards', n: 'Editing · Gold' },
  { y: '2023', t: 'Indian Marketing Awards', n: 'Campaign of the Year · Silver' },
  { y: '2023', t: 'Telly Awards', n: 'Documentary · Bronze' },
  { y: '2022', t: 'Webby Honoree', n: 'Online Film · Branded Content' },
];

const Awards = () => {
  return (
    <section style={{ padding: '80px 0', background: 'var(--lifted)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div>
            <span className="eyebrow">Recognitions</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.05, fontWeight: 500, letterSpacing: '-0.02em' }}>
              Trophies on<br />the shelf.
            </h2>
          </div>
          <span style={{ fontSize: 14, color: 'var(--slate)', maxWidth: 280, lineHeight: 1.5 }}>
            Twelve entries since 2022 — five made the cut.
          </span>
        </div>

        <div style={{ display: 'grid', gap: 10 }}>
          {awards.map((a) => (
            <div
              key={a.t + a.y}
              style={{
                background: 'var(--canvas)',
                borderRadius: 999,
                padding: '14px 22px',
                display: 'flex',
                alignItems: 'center',
                gap: 18,
                border: '1px solid rgba(20,20,19,0.06)',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(243,115,56,0.4)';
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(20,20,19,0.06)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <span
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'var(--ink)',
                  color: 'var(--canvas)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '-0.32px',
                  flexShrink: 0,
                }}
              >
                {a.y}
              </span>
              <span style={{ fontSize: 15, fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--ink)' }}>{a.t}</span>
              <span
                style={{
                  marginLeft: 'auto',
                  fontSize: 12,
                  letterSpacing: 0.4,
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: 'var(--signal)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--signal-light)' }} />
                {a.n}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
