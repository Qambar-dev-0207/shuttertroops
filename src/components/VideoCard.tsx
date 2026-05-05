import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useUIStore } from '../store/useUIStore';

interface VideoCardProps {
  title: string;
  category: string;
  videoUrl: string;
  index: number;
}

const VideoCard = ({ title, category, videoUrl, index }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { setCursorType, setFocusActive } = useUIStore();
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 30 });

  const glareLeft = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
  const glareTop  = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCursorType('video');
    setFocusActive(true);
    if (videoRef.current) videoRef.current.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCursorType('default');
    setFocusActive(false);
    mouseX.set(0);
    mouseY.set(0);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const padded = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      ref={cardRef}
      className={`video-card ${isHovered ? 'focused' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        perspective: 1200,
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
        zIndex: isHovered ? 10 : 1,
      }}
    >
      {/* Video layer */}
      <motion.video
        ref={videoRef}
        src={videoUrl}
        muted
        loop
        playsInline
        className="video-card-video"
        animate={{ scale: isHovered ? 1.08 : 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ filter: isHovered ? 'grayscale(0%) brightness(1.05)' : 'grayscale(30%) brightness(0.85)' }}
      />

      {/* Dark gradient overlay */}
      <motion.div
        className="video-card-overlay"
        animate={{ opacity: isHovered ? 0.45 : 0.72 }}
        transition={{ duration: 0.6 }}
      />

      {/* Mouse-tracking glare */}
      <motion.div
        className="video-card-glare"
        style={{ left: glareLeft, top: glareTop }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Left accent bar — grows from bottom */}
      <motion.div
        className="video-card-accent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Top border — grows from left */}
      <motion.div
        className="video-card-top-bar"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Index number */}
      <motion.span
        className="video-card-index"
        animate={{ opacity: isHovered ? 0.14 : 0.05 }}
        transition={{ duration: 0.4 }}
      >
        {padded}
      </motion.span>

      {/* CRT scanlines — appear on hover */}
      <motion.div
        className="video-card-scanline"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="video-card-content">
        <motion.span
          className="video-card-category"
          animate={{ opacity: isHovered ? 1 : 0.5, y: isHovered ? 0 : 6 }}
          transition={{ duration: 0.35 }}
        >
          {category}
        </motion.span>

        <motion.h4
          className="video-card-title"
          animate={{ y: isHovered ? -4 : 2 }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          {title}
        </motion.h4>

        <motion.div
          className="video-card-cta"
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 14 }}
          transition={{ duration: 0.35, delay: 0.09 }}
        >
          <span>WATCH PROJECT</span>
          <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
            <path d="M0 4H14M11 1L14 4L11 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VideoCard;
