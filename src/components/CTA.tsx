import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const CTA: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section id="cta" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.pixabay.com/photo/2014/11/17/13/17/crossfit-534615_1280.jpg"
          alt="Gym background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        {/* Red gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-12 bg-red-600" />
            <Zap className="w-5 h-5 text-red-500" />
            <div className="h-px w-12 bg-red-600" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-white leading-tight tracking-tight mb-6">
            Ready to Start Your{' '}
            <span className="text-red-500">Fitness</span>{' '}
            Journey?
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Join over 5,000 members who've already transformed their bodies and lives at IronCore Fitness.
            Your transformation starts today.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-12 py-5 text-sm uppercase tracking-widest transition-colors duration-300 group"
            style={{ clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)' }}
          >
            Join Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <p className="text-gray-500 text-sm mt-6">
            7-day free trial • No commitment required • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
