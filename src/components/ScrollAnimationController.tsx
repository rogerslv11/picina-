import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimationController() {
  useEffect(() => {
    // Wait until the preloader is finished and layout is fully stabilized
    const timer = setTimeout(() => {
      // 1. Reveal Fade & Rise (y) - Upgraded to elegant power3.out with y: 50 rise
      const reveals = document.querySelectorAll('.gsap-reveal');
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 2. Reveal Slide from Left - Incorporates y: 50 rise and slide with power3.out
      const revealsLeft = document.querySelectorAll('.gsap-reveal-left');
      revealsLeft.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -50, y: 50, scale: 0.98 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 1.25,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 3. Reveal Slide from Right - Incorporates y: 50 rise and slide with power3.out
      const revealsRight = document.querySelectorAll('.gsap-reveal-right');
      revealsRight.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 50, y: 50, scale: 0.98 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 1.25,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 4. Reveal Scale up - Perfect organic scale incorporating y: 50
      const revealsScale = document.querySelectorAll('.gsap-reveal-scale');
      revealsScale.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 5. Coordinated Stagger Containers - Buttery-smooth successive item cascading with y: 50
      const staggerContainers = document.querySelectorAll('.gsap-stagger-container');
      staggerContainers.forEach((container) => {
        const items = container.querySelectorAll('.gsap-stagger-item');
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 50, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.1,
              stagger: 0.08,
              ease: 'power3.out',
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
