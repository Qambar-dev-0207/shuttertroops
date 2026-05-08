import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import VideoCard from '../VideoCard';
import Spotlight from '../Spotlight';
import VideoLightbox, { type LightboxVideo } from '../VideoLightbox';

const showcaseVideos: LightboxVideo[] = [
  {
    title: 'Cinematic Brand Film',
    category: 'Production',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-camera-man-recording-a-fashion-model-32877-large.mp4',
    description: 'A premium fashion brand film. 90-second narrative cut, color graded in DaVinci Resolve, sound designed in-house.',
  },
  {
    title: 'Product Story Edit',
    category: 'Content',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-talking-with-a-male-friend-via-video-call-on-a-laptop-43821-large.mp4',
    description: 'Founder-led product reveal. 30-second hook + extended cuts for paid social.',
  },
  {
    title: 'Reels That Convert',
    category: 'Social',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4',
    description: '9:16 native edit, three-second hook, motion-typography titles, retention to 92%.',
  },
  {
    title: 'Influencer Campaign',
    category: 'Digital',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-waves-coming-to-the-shore-line-at-a-beach-4462-large.mp4',
    description: 'Multi-creator activation. Cross-platform deliverables, unified visual system across 12 cuts.',
  },
];

const gridClasses = ['vc-grid-0', 'vc-grid-1', 'vc-grid-2', 'vc-grid-3'];

const Showcase = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState<LightboxVideo | null>(null);

  return (
    <section className="showcase-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="showcase-header"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="eyebrow">Weapons of attention</span>
            <h2 className="showcase-title">
              Every frame, a<br /><em>weapon.</em>
            </h2>
          </div>
          <p className="showcase-sub">
            Hover across the grid — spotlight follows you. Click any tile to watch the full cut.
          </p>
        </motion.div>

        <Spotlight radius={320} tint="rgba(243, 240, 238, 0.82)">
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
                  onOpen={() => setActive(video)}
                />
              </motion.div>
            ))}
          </div>
        </Spotlight>

        <motion.div
          className="showcase-footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          <Link to="/portfolio" className="btn-ink">
            See all work
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M0 5h12M9 1l3 4-3 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>

      <VideoLightbox video={active} onClose={() => setActive(null)} />
    </section>
  );
};

export default Showcase;
