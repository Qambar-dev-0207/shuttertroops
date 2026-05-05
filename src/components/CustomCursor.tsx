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

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });
    const fxTo = gsap.quickTo(follower, "x", { duration: 0.6, ease: "power3" });
    const fyTo = gsap.quickTo(follower, "y", { duration: 0.6, ease: "power3" });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      fxTo(e.clientX);
      fyTo(e.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const label = labelRef.current;

    if (!cursor || !follower || !label) return;

    if (cursorType === 'video') {
      gsap.to(follower, { 
        width: 100, height: 100, backgroundColor: 'var(--red)', border: 'none',
        duration: 0.4, ease: "back.out(1.7)"
      });
      gsap.to(cursor, { opacity: 0, duration: 0.2 });
      gsap.to(label, { opacity: 1, scale: 1, duration: 0.3 });
    } else if (cursorType === 'link') {
      gsap.to(follower, { 
        scale: 2.5, backgroundColor: 'rgba(208, 0, 0, 0.1)', border: '1px solid var(--red)',
        duration: 0.3 
      });
      gsap.to(cursor, { scale: 1.5, duration: 0.2 });
    } else {
      gsap.to(follower, { 
        width: 40, height: 40, scale: 1, backgroundColor: 'transparent', border: '1px solid var(--red)',
        duration: 0.3 
      });
      gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.2 });
      gsap.to(label, { opacity: 0, scale: 0, duration: 0.2 });
    }
  }, [cursorType]);

  return (
    <>
      <div ref={cursorRef} className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-red rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 mix-blend-difference" />
      <div ref={followerRef} className="fixed top-0 left-0 w-10 h-10 border border-brand-red rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden">
        <span ref={labelRef} className="text-white text-[0.6rem] font-extrabold tracking-widest opacity-0 scale-0 pointer-events-none">VIEW</span>
      </div>
    </>
  );
};

export default CustomCursor;
