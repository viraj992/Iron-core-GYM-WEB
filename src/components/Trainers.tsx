import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Award } from 'lucide-react';
import { trainers } from '../data/trainers';

const Trainers: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="trainers" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(127,29,29,0.1)_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-500 text-sm font-semibold uppercase tracking-[0.3em] mb-4 block">
            Expert Team
          </span>
          <h2 className="section-title">Meet Our Trainers</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            World-class coaches with proven track records in competitive sports, coaching, and personal transformation.
          </p>
        </motion.div>

        {/* Trainer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer"
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-red-900/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="border-2 border-white text-white font-bold px-6 py-2.5 text-sm uppercase tracking-widest hover:bg-white hover:text-red-700 transition-colors duration-200 mb-4">
                    View Profile
                  </button>
                  <div className="flex gap-4">
                    <a href={trainer.socials.instagram} className="text-white hover:text-red-300 transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href={trainer.socials.twitter} className="text-white hover:text-red-300 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={trainer.socials.linkedin} className="text-white hover:text-red-300 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide">
                  {trainer.name}
                </h3>
                <p className="text-red-500 text-sm font-semibold mt-1">{trainer.specialization}</p>
                <div className="flex items-center gap-1.5 mt-2 text-gray-500 text-xs">
                  <Award className="w-3.5 h-3.5" />
                  <span>{trainer.experience} Experience</span>
                </div>

                {/* Certifications */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {trainer.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="text-xs bg-zinc-800 text-gray-400 px-2 py-0.5"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
