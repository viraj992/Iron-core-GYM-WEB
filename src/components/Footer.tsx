import React from 'react';
import { Dumbbell, Instagram, Twitter, Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Contact', href: '#contact' },
];

const Footer: React.FC = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-2xl font-bold tracking-widest">
                <span className="text-white">IRON</span>
                <span className="text-red-500">CORE</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Elite fitness training for those who demand the best. Transform your body, transform your life.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-zinc-800 hover:bg-red-600 flex items-center justify-center transition-colors duration-200">
                <Instagram className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-zinc-800 hover:bg-red-600 flex items-center justify-center transition-colors duration-200">
                <Twitter className="w-4 h-4 text-gray-400" />
              </a>
              <a href="#" className="w-9 h-9 bg-zinc-800 hover:bg-red-600 flex items-center justify-center transition-colors duration-200">
                <Facebook className="w-4 h-4 text-gray-400" />
              </a>
              <a href="#" className="w-9 h-9 bg-zinc-800 hover:bg-red-600 flex items-center justify-center transition-colors duration-200">
                <Youtube className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-500 hover:text-red-400 text-sm transition-colors duration-200 text-left"
                  >
                    → {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white mb-5">
              Programs
            </h4>
            <ul className="space-y-2.5">
              {['Personal Training', 'CrossFit', 'Bodybuilding', 'Weight Loss', 'Cardio & HIIT', 'Yoga & Flexibility'].map((prog) => (
                <li key={prog}>
                  <button
                    onClick={() => scrollTo('#programs')}
                    className="text-gray-500 hover:text-red-400 text-sm transition-colors duration-200 text-left"
                  >
                    → {prog}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white mb-5">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-gray-500">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>2847 Iron Ave, Fitness District<br />New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a href="tel:+15554267663" className="hover:text-red-400 transition-colors">
                  +1 (555) 426-7663
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <a href="mailto:info@ironcorefitness.com" className="hover:text-red-400 transition-colors">
                  info@ironcorefitness.com
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-zinc-800">
              <h5 className="text-gray-500 text-xs uppercase tracking-widest mb-2">Hours</h5>
              <p className="text-gray-500 text-xs leading-relaxed">
                Mon–Fri: 5 AM – 11 PM<br />
                Sat–Sun: 7 AM – 9 PM<br />
                <span className="text-red-500">Elite: 24/7 Access</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} IronCore Fitness. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-red-400 text-xs transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-red-400 text-xs transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-red-400 text-xs transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
