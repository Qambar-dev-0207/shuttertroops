import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useUIStore } from '../store/useUIStore';

interface VideoCardProps {
  title: string;
  category: string;
  videoUrl: string;
}

const VideoCard = ({ title, category, videoUrl }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { setCursorType, setFocusActive } = useUIStore();
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 25 });

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

  return (
    <motion.div 
      ref={cardRef}
      className={`video-card grainy ${isHovered ? 'focused' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ 
        perspective: 1000, 
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
        scale: isHovered ? 1.05 : 1,
        zIndex: isHovered ? 10 : 1,
        filter: isHovered ? 'brightness(1.2) contrast(1.1)' : 'brightness(0.9)',
        boxShadow: isHovered ? '0 20px 50px rgba(208, 0, 0, 0.2)' : 'none',
      }}
    >
      <video 
        ref={videoRef}
        src={videoUrl}
        muted
        loop
        playsInline
        className="w-full h-full object-cover translate-z-[20px]"
      />
      <div className="video-card-content translate-z-[60px]">
        <span className="text-brand-red font-mono text-[0.7rem] tracking-[0.2em] uppercase mb-2 block">{category}</span>
        <h4 className="text-2xl md:text-3xl font-serif text-white shadow-black drop-shadow-2xl">{title}</h4>
      </div>
    </motion.div>
  );
};

export default VideoCard;
