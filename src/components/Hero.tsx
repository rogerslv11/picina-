import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Phone, ArrowRight, Shield, Award, Users } from 'lucide-react';
import { StatItem } from '../types';

interface HeroProps {
  onCtaClick: (id: string) => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=80', // Infinity Pool
    'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1600&q=80', // Clear Resort Pool
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80', // Pool Deck Modern House
  ];

  const stats: StatItem[] = [
    { value: '10+', label: 'Anos de Experiência', suffix: '' },
    { value: '5.000+', label: 'Limpezas Efetuadas', suffix: '' },
    { value: '99.8%', label: 'Satisfação de Clientes', suffix: '' },
    { value: '15+', label: 'Cidades Atendidas', suffix: '' },
  ];

  // Auto slide effect
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6500);
    return () => clearInterval(slideTimer);
  }, [heroImages.length]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-28 pb-12 sm:pb-20">
      {/* Dynamic Background Image Slider (Ken Burns premium zoom-in) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${heroImages[currentSlide]}')` }}
          />
        </AnimatePresence>
        
        {/* Multilayer premium dark blue & deep slate ambient overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-soft via-transparent to-slate-950/30" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-dark/40 to-transparent" />
        
        {/* Animated aquatic wave background pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden z-10 select-none pointer-events-none">
          <svg className="absolute bottom-0 w-full h-12 text-bg-soft" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,90 350,10 500,60 C650,110 850,20 1000,70 C1150,120 1250,50 1300,30 L1300,120 L0,120 Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex items-center">
        <div className="max-w-3xl pt-8 sm:pt-16 pb-6">
          {/* Trust Seal */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/25 backdrop-blur-xl mb-6 shadow-sm hover:border-blue-400/40 transition-colors duration-300 cursor-default"
          >
            <Shield className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-[11px] font-bold tracking-widest text-blue-200 font-mono uppercase">
              Certificação Química e Mecânica
            </span>
          </motion.div>

          {/* Core Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] sm:leading-none"
          >
            Sua Piscina Sempre <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-200 to-white font-extrabold pb-1 inline-block">
              Cristalina & Saudável
            </span> <br />
            Pronta Para o Lazer.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base sm:text-lg text-slate-300/90 font-medium leading-relaxed max-w-2xl"
          >
            Manutenção profissional de alto padrão, tratamento químico automatizado e recuperação de águas comprometidas para residências, condomínios e clubes com total garantia.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={() => onCtaClick('contato')}
              className="flex items-center justify-center gap-2.5 px-8 py-4.5 text-base font-bold text-white bg-primary hover:bg-primary-dark shadow-xl shadow-primary/25 hover:shadow-primary/45 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
            >
              <Calendar className="w-5 h-5 text-accent group-hover:rotate-6 transition-transform" />
              <span>Solicitar Orçamento</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%21+Gostaria+de+solicitar+um+or%C3%A7amento+para+minha+piscina."
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center justify-center gap-2.5 px-8 py-4.5 text-base font-bold text-slate-900 bg-white hover:bg-slate-50 border border-white hover:border-slate-100 shadow-lg hover:-translate-y-0.5 active:translate-y-0 rounded-2xl transition-all duration-300 group"
            >
              <Phone className="w-5 h-5 text-emerald-500 fill-emerald-500/20 group-hover:scale-110 transition-transform" />
              <span>Falar no WhatsApp</span>
            </a>
          </motion.div>

          {/* Quick trust flags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-6 text-slate-400 font-medium text-xs sm:text-sm"
          >
            <div className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-default">
              <div className="w-6 h-6 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Award className="w-3.5 h-3.5 text-accent" />
              </div>
              <span>Garantia de 48h de Claridade</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-default">
              <div className="w-6 h-6 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Users className="w-3.5 h-3.5 text-accent" />
              </div>
              <span>Químico CRQ Dedicado</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Glass Statistics Overlay (Sticky layout element at bottom) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-12">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card bg-black border border-white/10 backdrop-blur-2xl grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl"
        >
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center justify-center text-center p-2 transition-all duration-300 hover:scale-102 ${
                idx !== stats.length - 1 ? 'border-r-0 border-b border-white/5 pb-6 md:pb-2 md:border-b-0 md:border-r md:border-white/10' : ''
              }`}
            >
              <span className="font-display font-black text-2xl sm:text-3.5xl lg:text-4.5xl text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-100 to-white tracking-tight">
                {stat.value}
              </span>
              <span className="mt-2 text-xs sm:text-sm font-semibold text-slate-300 tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
