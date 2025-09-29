import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Code } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'ABOUT' },
    { href: '#skills', label: 'SKILLS' },
    { href: '#projects', label: 'PROJECTS' },
    { href: '#contact', label: 'CONTACT' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect-dark shadow-lg border-b border-white/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="gradient-primary p-3 rounded-xl shadow-glow border border-white/20">
              <Terminal className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl font-mono tracking-wider">DEV.PORTFOLIO</span>
              <span className="text-accent text-xs font-mono opacity-80">Bhanu Mantri</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-white font-semibold font-mono text-sm px-6 py-3 rounded-lg hover:text-accent transition-all duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 glass-effect rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden gradient-primary p-3 rounded-lg shadow-glow border border-white/20"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect-dark rounded-lg mt-4 border border-white/20 shadow-xl">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-white font-semibold font-mono text-sm py-4 px-6 hover:text-accent hover:bg-white/10 transition-all duration-300 ${
                  index !== navItems.length - 1 ? 'border-b border-white/10' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;