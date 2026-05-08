import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const team = [
  {
    name: 'Arsalan Khan',
    role: 'Founder & Lead Editor',
    body: 'A decade of timelines. Built the studio around the cut, not the camera.',
    media: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-person-editing-a-video-on-a-laptop-44819-large.mp4',
  },
  {
    name: 'Sarah Ahmed',
    role: 'Head of Production',
    body: 'Runs sets, schedules, and finishing — keeps every frame on time.',
    media: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-talking-with-a-male-friend-via-video-call-on-a-laptop-43821-large.mp4',
  },
  {
    name: 'John Doe',
    role: 'Color & Sound',
    body: 'DaVinci grade and surround mix. Every master leaves through this room.',
    media: 'https://assets.mixkit.co/videos/preview/mixkit-young-mixed-race-woman-sketching-on-a-tablet-near-a-window-44648-large.mp4',
  },
];

const About = () => {
  return (
    <PageTransition>
      <div style={{ paddingTop: 'var(--nav-height)', background: 'var(--canvas)' }}>
        {/* Hero */}
        <section style={{ paddingBottom: 32 }}>
          <div className="container">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eyebrow">
              The studio · Lucknow
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
              We build <span style={{ color: 'var(--signal)' }}>brand</span><br />
              narratives.
            </motion.h1>

            <div className="grid-2" style={{ marginTop: '4rem', alignItems: 'flex-start', gap: '4rem' }}>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.55, color: 'var(--ink)', fontWeight: 450 }}>
                ShuttrTroops was founded to merge creativity with strategy — to build meaningful brands that inspire and create impact. Storytelling, emotional connection, and the kind of attention that earns memory.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--charcoal)', fontWeight: 450 }}>
                We don't just press record. We press impact. Every frame is crafted like a weapon of attention, built to cut through digital noise and turn viewers into believers. Every pixel perfected, every story sharpened.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy — circular video portrait + ghost watermark */}
        <section style={{ padding: '64px 0 96px', position: 'relative', overflow: 'hidden' }}>
          <div
            className="ghost-headline"
            style={{
              position: 'absolute',
              top: 60,
              left: '-3%',
              right: 0,
              fontSize: 'clamp(7rem, 18vw, 14rem)',
              whiteSpace: 'nowrap',
              zIndex: 0,
            }}
          >
            craft over scale
          </div>

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
              <div className="portrait-wrap" style={{ margin: '0 auto', width: '100%', maxWidth: 460 }}>
                <div className="portrait" style={{ width: '100%', aspectRatio: '1 / 1' }}>
                  <video
                    src="https://assets.mixkit.co/videos/preview/mixkit-camera-man-recording-a-fashion-model-32877-large.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <a href="#team" className="satellite" aria-label="Meet the team">
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                    <path d="M0 7h17M14 1l5 6-5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              <div>
                <span className="eyebrow">Philosophy</span>
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: '2rem' }}>
                  Boutique by choice.<br />
                  <span style={{ color: 'var(--signal)' }}>Cinematic by craft.</span>
                </h2>

                <div style={{ display: 'grid', gap: '2rem' }}>
                  <div>
                    <h4 style={{ fontSize: 17, marginBottom: 8, fontWeight: 500, letterSpacing: '-0.02em' }}>Cut first, sell second</h4>
                    <p style={{ color: 'var(--slate)', lineHeight: 1.6, fontSize: 15, fontWeight: 450 }}>
                      We never approve a deck before the rough cut works. Strategy follows the timeline, not the other way around.
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: 17, marginBottom: 8, fontWeight: 500, letterSpacing: '-0.02em' }}>Same hands, every stage</h4>
                    <p style={{ color: 'var(--slate)', lineHeight: 1.6, fontSize: 15, fontWeight: 450 }}>
                      The editor who cuts your film is the same one who reviews the color and signs off the mix.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team — circular portraits constellation */}
        <section id="team" style={{ padding: '64px 0 96px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="eyebrow">The crew</span>
              <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.02 }}>
                Three editors.<br />
                <span style={{ color: 'var(--signal)' }}>One timeline.</span>
              </h2>
            </div>

            <div className="grid-3" style={{ position: 'relative', gap: '3rem' }}>
              <svg
                className="orbital-arc"
                viewBox="0 0 1200 280"
                preserveAspectRatio="none"
                style={{ position: 'absolute', top: 80, left: 0, width: '100%', height: 160, zIndex: 0 }}
                aria-hidden
              >
                <path d="M180,140 C 320,30 480,30 600,140" stroke="currentColor" strokeWidth="1.3" fill="none" />
                <path d="M600,140 C 720,250 880,250 1020,140" stroke="currentColor" strokeWidth="1.3" fill="none" />
              </svg>

              {team.map((m, idx) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ textAlign: 'center', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  <div className="portrait-wrap" style={{ marginBottom: '1.75rem' }}>
                    <div className="portrait" style={{ width: 240, height: 240, transform: idx === 1 ? 'translateY(20px)' : 'none' }}>
                      <video src={m.media} autoPlay muted loop playsInline />
                    </div>
                  </div>
                  <h4 style={{ fontSize: '1.6rem', marginBottom: 4, fontWeight: 500, letterSpacing: '-0.02em' }}>{m.name}</h4>
                  <span className="eyebrow" style={{ marginBottom: '0.85rem' }}>{m.role}</span>
                  <p style={{ fontSize: 14, color: 'var(--slate)', maxWidth: 260, lineHeight: 1.55, fontWeight: 450 }}>{m.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
