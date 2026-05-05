import { useEffect, useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from '../components/home/Hero';
import Showcase from '../components/home/Showcase';
import Mission from '../components/home/Mission';
import Process from '../components/home/Process';
import Impact from '../components/home/Impact';
import FinalCTA from '../components/home/FinalCTA';
import PageTransition from '../components/PageTransition';
import Marquee from '../components/Marquee';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    // ScrollTrigger for sections
    const sections = gsap.utils.toArray('section') as HTMLElement[];
    sections.forEach((section) => {
      const container = section.querySelector('.container');
      if (container) {
        gsap.fromTo(container, 
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <PageTransition>
      <div className="focus-backdrop" />
      <div ref={containerRef} style={{ paddingTop: 'var(--nav-height)' }}>
        <Hero heroRef={heroRef} heroY={heroY} heroOpacity={heroOpacity} />
        <Showcase />
        <Mission />
        <Process />
        <Impact />
        <Marquee />
        <FinalCTA />
      </div>
    </PageTransition>
  );
};

export default Home;
