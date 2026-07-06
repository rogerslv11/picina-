import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layers, 
  Image as ImageIcon, 
  Eye, 
  X, 
  HelpCircle, 
  Beaker, 
  CheckCircle2, 
  Gauge, 
  Clock, 
  Award,
  AlertCircle,
  FileSpreadsheet
} from 'lucide-react';
import { GalleryItem, BeforeAfterItem } from '../types';
import { galleryData, beforeAfterData } from '../mockData';

// Rich technical data for each Before/After case
interface RecoveryTechnicalSpec {
  volume: string;
  tempo: string;
  diagnostico: string;
  tratamento: string;
  produtos: string;
  responsavel: string;
  parametrosAntes: { ph: string; cloro: string; alcalinidade: string; turbidez: string };
  parametrosDepois: { ph: string; cloro: string; alcalinidade: string; turbidez: string };
}

const technicalSpecs: Record<number, RecoveryTechnicalSpec> = {
  1: {
    volume: '45.000 Litros',
    tempo: '18 Horas',
    diagnostico: 'Infestação aguda de algas verdes (Chlorella sp.), proliferação de vetores, pH desregulado (8.2), cloro residual zerado e lama orgânica sedimentada.',
    tratamento: 'Dosagem de algicida de choque isento de cobre, supercloração corretiva (15g/m³), decantação induzida com polímeros floculantes biodegradáveis, escovação total de paredes d\'água e aspiração por drenagem.',
    produtos: 'Cloro ativo granulado, Algicida de Choque Premium, Floculante Polimérico e Corretor Ácido.',
    responsavel: 'Marcos Oliveira (CRQ IV: 042.890-SP)',
    parametrosAntes: { ph: '8.2 (Alcalino)', cloro: '0.0 ppm (Zerado)', alcalinidade: '170 ppm', turbidez: 'Muito Alta (>45 NTU)' },
    parametrosDepois: { ph: '7.3 (Ideal)', cloro: '2.5 ppm (Seguro)', alcalinidade: '110 ppm', turbidez: '< 0.5 NTU (Cristalina)' }
  },
  2: {
    volume: '120.000 Litros',
    tempo: '24 Horas',
    diagnostico: 'Saturação mineral por carbonatos (alcalinidade a 280 ppm), pH em escala corrosiva, precipitação calcária gerando aspecto leitoso denso que impedia visualização das raias.',
    tratamento: 'Tratamento em frações de redutor químico de pH, recirculação hidráulica monitorada, floculação de arraste com sulfato de alumínio catalisado e filtração forçada de 36 horas em leito de zeólita ativada.',
    produtos: 'Ácido Clorídrico estabilizado, Sulfato de Alumínio e Zeólita Premium para Filtração Fina.',
    responsavel: 'Marcos Oliveira (CRQ IV: 042.890-SP)',
    parametrosAntes: { ph: '8.4 (Altamente Elevado)', cloro: '0.5 ppm', alcalinidade: '280 ppm (Crítica)', turbidez: 'Opaca (Aspecto Leitoso)' },
    parametrosDepois: { ph: '7.4 (Neutro/Ideal)', cloro: '1.8 ppm (Estável)', alcalinidade: '100 ppm (Corrigida)', turbidez: '< 0.8 NTU (Reflexo Espelhado)' }
  }
};

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<'antes-depois' | 'portfolio'>('antes-depois');
  const [galleryFilter, setGalleryFilter] = useState<'todos' | 'limpeza' | 'tratamento' | 'manutencao'>('todos');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  // Before/After Slider States
  const [activeBaId, setActiveBaId] = useState<number>(1);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const isDragging = useRef(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const selectedBaItem = beforeAfterData.find(item => item.id === activeBaId) || beforeAfterData[0];
  const activeSpec = technicalSpecs[activeBaId] || technicalSpecs[1];

  // Drag handlers for the Before/After comparison bar
  const handleMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  // Filter gallery items
  const filteredGallery = galleryFilter === 'todos'
    ? galleryData
    : galleryData.filter(item => item.category === galleryFilter);

  // Before/After visual effect filters based on which item is chosen
  const getBeforeFilterStyles = (id: number) => {
    if (id === 1) {
      // Infestation of green algae
      return { filter: 'hue-rotate(90deg) saturate(2.2) brightness(0.55) contrast(1.15) blur(0.5px)' };
    }
    // Cloudy, milky calcified pool
    return { filter: 'saturate(0.3) brightness(0.9) contrast(0.65) blur(7px)' };
  };

  return (
    <section id="antes-depois" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 gsap-reveal">
          <span className="text-xs font-bold tracking-widest text-primary uppercase font-mono flex items-center justify-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            Casos de Sucesso
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4.5xl text-slate-900 tracking-tight mt-2">
            Nosso Portfólio de Engenharia Química
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4 mx-auto" />
          
          {/* Main Category Selector */}
          <div className="mt-8 flex items-center justify-center gap-2 p-1 bg-slate-100 rounded-2xl max-w-sm mx-auto border border-slate-200">
            <button
              onClick={() => setActiveTab('antes-depois')}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'antes-depois'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Antes e Depois</span>
            </button>
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'portfolio'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>Galeria de Serviços</span>
            </button>
          </div>
        </div>

        {/* --- BEFORE/AFTER SLIDER INTERACTIVE PANEL --- */}
        {activeTab === 'antes-depois' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left selector menu */}
              <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Seletor de Casos Críticos
                    </span>
                    <h3 className="font-display font-bold text-xl text-slate-900 mt-1">
                      Recuperação & Tratamento de Choque
                    </h3>
                  </div>

                  <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
                    {beforeAfterData.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveBaId(item.id);
                          setSliderPosition(50); // reset slider
                        }}
                        className={`text-left p-4 rounded-2xl border transition-all cursor-pointer min-w-[240px] lg:w-full shrink-0 flex flex-col gap-1.5 ${
                          activeBaId === item.id
                            ? 'bg-blue-50/40 border-primary/25 shadow-sm'
                            : 'bg-white border-slate-100 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded ${
                            activeBaId === item.id ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'
                          }`}>
                            CASO {item.id}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono font-bold">
                            {item.id === 1 ? 'Algas' : 'Mineral'}
                          </span>
                        </div>
                        <h4 className="font-display font-bold text-slate-800 text-sm">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Micro guidelines box */}
                <div className="bg-slate-50 p-4.5 rounded-2.5xl border border-slate-100/80 flex gap-3 text-xs text-slate-500">
                  <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5 animate-pulse" />
                  <p className="leading-relaxed">
                    <strong>Arraste o comparador:</strong> Toque ou clique na barra branca no centro da imagem e arraste-a lateralmente para ver a diferença do estado antes e depois do choque.
                  </p>
                </div>
              </div>

              {/* Right comparison stage */}
              <div className="lg:col-span-8 flex flex-col">
                <div 
                  ref={sliderContainerRef}
                  onMouseMove={(e) => {
                    if (isDragging.current) handleMove(e.clientX);
                  }}
                  onTouchMove={(e) => {
                    if (isDragging.current) handleMove(e.touches[0].clientX);
                  }}
                  className="relative w-full h-[24rem] sm:h-[30rem] rounded-3.5xl overflow-hidden select-none cursor-ew-resize border border-slate-100 shadow-2xl shadow-blue-500/5 bg-slate-100"
                >
                  {/* AFTER STATE IMAGE (Background) */}
                  <img 
                    src={selectedBaItem.afterImage} 
                    alt="Depois Tratamento" 
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                  
                  {/* AFTER BADGE */}
                  <div className="absolute right-4 bottom-4 z-20 px-3 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md text-emerald-400 font-mono text-[10px] uppercase font-bold tracking-wider border border-white/5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Depois (Pristine Tech)
                  </div>

                  {/* BEFORE STATE IMAGE (Clip Path Overlay) */}
                  <div 
                    className="absolute inset-0 w-full h-full overflow-hidden"
                    style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                  >
                    <img 
                      src={selectedBaItem.beforeImage} 
                      alt="Antes Tratamento" 
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                      style={getBeforeFilterStyles(selectedBaItem.id)}
                    />
                    {/* BEFORE BADGE */}
                    <div className="absolute left-4 bottom-4 z-20 px-3 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md text-rose-400 font-mono text-[10px] uppercase font-bold tracking-wider border border-white/5 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-400" />
                      Antes (Fase Crítica)
                    </div>
                  </div>

                  {/* SLIDER CONTROLLER HANDLE */}
                  <div 
                    className="absolute top-0 bottom-0 w-1.5 bg-white cursor-ew-resize z-30 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                    style={{ left: `${sliderPosition}%` }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      isDragging.current = true;
                    }}
                    onTouchStart={(e) => {
                      isDragging.current = true;
                    }}
                  >
                    {/* Handle Ring */}
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white text-primary flex items-center justify-center shadow-2xl border-2 border-primary z-40 active:scale-90 transition-transform">
                      <div className="flex gap-1 items-center">
                        <span className="text-[10px] font-bold tracking-tighter select-none pointer-events-none text-primary">&larr;</span>
                        <span className="text-[10px] font-bold tracking-tighter select-none pointer-events-none text-primary">&rarr;</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description under slider */}
                <p className="mt-4 text-center text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                  {selectedBaItem.description}
                </p>
              </div>

            </div>

            {/* Scientific recovery report - TECHNICAL SHEET */}
            <div className="bg-slate-900 text-white rounded-3.5xl p-6 sm:p-10 border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-primary/10 filter blur-3xl -z-0" />
              
              <div className="relative z-10 space-y-6">
                {/* Header technical section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/5 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-accent flex items-center justify-center border border-white/5">
                      <Beaker className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase leading-none block">
                        Ficha Técnica Oficial de Recuperação
                      </span>
                      <h4 className="font-display font-bold text-lg sm:text-xl text-white mt-1">
                        Laudo de Engenharia Química &bull; Caso {activeSpec.volume === '45.000 Litros' ? '01' : '02'}
                      </h4>
                    </div>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 font-mono text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Registro CRQ Ativo</span>
                  </div>
                </div>

                {/* Quick stats details row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-slate-400 font-mono uppercase block">Volume de Massa Líquida</span>
                    <p className="text-base font-bold text-white mt-1">{activeSpec.volume}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-slate-400 font-mono uppercase block">Tempo Total de Operação</span>
                    <p className="text-base font-bold text-white mt-1">{activeSpec.tempo}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-slate-400 font-mono uppercase block">Químico Responsável</span>
                    <p className="text-base font-bold text-white mt-1 truncate">{activeSpec.responsavel.split(' (')[0]}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-slate-400 font-mono uppercase block">Produtos Utilizados</span>
                    <p className="text-xs font-semibold text-slate-300 mt-1 line-clamp-2">{activeSpec.produtos}</p>
                  </div>
                </div>

                {/* Diagnóstico vs Procedimento */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-2">
                    <h5 className="text-xs font-bold font-mono tracking-wider text-rose-400 uppercase flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4" />
                      Diagnóstico Inicial (Crítico)
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-white/2.5 p-4 rounded-2.5xl border border-white/2.5">
                      {activeSpec.diagnostico}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-xs font-bold font-mono tracking-wider text-emerald-400 uppercase flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      Metodologia Aplicada (Solução)
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-white/2.5 p-4 rounded-2.5xl border border-white/2.5">
                      {activeSpec.tratamento}
                    </p>
                  </div>
                </div>

                {/* Parameters Comparison Table */}
                <div className="border-t border-white/5 pt-5">
                  <h5 className="text-xs font-bold font-mono tracking-wider text-slate-400 uppercase mb-4 flex items-center gap-1.5">
                    <Gauge className="w-4 h-4 text-accent" />
                    Comparação de Parâmetros Químicos
                  </h5>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    {[
                      { metric: 'pH', antes: activeSpec.parametrosAntes.ph, depois: activeSpec.parametrosDepois.ph },
                      { metric: 'Cloro Livre', antes: activeSpec.parametrosAntes.cloro, depois: activeSpec.parametrosDepois.cloro },
                      { metric: 'Alcalinidade', antes: activeSpec.parametrosAntes.alcalinidade, depois: activeSpec.parametrosDepois.alcalinidade },
                      { metric: 'Turbidez da Água', antes: activeSpec.parametrosAntes.turbidez, depois: activeSpec.parametrosDepois.turbidez }
                    ].map((m, idx) => (
                      <div key={idx} className="bg-white/2.5 border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
                        <span className="text-xs font-bold text-slate-400 font-mono">{m.metric}</span>
                        <div className="mt-3 space-y-1.5">
                          <div>
                            <span className="text-[9px] text-slate-500 block uppercase font-mono">Antes:</span>
                            <span className="text-xs font-bold text-rose-400">{m.antes}</span>
                          </div>
                          <div className="border-t border-white/5 pt-1.5">
                            <span className="text-[9px] text-slate-500 block uppercase font-mono">Depois:</span>
                            <span className="text-xs font-bold text-emerald-400">{m.depois}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* --- DYNAMIC MASONRY PORTFOLIO GALLERY --- */}
        {activeTab === 'portfolio' && (
          <div>
            {/* Gallery Category Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
              {[
                { id: 'todos', label: 'Ver Todos' },
                { id: 'limpeza', label: 'Limpeza Integrada' },
                { id: 'tratamento', label: 'Tratamento Químico' },
                { id: 'manutencao', label: 'Manutenção Técnica' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setGalleryFilter(tab.id as any)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                    galleryFilter === tab.id
                      ? 'bg-primary text-white shadow-md shadow-primary/15'
                      : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Masonry Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredGallery.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => setLightboxImage(item)}
                    className="group bg-slate-50/40 rounded-3.5xl p-4 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-64 rounded-2.5xl overflow-hidden mb-4 bg-slate-100">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-11 h-11 rounded-full bg-white text-primary flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">
                            <Eye className="w-5.5 h-5.5" />
                          </div>
                        </div>
                        
                        {/* Category Pill Tag */}
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-900/85 text-white text-[10px] font-mono tracking-widest uppercase backdrop-blur-md">
                          {item.category === 'limpeza' ? 'Limpeza' : item.category === 'tratamento' ? 'Química' : 'Manutenção'}
                        </span>
                      </div>

                      <h4 className="font-display font-bold text-slate-800 text-sm px-1 mt-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 px-1 line-clamp-2 leading-relaxed">
                        {item.caption}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 px-1 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                      <span>Ref: PC-0{item.id}</span>
                      <span className="text-primary font-semibold hover:underline flex items-center gap-0.5">Laudo Disponível</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

      </div>

      {/* --- LIGHTBOX MODAL DIALOG --- */}
      <AnimatePresence>
        {lightboxImage && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md"
            />

            {/* Image viewport container */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-w-4xl w-full flex flex-col items-center"
              >
                <div className="relative w-full max-h-[75vh] flex items-center justify-center bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={lightboxImage.image} 
                    alt={lightboxImage.title} 
                    className="max-w-full max-h-[70vh] object-contain"
                  />

                  {/* Close floating button */}
                  <button
                    onClick={() => setLightboxImage(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Captions below */}
                <div className="mt-5 text-center max-w-xl text-white">
                  <span className="text-[9px] font-mono tracking-widest text-accent uppercase font-bold bg-white/10 px-3 py-1 rounded-lg">
                    {lightboxImage.category === 'limpeza' ? 'Limpeza de Elite' : lightboxImage.category === 'tratamento' ? 'Tratamento Avançado' : 'Engenharia de Equipamentos'}
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white mt-3">
                    {lightboxImage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                    {lightboxImage.caption}
                  </p>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
