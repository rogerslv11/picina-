import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimationController() {
  useEffect(() => {
    // Wait until the preloader is finished and layout is fully stabilized
    const timer = setTimeout(() => {
      // 1. Reveal Fade & Rise (y)
      const reveals = document.querySelectorAll('.gsap-reveal');
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 2. Reveal Slide from Left
      const revealsLeft = document.querySelectorAll('.gsap-reveal-left');
      revealsLeft.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -35 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 3. Reveal Slide from Right
      const revealsRight = document.querySelectorAll('.gsap-reveal-right');
      revealsRight.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 35 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 4. Reveal Scale up
      const revealsScale = document.querySelectorAll('.gsap-reveal-scale');
      revealsScale.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.96 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 5. Coordinated Stagger Containers
      const staggerContainers = document.querySelectorAll('.gsap-stagger-container');
      staggerContainers.forEach((container) => {
        const items = container.querySelectorAll('.gsap-stagger-item');
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: container,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });

      // Refresh ScrollTrigger to ensure accurate positioning calculations
      ScrollTrigger.refresh();
    }, 2000);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
