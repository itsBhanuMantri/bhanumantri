import React from 'react';
import { User, Coffee, Music, Mountain } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '9+', icon: User },
    { label: 'Projects Delivered', value: '60+', icon: Coffee },
    { label: 'Technologies', value: '20+', icon: Music },
    { label: 'Systems Built', value: '40+', icon: Mountain }
  ];

  return (
    <section id="about" className="py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black font-mono mb-4">
            <span className="bg-black text-white px-4 py-2 border-4 border-black">ABOUT</span>
          </h2>
          <div className="w-24 h-2 bg-black mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Photo and Terminal */}
          <div className="relative">
            {/* Terminal Window */}
            <div className="bg-black border-4 border-black p-6 font-mono text-green-400 text-sm">
              <div className="flex items-center space-x-2 mb-4 pb-4 border-b border-green-400">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-white">terminal.exe</span>
              </div>
              <div>
                <p><span className="text-white">$</span> whoami</p>
                <p className="mb-2">Bhanu Mantri - Software Engineer</p>
                <p><span className="text-white">$</span> cat passion.txt</p>
                <p className="mb-2">Building magic with code - systems that scale & apps that shine</p>
                <p><span className="text-white">$</span> ls skills/</p>
                <p className="mb-2">Dart  Flutter  JavaScript  Python  AWS  Node.js  ...</p>
                <p><span className="text-white">$</span> echo "Ready to collaborate"</p>
                <p>Ready to collaborate</p>
                <span className="animate-pulse">█</span>
              </div>
            </div>

            {/* Photo Placeholder */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white border-4 border-black transform rotate-12">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
                <User className="w-16 h-16 text-gray-600" />
              </div>
            </div>
          </div>

          {/* Right Column - Description */}
          <div>
            <div className="bg-black text-white p-8 border-4 border-black mb-8">
              <h3 className="text-2xl font-bold font-mono mb-4 text-center">THE STORY</h3>
              <p className="text-lg leading-relaxed mb-4">
                I'm a Software Engineer with 8 years of hands-on experience building systems that scale, 
                apps that shine, and experiences that stick. I don't just write code—I craft digital 
                products that deliver performance, resilience, and real-world impact.
              </p>
              <p className="text-lg leading-relaxed">
                From architecting full-stack solutions to launching mobile apps and optimizing 
                cloud-native services, I bring clarity to chaos, structure to scale, and delight 
                to every user interaction.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={stat.label}
                    className={`bg-white border-4 border-black p-6 text-center transform hover:scale-110 transition-transform duration-200`}
                  >
                    <Icon className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-3xl font-black font-mono">{stat.value}</div>
                    <div className="text-sm font-bold uppercase">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;