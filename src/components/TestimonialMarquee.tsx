import React from 'react';
import { Star, Quote, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface MarqueeItem {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
  tag?: string;
}

const row1Items: MarqueeItem[] = [
  {
    id: 1,
    name: 'Roberto de Souza',
    role: 'Síndico do Residencial Royal Park',
    text: 'A PiscinaClean mudou totalmente o patamar do nosso condomínio. A água está sempre impecável e os relatórios digitais pós-visita no WhatsApp nos dão total tranquilidade.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
    tag: 'Condomínio Clube'
  },
  {
    id: 2,
    name: 'Cláudia Mendes',
    role: 'Proprietária de Residência em Alphaville',
    text: 'Profissionais extremamente educados, pontuais e atenciosos. É maravilhoso chegar em casa na sexta-feira e encontrar a piscina um espelho d\'água absoluto.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
    tag: 'Residência Premium'
  },
  {
    id: 3,
    name: 'Dr. Fernando Henrique',
    role: 'Diretor de Patrimônio do Clube Campestre',
    text: 'A competência técnica deles na troca preventiva de filtros e na automação dos aquecedores reduziu nossa conta de energia em 25%. Um nível técnico exemplar.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    tag: 'Clube Esportivo'
  },
  {
    id: 4,
    name: 'Juliana Silveira',
    role: 'Arquiteta e Designer de Exteriores',
    text: 'Como arquiteta, o acabamento é crucial. Sempre indico a PiscinaClean para fazer a instalação dos refletores de LED, cascatas e sistemas de automação de sal.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
    tag: 'Parceiro Técnico'
  }
];

const row2Items: MarqueeItem[] = [
  {
    id: 5,
    name: 'Guilherme Moreira',
    role: 'Síndico do Condomínio Bella Vista',
    text: 'O controle laboratorial por parâmetros químicos precisos e o laudo pós-visita detalhado trouxeram transparência total para a nossa prestação de contas.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    tag: 'Síndico Profissional'
  },
  {
    id: 6,
    name: 'Patrícia Albuquerque',
    role: 'Proprietária de Casa de Campo em Atibaia',
    text: 'Recuperaram nossa piscina verde de forma impressionante em menos de 12 horas para a nossa recepção de fim de ano. O atendimento de choque foi espetacular.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    tag: 'Recuperação de Choque'
  },
  {
    id: 7,
    name: 'Eng. Carlos Eduardo',
    role: 'Consultor Hidráulico e Químico',
    text: 'A precisão na medição do ácido cianúrico e alcalinidade evita superdosagens desnecessárias de insumos. Trabalho de engenharia química extremamente sério.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80',
    tag: 'Auditoria de Qualidade'
  },
  {
    id: 8,
    name: 'Mariana Costa',
    role: 'Gestora de Academia de Natação AcquaFit',
    text: 'Nossas raias aquecidas atendem centenas de alunos diariamente. A PiscinaClean mantém o cloro e o pH rigorosamente estáveis, cumprindo todas as normas.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80',
    tag: 'Uso Comercial'
  }
];

export default function TestimonialMarquee() {
  return (
    <section className="py-20 bg-gradient-to-b from-bg-soft via-slate-50 to-white relative overflow-hidden border-t border-b border-slate-100">
      {/* Decorative localized styles for high-performance infinite scrolling */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marquee-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-scroll-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: marquee-right 40s linear infinite;
        }
        .marquee-container:hover .animate-scroll-left,
        .marquee-container:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}</style>

      {/* Decorative vector background elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/3 rounded-full filter blur-3xl -translate-y-1/2 -z-10" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/3 rounded-full filter blur-3xl -translate-y-1/2 -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-200 text-primary mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="text-[10px] font-bold tracking-widest font-mono uppercase">Reconhecimento de Elite</span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4.5xl text-slate-900 tracking-tight">
          Aprovado por Clientes Exigentes
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto font-medium">
          Síndicos de condomínios clube, engenheiros, arquitetos e proprietários residenciais relatam suas experiências com nosso padrão científico de conservação preventiva.
        </p>
      </div>

      {/* INFINITE SCROLL TRACKS CONTAINER */}
      <div className="marquee-container space-y-6 select-none relative z-10 w-full overflow-hidden py-4">
        
        {/* ROW 1: Scrolling Left */}
        <div className="flex w-max relative">
          <div className="flex gap-6 pr-6 animate-scroll-left">
            {/* Original Items + Duplicated Items for seamless loop */}
            {[...row1Items, ...row1Items, ...row1Items].map((item, idx) => (
              <div
                key={`row1-${item.id}-${idx}`}
                className="w-[380px] sm:w-[420px] bg-white border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-blue-500/5 p-6 rounded-3xl transition-all duration-300 flex flex-col justify-between shrink-0 group relative"
              >
                {/* Accent line on top of card */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div>
                  {/* Card Header: Rating & Quote Accent */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-slate-100 group-hover:text-primary/10 transition-colors" />
                  </div>

                  {/* Feedback Text */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium line-clamp-4">
                    "{item.text}"
                  </p>
                </div>

                {/* Profile Section */}
                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-xl object-cover border border-slate-100"
                    />
                    <div>
                      <h4 className="font-display font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1">
                        {item.name}
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" title="Verificado" />
                      </h4>
                      <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  {item.tag && (
                    <span className="text-[9px] font-mono font-bold tracking-wider text-primary bg-primary/5 px-2.5 py-1 rounded-lg border border-primary/10 shrink-0">
                      {item.tag}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Scrolling Right */}
        <div className="flex w-max relative">
          <div className="flex gap-6 pr-6 animate-scroll-right">
            {/* Original Items + Duplicated Items for seamless loop */}
            {[...row2Items, ...row2Items, ...row2Items].map((item, idx) => (
              <div
                key={`row2-${item.id}-${idx}`}
                className="w-[380px] sm:w-[420px] bg-white border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-blue-500/5 p-6 rounded-3xl transition-all duration-300 flex flex-col justify-between shrink-0 group relative"
              >
                {/* Accent line on top of card */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div>
                  {/* Card Header: Rating & Quote Accent */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-slate-100 group-hover:text-primary/10 transition-colors" />
                  </div>

                  {/* Feedback Text */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium line-clamp-4">
                    "{item.text}"
                  </p>
                </div>

                {/* Profile Section */}
                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-xl object-cover border border-slate-100"
                    />
                    <div>
                      <h4 className="font-display font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1">
                        {item.name}
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" title="Verificado" />
                      </h4>
                      <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  {item.tag && (
                    <span className="text-[9px] font-mono font-bold tracking-wider text-primary bg-primary/5 px-2.5 py-1 rounded-lg border border-primary/10 shrink-0">
                      {item.tag}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Trust Seal Footer Indicator */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-slate-400 font-semibold font-mono">
        <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-4 py-2 rounded-2xl">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>100% de Avaliações Reais de Contratos Ativos</span>
        </div>
        <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-4 py-2 rounded-2xl">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span>Pontuação Média 5.0 no Google Avaliações</span>
        </div>
      </div>
    </section>
  );
}
