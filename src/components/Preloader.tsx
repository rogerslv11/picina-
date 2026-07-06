import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Droplets } from 'lucide-react';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800); // Wait 1.8s for a beautiful initial experience
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-dark text-white select-none"
        >
          {/* Wave and water drop elements */}
          <div className="relative flex flex-col items-center">
            {/* Pulsing water background ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.2, 0.8], 
                opacity: [0.2, 0.4, 0.2] 
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
              className="absolute w-28 h-28 rounded-full border border-primary/40 bg-primary/10"
            />

            {/* Main spinning aquatic icon */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: 'linear' 
              }}
              className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-primary to-accent shadow-lg shadow-primary/30 text-white"
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: [0.25, 1, 0.5, 1]
                }}
              >
                <Droplets className="w-10 h-10" />
              </motion.div>
            </motion.div>

            {/* Glowing pool light effect below */}
            <div className="mt-8 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="font-display font-bold text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-accent"
              >
                PISCINACLEAN PRO
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-2 text-xs font-mono tracking-widest text-accent uppercase"
              >
                Tratamento e Manutenção Premium
              </motion.p>
            </div>
          </div>

          {/* Loading progress bar at bottom */}
          <div className="absolute bottom-12 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-primary to-accent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
