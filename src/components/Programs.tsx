import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight, Clock, BarChart3 } from 'lucide-react';

// Example program categories
const programCategories = ['All', 'Strength', 'Cardio', 'Flexibility'];

// Example programs data
const programs = [
  {
    id: 1,
    title: 'Personal Training',
    category: 'strength',
    image: 'https://cdn.pixabay.com/photo/2017/04/25/20/18/woman-2260736_1280.jpg',
    description: 'One-on-one sessions tailored to your specific goals with certified personal trainers.',
    duration: '60 min',
    level: 'All Levels',
    icon: '🏋️',
  },
  {
    id: 2,
    title: 'CrossFit',
    category: 'strength',
    image: 'https://cdn.pixabay.com/photo/2014/11/17/13/17/crossfit-534615_1280.jpg',
    description: 'High-intensity functional movements that combine cardio, weightlifting, and gymnastics.',
    duration: '45 min',
    level: 'Intermediate',
    icon: '⚡',
  },
  {
    id: 3,
    title: 'Bodybuilding',
    category: 'strength',
    image: 'https://cdn.pixabay.com/photo/2016/03/27/23/00/weight-lifting-1284616_1280.jpg',
    description: 'Structured hypertrophy programs designed to maximize muscle mass and definition.',
    duration: '75 min',
    level: 'Intermediate',
    icon: '💪',
  },
  {
    id: 4,
    title: 'Weight Loss Program',
    category: 'cardio',
    image: 'https://cdn.pixabay.com/photo/2016/11/22/22/24/adult-1850925_1280.jpg',
    description: 'Comprehensive fat-burning program combining cardio, nutrition, and resistance training.',
    duration: '50 min',
    level: 'Beginner',
    icon: '🔥',
  },
  {
    id: 5,
    title: 'Cardio & HIIT',
    category: 'cardio',
    image: 'https://cdn.pixabay.com/photo/2017/08/16/09/46/female-2646996_1280.jpg',
    description: 'High-Intensity Interval Training to maximize calorie burn and boost cardiovascular health.',
    duration: '40 min',
    level: 'All Levels',
    icon: '❤️',
  },
  {
    id: 6,
    title: 'Yoga & Flexibility',
    category: 'flexibility',
    image: 'https://cdn.pixabay.com/photo/2015/01/18/23/08/mobility-603558_1280.jpg',
    description: 'Improve flexibility, balance, and mindfulness with our expert-led yoga classes.',
    duration: '60 min',
    level: 'All Levels',
    icon: '🧘',
  },
];

const Programs: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Filter programs based on selected category
  const filteredPrograms =
    activeFilter === 'All'
      ? programs
      : programs.filter(p => p.category === activeFilter.toLowerCase());

  return (
    <section id="programs" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-red-500 text-sm font-semibold uppercase tracking-[0.3em] mb-4 block">
            What We Offer
          </span>
          <h2 className="section-title">Our Programs</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Expertly designed programs for every fitness level and goal, led by certified professionals.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {programCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-red-600 text-white border-2 border-red-600'
                  : 'bg-transparent text-gray-400 border-2 border-zinc-700 hover:border-red-600 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Program Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program, i) => (
              <motion.div
                key={program.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-red-600/50 transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
                      {program.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-black/60 flex items-center justify-center text-xl">
                    {program.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-5">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-red-500" />
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BarChart3 className="w-3.5 h-3.5 text-red-500" />
                      {program.level}
                    </span>
                  </div>

                  <button className="flex items-center gap-2 text-red-500 text-sm font-bold uppercase tracking-widest hover:gap-4 transition-all duration-200 group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;