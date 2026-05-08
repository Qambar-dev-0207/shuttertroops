import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 18px',
  background: 'var(--canvas)',
  border: '1px solid rgba(20,20,19,0.15)',
  borderRadius: 999,
  fontSize: 15,
  outline: 'none',
  color: 'var(--ink)',
  fontFamily: 'inherit',
  fontWeight: 450,
};

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  borderRadius: 24,
  resize: 'none',
};

const labelStyle: React.CSSProperties = {
  fontSize: 13,
  letterSpacing: 0.5,
  fontWeight: 700,
  textTransform: 'uppercase',
  color: 'var(--slate)',
  marginBottom: 8,
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
};

const Contact = () => {
  return (
    <PageTransition>
      <div style={{ paddingTop: 'var(--nav-height)', background: 'var(--canvas)' }}>
        {/* Header */}
        <section style={{ paddingBottom: 32 }}>
          <div className="container">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eyebrow">
              Brief the studio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                fontSize: 'clamp(3rem, 9vw, 7rem)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                lineHeight: 0.98,
                maxWidth: '14ch',
              }}
            >
              Send us the<br /><span style={{ color: 'var(--signal)' }}>footage.</span>
            </motion.h1>
          </div>
        </section>

        {/* Contact Grid */}
        <section style={{ padding: '32px 0 96px' }}>
          <div className="container">
            <div className="grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
              {/* Form card — lifted cream */}
              <div
                style={{
                  background: 'var(--lifted)',
                  padding: '3rem',
                  borderRadius: 40,
                  border: '1px solid rgba(20,20,19,0.06)',
                }}
              >
                <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', fontWeight: 500, letterSpacing: '-0.02em' }}>
                  Project intake
                </h2>
                <form style={{ display: 'grid', gap: '1.5rem' }}>
                  <div>
                    <label style={labelStyle}><span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--signal-light)' }} /> Full name</label>
                    <input type="text" style={inputStyle} placeholder="Your name" />
                  </div>
                  <div>
                    <label style={labelStyle}><span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--signal-light)' }} /> Email</label>
                    <input type="email" style={inputStyle} placeholder="you@brand.com" />
                  </div>
                  <div>
                    <label style={labelStyle}><span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--signal-light)' }} /> Service lane</label>
                    <select style={inputStyle}>
                      <option>Brand film</option>
                      <option>Commercial / TVC edit</option>
                      <option>Social cutdowns</option>
                      <option>Color & sound finishing</option>
                      <option>Full production + post</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}><span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--signal-light)' }} /> Brief</label>
                    <textarea
                      rows={5}
                      style={textareaStyle}
                      placeholder="Footage source, deadline, deliverables, references…"
                    />
                  </div>
                  <button type="submit" className="btn-ink" style={{ marginTop: '0.5rem', justifyContent: 'center' }}>
                    Send brief
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                      <path d="M0 5h12M9 1l3 4-3 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </form>
              </div>

              {/* Info column */}
              <div>
                <div style={{ marginBottom: '4rem' }}>
                  <span className="eyebrow">Direct line</span>
                  <p style={{ fontSize: '1.6rem', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 8 }}>
                    <a href="tel:+916392914668" style={{ color: 'var(--ink)', textDecoration: 'none' }}>
                      +91 6392 914 668
                    </a>
                  </p>
                  <p style={{ fontSize: '1rem', color: 'var(--slate)' }}>Talk to the studio directly.</p>
                </div>

                <div style={{ display: 'grid', gap: '2rem' }}>
                  <div
                    style={{
                      background: 'var(--lifted)',
                      borderRadius: 40,
                      padding: '2rem',
                      border: '1px solid rgba(20,20,19,0.06)',
                    }}
                  >
                    <span className="eyebrow">ShuttrTroops studio</span>
                    <p style={{ fontSize: 15, color: 'var(--ink)', lineHeight: 1.6, fontWeight: 450 }}>
                      Dubagga, Lucknow<br />
                      Uttar Pradesh — 226101<br />
                      India
                    </p>
                  </div>

                  <div>
                    <span className="eyebrow">Socials</span>
                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.75rem' }}>
                      {['Instagram', 'LinkedIn', 'YouTube'].map((s) => (
                        <a
                          key={s}
                          href="#"
                          style={{
                            border: '1px solid rgba(20,20,19,0.15)',
                            borderRadius: 999,
                            padding: '8px 18px',
                            fontSize: 14,
                            textDecoration: 'none',
                            color: 'var(--ink)',
                            fontWeight: 500,
                          }}
                        >
                          {s}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map placeholder — ink stadium */}
        <section style={{ padding: '0 0 96px' }}>
          <div className="container">
            <div
              style={{
                background: 'var(--ink)',
                color: 'var(--canvas)',
                borderRadius: 40,
                height: 360,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                className="ghost-headline"
                style={{
                  position: 'absolute',
                  fontSize: 'clamp(4rem, 12vw, 9rem)',
                  color: 'rgba(255,255,255,0.06)',
                  whiteSpace: 'nowrap',
                }}
              >
                find the studio
              </div>
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.6)', position: 'relative', zIndex: 1 }}>
                Interactive global map · soon
              </span>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
