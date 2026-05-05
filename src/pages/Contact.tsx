import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const Contact = () => {
  return (
    <PageTransition>
      <div style={{ paddingTop: 'var(--nav-height)' }}>
        {/* Header Section */}
        <section className="bg-white">
          <div className="container">
            <motion.span 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="section-num">GET IN TOUCH</motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              className="hero-title">
              Let's build your <br />
              <span style={{ fontStyle: 'italic', color: 'var(--red)' }}>Legacy</span> together.
            </motion.h1>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="bg-grey" style={{ padding: '0 0 120px' }}>
          <div className="container">
            <div className="grid-2" style={{ gap: '6rem' }}>
              {/* Contact Form */}
              <div style={{ background: 'var(--white)', padding: '5rem', border: '1px solid var(--grey-mid)' }}>
                <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Start a Conversation</h2>
                <form style={{ display: 'grid', gap: '2rem' }}>
                  <div style={{ display: 'grid', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.7rem', letterSpacing: '0.1rem', fontWeight: 700, textTransform: 'uppercase' }}>Full Name</label>
                    <input type="text" style={{ padding: '1rem', border: 'none', borderBottom: '1px solid var(--grey-mid)', fontSize: '1rem', outline: 'none' }} placeholder="John Doe" />
                  </div>
                  <div style={{ display: 'grid', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.7rem', letterSpacing: '0.1rem', fontWeight: 700, textTransform: 'uppercase' }}>Email Address</label>
                    <input type="email" style={{ padding: '1rem', border: 'none', borderBottom: '1px solid var(--grey-mid)', fontSize: '1rem', outline: 'none' }} placeholder="john@company.com" />
                  </div>
                  <div style={{ display: 'grid', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.7rem', letterSpacing: '0.1rem', fontWeight: 700, textTransform: 'uppercase' }}>Service Needed</label>
                    <select style={{ padding: '1rem', border: 'none', borderBottom: '1px solid var(--grey-mid)', fontSize: '1rem', outline: 'none', background: 'transparent' }}>
                      <option>Brand Film</option>
                      <option>Digital Campaign</option>
                      <option>Creative Strategy</option>
                      <option>Full Scale Production</option>
                    </select>
                  </div>
                  <div style={{ display: 'grid', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.7rem', letterSpacing: '0.1rem', fontWeight: 700, textTransform: 'uppercase' }}>Project Brief</label>
                    <textarea rows={4} style={{ padding: '1rem', border: 'none', borderBottom: '1px solid var(--grey-mid)', fontSize: '1rem', outline: 'none', resize: 'none' }} placeholder="Tell us about your vision..."></textarea>
                  </div>
                  <button type="submit" className="btn-minimal btn-red" style={{ marginTop: '2rem' }}>Send Message</button>
                </form>
              </div>

              {/* Contact Info & Locations */}
              <div>
                <div style={{ marginBottom: '5rem' }}>
                  <span className="section-num">GENERAL INQUIRIES</span>
                  <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>hello@shuttrtroops.com</p>
                  <p style={{ fontSize: '1.2rem', color: '#666' }}>+91 98765 43210</p>
                </div>

                <div style={{ display: 'grid', gap: '4rem' }}>
                  <div>
                    <span className="section-num">LUCKNOW STUDIO</span>
                    <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: 1.6 }}>
                      Gomti Nagar, Ground Floor <br />
                      Riverside Mall Area <br />
                      Lucknow, UP 226010
                    </p>
                  </div>
                  <div>
                    <span className="section-num">DUBAI OFFICE</span>
                    <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: 1.6 }}>
                      Level 14, Boulevard Plaza <br />
                      Tower 1, Business Bay <br />
                      Dubai, UAE
                    </p>
                  </div>
                  <div>
                    <span className="section-num">SOCIALS</span>
                    <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
                      <a href="#" className="luxury-link">Instagram</a>
                      <a href="#" className="luxury-link">LinkedIn</a>
                      <a href="#" className="luxury-link">Youtube</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder - BLACK */}
        <section className="bg-black" style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span className="section-num" style={{ color: '#333', fontSize: '2rem' }}>INTERACTIVE GLOBAL MAP</span>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
