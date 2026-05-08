import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useUIStore } from '../store/useUIStore';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const { cursorType } = useUIStore();

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const label = labelRef.current;
    if (!cursor || !follower || !label) return;

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.18, ease: 'power3' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.18, ease: 'power3' });
    const fxTo = gsap.quickTo(follower, 'x', { duration: 0.55, ease: 'power3' });
    const fyTo = gsap.quickTo(follower, 'y', { duration: 0.55, ease: 'power3' });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      fxTo(e.clientX);
      fyTo(e.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const label = labelRef.current;
    if (!cursor || !follower || !label) return;

    if (cursorType === 'video') {
      gsap.to(follower, {
        width: 96,
        height: 96,
        backgroundColor: '#FFFFFF',
        border: 'none',
        duration: 0.4,
        ease: 'back.out(1.7)',
      });
      gsap.to(cursor, { opacity: 0, duration: 0.2 });
      gsap.to(label, { opacity: 1, scale: 1, duration: 0.3 });
    } else if (cursorType === 'link') {
      gsap.to(follower, {
        scale: 2.2,
        backgroundColor: 'rgba(20,20,19,0.06)',
        border: '1px solid var(--ink)',
        duration: 0.3,
      });
      gsap.to(cursor, { scale: 1.5, duration: 0.2 });
    } else {
      gsap.to(follower, {
        width: 36,
        height: 36,
        scale: 1,
        backgroundColor: 'transparent',
        border: '1px solid var(--ink)',
        duration: 0.3,
      });
      gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.2 });
      gsap.to(label, { opacity: 0, scale: 0, duration: 0.2 });
    }
  }, [cursorType]);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          background: 'var(--ink)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        ref={followerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          border: '1px solid var(--ink)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          color: 'var(--ink)',
        }}
      >
        <span
          ref={labelRef}
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1.4,
            opacity: 0,
            transform: 'scale(0)',
            textTransform: 'uppercase',
          }}
        >
          Play
        </span>
      </div>
    </>
  );
};

export default CustomCursor;
