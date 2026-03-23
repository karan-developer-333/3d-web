import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Suspense, lazy } from 'react';
import Magnetic from './Magnetic';

const Scene = lazy(() => import('./Scene'));

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* 3D Background Scene with Suspense for Lazy Loading */}
      <Suspense fallback={<div className="absolute inset-0 bg-background animate-pulse" />}>
        <Scene />
      </Suspense>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-4 md:mb-6"
        >
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.6em] text-muted font-medium">
            Designing for the future
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-[0.1em] md:tracking-[0.15em] text-foreground uppercase mb-8 md:mb-12 leading-tight"
        >
          Abstract
        </motion.h1>

        <Magnetic strength={0.2}>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="px-8 md:px-12 py-3 border border-white/30 rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium hover:bg-white hover:text-background transition-all duration-500"
          >
            Join Us
          </motion.button>
        </Magnetic>
      </div>


      {/* Slider Controls - Hidden on small mobile */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-4 z-20">
        <button className="w-10 h-10 md:w-12 md:h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors">
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-muted" />
        </button>
      </div>
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-4 z-20">
        <button className="w-10 h-10 md:w-12 md:h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors">
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-muted" />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {[0, 1, 2, 3].map((i) => (
          <div 
            key={i} 
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === 1 ? 'bg-white scale-125' : 'bg-white/20'}`}
          />
        ))}
      </div>
    </section>
  );
}

