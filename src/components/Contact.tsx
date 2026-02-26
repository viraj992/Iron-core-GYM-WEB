import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'No. 15, 2nd Lane, Colombo \n00300 SRI LANKA',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '011 555 7663',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@ironcorefitness.com',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon–Fri: 5 AM – 11 PM\nSat–Sun: 7 AM – 9 PM\n24/7 for Elite Members',
  },
];

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-500 text-sm font-semibold uppercase tracking-[0.3em] mb-4 block">
            Get In Touch
          </span>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <div key={i} className="bg-zinc-900 border border-zinc-800 p-5 hover:border-red-800/50 transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-red-600/20 border border-red-600/30 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-red-500" />
                      </div>
                      <span className="text-gray-400 text-xs uppercase tracking-widest">{info.label}</span>
                    </div>
                    <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-line">
                      {info.value}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Embedded Map Placeholder */}
            <div className="relative overflow-hidden h-64 border border-zinc-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2134239087476!2d-73.9934453!3d40.7505045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sMadison%20Square%20Garden!5e0!3m2!1sen!2sus!4v1706000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.7)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IronCore Fitness Location"
              />
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-zinc-900 border border-zinc-800 p-8">
              <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="w-full bg-zinc-800 border border-zinc-700 focus:border-red-600 text-white px-4 py-3 outline-none transition-colors duration-200 placeholder-zinc-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-zinc-800 border border-zinc-700 focus:border-red-600 text-white px-4 py-3 outline-none transition-colors duration-200 placeholder-zinc-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your fitness goals..."
                    required
                    rows={5}
                    className="w-full bg-zinc-800 border border-zinc-700 focus:border-red-600 text-white px-4 py-3 outline-none transition-colors duration-200 placeholder-zinc-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full flex items-center justify-center gap-2 font-bold py-4 text-sm uppercase tracking-widest transition-all duration-300 ${
                    submitted
                      ? 'bg-green-600 text-white'
                      : 'bg-red-600 hover:bg-red-700 text-white'
                  }`}
                >
                  {submitted ? (
                    <>✓ Message Sent!</>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-zinc-800">
                <p className="text-gray-500 text-sm text-center">
                  Or call us directly at{' '}
                  <a href="tel:+15554267663" className="text-red-400 hover:text-red-300 font-semibold">
                    011 555 7663
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
