import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: 'Starter',
    tag: 'Single cut',
    price: '₹45k',
    unit: '/ deliverable',
    body: 'One short-form cut with finishing. Perfect for product reveals, founder reels, single launches.',
    bullets: ['1 hero edit, 30–60s', 'Color grade + sound mix', '2 rounds of revisions', '9:16 + 1:1 + 16:9 cutdowns', '5-day turnaround'],
    cta: 'Brief a starter',
    feature: false,
  },
  {
    name: 'Studio',
    tag: 'Most picked',
    price: '₹1.8L',
    unit: '/ campaign',
    body: 'Full campaign across formats. The package most brands run their quarter on.',
    bullets: ['1 hero film, 60–120s', '6 platform cutdowns', 'Color, sound, motion in-house', '3 rounds of revisions', '14-day turnaround', 'Frame.io review board'],
    cta: 'Book a studio',
    feature: true,
  },
  {
    name: 'Custom',
    tag: 'Brand-of-record',
    price: 'Quoted',
    unit: '· retainer or one-off',
    body: 'For brands that want our crew on call — production + post + content engine, monthly.',
    bullets: ['Dedicated editor', 'Production days included', 'Quarterly creative reviews', 'Unlimited revisions in scope', 'Strategy + analytics layer'],
    cta: 'Talk to founder',
    feature: false,
  },
];

const Pricing = () => {
  return (
    <section style={{ padding: '96px 0', background: 'var(--canvas)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem' }}>
          <div>
            <span className="eyebrow">Engagement</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1, fontWeight: 500, letterSpacing: '-0.02em' }}>
              Three ways<br /><span style={{ color: 'var(--signal)' }}>to work with us.</span>
            </h2>
          </div>
          <p style={{ maxWidth: 380, color: 'var(--slate)', fontSize: '1rem', lineHeight: 1.5 }}>
            Per-cut, per-campaign or full retainer. All include color grade and sound finishing — no add-on invoices for finishing.
          </p>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', alignItems: 'stretch' }}
          className="pricing-grid"
        >
          {tiers.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: t.feature ? 'var(--ink)' : 'var(--lifted)',
                color: t.feature ? 'var(--canvas)' : 'var(--ink)',
                borderRadius: 40,
                padding: '2.5rem',
                border: t.feature ? 'none' : '1px solid rgba(20,20,19,0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                position: 'relative',
                boxShadow: t.feature ? '0 30px 60px rgba(20,20,19,0.18)' : 'none',
                transform: t.feature ? 'scale(1.02)' : 'none',
              }}
            >
              {t.feature && (
                <span
                  style={{
                    position: 'absolute',
                    top: 18,
                    right: 18,
                    background: 'var(--signal-light)',
                    color: 'var(--ink)',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: 0.6,
                    textTransform: 'uppercase',
                    padding: '5px 12px',
                    borderRadius: 999,
                  }}
                >
                  ★ Most picked
                </span>
              )}

              <div>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 0.6,
                    textTransform: 'uppercase',
                    color: t.feature ? 'rgba(255,255,255,0.6)' : 'var(--slate)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--signal-light)' }} />
                  {t.tag}
                </span>
                <h3 style={{ fontSize: '2rem', fontWeight: 500, letterSpacing: '-0.02em', marginTop: 8 }}>{t.name}</h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span style={{ fontSize: '3rem', fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1 }}>
                  {t.price}
                </span>
                <span style={{ fontSize: 14, color: t.feature ? 'rgba(255,255,255,0.55)' : 'var(--slate)', fontWeight: 450 }}>
                  {t.unit}
                </span>
              </div>

              <p style={{ fontSize: 14, lineHeight: 1.55, color: t.feature ? 'rgba(255,255,255,0.7)' : 'var(--slate)', fontWeight: 450 }}>
                {t.body}
              </p>

              <ul style={{ listStyle: 'none', display: 'grid', gap: 10, padding: 0, margin: 0 }}>
                {t.bullets.map((b, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, lineHeight: 1.45, fontWeight: 450 }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 4 }}>
                      <circle cx="7" cy="7" r="6.5" stroke={t.feature ? '#F37338' : '#141413'} strokeWidth="1" opacity={0.3} />
                      <path d="M4 7l2 2 4-4" stroke={t.feature ? '#F37338' : '#141413'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={t.feature ? 'btn-outline' : 'btn-ink'}
                style={
                  t.feature
                    ? { background: 'var(--canvas)', color: 'var(--ink)', borderColor: 'var(--canvas)', marginTop: 'auto', justifyContent: 'center' }
                    : { marginTop: 'auto', justifyContent: 'center' }
                }
              >
                {t.cta}
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M0 5h12M9 1l3 4-3 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <p
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            fontSize: 13,
            color: 'var(--slate)',
            letterSpacing: 0.3,
          }}
        >
          GST extra · Quotes valid 30 days · Rush turnarounds available
        </p>

        <style>{`
          @media (max-width: 1024px) {
            .pricing-grid { grid-template-columns: 1fr !important; }
            .pricing-grid > div { transform: none !important; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Pricing;
