import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Dumbbell, Apple, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    description: 'State-of-the-art strength equipment and expert-designed programs to build raw power and muscle mass.',
    color: 'from-red-900/50 to-red-800/20',
    borderColor: 'border-red-800/50',
  },
  {
    icon: Apple,
    title: 'Nutrition Guidance',
    description: 'Personalized nutrition plans created by certified dietitians to fuel your performance and accelerate results.',
    color: 'from-zinc-900 to-zinc-800/20',
    borderColor: 'border-zinc-700/50',
  },
  {
    icon: Clock,
    title: '24/7 Access',
    description: 'Train on your schedule with round-the-clock gym access, keycard entry, and 24/7 security monitoring.',
    color: 'from-zinc-900 to-zinc-800/20',
    borderColor: 'border-zinc-700/50',
  },
  {
    icon: Users,
    title: 'Group Classes',
    description: 'Over 50 weekly group classes from HIIT to Yoga, led by certified instructors in a motivating environment.',
    color: 'from-zinc-900 to-zinc-800/20',
    borderColor: 'border-zinc-700/50',
  },
];

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-900/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-900/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-500 text-sm font-semibold uppercase tracking-[0.3em] mb-4 block">
            Our Difference
          </span>
          <h2 className="section-title red-underline red-underline-center inline-block pb-4">
            Why Choose IronCore?
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-8">
            We don't just provide a gym — we deliver a complete transformation ecosystem built on science, expertise, and relentless dedication.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className={`bg-gradient-to-b ${feature.color} border ${feature.borderColor} p-8 cursor-pointer group transition-all duration-300`}
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                <div className="w-14 h-14 bg-red-600/10 border border-red-600/30 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
                  <Icon className="w-7 h-7 text-red-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6 w-8 h-0.5 bg-red-600 group-hover:w-16 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Image Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-3 gap-4 h-64 md:h-80"
        >
          <div className="col-span-1 overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/27/23/00/weight-lifting-1284616_1280.jpg"
              alt="Weight training"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="col-span-1 overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2015/09/14/23/40/dumbbell-940375_1280.jpg"
              alt="Dumbbell training"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="col-span-1 overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/16/09/46/female-2646996_1280.jpg"
              alt="Group fitness"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
