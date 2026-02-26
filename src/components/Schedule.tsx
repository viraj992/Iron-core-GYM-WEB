import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { schedule, classTypes } from '../data/schedule';
import type { ClassType } from '../data/schedule';
import { Filter } from 'lucide-react';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const classColorMap: Record<string, string> = {
  'HIIT Blast': 'bg-red-900/40 text-red-400 border border-red-800/50',
  'Yoga Flow': 'bg-emerald-900/40 text-emerald-400 border border-emerald-800/50',
  'CrossFit': 'bg-orange-900/40 text-orange-400 border border-orange-800/50',
  'Strength': 'bg-blue-900/40 text-blue-400 border border-blue-800/50',
  'Cardio Burn': 'bg-purple-900/40 text-purple-400 border border-purple-800/50',
  'Bodybuilding': 'bg-yellow-900/40 text-yellow-400 border border-yellow-800/50',
  'Cardio HIIT': 'bg-pink-900/40 text-pink-400 border border-pink-800/50',
  'Yoga & Flex': 'bg-teal-900/40 text-teal-400 border border-teal-800/50',
};

const Schedule: React.FC = () => {
  const [filterClass, setFilterClass] = useState<ClassType>('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const getClass = (className: string) => {
    if (filterClass === 'All') return true;
    return className.toLowerCase().includes(filterClass.toLowerCase());
  };

  return (
    <section id="schedule" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-red-500 text-sm font-semibold uppercase tracking-[0.3em] mb-4 block">
            Weekly Timetable
          </span>
          <h2 className="section-title">Class Schedule</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Plan your week with our diverse class offerings. New sessions added weekly.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Filter className="w-4 h-4" />
            <span>Filter:</span>
          </div>
          {classTypes.map((cls) => (
            <button
              key={cls}
              onClick={() => setFilterClass(cls)}
              className={`text-xs px-4 py-2 font-bold uppercase tracking-widest transition-all duration-200 ${
                filterClass === cls
                  ? 'bg-red-600 text-white'
                  : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'
              }`}
            >
              {cls}
            </button>
          ))}
        </motion.div>

        {/* Schedule Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="overflow-x-auto scrollbar-hide"
        >
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left text-xs font-bold uppercase tracking-widest text-gray-500 py-4 pr-6 w-28">
                  Time
                </th>
                {days.map((day) => (
                  <th key={day} className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 py-4 px-2">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, ri) => (
                <tr key={ri} className="border-b border-zinc-900 hover:bg-zinc-900/50 transition-colors">
                  <td className="py-4 pr-6">
                    <span className="text-red-500 font-bold text-sm font-display">{row.time}</span>
                  </td>
                  {days.map((day) => {
                    const dayKey = day.toLowerCase() as keyof typeof row;
                    const classInfo = row[dayKey] as { class: string; trainer: string; spots: number };
                    const isVisible = getClass(classInfo.class);
                    return (
                      <td key={day} className="py-3 px-2 text-center">
                        {isVisible ? (
                          <div className={`${classColorMap[classInfo.class] || 'bg-zinc-800/50 text-gray-400'} px-2 py-2 text-xs`}>
                            <div className="font-bold">{classInfo.class}</div>
                            <div className="opacity-70 mt-0.5">{classInfo.trainer}</div>
                            <div className="opacity-50 text-xs mt-0.5">{classInfo.spots} spots</div>
                          </div>
                        ) : (
                          <div className="px-2 py-2 text-xs opacity-20">
                            <div className="font-bold text-gray-600">{classInfo.class}</div>
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-600 text-xs mt-6"
        >
          * Saturday & Sunday: Open gym only (8 AM – 6 PM). Special classes available on selected weekends.
        </motion.p>
      </div>
    </section>
  );
};

export default Schedule;
