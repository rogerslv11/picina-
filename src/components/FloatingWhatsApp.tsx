import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Droplets, Sparkles } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 5 seconds to invite action
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end select-none">
      
      {/* Interactive Mimic Chatbox Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-80 max-w-[90vw] bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 mb-4"
          >
            {/* Header section (green/teal brand colors) */}
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-4 text-white relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-7 h-7 rounded-full bg-black/10 hover:bg-black/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full border border-white/20 overflow-hidden bg-white/10 shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&h=120&q=80" 
                    alt="Marcos - PiscinaClean" 
                    className="w-full h-full object-cover"
                  />
                  {/* Active online dot */}
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-emerald-500" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm leading-tight flex items-center gap-1">
                    <span>Marcos Oliveira</span>
                    <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
                  </h4>
                  <p className="text-[10px] text-green-100 font-medium mt-0.5">Suporte Técnico & Comercial</p>
                </div>
              </div>
            </div>

            {/* Chat Conversation Area */}
            <div className="p-4 bg-slate-50 space-y-3 h-48 overflow-y-auto">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-slate-700 leading-relaxed border border-slate-100">
                <p>Olá! Tudo bem? Sou o Marcos, químico responsável da PiscinaClean Pro. 💧</p>
              </div>
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-slate-700 leading-relaxed border border-slate-100">
                <p>Como posso ajudar você hoje? Posso agendar sua visita técnica gratuita ou esclarecer dúvidas sobre águas esverdeadas.</p>
              </div>
              <p className="text-[9px] text-center text-slate-400 font-mono">
                Tempo médio de resposta: 5 minutos
              </p>
            </div>

            {/* Ingress to WhatsApp Action Button */}
            <div className="p-3 bg-white border-t border-slate-50">
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1%21+Gostaria+de+falar+com+o+qu%C3%ADmico+respons%C3%A1vel+sobre+manuten%C3%A7%C3%A3o+de+piscina."
                target="_blank"
                referrerPolicy="no-referrer"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl text-xs flex items-center justify-center gap-2 shadow-md shadow-green-500/10"
              >
                <Send className="w-4 h-4 fill-white" />
                <span>Iniciar Conversa no WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating pulsing button */}
      <div className="relative flex items-center justify-center">
        {/* Tooltip inviting click */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-18 bg-white border border-slate-100 text-slate-800 font-semibold text-xs px-4 py-2.5 rounded-2xl shadow-xl whitespace-nowrap flex items-center gap-2 mr-1"
            >
              <Droplets className="w-4 h-4 text-primary animate-bounce" />
              <span>Dúvidas? Fale com o químico</span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTooltip(false);
                }} 
                className="text-slate-400 hover:text-slate-600 ml-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Core Trigger Circle with Pulsing background layers */}
        <div className="absolute w-14 h-14 rounded-full bg-green-500/30 animate-ping z-0" />
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-tr from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-green-500/20"
          title="Fale Conosco"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6 fill-white" />}
        </button>
      </div>

    </div>
  );
}
