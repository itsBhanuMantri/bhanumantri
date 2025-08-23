import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Terminal, Zap } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['SOFTWARE ENGINEER', 'FULL-STACK DEVELOPER', 'MOBILE APP DEVELOPER'];

  useEffect(() => {
    const typeWriter = () => {
      const currentTitle = titles[currentIndex % titles.length];
      if (currentText.length < currentTitle.length) {
        setCurrentText(currentTitle.slice(0, currentText.length + 1));
      } else {
        setTimeout(() => {
          setCurrentText('');
          setCurrentIndex(prev => prev + 1);
        }, 2000);
      }
    };

    const timer = setTimeout(typeWriter, 150);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, titles]);

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-white border-4 border-black rotate-45"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-black border-4 border-white"></div>
      <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-white"></div>
      <div className="absolute bottom-1/3 right-1/3 w-12 h-12 border-4 border-white rotate-12"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Main Content */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="bg-white p-3 border-4 border-black">
              <Code className="w-8 h-8 text-black" />
            </div>
            <div className="bg-black p-3 border-4 border-white">
              <Terminal className="w-8 h-8 text-white" />
            </div>
            <div className="bg-white p-3 border-4 border-black">
              <Zap className="w-8 h-8 text-black" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-4 font-mono tracking-tighter">
            BHANU
            <br />
            <span className="bg-white text-black px-4 py-2 inline-block transform -rotate-2 border-4 border-black">
              MANTRI
            </span>
          </h1>
          
          <div className="bg-black border-4 border-white p-6 inline-block mb-8">
            <div className="font-mono text-lg md:text-2xl font-bold min-h-[2rem]">
              <span className="text-green-400">&gt; </span>
              {currentText}
              <span className="animate-pulse">|</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-lg md:text-xl font-bold border-4 border-white bg-white text-black p-6">
            Building systems that scale, apps that shine, and experiences that stick. 
            8 years of transforming ideas into elegant, high-performance software.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a
            href="#projects"
            className="bg-white text-black font-bold font-mono px-8 py-4 border-4 border-black hover:bg-black hover:text-white hover:border-white transition-all duration-200 transform hover:scale-105 hover:rotate-1"
          >
            VIEW MY WORK
          </a>
          <a
            href="#contact"
            className="bg-black text-white font-bold font-mono px-8 py-4 border-4 border-white hover:bg-white hover:text-black hover:border-black transition-all duration-200 transform hover:scale-105 hover:-rotate-1"
          >
            LET'S TALK
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 mx-auto text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;