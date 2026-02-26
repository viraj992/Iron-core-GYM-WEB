import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Dumbbell } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Programs', path: '/programs' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Schedule', path: '/schedule' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleTheme, isDark } = useTheme();
  const location = useLocation(); // <-- detect current path

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-black/50 border-b border-red-900/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-2xl font-bold tracking-widest">
                <span className="text-white">IRON</span>
                <span className="text-red-500">CORE</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${
                    location.pathname === link.path ? 'text-iron-red' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 hover:border-red-500 transition-all duration-200 text-gray-300 hover:text-red-400"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* CTA Button */}
              <Link to="/pricing" className="hidden md:block btn-primary text-xs py-2.5 px-6">
                Join Now
              </Link>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center text-white"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-72 bg-zinc-950 border-l border-red-900/30 flex flex-col p-8 pt-24">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`text-left text-lg font-semibold uppercase tracking-widest py-2 border-b border-zinc-800 transition-colors ${
                      location.pathname === link.path ? 'text-iron-red' : 'text-gray-300 hover:text-red-400'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  to="/pricing"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary mt-4 text-center"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;