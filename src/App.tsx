import Preloader from './components/Preloader';
import ScrollAnimationController from './components/ScrollAnimationController';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TestimonialMarquee from './components/TestimonialMarquee';
import HowWeWork from './components/HowWeWork';
import Differentiators from './components/Differentiators';
import PoolEstimator from './components/PoolEstimator';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTopButton from './components/BackToTopButton';

export default function App() {
  // Universal smooth scroll handler that works for elements and coordinates
  const scrollToSection = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      // Offset calculation for sticky header spacing on scrolling
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-bg-soft text-slate-800 antialiased font-sans flex flex-col justify-between">
      {/* Premium Aquatic Preloader Splash */}
      <Preloader />

      {/* Global Scroll Animation Controller via GSAP ScrollTrigger */}
      <ScrollAnimationController />

      {/* Global Bottom Utilities */}
      <FloatingWhatsApp />
      <BackToTopButton />

      {/* Header Sticky Navigation (includes scroll reading progress bar) */}
      <Header onNavClick={scrollToSection} />

      {/* Main Single Page Layout Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onCtaClick={scrollToSection} />

        {/* Dynamic Services Grid (with interactive detail overlays) */}
        <Services />

        {/* Seamless horizontal customer reviews infinite scroll */}
        <TestimonialMarquee />

        {/* Structural Horizontal Timeline workflow */}
        <HowWeWork />

        {/* Company Overview Section */}
        <About />

        {/* Standardized Glassmorphism Differentiators */}
        <Differentiators />

        {/* Interactive Pool Volume & Chemical Treatment Estimator */}
        <PoolEstimator />

        {/* Before/After sliding comparisons and Masonry Photo portfolio */}
        <Gallery />

        {/* Interactive FAQ Accordeon */}
        <FAQ />

        {/* Contact form with validations + embedded dynamic maps */}
        <Contact />
      </main>

      {/* Structured Footer map */}
      <Footer onNavClick={scrollToSection} />
    </div>
  );
}
