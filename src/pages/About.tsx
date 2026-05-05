import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const About = () => {
  return (
    <PageTransition>
      <div style={{ paddingTop: 'var(--nav-height)' }}>
        {/* Header Section */}
        <section className="bg-white">
          <div className="container">
            <motion.span 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="section-num">01 / OUR HERITAGE</motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              className="hero-title">
              We believe in the power of <br />
              <span style={{ fontStyle: 'italic', color: 'var(--red)' }}>Cinematic Intelligence.</span>
            </motion.h1>
            <div className="grid-2" style={{ marginTop: '4rem' }}>
              <p style={{ fontSize: '1.25rem', lineHeight: 1.6, color: '#444' }}>
                ShuttrTroops was founded on a simple premise: that the most powerful weapon in the digital age is attention. Not just any attention, but the kind that is earned through beauty, truth, and strategy.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#666' }}>
                Our collective of artists, strategists, and technologists work in unison to elevate brands from common to extraordinary. We don't just produce content; we engineer impact.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy Section - BLACK */}
        <section className="bg-black grainy">
          <div className="container grid-2">
            <div style={{ height: '500px', background: '#111' }}>
               <img src="/src/assets/hero.png" alt="Philosophy" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
            </div>
            <div>
              <span className="section-num">02 / PHILOSOPHY</span>
              <h2 style={{ fontSize: '4rem', color: 'white', marginBottom: '2rem' }}>Bespoke by Design. <br />Global by <span style={{ color: 'var(--red)' }}>Impact.</span></h2>
              <div style={{ display: 'grid', gap: '3rem' }}>
                <div>
                  <h4 style={{ color: 'var(--red)', fontSize: '1.5rem', marginBottom: '1rem' }}>Artistry First</h4>
                  <p style={{ color: '#888', lineHeight: 1.6 }}>We treat every frame as a canvas, ensuring the visual language of your brand is unmistakable and premium.</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--red)', fontSize: '1.5rem', marginBottom: '1rem' }}>Strategic Core</h4>
                  <p style={{ color: '#888', lineHeight: 1.6 }}>Beauty without strategy is noise. Our work is built on deep market insights and psychological triggers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership / Team Section */}
        <section className="bg-white">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
              <span className="section-num">03 / LEADERSHIP</span>
              <h2 style={{ fontSize: '4rem' }}>The Architects of <span style={{ fontStyle: 'italic' }}>Attention</span></h2>
            </div>
            
            <div className="grid-3">
              <div>
                <div style={{ aspectRatio: '3/4', background: 'var(--grey-light)', marginBottom: '2rem' }}></div>
                <h4 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Arsalan Khan</h4>
                <span className="section-num" style={{ fontSize: '1rem' }}>Founder & Creative Director</span>
                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>Expert in cinematic brand narratives and visual strategy.</p>
              </div>
              <div>
                <div style={{ aspectRatio: '3/4', background: 'var(--grey-light)', marginBottom: '2rem' }}></div>
                <h4 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Sarah Ahmed</h4>
                <span className="section-num" style={{ fontSize: '1rem' }}>Head of Production</span>
                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>Specializing in large-scale global campaigns and storytelling.</p>
              </div>
              <div>
                <div style={{ aspectRatio: '3/4', background: 'var(--grey-light)', marginBottom: '2rem' }}></div>
                <h4 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>John Doe</h4>
                <span className="section-num" style={{ fontSize: '1rem' }}>Digital Strategy Lead</span>
                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>Focused on conversion optimization and brand positioning.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
