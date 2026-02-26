import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calculator, ChevronRight } from 'lucide-react';

type BMICategory = 'Underweight' | 'Normal' | 'Overweight' | 'Obese' | null;

const getBMIInfo = (bmi: number | null): { category: BMICategory; color: string; bgColor: string; barWidth: string } => {
  if (bmi === null) return { category: null, color: '', bgColor: '', barWidth: '0%' };
  if (bmi < 18.5) return { category: 'Underweight', color: 'text-blue-400', bgColor: 'bg-blue-500', barWidth: `${Math.min((bmi / 40) * 100, 100)}%` };
  if (bmi < 25) return { category: 'Normal', color: 'text-green-400', bgColor: 'bg-green-500', barWidth: `${Math.min((bmi / 40) * 100, 100)}%` };
  if (bmi < 30) return { category: 'Overweight', color: 'text-yellow-400', bgColor: 'bg-yellow-500', barWidth: `${Math.min((bmi / 40) * 100, 100)}%` };
  return { category: 'Obese', color: 'text-red-400', bgColor: 'bg-red-500', barWidth: `${Math.min((bmi / 40) * 100, 100)}%` };
};

const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [calculated, setCalculated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!h || !w || h <= 0 || w <= 0) return;
    const heightM = h / 100;
    const result = w / (heightM * heightM);
    setBmi(parseFloat(result.toFixed(1)));
    setCalculated(true);
  };

  const reset = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    setCalculated(false);
  };

  const { category, color, bgColor, barWidth } = getBMIInfo(bmi);

  const categories = [
    { label: 'Underweight', range: '< 18.5', color: 'bg-blue-500' },
    { label: 'Normal', range: '18.5 – 24.9', color: 'bg-green-500' },
    { label: 'Overweight', range: '25 – 29.9', color: 'bg-yellow-500' },
    { label: 'Obese', range: '≥ 30', color: 'bg-red-500' },
  ];

  return (
    <section id="bmi" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute right-0 top-0 w-96 h-96 bg-red-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-red-500 text-sm font-semibold uppercase tracking-[0.3em] mb-4 block">
              Health Tool
            </span>
            <h2 className="section-title mb-6">BMI Calculator</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Body Mass Index (BMI) is a simple measurement to assess your body weight relative to height.
              Use this tool to get an instant health snapshot and take the first step toward your transformation.
            </p>

            {/* BMI Range Info */}
            <div className="space-y-3">
              {categories.map((cat) => (
                <div key={cat.label} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${cat.color}`} />
                  <span className="text-gray-300 text-sm font-semibold w-28">{cat.label}</span>
                  <span className="text-gray-500 text-sm">{cat.range}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-900 border border-zinc-800 p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide">
                Calculate Your BMI
              </h3>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">
                  Height (cm)
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="e.g. 175"
                  min="100"
                  max="250"
                  className="w-full bg-zinc-800 border border-zinc-700 focus:border-red-600 text-white px-4 py-3 outline-none transition-colors duration-200 placeholder-zinc-600"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g. 75"
                  min="20"
                  max="300"
                  className="w-full bg-zinc-800 border border-zinc-700 focus:border-red-600 text-white px-4 py-3 outline-none transition-colors duration-200 placeholder-zinc-600"
                />
              </div>
            </div>

            <button
              onClick={calculateBMI}
              className="w-full btn-primary py-4 flex items-center justify-center gap-2"
            >
              Calculate BMI
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Result */}
            {calculated && bmi !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-6 pt-6 border-t border-zinc-800"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-400 text-sm">Your BMI</span>
                  <span className={`font-display text-4xl font-bold ${color}`}>{bmi}</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-3 bg-zinc-800 mb-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: barWidth }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className={`h-full ${bgColor}`}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className={`font-bold text-lg ${color}`}>{category}</span>
                  <button
                    onClick={reset}
                    className="text-gray-500 hover:text-red-400 text-xs uppercase tracking-widest transition-colors"
                  >
                    Reset
                  </button>
                </div>

                {category !== 'Normal' && (
                  <div className="mt-4 p-3 bg-red-900/20 border border-red-800/30 text-red-400 text-xs">
                    💡 Our personal trainers can help you achieve a healthy BMI. 
                    <button className="underline ml-1 hover:text-red-300">Book a consultation →</button>
                  </div>
                )}
                {category === 'Normal' && (
                  <div className="mt-4 p-3 bg-green-900/20 border border-green-800/30 text-green-400 text-xs">
                    ✅ Great work! You're in the healthy range. Let's optimize your performance even further!
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
