import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const Portfolio = () => {
  const projects = [
    { title: "The Urban Pulse", category: "Brand Film", year: "2024" },
    { title: "Neon Nights", category: "Digital Campaign", year: "2023" },
    { title: "Velocity", category: "Commercial", year: "2024" },
    { title: "Ethereal States", category: "Short Film", year: "2023" },
    { title: "Cyber Silk", category: "Product Shoot", year: "2024" },
    { title: "Monolith", category: "Documentary", year: "2022" },
  ];

  return (
    <PageTransition>
      <div style={{ paddingTop: 'var(--nav-height)' }}>
        {/* Header Section */}
        <section className="bg-white">
          <div className="container">
            <motion.span 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="section-num">SELECTED WORKS</motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              className="hero-title">
              The Art of <span style={{ fontStyle: 'italic', color: 'var(--red)' }}>Impact.</span>
            </motion.h1>
            <p className="sub-title">
              A curated selection of our most impactful collaborations across industries and continents.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="bg-white" style={{ padding: '0 0 120px' }}>
          <div className="container">
            <div className="grid-2" style={{ gap: '2rem' }}>
              {projects.map((project, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  style={{ cursor: 'pointer', marginBottom: '4rem' }}
                >
                  <div style={{ height: '600px', background: 'var(--grey-light)', marginBottom: '1.5rem', overflow: 'hidden' }}>
                    <div style={{ width: '100%', height: '100%', background: idx % 2 === 0 ? 'var(--black)' : 'var(--grey-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.8rem', letterSpacing: '0.2rem' }}>
                      [ {project.title.toUpperCase()} ]
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                      <span className="section-num" style={{ fontSize: '0.7rem', margin: 0 }}>{project.category}</span>
                    </div>
                    <span style={{ fontSize: '0.9rem', color: '#999', fontWeight: 600 }}>{project.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Collaboration CTA - BLACK */}
        <section className="bg-black">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: '3.5rem', marginBottom: '3rem', color: 'white' }}>
              Have a project that <br />needs <span style={{ color: 'var(--red)' }}>attention?</span>
            </h2>
            <button className="btn-minimal btn-red">Let's Collaborate</button>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Portfolio;
