import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface LightboxVideo {
  title: string;
  category: string;
  url: string;
  description?: string;
}

interface Props {
  video: LightboxVideo | null;
  onClose: () => void;
}

const VideoLightbox = ({ video, onClose }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };
    if (video) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [video]);

  useEffect(() => {
    setPlaying(true);
    setProgress(0);
  }, [video]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const onTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress((v.currentTime / v.duration) * 100);
  };

  const onScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    v.currentTime = pct * v.duration;
  };

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(20, 20, 19, 0.92)',
            backdropFilter: 'blur(8px)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5vh 4vw',
          }}
        >
          <motion.div
            initial={{ scale: 0.94, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.94, y: 20, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 1280,
              borderRadius: 40,
              overflow: 'hidden',
              background: '#000',
              boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
            }}
          >
            <video
              ref={videoRef}
              src={video.url}
              autoPlay
              loop
              playsInline
              onTimeUpdate={onTimeUpdate}
              style={{ width: '100%', display: 'block', aspectRatio: '16 / 9', objectFit: 'cover', background: '#000' }}
            />

            {/* Top bar — title + close */}
            <div
              style={{
                position: 'absolute',
                top: 24,
                left: 24,
                right: 24,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: 16,
                pointerEvents: 'none',
              }}
            >
              <div style={{ pointerEvents: 'auto' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'rgba(255,255,255,0.92)',
                    color: 'var(--ink)',
                    padding: '6px 14px',
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 0.5,
                    textTransform: 'uppercase',
                    marginBottom: 8,
                  }}
                >
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--signal-light)' }} />
                  {video.category}
                </span>
                <h3
                  style={{
                    color: '#fff',
                    fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    margin: 0,
                    textShadow: '0 2px 12px rgba(0,0,0,0.5)',
                    maxWidth: '70%',
                  }}
                >
                  {video.title}
                </h3>
              </div>

              <button
                aria-label="Close"
                onClick={onClose}
                style={{
                  pointerEvents: 'auto',
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: '#fff',
                  border: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--ink)',
                  cursor: 'pointer',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.25)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Description */}
            {video.description && (
              <div
                style={{
                  position: 'absolute',
                  bottom: 80,
                  left: 24,
                  maxWidth: 520,
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: 14,
                  lineHeight: 1.55,
                  textShadow: '0 2px 12px rgba(0,0,0,0.6)',
                }}
              >
                {video.description}
              </div>
            )}

            {/* Bottom controls */}
            <div
              style={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                right: 16,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <button
                onClick={togglePlay}
                aria-label={playing ? 'Pause' : 'Play'}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: '#fff',
                  border: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--ink)',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                {playing ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="5" width="4" height="14" rx="1" />
                    <rect x="14" y="5" width="4" height="14" rx="1" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                )}
              </button>

              <div
                onClick={onScrub}
                style={{
                  flex: 1,
                  height: 4,
                  background: 'rgba(255,255,255,0.25)',
                  borderRadius: 999,
                  cursor: 'pointer',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${progress}%`,
                    background: 'var(--signal-light)',
                    borderRadius: 999,
                    transition: 'width 0.1s linear',
                  }}
                />
              </div>

              <button
                onClick={toggleMute}
                aria-label={muted ? 'Unmute' : 'Mute'}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                {muted ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 5L6 9H2v6h4l5 4V5z" strokeLinejoin="round" />
                    <path d="M22 9l-6 6M16 9l6 6" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 5L6 9H2v6h4l5 4V5z" strokeLinejoin="round" />
                    <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14" strokeLinecap="round" />
                  </svg>
                )}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoLightbox;
