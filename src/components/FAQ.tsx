import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Search, MessageSquare, BookOpen, Settings, Droplet, Sparkles } from 'lucide-react';

interface RichFAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'contratos' | 'quimica' | 'equipamentos';
}

const enrichedFaqs: RichFAQItem[] = [
  {
    id: 1,
    question: 'Com que frequência minha piscina deve ser limpa?',
    category: 'contratos',
    answer: 'Para piscinas residenciais de uso moderado, recomendamos uma manutenção completa de 1 a 2 vezes por semana. Para condomínios, clubes ou piscinas comerciais de alto fluxo, o ideal é uma frequência de 3 a 6 vezes por semana, atendendo estritamente às normas de saúde e vigilância sanitária.'
  },
  {
    id: 2,
    question: 'O cloro salgado (gerador de cloro por sal) é melhor do que o cloro tradicional?',
    category: 'quimica',
    answer: 'Sim, o gerador de sal produz cloro natural de forma contínua através de eletrólise. Isso elimina a necessidade de armazenar cloro concentrado, reduz drasticamente o odor forte, previne o ressecamento da pele e cabelos, e evita olhos vermelhos, mantendo um teor de sal semelhante ao de uma lágrima humana.'
  },
  {
    id: 3,
    question: 'Quanto tempo leva para recuperar uma piscina que ficou totalmente verde?',
    category: 'quimica',
    answer: 'Na imensa maioria dos casos, conseguimos recuperar a cristalinidade total em até 18 horas usando nosso tratamento de choque intensivo. Em situações extremas de águas com matéria orgânica densa acumulada por meses, pode levar entre 48 a 72 horas para realizar a decantação e a filtração final de partículas microscópicas.'
  },
  {
    id: 4,
    question: 'Vocês atendem condomínios residenciais e emitem nota fiscal?',
    category: 'contratos',
    answer: 'Sim, somos especializados no atendimento corporativo a condomínios de todos os portes e clubes de recreação. Emitimos Nota Fiscal de Prestação de Serviços, temos seguro de responsabilidade civil, engenheiro químico responsável e toda nossa equipe trabalha uniformizada e munida de EPIs adequados.'
  },
  {
    id: 5,
    question: 'De quanto em quanto tempo devo trocar a areia do filtro?',
    category: 'equipamentos',
    answer: 'A areia de quartzo interna do filtro deve ser substituída a cada 2 a 3 anos em piscinas residenciais, e anualmente em piscinas coletivas ou comerciais. Com o tempo, os grãos de areia perdem as arestas ásperas e acumulam um biofilme bacteriano resistente, reduzindo a eficiência de retenção de resíduos finos.'
  },
  {
    id: 6,
    question: 'Como funciona a manutenção técnica de piscinas aquecidas?',
    category: 'equipamentos',
    answer: 'Piscinas aquecidas (solar, gás ou trocador de calor) necessitam de controle rigoroso do pH e alcalinidade, pois a temperatura elevada acelera a evaporação do cloro e favorece a corrosão ou formação de incrustações metálicas nos aquecedores. O tempo de recirculação é otimizado para evitar bolsões de calor.'
  },
  {
    id: 7,
    question: 'O que é o ácido cianúrico e por que ele precisa ser controlado?',
    category: 'quimica',
    answer: 'O ácido cianúrico funciona como um estabilizador que protege o cloro da degradação pelos raios solares UV. No entanto, se o nível ultrapassar 100 ppm (partes por milhão), ocorre o "bloqueio de cloro", anulando seu poder desinfetante. Monitoramos este índice eletronicamente em todas as visitas.'
  },
  {
    id: 8,
    question: 'Quais as diferenças práticas entre os planos Semanal e Quinzenal?',
    category: 'contratos',
    answer: 'O plano Semanal (4 a 5 visitas mensais) garante água saudável sem oscilações, ideal para uso frequente. O plano Quinzenal (2 visitas mensais) é voltado para piscinas cobertas ou com baixo uso, exigindo que o proprietário faça pequenas adições de cloro ou ligue o filtro nos intervalos recomendados.'
  }
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'todos' | 'contratos' | 'quimica' | 'equipamentos'>('todos');
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter and search logic
  const filteredFaqs = useMemo(() => {
    return enrichedFaqs.filter((faq) => {
      const matchesCategory = activeCategory === 'todos' || faq.category === activeCategory;
      const matchesSearch = 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-gradient-to-b from-white to-bg-soft relative">
      {/* Background ambient gradient */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/50 rounded-full filter blur-3xl -z-10" />

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 gsap-reveal">
          <span className="text-xs font-bold tracking-widest text-primary uppercase font-mono flex items-center justify-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            Central de Dúvidas
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4.5xl text-slate-900 tracking-tight mt-2">
            Perguntas Frequentes
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4 mx-auto" />
          <p className="text-slate-500 text-sm sm:text-base mt-4">
            Consulte as respostas técnicas dos nossos químicos e engenheiros para as dúvidas mais comuns sobre tratamento, tecnologia de bombeamento e planos corporativos.
          </p>
        </div>

        {/* Search & Filter Controls Panel */}
        <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-100 shadow-xl shadow-blue-500/5 mb-10 space-y-4 gsap-reveal-scale">
          {/* Search Input Box */}
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4.5 h-4.5" />
            </div>
            <input
              type="text"
              placeholder="Pesquise por termos como 'cloro', 'areia', 'condomínio', 'aquecimento'..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenIndex(null); // Close open answers on search
              }}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all text-slate-800"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-4 flex items-center text-xs font-bold font-mono text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Categories Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-50">
            {[
              { id: 'todos', label: 'Ver Todos', icon: <BookOpen className="w-3.5 h-3.5" /> },
              { id: 'contratos', label: 'Planos & Contratos', icon: <Settings className="w-3.5 h-3.5" /> },
              { id: 'quimica', label: 'Tratamento & Química', icon: <Droplet className="w-3.5 h-3.5" /> },
              { id: 'equipamentos', label: 'Filtros & Motores', icon: <Sparkles className="w-3.5 h-3.5" /> }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id as any);
                  setOpenIndex(null); // Close active on change
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white shadow-md shadow-primary/15'
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === faq.id;

                return (
                  <motion.div
                    key={faq.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className={`border rounded-2.5xl overflow-hidden transition-all duration-300 ${
                      isOpen 
                        ? 'border-primary/25 bg-blue-50/15 shadow-sm shadow-blue-500/5' 
                        : 'border-slate-100 bg-white hover:border-slate-200'
                    }`}
                  >
                    {/* Trigger Button */}
                    <button
                      onClick={() => handleToggle(faq.id)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-all duration-200"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-4">
                        <HelpCircle className={`w-5.5 h-5.5 mt-0.5 shrink-0 transition-colors ${
                          isOpen ? 'text-primary' : 'text-slate-400'
                        }`} />
                        <span className="font-display font-bold text-slate-800 text-sm sm:text-base leading-snug">
                          {faq.question}
                        </span>
                      </div>

                      <div className={`w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 shrink-0 transition-all duration-300 ${
                        isOpen ? 'rotate-180 bg-primary/10 text-primary' : 'group-hover:bg-slate-100'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {/* Animated Collapsible Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ 
                            height: 'auto', 
                            opacity: 1,
                            transition: { height: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.25, delay: 0.05 } }
                          }}
                          exit={{ 
                            height: 0, 
                            opacity: 0,
                            transition: { height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.15 } }
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-6 pl-14 sm:px-6 sm:pb-7 sm:pl-15 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100/50 pt-4 flex flex-col gap-3">
                            <p>{faq.answer}</p>
                            <div className="flex items-center gap-1.5 mt-1.5">
                              <span className="text-[10px] font-mono uppercase tracking-wider font-bold bg-slate-100 text-slate-500 px-2.5 py-1 rounded-md">
                                Categoria: {faq.category === 'contratos' ? 'Contratos & Planos' : faq.category === 'quimica' ? 'Química da Água' : 'Filtros & Motores'}
                              </span>
                              <span className="text-[10px] text-slate-400 font-mono">• Revisado por Especialistas</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-white rounded-3xl border border-slate-100 p-8"
              >
                <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h4 className="font-display font-bold text-slate-700">Nenhuma pergunta encontrada</h4>
                <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                  Não encontramos resultados para "{searchQuery}". Tente pesquisar por outros termos químicos ou de manutenção.
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs font-semibold transition-all cursor-pointer"
                >
                  Limpar Pesquisa
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-lg shadow-blue-500/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left max-w-md">
            <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base">Ainda tem alguma dúvida específica?</h4>
            <p className="text-xs text-slate-500 mt-1 leading-normal">
              Nosso Responsável Técnico Químico (CRQ) está de plantão para esclarecer dúvidas complexas sobre águas esverdeadas e parâmetros hidráulicos.
            </p>
          </div>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%21+Tenho+uma+duvida+especifica+sobre+limpeza+de+piscina."
            target="_blank"
            referrerPolicy="no-referrer"
            className="w-full sm:w-auto px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-500/10 cursor-pointer shrink-0 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageSquare className="w-4.5 h-4.5 fill-current" />
            <span>Falar com o Químico</span>
          </a>
        </div>

      </div>
    </section>
  );
}
