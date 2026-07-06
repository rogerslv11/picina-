import { motion } from 'motion/react';
import { ClipboardSignature, Search, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HowWeWork() {
  const steps = [
    {
      number: '01',
      title: 'Solicitação Inicial',
      description: 'Entre em contato pelo formulário ou WhatsApp. Realizamos um pré-diagnóstico do tamanho e tipo da piscina em minutos.',
      icon: <ClipboardSignature className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-500 shadow-blue-500/20'
    },
    {
      number: '02',
      title: 'Visita Técnica Grátis',
      description: 'Nossos técnicos analisam os equipamentos da casa de máquinas, medem o pH/alcalinidade e propõem o plano de ação ideal.',
      icon: <Search className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-500 shadow-cyan-500/20'
    },
    {
      number: '03',
      title: 'Execução de Elite',
      description: 'Realizamos a aspiração, limpeza física, tratamento químico de precisão e retrolavagem dos filtros de forma rápida.',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-blue-600 to-accent shadow-blue-600/20'
    },
    {
      number: '04',
      title: 'Entrega & Relatório',
      description: 'Sua piscina fica pronta para o mergulho. Você recebe no WhatsApp o laudo químico digital informando os produtos aplicados.',
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: 'from-emerald-500 to-teal-500 shadow-emerald-500/20'
    }
  ];

  return (
    <section id="como-trabalhamos" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#0077ff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 gsap-reveal">
          <span className="text-xs font-bold tracking-widest text-primary uppercase font-mono">
            Fluxo de Trabalho
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4.5xl text-slate-900 tracking-tight mt-2">
            Do Primeiro Contato ao Mergulho Cristalino
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4 mx-auto" />
          <p className="text-slate-500 text-sm sm:text-base mt-4">
            Simplificamos todo o processo de limpeza e tratamento para que você não precise se preocupar com nada. Conheça as etapas:
          </p>
        </div>

        {/* Timeline (Adaptive layout: Horizontal on md+, Vertical on mobile) */}
        <div className="relative">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-1 bg-slate-100 -translate-y-10 z-0 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-primary via-accent to-emerald-500"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10 gsap-stagger-container">
            {steps.map((step) => (
              <div
                key={step.number}
                className="gsap-stagger-item flex flex-col items-center text-center lg:items-start lg:text-left group"
              >
                {/* Numeric Header Badge */}
                <span className="font-display font-black text-5xl sm:text-6xl text-slate-100 group-hover:text-blue-50 transition-colors duration-300 leading-none">
                  {step.number}
                </span>

                {/* Styled Circle with Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${step.color} text-white flex items-center justify-center shadow-lg group-hover:rotate-6 transition-all duration-300 -mt-6 mb-6 relative z-10`}>
                  {step.icon}
                </div>

                {/* Title & Description */}
                <h3 className="font-display font-bold text-lg text-slate-900 mt-2">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed max-w-sm">
                  {step.description}
                </p>

                {/* Small indicator dot for desktop */}
                <div className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-300 border-2 border-white scale-0 group-hover:scale-100 transition-all duration-200" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
