import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Search } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const Navbar: React.FC = () => {
  const { setIsCommandPaletteOpen } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'PROCESS', href: '#timeline' },
    { name: 'CERTIFICATES', href: '#certificates' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3 shadow-xl' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="flex items-center gap-2 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
            Sparsh
          </span>
        </a>

        {/* Center Navigation Container with CERTIFICATES */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#111113] px-4 py-2 rounded-full border border-[#1e1e24] backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="px-3 py-1 text-[11px] font-mono font-semibold tracking-wider text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsCommandPaletteOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#111113] text-slate-400 hover:text-white border border-[#1e1e24] text-xs font-mono"
            title="Search (Ctrl + K)"
          >
            <Search className="w-3.5 h-3.5 text-blue-400" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 rounded bg-black text-[10px] text-slate-400 border border-zinc-800">
              Ctrl K
            </kbd>
          </button>

          <button
            onClick={() => handleNavClick('#contact')}
            className="hidden sm:flex items-center gap-1.5 px-5 py-2 rounded-full bg-white text-slate-950 hover:bg-slate-200 text-xs font-mono font-bold tracking-wider transition-all shadow-lg hover:scale-105"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#111113] text-slate-300 hover:text-white border border-[#1e1e24]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bg-[#0b0b0b]/95 border-b border-[#1e1e24] backdrop-blur-xl p-5 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2.5 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-3 rounded-xl text-xs font-mono font-bold tracking-wider text-slate-200 hover:bg-[#111113] hover:text-blue-400 border border-[#1e1e24]"
              >
                {link.name}
              </a>
            ))}
          </div>
          <button
            onClick={() => handleNavClick('#contact')}
            className="w-full py-3.5 rounded-full bg-white text-slate-950 text-xs font-mono font-bold tracking-wider flex items-center justify-center gap-1.5 shadow-lg"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
