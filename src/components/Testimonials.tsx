import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-zinc-700'}`}
      />
    ))}
  </div>
);

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!auto) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [auto]);

  const prev = () => {
    setAuto(false);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setAuto(false);
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(127,29,29,0.15)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-500 text-sm font-semibold uppercase tracking-[0.3em] mb-4 block">
            Success Stories
          </span>
          <h2 className="section-title">Real Results, Real People</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Thousands of members have transformed their lives at IronCore. Here are some of their stories.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-zinc-900 border border-zinc-800 p-8 md:p-12"
            >
              <Quote className="w-10 h-10 text-red-600/40 mb-6" />

              <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 italic">
                "{testimonials[active].text}"
              </p>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-red-600">
                    <img
                      src={testimonials[active].image}
                      alt={testimonials[active].name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonials[active].name}</h4>
                    <p className="text-gray-500 text-sm">{testimonials[active].role}</p>
                    <StarRating rating={testimonials[active].rating} />
                  </div>
                </div>
                <div className="bg-red-900/20 border border-red-800/30 px-4 py-2">
                  <span className="text-red-400 text-sm font-semibold">🏆 {testimonials[active].transformation}</span>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setAuto(false); setActive(i); }}
                    className={`h-1 transition-all duration-300 ${
                      i === active ? 'w-8 bg-red-600' : 'w-4 bg-zinc-700 hover:bg-zinc-600'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 border border-zinc-700 hover:border-red-600 flex items-center justify-center text-gray-400 hover:text-red-400 transition-all duration-200"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 border border-zinc-700 hover:border-red-600 flex items-center justify-center text-gray-400 hover:text-red-400 transition-all duration-200"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              onClick={() => { setAuto(false); setActive(i); }}
              className={`text-left p-4 border transition-all duration-300 ${
                active === i
                  ? 'bg-red-900/20 border-red-600/50'
                  : 'bg-zinc-900 border-zinc-800 hover:border-zinc-600'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-700">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <div className="text-white text-sm font-bold">{t.name}</div>
                  <StarRating rating={t.rating} />
                </div>
              </div>
              <p className="text-gray-500 text-xs line-clamp-2">{t.text}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
