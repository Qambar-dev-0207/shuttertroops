import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Work', path: '/portfolio' },
  { name: 'Services', path: '/services' },
  { name: 'Studio', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 120 && latest > lastY) setHidden(true);
    else setHidden(false);
    setLastY(latest);
  });

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  return (
    <motion.header
      variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: '-150%', opacity: 0 } }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 20,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <nav
        style={{
          pointerEvents: 'auto',
          background: 'rgba(252, 251, 250, 0.92)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderRadius: 999,
          boxShadow: '0 4px 24px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(20,20,19,0.06)',
          padding: '12px 14px 12px 28px',
          display: 'flex',
          alignItems: 'center',
          gap: '2.5rem',
          maxWidth: 'calc(100% - 32px)',
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: '1.15rem',
            fontWeight: 700,
            color: 'var(--ink)',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
            <circle cx="8" cy="11" r="7" fill="#CF4500" opacity="0.95" />
            <circle cx="14" cy="11" r="7" fill="#F37338" opacity="0.85" style={{ mixBlendMode: 'multiply' }} />
          </svg>
          ShuttrTroops
        </Link>

        <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="pill-link"
              style={({ isActive }) => ({
                fontSize: 16,
                fontWeight: 500,
                letterSpacing: '-0.32px',
                color: isActive ? 'var(--signal)' : 'var(--ink)',
                textDecoration: 'none',
              })}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            aria-label="Search"
            className="desktop-only"
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'transparent',
              border: '1px solid rgba(20,20,19,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--ink)',
              cursor: 'pointer',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3-3" strokeLinecap="round" />
            </svg>
          </button>

          <Link
            to="/contact"
            className="btn-ink desktop-only"
            style={{ padding: '10px 20px', fontSize: 15 }}
          >
            Start Project
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M0 5h12M9 1l3 4-3 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <button
            className="mobile-only"
            onClick={toggleMenu}
            aria-label="Menu"
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'var(--ink)',
              color: 'var(--canvas)',
              border: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ width: 16, height: 1.5, background: 'var(--canvas)' }} />
              <span style={{ width: 16, height: 1.5, background: 'var(--canvas)' }} />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 90,
              left: 16,
              right: 16,
              background: 'var(--lifted)',
              borderRadius: 32,
              padding: '2rem 1.5rem',
              boxShadow: '0 24px 48px rgba(0,0,0,0.12)',
              zIndex: 1001,
              pointerEvents: 'auto',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={toggleMenu}
                  style={{
                    fontSize: '2rem',
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    textDecoration: 'none',
                    color: 'var(--ink)',
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="btn-ink"
                style={{ marginTop: '1.5rem', justifyContent: 'center' }}
              >
                Start Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 769px) { .mobile-only { display: none !important; } }
        @media (max-width: 768px) { .desktop-only { display: none !important; } }
      `}</style>
    </motion.header>
  );
};

export default Navbar;
