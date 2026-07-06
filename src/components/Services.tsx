import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Droplet, 
  Trash2, 
  TrendingUp, 
  RefreshCw, 
  ShieldCheck, 
  Settings, 
  Cpu, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  MessageSquare 
} from 'lucide-react';
import { Service } from '../types';
import { servicesData } from '../mockData';

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Icon dynamic renderer helper
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6' };
    switch (iconName) {
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Droplet': return <Droplet {...props} />;
      case 'Trash2': return <Trash2 {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'RefreshCw': return <RefreshCw {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Settings': return <Settings {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="servicos" className="py-20 sm:py-28 bg-bg-soft relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 gsap-reveal">
          <span className="text-xs font-bold tracking-widest text-primary uppercase font-mono">
            Nossos Serviços
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4.5xl text-slate-900 tracking-tight mt-2">
            Tratamentos e Soluções Sob Medida <br className="hidden sm:inline" />
            Para Cada Tipo de Piscina
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4 mx-auto" />
          <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            Da aspiração pontual à automação completa da casa de máquinas. Cuidamos de todos os aspectos técnicos para você focar apenas em aproveitar seu lazer.
          </p>
        </div>

        {/* Animated Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 gsap-stagger-container">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="gsap-stagger-item group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {renderIcon(service.iconName)}
                </div>

                {/* Info */}
                <h3 className="font-display font-bold text-lg text-slate-900 mt-6 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-slate-500 mt-3 line-clamp-3 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-semibold text-primary">
                <span>Ver cronograma</span>
                <div className="w-6 h-6 rounded-full bg-blue-50 group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all duration-300">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Expansion Modal Overlay */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-3.5xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
              >
                {/* Header Image Accent */}
                <div className="relative h-48 sm:h-56">
                  <img 
                    src={selectedService.image} 
                    alt={selectedService.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Title overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-primary/25 border border-primary/30 text-xs font-mono font-bold uppercase tracking-wider text-white backdrop-blur-md">
                      Plano Técnico
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-2">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Main Content */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <h4 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-widest">
                      O que está incluso no escopo
                    </h4>
                    <p className="text-slate-600 mt-2.5 leading-relaxed text-sm sm:text-base">
                      {selectedService.detail}
                    </p>
                  </div>

                  {/* Visual checklist */}
                  <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
                      <span>Produtos Inclusos na Visita</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
                      <span>Limpeza Química e Física</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
                      <span>Relatório Digital Integrado</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
                      <span>Suporte e Retorno Garantido</span>
                    </div>
                  </div>

                  {/* Bottom Trigger Action */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <a
                      href={`https://wa.me/5511999999999?text=Ol%C3%A1%21+Gostaria+de+saber+mais+detalhes+sobre+o+servi%C3%A7o+de+${encodeURIComponent(selectedService.title)}.`}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-md shadow-green-500/10 text-white font-bold rounded-2xl transition-all duration-200 text-center"
                    >
                      <MessageSquare className="w-5 h-5" />
                      <span>Contratar via WhatsApp</span>
                    </a>
                    
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-2xl transition-all duration-200 cursor-pointer text-center"
                    >
                      Voltar aos Serviços
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
