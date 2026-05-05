import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const Services = () => {
  const servicePillars = [
    {
      title: "Production",
      services: [
        "Brand Films",
        "Commercial Shoots",
        "Product Cinematography",
        "Influencer Campaigns"
      ],
      num: "01"
    },
    {
      title: "Digital",
      services: [
        "Social Media Assets",
        "Short-form Content",
        "Digital Strategy",
        "Brand Positioning"
      ],
      num: "02"
    },
    {
      title: "Creative",
      services: [
        "Scriptwriting",
        "Concept Development",
        "Visual Identity",
        "Storyboarding"
      ],
      num: "03"
    },
    {
      title: "Impact",
      services: [
        "Conversion Optimization",
        "Asset Management",
        "Content Distribution",
        "Performance Analysis"
      ],
      num: "04"
    }
  ];

  return (
    <PageTransition>
      <div style={{ paddingTop: 'var(--nav-height)' }}>
        {/* Header Section */}
        <section className="bg-white">
          <div className="container">
            <motion.span 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="section-num">OUR SOLUTIONS</motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              className="hero-title">
              World-Class <span style={{ fontStyle: 'italic', color: 'var(--red)' }}>Capabilities.</span>
            </motion.h1>
            <p className="sub-title">
              We provide a comprehensive suite of creative services designed to elevate your brand's presence across all digital touchpoints.
            </p>
          </div>
        </section>

        {/* Services Grid - PILLARS */}
        <section className="bg-grey" style={{ padding: '0 0 120px' }}>
          <div className="container">
            <div className="grid-2" style={{ gap: '0', border: '1px solid var(--grey-mid)' }}>
              {servicePillars.map((pillar, idx) => (
                <div key={idx} style={{ 
                  padding: '5rem', 
                  borderRight: idx % 2 === 0 ? '1px solid var(--grey-mid)' : 'none',
                  borderBottom: idx < 2 ? '1px solid var(--grey-mid)' : 'none',
                  background: 'var(--white)'
                }}>
                  <span className="section-num" style={{ fontSize: '2rem', marginBottom: '2rem' }}>{pillar.num}</span>
                  <h3 className="serif" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>{pillar.title}</h3>
                  <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem' }}>
                    {pillar.services.map((service, sIdx) => (
                      <li key={sIdx} style={{ fontSize: '1.1rem', color: '#666', borderBottom: '1px solid var(--grey-light)', paddingBottom: '0.5rem' }}>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - BLACK */}
        <section className="bg-black">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
              <div>
                <span className="section-num">WHY SHUTTRTROOPS</span>
                <h2 style={{ fontSize: '3rem', color: 'white' }}>The <span style={{ color: 'var(--red)' }}>Edge</span> You Need.</h2>
              </div>
              <div className="grid-2" style={{ gap: '4rem' }}>
                <div>
                  <h4 style={{ color: 'white', marginBottom: '1rem', textTransform: 'uppercase' }}>Rapid Delivery</h4>
                  <p style={{ color: '#888' }}>Our optimized workflow ensures high-quality assets are delivered within tight timelines without compromising artistry.</p>
                </div>
                <div>
                  <h4 style={{ color: 'white', marginBottom: '1rem', textTransform: 'uppercase' }}>Global Network</h4>
                  <p style={{ color: '#888' }}>With teams in 3 major cities, we have the reach and local insights to scale your brand globally.</p>
                </div>
                <div>
                  <h4 style={{ color: 'white', marginBottom: '1rem', textTransform: 'uppercase' }}>Modern Tech</h4>
                  <p style={{ color: '#888' }}>Utilizing the latest in AI-enhanced production and 8K cinematic equipment for future-proof results.</p>
                </div>
                <div>
                  <h4 style={{ color: 'white', marginBottom: '1rem', textTransform: 'uppercase' }}>Proven ROI</h4>
                  <p style={{ color: '#888' }}>Our films are not just beautiful; they are engineered to drive measurable engagement and sales growth.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Services;
