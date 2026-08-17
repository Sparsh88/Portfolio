import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certificates', href: '#certificates', id: 'certificates' },
    { name: 'Milestones', href: '#achievements', id: 'achievements' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800 shadow-xs'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center text-lg sm:text-xl tracking-tight transition-opacity hover:opacity-80"
          >
            <span className="font-bold text-neutral-950 dark:text-white">Sparsh</span>
            <span className="font-normal text-neutral-500 dark:text-neutral-400 ml-1">Chauhan</span>
          </a>

          {/* Centered Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-7">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-neutral-950 dark:text-white font-semibold'
                    : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Area: Theme Toggle & "Get in touch" Button */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-white dark:bg-[#141414] border-2 border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-all duration-200 shadow-xs hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-neutral-800 transition-transform duration-300 rotate-0 hover:-rotate-12" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
              )}
            </button>

            {/* Pill Button */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-black dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-full transition-all duration-200 shadow-xs hover:shadow active:scale-95"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white dark:bg-[#141414] border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-lg border-b border-neutral-200 dark:border-neutral-800 px-4 pt-3 pb-6 space-y-2 mt-3 animate-in slide-in-from-top-2 duration-200 shadow-lg">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-xl text-base font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-neutral-100 dark:bg-neutral-900 text-neutral-950 dark:text-white font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900/50'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center py-3 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-full shadow-xs"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
