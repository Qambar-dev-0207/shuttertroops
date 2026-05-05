import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import VideoCard from '../VideoCard';

const showcaseVideos = [
  { title: "Midnight City",  category: "BRAND FILM",    url: "https://assets.mixkit.co/videos/preview/mixkit-city-traffic-at-night-from-above-4444-large.mp4" },
  { title: "Oceanic Bliss",  category: "COMMERCIAL",    url: "https://assets.mixkit.co/videos/preview/mixkit-waves-coming-to-the-shore-line-at-a-beach-4462-large.mp4" },
  { title: "Mountain Peak",  category: "DOCUMENTARY",   url: "https://assets.mixkit.co/videos/preview/mixkit-thick-forest-under-a-clear-sky-4547-large.mp4" },
  { title: "Urban Pulse",    category: "DIGITAL AD",    url: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4" },
];

const gridClasses = ['vc-grid-0', 'vc-grid-1', 'vc-grid-2', 'vc-grid-3'];

const Showcase = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="showcase-section">
      <div className="container">

        {/* Header */}
        <motion.div
          ref={ref}
          className="showcase-header"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-num">02 / FEATURED WORK</span>
          <h2 className="showcase-title">
            Weapons of <em>Attention.</em>
          </h2>
          <p className="showcase-sub">Hover to enter focus mode.</p>
        </motion.div>

        {/* Asymmetric editorial grid */}
        <div className="video-card-grid">
          {showcaseVideos.map((video, idx) => (
            <motion.div
              key={idx}
              className={gridClasses[idx]}
              initial={{ opacity: 0, y: 55 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.12 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <VideoCard
                title={video.title}
                category={video.category}
                videoUrl={video.url}
                index={idx}
              />
            </motion.div>
          ))}
        </div>

        {/* Footer link */}
        <motion.div
          className="showcase-footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          <Link to="/portfolio" className="showcase-all-link">
            <span>ALL PROJECTS</span>
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
              <path d="M0 5H18M14 1L18 5L14 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Showcase;
