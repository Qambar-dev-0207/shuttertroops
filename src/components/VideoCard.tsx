import { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useUIStore } from '../store/useUIStore';

interface VideoCardProps {
  title: string;
  category: string;
  videoUrl: string;
  index: number;
  onOpen?: () => void;
}

const VideoCard = ({ title, category, videoUrl, index, onOpen }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { setCursorType, setFocusActive } = useUIStore();
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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
      onClick={onOpen}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      style={{ cursor: onOpen ? 'pointer' : undefined }}
    >
      <motion.video
        ref={videoRef}
        src={videoUrl}
        muted
        loop
        playsInline
        className="video-card-video"
        animate={{ scale: isHovered ? 1.06 : 1.02 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ filter: isHovered ? 'brightness(1.05)' : 'brightness(0.92)' }}
      />

      <motion.div
        className="video-card-overlay"
        animate={{ opacity: isHovered ? 0.55 : 0.85 }}
        transition={{ duration: 0.6 }}
      />

      <motion.div
        className="video-card-glare"
        style={{ left: glareLeft, top: glareTop }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      <motion.span
        className="video-card-index"
        animate={{ opacity: isHovered ? 0.85 : 0.5 }}
        transition={{ duration: 0.4 }}
      >
        {padded}
      </motion.span>

      <div className="video-card-content">
        <div className="video-card-text">
          <span className="video-card-category">{category}</span>
          <h4 className="video-card-title">{title}</h4>
        </div>

        <div className="video-card-satellite" aria-label="Watch project">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M8 5v14l11-7L8 5z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;
