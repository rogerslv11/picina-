import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ShieldAlert, Award, Star, BookOpen, Target, Heart } from 'lucide-react';
import { teamMembers } from '../mockData';

export default function About() {
  const [activeTab, setActiveTab] = useState<'missao' | 'visao' | 'valores'>('missao');

  const tabContent = {
    missao: {
      title: 'Nossa Missão',
      text: 'Garantir saúde, bem-estar e lazer impecável para nossos clientes através de soluções de excelência química, conservação hidráulica e assepsia profunda em ambientes aquáticos.',
      icon: <Target className="w-6 h-6 text-primary" />,
      color: 'bg-blue-500/10 text-primary border-primary/20'
    },
    visao: {
      title: 'Nossa Visão',
      text: 'Ser reconhecida como a principal marca de tratamento de elite e engenharia de piscina do estado, estabelecendo padrões inigualáveis de suporte digital, pontualidade e química limpa.',
      icon: <BookOpen className="w-6 h-6 text-accent" />,
      color: 'bg-cyan-500/10 text-accent border-accent/20'
    },
    valores: {
      title: 'Nossos Valores',
      text: 'Segurança absoluta, responsabilidade ecológica com a água, transparência total através de relatórios técnicos, capacitação continuada e obsessão por prazos pactuados.',
      icon: <Heart className="w-6 h-6 text-emerald-500" />,
      color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
    }
  };

  const highlights = [
    'Químicos licenciados pelo CRQ no controle operacional.',
    'Trabalho exclusivo com produtos certificados Anvisa de alta pureza.',
    'Relatório fotográfico e estatístico enviado via WhatsApp pós-visita.',
    'Equipe própria registrada, segurada e uniformizada (sem freelancers).'
  ];

  return (
    <section id="sobre" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Absolute Decorative Blobs */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-100/40 rounded-full filter blur-3xl animate-pulse-slow select-none pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-cyan-100/30 rounded-full filter blur-3xl animate-pulse-slow select-none pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Info Split Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Representation & Floating Experience Card */}
          <div className="lg:col-span-5 relative gsap-reveal-left">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=80" 
                alt="Técnico realizando análise de água" 
                className="w-full h-[32rem] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            </div>

            {/* Float Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 sm:-right-6 glass-card p-6 rounded-2xl max-w-xs shadow-xl border border-white"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-white shadow-md shadow-primary/25">
                  <Award className="w-6 h-6 animate-spin-slow" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-2xl text-slate-900 leading-none">100%</h4>
                  <p className="text-xs font-semibold text-slate-500 uppercase mt-1 tracking-wider">Compromisso Ecológico</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: History and Pillars */}
          <div className="lg:col-span-7 space-y-8 gsap-reveal-right">
            <div>
              <span className="text-xs font-bold tracking-widest text-primary uppercase font-mono">
                Quem Somos
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4.5xl text-slate-900 tracking-tight mt-2">
                Excelência no Cuidado e <br />
                Tratamento Aquático Profissional
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
            </div>

            <p className="text-slate-600 leading-relaxed text-base sm:text-md">
              A <strong className="text-slate-900">PiscinaClean Pro</strong> nasceu da necessidade de elevar os padrões de conservação de piscinas de alto padrão. Unindo ciência química ao cuidado artesanal, transformamos casas de máquinas obsoletas em centrais de purificação eficientes e garantimos que a água seja não apenas transparente, mas biologicamente segura.
            </p>

            {/* Interactive Pillar Selector (Tab-style) */}
            <div className="bg-slate-50 p-2.5 rounded-2xl border border-slate-100 grid grid-cols-3 gap-1">
              {(['missao', 'visao', 'valores'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                    activeTab === tab
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tabContent[tab].title}
                </button>
              ))}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 flex gap-4"
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border ${tabContent[activeTab].color}`}>
                {tabContent[activeTab].icon}
              </div>
              <div>
                <h4 className="font-display font-bold text-slate-900 text-lg">
                  {tabContent[activeTab].title}
                </h4>
                <p className="text-slate-600 text-sm mt-1.5 leading-relaxed">
                  {tabContent[activeTab].text}
                </p>
              </div>
            </motion.div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specialized Team Grid */}
        <div className="mt-24 pt-12 border-t border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-primary uppercase font-mono">
              Especialistas Certificados
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-2">
              Nossa Equipe de Operações
            </h3>
            <p className="text-slate-500 text-sm mt-3">
              Não terceirizamos. Contamos com um corpo técnico próprio, altamente gabaritado para lidar com qualquer complexidade química ou mecânica.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group bg-slate-50/50 rounded-3xl p-6 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6 border border-slate-100">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                </div>
                <h4 className="font-display font-bold text-lg text-slate-900 group-hover:text-primary transition-colors">
                  {member.name}
                </h4>
                <p className="text-sm font-semibold text-slate-500 mt-1">
                  {member.role}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600 font-mono">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400 flex-shrink-0" />
                  <span className="font-medium">{member.certification}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
