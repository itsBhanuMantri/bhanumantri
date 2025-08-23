import React from 'react';
import { Heart, Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 border-t-4 border-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo & Copyright */}
          <div className="flex items-center space-x-4">
            <div className="bg-black p-3 border-4 border-black">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <div className="font-mono">
              <div className="font-bold text-lg">BHANU MANTRI</div>
              <div className="text-sm opacity-70">© 2024 All rights reserved</div>
            </div>
          </div>

          {/* Made with Love */}
          <div className="flex items-center space-x-2 font-mono font-bold">
            <span>MADE WITH</span>
            <div className="bg-black p-1 border-2 border-black">
              <Heart className="w-4 h-4 text-white fill-current" />
            </div>
            <span>& CODE</span>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-6 font-mono font-bold text-sm">
            <a href="#about" className="hover:bg-black hover:text-white px-2 py-1 transition-all duration-200">
              ABOUT
            </a>
            <a href="#projects" className="hover:bg-black hover:text-white px-2 py-1 transition-all duration-200">
              WORK
            </a>
            <a href="#contact" className="hover:bg-black hover:text-white px-2 py-1 transition-all duration-200">
              CONTACT
            </a>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-8 border-t-4 border-black text-center">
          <p className="font-mono text-sm opacity-70">
            Designed & Developed with neubrutalism aesthetics • Built with passion for clean code
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;