'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const [currentSection, setCurrentSection] = useState('home');
  
  const fullText = "Welcome to my digital realm...";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const techStack = {
    languages: [
      { name: 'Dart', description: 'Mobile & cross-platform mastery' },
      { name: 'JavaScript', description: 'Dynamic UIs & interactive web' },
      { name: 'Python', description: 'APIs & backend automation' },
      { name: 'Java & Kotlin', description: 'Android & backend services' },
      { name: 'SQL', description: 'Performant queries & schemas' }
    ],
    frontend: [
      { name: 'Flutter', description: 'Pixel-perfect multiplatform UIs' },
      { name: 'React & Next.js', description: 'Blazing-fast experiences' },
      { name: 'Angular', description: 'Enterprise-scale web apps' }
    ],
    backend: [
      { name: 'Node.js & NestJS', description: 'Scalable, maintainable APIs' },
      { name: 'FastAPI', description: 'Pythonic elegance with performance' },
      { name: 'AWS Microservices', description: 'Cloud-native systems that scale' }
    ],
    database: [
      { name: 'MySQL & PostgreSQL', description: 'Clean schemas & optimized queries' },
      { name: 'DynamoDB & MongoDB', description: 'Designed for scale, built for speed' }
    ]
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-mono text-xl font-bold glow-accent">
              {'> '}BHANU.exe
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'tech', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-mono text-sm uppercase tracking-wider transition-colors hover:text-accent px-3 py-2 rounded ${
                    currentSection === section ? 'text-accent glow bg-accent/10' : 'text-text-muted hover:bg-border/50'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            {/* Mobile menu */}
            <div className="md:hidden">
              <button className="font-mono text-accent">
                ☰
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative scanlines">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="terminal-window mb-8">
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span className="font-mono text-sm text-text-muted ml-4">terminal</span>
            </div>
            <div className="terminal-content">
              <div className="mb-4">
                <span className="text-accent">$</span> whoami
              </div>
              <div className="mb-4">
                <span className="text-foreground">{typedText}</span>
                <span className="cursor text-accent">|</span>
              </div>
              <div className="text-text-muted">
                System initialized. Loading portfolio...
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-retro">
            <span className="gradient-text">SOFTWARE</span>
            <br />
            <span className="text-foreground">ENGINEER</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-muted mb-8 max-w-2xl mx-auto">
            Building <span className="text-accent glow">scalable systems</span>, 
            crafting <span className="text-accent-secondary glow">elegant apps</span>, 
            and delivering <span className="text-accent glow">performance</span> that matters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('about')}
              className="retro-button"
            >
              Explore My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="retro-button border-accent-secondary text-accent-secondary hover:bg-accent-secondary"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 text-accent opacity-20 font-mono text-sm animate-pulse">
            {'{ code: "poetry" }'}
          </div>
          <div className="absolute top-1/2 right-10 text-accent-secondary opacity-20 font-mono text-sm animate-pulse">
            {'> innovation.execute()'}
          </div>
          <div className="absolute bottom-1/4 left-1/4 text-accent opacity-20 font-mono text-sm animate-pulse">
            {'[ scaling, performing, delivering ]'}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center font-retro">
            <span className="gradient-text">Meet the Engineer</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start justify-center">
            <div className="retro-card">
              <h3 className="text-2xl font-bold mb-6 text-accent font-mono">
                {'> '}WHO_AM_I.txt
              </h3>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  I'm a <span className="text-accent font-bold">Software Engineer with 8 years of hands-on experience</span>, 
                  and I build <em className="text-accent-secondary">systems that scale, apps that shine,</em> and 
                  <em className="text-accent-secondary"> experiences that stick</em>.
                </p>
                <p>
                  I don't just write code—I craft digital products that deliver performance, resilience, and real-world impact.
                </p>
                <p>
                  From architecting full-stack solutions to launching slick mobile apps and optimizing cloud-native services, 
                  I thrive in transforming ideas into elegant, high-performance software.
                </p>
                <p>
                  If you're looking for someone who blends <span className="text-accent">clean architecture</span>, 
                  <span className="text-accent"> developer empathy</span>, and 
                  <span className="text-accent"> battle-tested tech chops</span>, you're in the right place.
                </p>
              </div>
            </div>
            
            <div className="retro-card">
              <h3 className="text-2xl font-bold mb-6 text-accent-secondary font-mono">
                {'> '}PHILOSOPHY.exe
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-bold text-accent mb-2">Clarity to Chaos</h4>
                  <p className="text-text-muted">
                    I bring structure to complex problems and transform ambiguous requirements into clear, actionable solutions.
                  </p>
                </div>
                <div className="border-l-2 border-accent-secondary pl-4">
                  <h4 className="font-bold text-accent-secondary mb-2">Structure to Scale</h4>
                  <p className="text-text-muted">
                    Every line of code is written with growth in mind—building systems that evolve gracefully with your needs.
                  </p>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-bold text-accent mb-2">Delight to Interactions</h4>
                  <p className="text-text-muted">
                    User experience isn't an afterthought—it's the foundation of every interface I create.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-20 bg-card-bg relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center font-retro">
            <span className="gradient-text">Tech Arsenal</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {Object.entries(techStack).map(([category, techs]) => (
              <div key={category} className="retro-card w-full max-w-sm">
                <h3 className="text-xl font-bold mb-6 text-accent font-mono capitalize">
                  {category === 'frontend' ? '🌐 Frontend' : 
                   category === 'backend' ? '🛠 Backend' : 
                   category === 'database' ? '🗄️ Database' : 
                   '🧠 Languages'}
                </h3>
                <div className="space-y-4">
                  {techs.map((tech, index) => (
                    <div key={index} className="group">
                      <h4 className="font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                        {tech.name}
                      </h4>
                      <p className="text-sm text-text-muted">
                        {tech.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <div className="retro-card max-w-2xl w-full">
              <h3 className="text-2xl font-bold mb-4 text-accent-secondary font-mono text-center">
                {'> '}EXPERTISE_SUMMARY.log
              </h3>
              <p className="text-lg leading-relaxed text-center">
                From <span className="text-accent">rapid prototypes</span> to 
                <span className="text-accent"> production-hardened platforms</span>, 
                I deliver solutions that combine cutting-edge technology with 
                <span className="text-accent-secondary"> proven architectural patterns</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 font-retro">
            <span className="gradient-text">Let's Build</span>
            <br />
            <span className="text-foreground">Something Awesome</span>
          </h2>
          
          <div className="retro-card">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="font-mono text-sm text-text-muted ml-4">contact.sh</span>
              </div>
              <div className="terminal-content text-left">
                <div className="mb-4">
                  <span className="text-accent">$</span> cat contact_info.txt
                </div>
                <div className="space-y-2 mb-6">
                  <div><span className="text-accent-secondary">Name:</span> Bhanu</div>
                  <div><span className="text-accent-secondary">Role:</span> Software Engineer</div>
                  <div><span className="text-accent-secondary">Experience:</span> 8+ Years</div>
                  <div><span className="text-accent-secondary">Specialization:</span> Full-Stack Development</div>
                </div>
                <div className="mb-4">
                  <span className="text-accent">$</span> echo "Ready for new challenges..."
                </div>
                <div className="text-text-muted">
                  Ready for new challenges...
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-lg mb-8 leading-relaxed">
                I'm always up for new challenges—whether it's crafting an app from scratch, 
                optimizing complex systems, or collaborating with a team that dreams big.
              </p>
              <p className="text-xl text-accent-secondary font-mono font-bold mb-8">
                Looking for a problem-solver, a builder, and a creative coder?
              </p>
              <button className="retro-button text-xl px-8 py-4">
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-mono text-text-muted">
            {'> '}Built with Next.js, TypeScript & a passion for clean code
            <span className="text-accent cursor ml-2">|</span>
          </p>
        </div>
      </footer>
    </div>
  );
}