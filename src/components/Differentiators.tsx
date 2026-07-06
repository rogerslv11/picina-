import { motion } from 'motion/react';
import { Award, Users, Zap, CheckCircle2, Wrench, ClipboardList } from 'lucide-react';
import { differentiatorsData } from '../mockData';

export default function Differentiators() {
  // Map icons from mockData values
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-primary' };
    switch (iconName) {
      case 'Award': return <Award {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'CheckCircle': return <CheckCircle2 {...props} />;
      case 'Wrench': return <Wrench {...props} />;
      case 'ClipboardList': return <ClipboardList {...props} />;
      default: return <Award {...props} />;
    }
  };

  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-bg-soft relative overflow-hidden">
      {/* Decorative ambient bubble */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/30 rounded-full filter blur-3xl animate-pulse-slow select-none pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 gsap-reveal">
          <span className="text-xs font-bold tracking-widest text-primary uppercase font-mono">
            Por Que Escolher a PiscinaClean?
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4.5xl text-slate-900 tracking-tight mt-2">
            Nossos Pilares de Garantia e Qualidade
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4 mx-auto" />
          <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            Trabalhamos para estabelecer uma nova referência de confiabilidade e inovação no mercado de conservação e engenharia aquática.
          </p>
        </div>

        {/* 3x2 Grid of Glassmorphism Differentiator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 gsap-stagger-container">
          {differentiatorsData.map((diff) => (
            <div
              key={diff.id}
              className="gsap-stagger-item glass-card bg-white/70 hover:bg-white border border-white/60 p-8 rounded-3xl hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4">
                {/* Floating Circle with Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-50 text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  {renderIcon(diff.iconName)}
                </div>

                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-primary transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-2.5 leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Highlight Banner under differentials */}
        <div
          className="gsap-reveal-scale mt-16 sm:mt-20 p-8 sm:p-10 rounded-3.5xl bg-gradient-to-r from-primary to-accent text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-primary/20"
        >
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold tracking-widest text-blue-200 uppercase font-mono bg-blue-500/25 border border-blue-400/30 px-3 py-1 rounded-full">
              Diferencial Exclusivo
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl mt-4">
              Quer ver um laudo de visita real da PiscinaClean?
            </h3>
            <p className="text-sm text-blue-50 text-medium leading-relaxed max-w-xl">
              Nossos clientes recebem após cada visita um PDF com o controle de parâmetros químicos, quantidade de produtos aplicados, recomendações e fotos da piscina.
            </p>
          </div>
          
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%21+Gostaria+de+ver+um+exemplo+do+relat%C3%B3rio+digital+de+visita+da+piscina."
            target="_blank"
            referrerPolicy="no-referrer"
            className="px-6 py-4 bg-white text-primary font-bold hover:bg-blue-50 rounded-2xl shadow-md transition-all shrink-0 text-center w-full md:w-auto"
          >
            Solicitar Exemplo PDF
          </a>
        </div>

      </div>
    </section>
  );
}
