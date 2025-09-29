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
    <section className="min-h-screen gradient-dark text-white flex items-center justify-center relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 212, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-20 h-20 gradient-primary rounded-2xl rotate-45 animate-pulse shadow-glow"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 gradient-secondary rounded-xl border border-white/20 animate-bounce"></div>
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-accent rounded-full shadow-glow animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/3 w-12 h-12 border-2 border-accent-secondary rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-6 h-6 gradient-secondary rounded-full animate-bounce delay-75"></div>
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 border border-accent rounded-full animate-pulse delay-150"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Main Content */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-6 mb-8">
            <div className="gradient-primary p-4 rounded-2xl shadow-glow border border-white/20 transform hover:scale-110 transition-transform duration-300">
              <Code className="w-10 h-10 text-white" />
            </div>
            <div className="gradient-secondary p-4 rounded-2xl shadow-glow border border-white/20 transform hover:scale-110 transition-transform duration-300 delay-75">
              <Terminal className="w-10 h-10 text-white" />
            </div>
            <div className="bg-accent-tertiary p-4 rounded-2xl shadow-glow border border-white/20 transform hover:scale-110 transition-transform duration-300 delay-150">
              <Zap className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 font-mono tracking-tighter">
            <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              BHANU
            </span>
            <br />
            <span className="gradient-primary text-white px-6 py-3 inline-block transform -rotate-1 rounded-2xl border border-white/20 shadow-glow">
              MANTRI
            </span>
          </h1>
          
          <div className="glass-effect-dark rounded-2xl p-8 inline-block mb-8 border border-white/20 shadow-xl">
            <div className="font-mono text-xl md:text-3xl font-bold min-h-[3rem]">
              <span className="text-accent">&gt; </span>
              <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                {currentText}
              </span>
              <span className="animate-pulse text-accent">|</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="glass-effect rounded-2xl p-8 border border-white/20 shadow-xl">
            <p className="text-lg md:text-xl font-semibold text-white leading-relaxed">
              Building systems that <span className="text-accent font-bold">scale</span>, apps that <span className="text-accent-secondary font-bold">shine</span>, and experiences that <span className="text-accent-tertiary font-bold">stick</span>. 
              <br />
              <span className="text-accent">8 years</span> of transforming ideas into elegant, high-performance software.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <a
            href="#projects"
            className="group relative gradient-primary text-white font-bold font-mono px-10 py-5 rounded-2xl border border-white/20 shadow-glow hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <span className="relative z-10">VIEW MY WORK</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
          </a>
          <a
            href="#contact"
            className="group relative glass-effect-dark text-white font-bold font-mono px-10 py-5 rounded-2xl border border-accent hover:border-accent-secondary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <span className="relative z-10">LET'S TALK</span>
            <div className="absolute inset-0 gradient-secondary opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <div className="gradient-primary p-3 rounded-full shadow-glow">
            <ChevronDown className="w-6 h-6 mx-auto text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;