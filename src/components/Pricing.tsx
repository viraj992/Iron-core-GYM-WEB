import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    monthlyPrice: 29,
    yearlyPrice: 24,
    description: 'Perfect for beginners starting their fitness journey.',
    features: [
      'Full Gym Access (6 AM – 10 PM)',
      'Locker Room & Showers',
      '2 Group Classes / Week',
      'Basic Fitness Assessment',
      'Mobile App Access',
      'Guest Pass (1/month)',
    ],
    notIncluded: ['Personal Training Sessions', 'Nutrition Counseling', 'Priority Booking'],
    popular: false,
    color: 'border-zinc-700',
    btnClass: 'border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white',
  },
  {
    name: 'Pro',
    monthlyPrice: 59,
    yearlyPrice: 49,
    description: 'The most popular choice for serious fitness enthusiasts.',
    features: [
      '24/7 Gym Access',
      'Unlimited Group Classes',
      '4 Personal Training Sessions / Month',
      'Advanced Body Composition Analysis',
      'Nutrition Counseling (2/month)',
      'Priority Class Booking',
      'Guest Pass (3/month)',
      'Recovery Room Access',
    ],
    notIncluded: ['Elite Coaching'],
    popular: true,
    color: 'border-red-600',
    btnClass: 'bg-red-600 text-white hover:bg-red-700',
  },
  {
    name: 'Elite',
    monthlyPrice: 99,
    yearlyPrice: 82,
    description: 'The ultimate package for maximum results and transformation.',
    features: [
      'Everything in Pro',
      'Unlimited Personal Training',
      'Dedicated Personal Coach',
      'Custom Meal Plans',
      'Monthly Blood Work Analysis',
      'Competition Prep (if desired)',
      'Unlimited Guest Passes',
      'VIP Lounge Access',
      'Priority Support',
    ],
    notIncluded: [],
    popular: false,
    color: 'border-zinc-600',
    btnClass: 'border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white',
  },
];

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="pricing" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(127,29,29,0.1)_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-red-500 text-sm font-semibold uppercase tracking-[0.3em] mb-4 block">
            Membership
          </span>
          <h2 className="section-title">Choose Your Plan</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Flexible membership options designed to fit every budget and fitness goal.
          </p>

          
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: plan.popular ? 1.02 : 1.03, y: -5 }}
              className={`relative bg-zinc-900 border-2 ${plan.color} p-8 transition-all duration-300 ${
                plan.popular ? 'scale-105 shadow-2xl shadow-red-900/30' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 px-6 py-1.5 flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  <span className="text-white text-xs font-bold uppercase tracking-widest">Most Popular</span>
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  {plan.popular && <Zap className="w-4 h-4 text-red-500" />}
                  <h3 className="font-display text-2xl font-bold text-white uppercase tracking-widest">
                    {plan.name}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-zinc-800">
                <div className="flex items-end gap-1">
                  <span className="text-red-500 text-2xl font-bold">$</span>
                  <span className="font-display text-6xl font-bold text-white leading-none">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500 mb-2">/mo</span>
                </div>
                {isYearly && (
                  <p className="text-green-500 text-xs mt-1">
                    Billed ${(plan.yearlyPrice * 12).toLocaleString()}/year
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    {feat}
                  </li>
                ))}
                {plan.notIncluded.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-zinc-600 line-through">
                    <Check className="w-4 h-4 text-zinc-700 shrink-0 mt-0.5" />
                    {feat}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3.5 font-bold uppercase tracking-widest text-sm transition-all duration-300 ${plan.btnClass}`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-600 text-xs mt-8"
        >
          No contract required. Cancel anytime. All plans include a 7-day free trial.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
