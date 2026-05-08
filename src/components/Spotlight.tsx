import { useRef, useEffect } from 'react';
import type { ReactNode } from 'react';

interface SpotlightProps {
  children: ReactNode;
  /** Radius of the bright zone around cursor in px */
  radius?: number;
  /** Tint colour outside the spotlight (matches canvas by default) */
  tint?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Spotlight = ({
  children,
  radius = 280,
  tint = 'rgba(243, 240, 238, 0.78)',
  className = '',
  style = {},
}: SpotlightProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const active = useRef(false);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const beam = beamRef.current;
    if (!wrap || !beam) return;

    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      target.current.x = e.clientX - rect.left;
      target.current.y = e.clientY - rect.top;
    };

    const onEnter = () => {
      active.current = true;
      beam.style.opacity = '1';
    };

    const onLeave = () => {
      active.current = false;
      beam.style.opacity = '0';
    };

    const tick = () => {
      // smooth lerp toward cursor
      current.current.x += (target.current.x - current.current.x) * 0.18;
      current.current.y += (target.current.y - current.current.y) * 0.18;
      beam.style.background = `radial-gradient(circle ${radius}px at ${current.current.x}px ${current.current.y}px, transparent 0%, transparent 55%, ${tint} 100%)`;
      raf.current = requestAnimationFrame(tick);
    };

    wrap.addEventListener('mousemove', onMove);
    wrap.addEventListener('mouseenter', onEnter);
    wrap.addEventListener('mouseleave', onLeave);
    raf.current = requestAnimationFrame(tick);

    return () => {
      wrap.removeEventListener('mousemove', onMove);
      wrap.removeEventListener('mouseenter', onEnter);
      wrap.removeEventListener('mouseleave', onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [radius, tint]);

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{ position: 'relative', ...style }}
    >
      {children}
      <div
        ref={beamRef}
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity 0.45s ease',
          zIndex: 5,
          mixBlendMode: 'normal',
          borderRadius: 'inherit',
        }}
      />
    </div>
  );
};

export default Spotlight;
