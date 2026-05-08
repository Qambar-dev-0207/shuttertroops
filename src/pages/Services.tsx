import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const services = [
  {
    num: '01',
    title: 'Production',
    body: 'Cinematic brand films and product shoots — concept, set, lighting and capture handled by our in-house crew.',
    media: 'https://assets.mixkit.co/videos/preview/mixkit-camera-man-recording-a-fashion-model-32877-large.mp4',
    bullets: ['Brand films', 'Product shoots', 'Director of photography', 'Studio + location'],
  },
  {
    num: '02',
    title: 'Content Creation',
    body: 'Reels, static creatives and scroll-stopping content engineered for conversion — built to win the first three seconds.',
    media: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-person-editing-a-video-on-a-laptop-44819-large.mp4',
    bullets: ['Reels & shorts', 'Static creatives', 'Hook-led copy', 'Platform-native cuts'],
  },
  {
    num: '03',
    title: 'Digital Marketing',
    body: 'Strategic brand building and growth — influencer campaigns, paid social and digital strategies that compound.',
    media: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-talking-with-a-male-friend-via-video-call-on-a-laptop-43821-large.mp4',
    bullets: ['Influencer campaigns', 'Paid social', 'Brand positioning', 'Growth strategy'],
  },
  {
    num: '04',
    title: 'Brand Storytelling',
    body: 'Long-form narrative work that earns memory — the films and series that turn customers into believers.',
    media: 'https://assets.mixkit.co/videos/preview/mixkit-traveler-walking-towards-a-frozen-lake-in-the-mountains-with-his-32814-large.mp4',
    bullets: ['Brand documentaries', 'Founder films', 'Origin stories', 'Series & episodics'],
  },
];

const Services = () => {
  return (
    <PageTransition>
      <div style={{ paddingTop: 'var(--nav-height)', background: 'var(--canvas)' }}>
        {/* Header */}
        <section style={{ paddingBottom: 32 }}>
          <div className="container">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eyebrow">
              What we do
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
              Production. Content.<br />
              <span style={{ color: 'var(--signal)' }}>Digital.</span>
            </motion.h1>
            <p style={{ marginTop: '2rem', maxWidth: 540, fontSize: 17, color: 'var(--charcoal)', lineHeight: 1.55, fontWeight: 450 }}>
              Three pillars, one studio. Every brand we touch leaves with a sharper story, a stronger visual system and content engineered to convert — not just to look pretty.
            </p>
          </div>
        </section>

        {/* Service rows — circular portrait + body */}
        <section style={{ padding: '32px 0 96px' }}>
          <div className="container" style={{ display: 'grid', gap: '6rem' }}>
            {services.map((s, idx) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: idx % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
                  gap: '4rem',
                  alignItems: 'center',
                  position: 'relative',
                }}
                className="service-row"
              >
                <div
                  style={{
                    order: idx % 2 === 0 ? 0 : 1,
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <div className="portrait-wrap" style={{ width: '100%', maxWidth: 360 }}>
                    <div className="portrait" style={{ width: '100%', aspectRatio: '1 / 1' }}>
                      <video src={s.media} autoPlay muted loop playsInline />
                    </div>
                    <div className="satellite" aria-hidden>
                      <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                        <path d="M0 7h17M14 1l5 6-5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="eyebrow">{s.num} · Lane</span>
                  <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.02, marginBottom: '1rem' }}>
                    {s.title}
                  </h2>
                  <p style={{ color: 'var(--charcoal)', fontSize: 17, lineHeight: 1.55, maxWidth: 460, marginBottom: '1.5rem', fontWeight: 450 }}>
                    {s.body}
                  </p>
                  <ul style={{ listStyle: 'none', display: 'grid', gap: '0.6rem', marginBottom: '1.75rem' }}>
                    {s.bullets.map((b, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: 15,
                          color: 'var(--ink)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 10,
                        }}
                      >
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--signal-light)' }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-ink">
                    Brief this lane
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                      <path d="M0 5h12M9 1l3 4-3 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}

            <style>{`
              @media (max-width: 1024px) {
                .service-row { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
                .service-row > div:first-child { order: 0 !important; }
              }
            `}</style>
          </div>
        </section>

        {/* Why card — ink black stadium */}
        <section style={{ padding: '0 0 96px' }}>
          <div className="container">
            <div
              style={{
                background: 'var(--ink)',
                color: 'var(--canvas)',
                borderRadius: 40,
                padding: '4rem',
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '4rem',
              }}
              className="why-grid"
            >
              <div>
                <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>Why ShuttrTroops</span>
                <h2 style={{ color: 'var(--canvas)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
                  The edit room<br /><span style={{ color: 'var(--signal-light)' }}>is the studio.</span>
                </h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }} className="why-cards">
                {[
                  { t: 'Editor on call', b: 'You talk to the cutter. No account managers, no broken telephone.' },
                  { t: 'In-house finishing', b: 'Color, sound, motion all under one roof. One render, one timeline.' },
                  { t: 'Per-cut pricing', b: 'Quoted up-front per deliverable. No hourly creep.' },
                  { t: '48-hour turnarounds', b: 'On social cutdowns, you get drafts the next day, not the next week.' },
                ].map((c, i) => (
                  <div key={i}>
                    <h4 style={{ color: 'var(--canvas)', fontSize: 17, marginBottom: 8, fontWeight: 500, letterSpacing: '-0.02em' }}>{c.t}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.55, fontSize: 14, fontWeight: 450 }}>{c.b}</p>
                  </div>
                ))}
              </div>
            </div>

            <style>{`
              @media (max-width: 1024px) {
                .why-grid { grid-template-columns: 1fr !important; padding: 2.5rem !important; }
                .why-cards { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
              }
            `}</style>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Services;
