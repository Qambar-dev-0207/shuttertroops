import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'How long does a typical edit take?',
    a: 'Social cutdowns: 48–72 hours. Brand films: 7–14 days from first selects review to final master, depending on rounds and complexity. Color and sound finishing are baked into every quote.',
  },
  {
    q: 'How is pricing structured?',
    a: 'Per-cut, not per-hour. We quote up-front based on length, complexity and deliverables — no metered editing, no surprise change-order invoices. Two rounds of revisions are standard; additional rounds are flat-fee.',
  },
  {
    q: 'Do you shoot or only edit?',
    a: 'Both. Production is one of our three pillars — we run our own crew, lighting and DOP. But many clients hand us footage from another shoot; we cut, color and finish it like it was ours from frame one.',
  },
  {
    q: 'What software do you cut on?',
    a: 'Premiere Pro and DaVinci Resolve for the edit, DaVinci for grade, Pro Tools and Logic for sound, After Effects for motion. We deliver in any spec — ProRes, H.264, broadcast-safe, platform-native.',
  },
  {
    q: 'Can you handle social cutdowns from a hero film?',
    a: 'Yes. That\'s most of our content-creation work. One hero shoot, six platform-native cuts: 9:16, 1:1, 16:9, with hooks tuned per platform. Captions, SFX and motion-typed titles included.',
  },
  {
    q: 'Where are you based?',
    a: 'Lucknow, Uttar Pradesh — but we cut for brands across India and the Gulf. Footage transfer, review cycles and finishing are all handled remotely; you talk directly to the editor on your project.',
  },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section style={{ padding: '96px 0', background: 'var(--canvas)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
          <div>
            <span className="eyebrow">Common questions</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1, fontWeight: 500, letterSpacing: '-0.02em' }}>
              Quick<br /><span style={{ color: 'var(--signal)' }}>answers.</span>
            </h2>
          </div>
          <p style={{ maxWidth: 360, color: 'var(--slate)', fontSize: '1rem', lineHeight: 1.5 }}>
            What clients ask before signing. Anything missing? Send a brief and we'll answer in person.
          </p>
        </div>

        <div style={{ display: 'grid', gap: 12 }}>
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                layout
                style={{
                  background: 'var(--lifted)',
                  borderRadius: 28,
                  border: '1px solid rgba(20,20,19,0.06)',
                  overflow: 'hidden',
                }}
              >
                <motion.button
                  layout
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 0,
                    padding: '24px 28px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 16,
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: 'var(--ink)',
                    fontFamily: 'inherit',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 16,
                      fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
                      fontWeight: 500,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: 0.4,
                        color: 'var(--slate)',
                        background: 'var(--canvas)',
                        padding: '4px 10px',
                        borderRadius: 999,
                      }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    {item.q}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: isOpen ? 'var(--ink)' : 'var(--canvas)',
                      color: isOpen ? 'var(--canvas)' : 'var(--ink)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'background 0.3s, color 0.3s',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </motion.span>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 28px 24px 76px', color: 'var(--charcoal)', fontSize: 16, lineHeight: 1.6, fontWeight: 450 }}>
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
