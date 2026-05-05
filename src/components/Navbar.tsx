import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100 && latest > lastY) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastY(latest);
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Our Story', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        zIndex: 1000, 
        background: 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(10px)', 
        borderBottom: '1px solid var(--grey-mid)' 
      }}
    >
      <nav style={{ padding: '0.75rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo - Stays visible */}
          <Link to="/" style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--black)', textDecoration: 'none', fontFamily: 'var(--heading-font)' }}>
            SHUTTR<span style={{ color: 'var(--red)' }}>TROOPS</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="desktop-only" style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="luxury-link">{link.name}</Link>
            ))}
            <Link to="/contact" className="btn-minimal" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>Start Project</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="mobile-only" onClick={toggleMenu} style={{ cursor: 'pointer', zIndex: 1001, padding: '10px' }}>
            <div style={{ width: '25px', height: '2px', background: 'var(--black)', marginBottom: isMenuOpen ? '0' : '6px', transform: isMenuOpen ? 'rotate(45deg) translateY(1px)' : 'none', transition: '0.3s' }} />
            <div style={{ width: '25px', height: '2px', background: 'var(--black)', display: isMenuOpen ? 'none' : 'block', marginBottom: '6px', transition: '0.3s' }} />
            <div style={{ width: '25px', height: '2px', background: 'var(--black)', transform: isMenuOpen ? 'rotate(-45deg) translateY(-1px)' : 'none', transition: '0.3s' }} />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '80%',
              height: '100vh',
              background: 'var(--white)',
              zIndex: 1000,
              padding: '100px 2rem',
              boxShadow: '-10px 0 30px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={toggleMenu}
                  style={{ fontSize: '2.5rem', textDecoration: 'none', color: 'var(--black)', fontFamily: 'var(--heading-font)' }}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={toggleMenu} className="btn-minimal" style={{ textAlign: 'center', marginTop: '2rem' }}>Start Project</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 769px) {
          .mobile-only { display: none; }
        }
        @media (max-width: 768px) {
          .desktop-only { display: none; }
        }
      `}</style>
    </motion.header>
  );
};

export default Navbar;
