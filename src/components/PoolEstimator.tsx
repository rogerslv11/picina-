import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Droplet, 
  Info, 
  Sparkles, 
  CheckCircle, 
  MessageSquare, 
  Calculator, 
  Trash2, 
  ShieldAlert, 
  Activity, 
  TrendingUp, 
  Compass, 
  Layers, 
  Wrench,
  Clock,
  Sparkle
} from 'lucide-react';

type PoolShape = 'rectangular' | 'circular' | 'oval';
type WaterState = 'cristalina' | 'turva' | 'verde';
type Frequency = 'semanal' | 'quinzenal' | 'avulso';

export default function PoolEstimator() {
  const [shape, setShape] = useState<PoolShape>('rectangular');
  const [length, setLength] = useState<number>(8);
  const [width, setWidth] = useState<number>(4);
  const [depth, setDepth] = useState<number>(1.4);
  const [diameter, setDiameter] = useState<number>(6);
  const [waterState, setWaterState] = useState<WaterState>('cristalina');
  const [frequency, setFrequency] = useState<Frequency>('semanal');
  
  // Calculations
  const [volume, setVolume] = useState<number>(0);
  const [filtrationTime, setFiltrationTime] = useState<number>(0);
  const [dailyChlorine, setDailyChlorine] = useState<number>(0);
  const [estimatedCost, setEstimatedCost] = useState<number>(0);

  // Advanced recommendations
  const [shockChlorine, setShockChlorine] = useState<number>(0);
  const [clarifier, setClarifier] = useState<number>(0);
  const [algicide, setAlgicide] = useState<number>(0);
  const [healthScore, setHealthScore] = useState<{ value: number; label: string; color: string; desc: string }>({
    value: 100,
    label: 'Excelente',
    color: 'from-emerald-500 to-teal-500',
    desc: 'Água saudável, equilibrada e perfeita para o banho.'
  });

  // Re-calculate on state change
  useEffect(() => {
    let computedVolumeM3 = 0;

    if (shape === 'rectangular') {
      computedVolumeM3 = length * width * depth;
    } else if (shape === 'circular') {
      const radius = diameter / 2;
      computedVolumeM3 = Math.PI * Math.pow(radius, 2) * depth;
    } else if (shape === 'oval') {
      // Oval volume formula
      computedVolumeM3 = length * width * depth * 0.785;
    }

    const volumeLiters = Math.round(computedVolumeM3 * 1000);
    setVolume(volumeLiters);

    // Filtration time: standard turnover of volume
    const hours = Math.min(12, Math.max(4, Math.round(volumeLiters / 8000)));
    setFiltrationTime(hours);

    // Maintenance Chlorine: ~4g per m³ (1000L) daily
    const chlorineGrams = Math.round((volumeLiters / 1000) * 4);
    setDailyChlorine(chlorineGrams);

    // Algae, shock and clarifier dosages based on state
    if (waterState === 'cristalina') {
      setShockChlorine(0);
      setClarifier(Math.round((volumeLiters / 1000) * 2)); // preventative: 2ml per m³ weekly
      setAlgicide(Math.round((volumeLiters / 1000) * 5)); // preventative: 5ml per m³ weekly
      setHealthScore({
        value: 100,
        label: 'Excelente (100%)',
        color: 'bg-emerald-500 text-white shadow-emerald-500/20 border-emerald-400',
        desc: 'Parâmetros ideais. Recomendamos manter a filtração diária e controle de pH semanal.'
      });
    } else if (waterState === 'turva') {
      setShockChlorine(Math.round((volumeLiters / 1000) * 8)); // shock: 8g per m³
      setClarifier(Math.round((volumeLiters / 1000) * 6)); // corrective clarifier: 6ml per m³
      setAlgicide(0);
      setHealthScore({
        value: 45,
        label: 'Comprometida (45%)',
        color: 'bg-amber-500 text-white shadow-amber-500/20 border-amber-400',
        desc: 'Presença de partículas suspensas ou início de colônia de algas. Requer clarificação.'
      });
    } else if (waterState === 'verde') {
      setShockChlorine(Math.round((volumeLiters / 1000) * 14)); // super shock: 14g per m³
      setClarifier(Math.round((volumeLiters / 1000) * 8)); // corrective clarifier: 8ml per m³
      setAlgicide(Math.round((volumeLiters / 1000) * 7)); // shock algicide: 7ml per m³
      setHealthScore({
        value: 15,
        label: 'Crítica (15%)',
        color: 'bg-rose-500 text-white shadow-rose-500/20 border-rose-400',
        desc: 'Infestação avançada de algas unicelulares. Tratamento de choque químico imediato.'
      });
    }

    // Cost estimation based on inputs
    let basePrice = 250; 
    if (volumeLiters > 10000) {
      basePrice += Math.round((volumeLiters - 10000) * 0.006);
    }

    // Multiply by frequency
    if (frequency === 'semanal') {
      basePrice *= 1.2; // 4 visits/month
    } else if (frequency === 'quinzenal') {
      basePrice *= 0.8; // 2 visits/month
    } else {
      // One-time Shock Treatment
      basePrice = 320 + Math.round(volumeLiters * 0.008);
    }

    // Water state modifier
    if (waterState === 'turva') {
      basePrice += frequency === 'avulso' ? 120 : 60;
    } else if (waterState === 'verde') {
      basePrice += frequency === 'avulso' ? 280 : 160;
    }

    setEstimatedCost(Math.round(basePrice));
  }, [shape, length, width, depth, diameter, waterState, frequency]);

  const handleWhatsAppSend = () => {
    const shapeLabel = shape === 'rectangular' ? 'Retangular' : shape === 'circular' ? 'Circular/Redonda' : 'Oval';
    const dimensions = shape === 'circular' 
      ? `Diâmetro: ${diameter}m, Profundidade Média: ${depth}m`
      : `Dimensões: ${length}m de comprimento x ${width}m de largura x ${depth}m de profundidade`;
    const waterStateLabel = waterState === 'cristalina' ? 'Cristalina (Limpa)' : waterState === 'turva' ? 'Turva/Opaca' : 'Totalmente Verde (Infestação de Algas)';
    const frequencyLabel = frequency === 'semanal' ? 'Mensal (Manutenção 1x por semana)' : frequency === 'quinzenal' ? 'Quinzenal (Manutenção 2x por mês)' : 'Serviço Avulso (Tratamento de Choque)';

    const msg = `Olá Marcos! Utilizei o Simulador Inteligente de Piscina no site e gostaria de solicitar um orçamento definitivo para minha residência.

*DADOS DA MINHA PISCINA:*
• Formato: ${shapeLabel}
• ${dimensions}
• Volume Estimado: ${volume.toLocaleString('pt-BR')} litros (${(volume / 1000).toFixed(1)} m³)
• Estado Atual da Água: ${waterStateLabel}
• Plano Desejado: ${frequencyLabel}

*CÁLCULOS ESTIMADOS NO SITE:*
• Saúde da Água: ${healthScore.label}
• Tempo de filtração recomendado: ${filtrationTime}h diárias
• Cloro Diário: ${dailyChlorine}g
• Dosagem Decantador: ${clarifier > 0 ? `${clarifier}ml` : 'N/A'}
• Dosagem Algicida: ${algicide > 0 ? `${algicide}ml` : 'N/A'}
• Estimativa de Custo Mensal/Serviço: R$ ${estimatedCost}

Por favor, como podemos agendar a visita técnica sem custos para avaliação presencial?`;

    const encodedText = encodeURIComponent(msg);
    window.open(`https://wa.me/5511999999999?text=${encodedText}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="simulador" className="py-20 sm:py-28 bg-gradient-to-b from-white to-bg-soft relative overflow-hidden">
      {/* Decorative localized styles for fluid custom range tracks and ripple animations */}
      <style>{`
        input[type="range"]::-webkit-slider-runnable-track {
          background: #e2e8f0;
          height: 6px;
          border-radius: 9999px;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          background: #0284c7;
          border: 3px solid #ffffff;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          margin-top: -6px;
          box-shadow: 0 4px 10px rgba(2, 132, 199, 0.4);
          transition: all 0.15s ease-in-out;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.6);
        }
        @keyframes ripple-wave {
          0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
          50% { transform: translate(-50%, -52%) rotate(180deg) scale(1.04); }
          100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
        }
        .animate-water-ripple {
          animation: ripple-wave 12s ease-in-out infinite;
        }
      `}</style>

      {/* Visual ambient details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-blue-50/40 rounded-full filter blur-3xl -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 gsap-reveal">
          <span className="text-xs font-bold tracking-widest text-primary uppercase font-mono flex items-center justify-center gap-1.5">
            <Calculator className="w-3.5 h-3.5 animate-pulse text-accent" />
            Ferramenta Interativa Exclusiva
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4.5xl text-slate-900 tracking-tight mt-2">
            Simulador Inteligente & Calculadora de Volume
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-4 mx-auto" />
          <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto font-medium">
            Desenhe as proporções virtuais da sua piscina, diagnostique o nível de pureza laboratorial e planeje as ações químicas preventivas personalizadas.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left panel: Inputs & Interactive Preview */}
          <div className="lg:col-span-7 bg-white rounded-3.5xl p-6 sm:p-8 border border-slate-100 shadow-xl shadow-blue-500/5 space-y-8 flex flex-col justify-between gsap-reveal-left relative overflow-hidden">
            
            {/* Top Interactive Blueprint Box */}
            <div className="bg-slate-950 rounded-3xl p-5 border border-slate-900 overflow-hidden relative min-h-[220px] sm:min-h-[260px] flex flex-col justify-between shadow-inner">
              {/* Technical grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              
              {/* Blueprint Labels */}
              <div className="relative z-10 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Compass className="w-4.5 h-4.5 text-accent animate-spin-slow" />
                  <span className="text-[10px] font-mono font-bold tracking-wider text-blue-400 uppercase">
                    Modelagem Hidrodinâmica 2D
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg text-[9px] font-mono text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  <span>CÁLCULO ATIVO</span>
                </div>
              </div>

              {/* Central Pool Visual Representation */}
              <div className="relative flex items-center justify-center flex-grow py-6">
                <div className="relative flex items-center justify-center">
                  
                  {/* Outer pool frame border */}
                  <motion.div
                    layout
                    style={{
                      width: shape === 'circular' ? `${120 + diameter * 4}px` : `${140 + length * 3.5}px`,
                      height: shape === 'circular' ? `${120 + diameter * 4}px` : `${80 + width * 5}px`,
                      borderRadius: shape === 'rectangular' ? '16px' : shape === 'circular' ? '50%' : '80px',
                    }}
                    transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                    className="border-4 border-slate-700 bg-slate-900 shadow-2xl relative overflow-hidden flex items-center justify-center p-1"
                  >
                    {/* Pool Tiles Mosaic Background Effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:10px_10px]" />

                    {/* Water Body (Color adapts dynamically to state) */}
                    <motion.div
                      animate={{
                        backgroundColor: 
                          waterState === 'cristalina' ? '#0ea5e9' : 
                          waterState === 'turva' ? '#94a3b8' : '#059669',
                        opacity: waterState === 'turva' ? 0.75 : 0.85
                      }}
                      className="absolute inset-0 rounded-[inherit] overflow-hidden flex items-center justify-center"
                    >
                      {/* Animated wave ripples */}
                      <div className={`absolute w-[180%] h-[180%] rounded-[45%] opacity-40 bg-white/10 -top-1/2 left-1/4 animate-water-ripple`} />
                      <div className={`absolute w-[170%] h-[170%] rounded-[43%] opacity-35 bg-sky-200/10 -top-[45%] left-1/3 animate-water-ripple [animation-delay:4s]`} />
                      
                      {/* Depth gradient simulation overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 pointer-events-none" />

                      {/* Algae/Particle effects for green or cloudy state */}
                      {waterState === 'verde' && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <span className="absolute w-2 h-2 rounded-full bg-emerald-400/20 blur-[1px] animate-pulse top-4 left-6" />
                          <span className="absolute w-1.5 h-1.5 rounded-full bg-teal-400/30 blur-[1px] animate-pulse bottom-8 right-12" />
                          <span className="absolute w-2.5 h-2.5 rounded-full bg-green-500/20 blur-[1px] animate-pulse top-10 right-4" />
                        </div>
                      )}
                    </motion.div>

                    {/* Real-time dimension indicators overlay */}
                    <div className="absolute inset-0 flex flex-col justify-between p-3 select-none text-white pointer-events-none font-mono text-[9px] font-semibold text-shadow">
                      {shape !== 'circular' ? (
                        <>
                          <div className="text-center w-full bg-black/45 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/5 mx-auto max-w-fit">
                            Comp.: {length}m
                          </div>
                          <div className="flex justify-between items-center w-full">
                            <span className="bg-black/45 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/5">
                              Larg.: {width}m
                            </span>
                            <span className="bg-black/45 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/5">
                              Prof.: {depth}m
                            </span>
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-col gap-1 items-center justify-center h-full">
                          <span className="bg-black/45 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/5">
                            Diâmetro: {diameter}m
                          </span>
                          <span className="bg-black/45 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/5">
                            Prof.: {depth}m
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>

                </div>
              </div>

              {/* Real-time Blueprint Water Index Badge */}
              <div className="relative z-10 flex justify-between items-end border-t border-white/5 pt-3">
                <div className="space-y-0.5">
                  <span className="text-[8px] font-mono text-slate-500 uppercase block">Qualidade Atual</span>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${
                      waterState === 'cristalina' ? 'bg-sky-400' :
                      waterState === 'turva' ? 'bg-amber-400' : 'bg-emerald-400'
                    }`} />
                    <span className="text-[11px] font-mono text-white font-bold uppercase tracking-wider">
                      {waterState === 'cristalina' ? 'Espelho d\'Água Limpa' :
                       waterState === 'turva' ? 'Água Opaca / Saturada' : 'Contaminação por Algas'}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[8px] font-mono text-slate-500 uppercase block">Cubagem Estimada</span>
                  <span className="text-sm font-mono text-accent font-black">
                    {(volume / 1000).toFixed(1)} m³
                  </span>
                </div>
              </div>
            </div>

            {/* Step 1: Shape Selector */}
            <div className="space-y-3.5">
              <label className="text-[11px] font-bold tracking-widest text-slate-400 font-mono uppercase flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-lg bg-blue-50 text-primary text-[10px] font-black border border-blue-100/50">1</span>
                Formato Arquitetônico da Piscina
              </label>
              
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'rectangular', label: 'Retangular', desc: 'Comprimento x Largura' },
                  { id: 'circular', label: 'Circular / Redonda', desc: 'Diâmetro central' },
                  { id: 'oval', label: 'Oval / Irregular', desc: 'Arco e bordas livres' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setShape(item.id as PoolShape)}
                    className={`p-3.5 rounded-2xl border text-center transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-2 ${
                      shape === item.id 
                        ? 'border-primary bg-primary/5 text-primary shadow-md shadow-primary/5 scale-[1.02]' 
                        : 'border-slate-100 bg-slate-50/60 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center border border-slate-100/80">
                      <div className={`
                        border-2 border-current rounded-sm transition-all duration-300
                        ${item.id === 'rectangular' ? 'w-5.5 h-3.5' : ''}
                        ${item.id === 'circular' ? 'w-4.5 h-4.5 rounded-full' : ''}
                        ${item.id === 'oval' ? 'w-5.5 h-3.5 rounded-full' : ''}
                        ${shape === item.id ? 'scale-110 text-primary' : 'text-slate-400'}
                      `} />
                    </div>
                    <span className="font-display font-bold text-xs">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Dimensions sliders */}
            <div className="space-y-5">
              <label className="text-[11px] font-bold tracking-widest text-slate-400 font-mono uppercase flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-lg bg-blue-50 text-primary text-[10px] font-black border border-blue-100/50">2</span>
                Definição de Dimensões Reais
              </label>

              {shape !== 'circular' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Comprimento */}
                  <div className="space-y-2 bg-slate-50/55 p-3.5 rounded-2xl border border-slate-100/60">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-slate-600">Comprimento:</span>
                      <span className="bg-primary/10 border border-primary/20 text-primary px-2.5 py-0.5 rounded-lg font-mono font-bold text-[11px]">
                        {length} metros
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="2" 
                      max="25" 
                      step="0.5"
                      value={length} 
                      onChange={(e) => setLength(parseFloat(e.target.value))}
                      className="w-full accent-primary cursor-pointer py-1"
                    />
                    <div className="flex justify-between text-[9px] text-slate-400 font-mono">
                      <span>Mín: 2m</span>
                      <span>Máx: 25m</span>
                    </div>
                  </div>

                  {/* Largura */}
                  <div className="space-y-2 bg-slate-50/55 p-3.5 rounded-2xl border border-slate-100/60">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-slate-600">Largura:</span>
                      <span className="bg-primary/10 border border-primary/20 text-primary px-2.5 py-0.5 rounded-lg font-mono font-bold text-[11px]">
                        {width} metros
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="1.5" 
                      max="12" 
                      step="0.5"
                      value={width} 
                      onChange={(e) => setWidth(parseFloat(e.target.value))}
                      className="w-full accent-primary cursor-pointer py-1"
                    />
                    <div className="flex justify-between text-[9px] text-slate-400 font-mono">
                      <span>Mín: 1.5m</span>
                      <span>Máx: 12m</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Diâmetro para circular */
                <div className="space-y-2 bg-slate-50/55 p-3.5 rounded-2xl border border-slate-100/60">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-600">Diâmetro da Piscina:</span>
                    <span className="bg-primary/10 border border-primary/20 text-primary px-2.5 py-0.5 rounded-lg font-mono font-bold text-[11px]">
                      {diameter} metros
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="2" 
                    max="15" 
                    step="0.5"
                    value={diameter} 
                    onChange={(e) => setDiameter(parseFloat(e.target.value))}
                    className="w-full accent-primary cursor-pointer py-1"
                  />
                  <div className="flex justify-between text-[9px] text-slate-400 font-mono">
                    <span>Mín: 2m</span>
                    <span>Máx: 15m</span>
                  </div>
                </div>
              )}

              {/* Profundidade média */}
              <div className="space-y-2 bg-slate-50/55 p-3.5 rounded-2xl border border-slate-100/60">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-600 flex items-center gap-1.5">
                    Profundidade Média Estimada
                    <span className="group relative cursor-help text-slate-400 hover:text-primary transition-colors">
                      <Info className="w-3.5 h-3.5" />
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 text-white text-[10px] p-2.5 rounded-lg leading-normal w-52 hidden group-hover:block z-50 shadow-xl border border-slate-800">
                        Calcule a profundidade somando a parte rasa (ex: 1.0m) e a mais profunda (ex: 1.8m) e divida por 2.
                      </span>
                    </span>
                  </span>
                  <span className="bg-primary/10 border border-primary/20 text-primary px-2.5 py-0.5 rounded-lg font-mono font-bold text-[11px]">
                    {depth}m
                  </span>
                </div>
                <input 
                  type="range" 
                  min="0.5" 
                  max="3" 
                  step="0.1"
                  value={depth} 
                  onChange={(e) => setDepth(parseFloat(e.target.value))}
                  className="w-full accent-primary cursor-pointer py-1"
                />
                <div className="flex justify-between text-[9px] text-slate-400 font-mono">
                  <span>0.5m (Infantil / Prainha)</span>
                  <span>3.0m (Olímpica / Profunda)</span>
                </div>
              </div>
            </div>

            {/* Step 3: Water State */}
            <div className="space-y-3.5">
              <label className="text-[11px] font-bold tracking-widest text-slate-400 font-mono uppercase flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-lg bg-blue-50 text-primary text-[10px] font-black border border-blue-100/50">3</span>
                Nível de Pureza / Coloração Atual
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'cristalina', label: 'Cristalina / Limpa', desc: 'Livre de detritos e algas', accent: 'border-emerald-200 bg-emerald-50/20 text-emerald-800' },
                  { id: 'turva', label: 'Turva / Opaca', desc: 'Água sem brilho e turva', accent: 'border-amber-200 bg-amber-50/20 text-amber-800' },
                  { id: 'verde', label: 'Verde / Algas', desc: 'Infestada de algas verdes', accent: 'border-rose-200 bg-rose-50/20 text-rose-800' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setWaterState(item.id as WaterState)}
                    className={`p-3.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col gap-1.5 ${
                      waterState === item.id 
                        ? 'border-slate-950 bg-slate-950 text-white shadow-xl scale-[1.02]' 
                        : 'border-slate-100 bg-slate-50/60 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-display font-bold text-xs sm:text-sm">{item.label}</span>
                      <span className={`w-3 h-3 rounded-full shrink-0 ${
                        item.id === 'cristalina' ? 'bg-sky-400' :
                        item.id === 'turva' ? 'bg-amber-400' : 'bg-emerald-400'
                      }`} />
                    </div>
                    <p className={`text-[10px] leading-tight font-medium ${waterState === item.id ? 'text-slate-300' : 'text-slate-400'}`}>
                      {item.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Frequency */}
            <div className="space-y-3.5">
              <label className="text-[11px] font-bold tracking-widest text-slate-400 font-mono uppercase flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-lg bg-blue-50 text-primary text-[10px] font-black border border-blue-100/50">4</span>
                Frequência de Limpeza Desejada
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'semanal', label: 'Plano Mensal', desc: 'Tratamento 1x por semana', badge: 'Recomendado' },
                  { id: 'quinzenal', label: 'Plano Básico', desc: 'Visitas a cada 15 dias', badge: 'Econômico' },
                  { id: 'avulso', label: 'Serviço Avulso', desc: 'Limpeza de Choque única', badge: 'Pontual' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setFrequency(item.id as Frequency)}
                    className={`p-3.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col gap-1.5 relative overflow-hidden ${
                      frequency === item.id 
                        ? 'border-primary bg-primary text-white shadow-xl shadow-primary/20 scale-[1.02]' 
                        : 'border-slate-100 bg-slate-50/60 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {/* Badge top corner */}
                    <div className={`absolute top-2 right-2 text-[8px] font-mono font-bold uppercase px-1.5 py-0.5 rounded ${
                      frequency === item.id ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-400'
                    }`}>
                      {item.badge}
                    </div>

                    <span className="font-display font-bold text-xs sm:text-sm mt-1">{item.label}</span>
                    <p className={`text-[10px] leading-tight font-medium ${frequency === item.id ? 'text-blue-100' : 'text-slate-400'}`}>
                      {item.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right panel: Premium Diagnostics & Result Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-dark via-slate-900 to-slate-950 rounded-3.5xl p-6 sm:p-8 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden border border-white/5 gsap-reveal-right">
            {/* Ambient background glows */}
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/20 filter blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-accent/15 filter blur-3xl" />

            <div className="relative z-10 space-y-7">
              {/* Card Header Title */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold flex items-center gap-1">
                    <Activity className="w-3 h-3 text-accent" />
                    Diagnóstico Químico Laboratorial
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl mt-1 text-white">
                    Parâmetros Estimados
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Calculator className="w-4.5 h-4.5 text-accent" />
                </div>
              </div>

              {/* Volume Highlight Circle layout */}
              <div className="py-5 bg-white/3 border border-white/5 rounded-2.5xl flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
                <div className="absolute top-2 right-3 flex items-center gap-1 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md text-[8px] font-mono text-slate-400">
                  <Layers className="w-2.5 h-2.5" />
                  <span>METRAGEM CÚBICA</span>
                </div>

                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold">
                  Volume de Água Estimado
                </span>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center text-accent">
                    <Droplet className="w-4.5 h-4.5 fill-current animate-pulse text-accent" />
                  </div>
                  <motion.span 
                    key={volume}
                    initial={{ opacity: 0.3, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display font-black text-3xl sm:text-4xl lg:text-4.5xl text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-200 to-white tracking-tight"
                  >
                    {volume.toLocaleString('pt-BR')} <span className="text-base font-bold font-sans text-slate-300 ml-0.5">Litros</span>
                  </motion.span>
                </div>
                <span className="text-[10px] text-slate-400 mt-1.5 font-mono">
                  Massa de água estimada: <strong className="text-slate-200">{(volume / 1000).toFixed(1)} m³</strong>
                </span>
              </div>

              {/* Water Health Condition Indicator */}
              <div className="p-4 rounded-2xl bg-white/3 border border-white/5 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-slate-400" />
                    Índice de Saúde Biológica:
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-bold border ${healthScore.color}`}>
                    {healthScore.label}
                  </span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-300">
                  {healthScore.desc}
                </p>
              </div>

              {/* Recommended dosages List with clean layout */}
              <div className="space-y-4">
                <h4 className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold flex items-center gap-1.5">
                  <Wrench className="w-3 h-3" />
                  Dosagens Corretivas Recomendadas
                </h4>

                <div className="grid grid-cols-2 gap-3.5">
                  
                  {/* Filtration Time card */}
                  <div className="p-3.5 bg-white/3 border border-white/5 rounded-xl space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase font-mono">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      Filtração Diária
                    </div>
                    <p className="text-lg font-black font-mono text-white">
                      <motion.span
                        key={filtrationTime}
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.35 }}
                      >
                        {filtrationTime}
                      </motion.span> <span className="text-xs font-sans font-normal text-slate-300">Horas/dia</span>
                    </p>
                  </div>

                  {/* Chlorine dosage card */}
                  <div className="p-3.5 bg-white/3 border border-white/5 rounded-xl space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase font-mono">
                      <Sparkle className="w-3.5 h-3.5 text-accent" />
                      Cloro de Manutenção
                    </div>
                    <p className="text-lg font-black font-mono text-white">
                      ~<motion.span
                        key={dailyChlorine}
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.35 }}
                      >
                        {dailyChlorine}
                      </motion.span>g <span className="text-xs font-sans font-normal text-slate-300">/dia</span>
                    </p>
                  </div>

                  {/* Decanter Clarifier corrective dosage card */}
                  <div className="p-3.5 bg-white/3 border border-white/5 rounded-xl space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase font-mono">
                      <Layers className="w-3.5 h-3.5 text-accent" />
                      Clarificante / Floc.
                    </div>
                    <p className="text-lg font-black font-mono text-white">
                      {clarifier > 0 ? (
                        <>
                          <motion.span
                            key={clarifier}
                            initial={{ opacity: 0.3 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.35 }}
                          >
                            {clarifier}
                          </motion.span> <span className="text-xs font-sans font-normal text-slate-300">ml</span>
                        </>
                      ) : (
                        <span className="text-xs font-sans font-normal text-slate-400">Desnecessário</span>
                      )}
                    </p>
                  </div>

                  {/* Algicide dosage card */}
                  <div className="p-3.5 bg-white/3 border border-white/5 rounded-xl space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase font-mono">
                      <Droplet className="w-3.5 h-3.5 text-accent" />
                      Algicida Protetor
                    </div>
                    <p className="text-lg font-black font-mono text-white">
                      {algicide > 0 ? (
                        <>
                          <motion.span
                            key={algicide}
                            initial={{ opacity: 0.3 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.35 }}
                          >
                            {algicide}
                          </motion.span> <span className="text-xs font-sans font-normal text-slate-300">ml</span>
                        </>
                      ) : (
                        <span className="text-xs font-sans font-normal text-slate-400">Desnecessário</span>
                      )}
                    </p>
                  </div>

                </div>

                {/* Additional chemical correction warnings */}
                {waterState !== 'cristalina' && (
                  <div className="p-3 bg-rose-950/20 border border-rose-500/25 rounded-xl flex items-start gap-2.5 text-xs text-rose-300 font-medium">
                    <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Ação Corretiva Exigida:</p>
                      <p className="text-[11px] text-rose-300/80 mt-0.5">
                        A dosagem calculada necessita de ajuste de Alcalinidade e pH prévios para maximizar o efeito do cloro de choque (~{shockChlorine}g necessários).
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Dynamic Budget display box */}
              <div className="p-4.5 rounded-2.5xl bg-white/5 border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono tracking-wider text-slate-400 uppercase font-bold block">
                    Custo Estimado do {frequency === 'avulso' ? 'Serviço de Choque' : 'Plano Mensal'}
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-xs font-semibold text-slate-300 font-mono">R$</span>
                    <motion.span 
                      key={estimatedCost}
                      initial={{ opacity: 0.3, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="font-display font-black text-2.5xl sm:text-3xl text-white inline-block tracking-tight"
                    >
                      {estimatedCost}
                    </motion.span>
                    {frequency !== 'avulso' && <span className="text-[10px] text-slate-400 font-normal">/mês</span>}
                  </div>
                </div>
                <div className={`px-2.5 py-1.5 rounded-xl text-[10px] font-bold border ${
                  frequency === 'avulso' 
                    ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' 
                    : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                }`}>
                  {frequency === 'avulso' ? 'Atendimento Único' : 'Plano Recorrente'}
                </div>
              </div>
            </div>

            {/* Bottom button WhatsApp trigger action */}
            <div className="mt-8 pt-6 border-t border-white/5 relative z-10">
              <button
                onClick={handleWhatsAppSend}
                className="w-full py-4 bg-primary hover:bg-primary-dark hover:-translate-y-0.5 active:translate-y-0 text-white font-bold rounded-2xl text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-primary/25 hover:shadow-primary/45 transition-all duration-300 cursor-pointer group"
              >
                <MessageSquare className="w-5 h-5 group-hover:rotate-6 transition-transform" />
                <span>Obter Orçamento Personalizado</span>
              </button>
              <p className="text-[9.5px] text-center text-slate-500 mt-3 font-mono">
                *O diagnóstico é calculado via análise estatística padrão. Agende a visita de avaliação física gratuita.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
