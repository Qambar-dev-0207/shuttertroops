import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
}

const MagneticButton = ({ children, className }: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const mouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = button.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const mouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    button.addEventListener("mousemove", mouseMove);
    button.addEventListener("mouseleave", mouseLeave);

    return () => {
      button.removeEventListener("mousemove", mouseMove);
      button.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return (
    <div ref={buttonRef} className={className} style={{ display: 'inline-block' }}>
      {children}
    </div>
  );
};

export default MagneticButton;
