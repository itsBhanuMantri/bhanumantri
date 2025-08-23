import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'FRONTEND',
      icon: Globe,
      skills: ['Flutter', 'React', 'Next.js', 'Angular', 'JavaScript'],
      color: 'bg-white text-black border-black'
    },
    {
      title: 'BACKEND',
      icon: Server,
      skills: ['Node.js', 'NestJS', 'FastAPI', 'Python', 'Java'],
      color: 'bg-black text-white border-white'
    },
    {
      title: 'MOBILE',
      icon: Smartphone,
      skills: ['Flutter', 'Dart', 'Android', 'Kotlin', 'Cross-platform'],
      color: 'bg-white text-black border-black'
    },
    {
      title: 'DATABASE',
      icon: Database,
      skills: ['MySQL', 'PostgreSQL', 'DynamoDB', 'MongoDB', 'SQL'],
      color: 'bg-black text-white border-white'
    },
    {
      title: 'CLOUD & AWS',
      icon: Zap,
      skills: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'SQS', 'SNS'],
      color: 'bg-white text-black border-black'
    },
    {
      title: 'LANGUAGES',
      icon: Code,
      skills: ['Dart', 'JavaScript', 'Python', 'Java', 'Kotlin'],
      color: 'bg-black text-white border-white'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black font-mono mb-4">
            <span className="bg-white text-black px-4 py-2 border-4 border-white">SKILLS</span>
          </h2>
          <div className="w-24 h-2 bg-white mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`${category.color} border-4 p-8 transform transition-all duration-300 hover:scale-105 ${
                  index % 2 === 0 ? '' : ''
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <Icon className="w-8 h-8" />
                  <h3 className="text-xl font-bold font-mono">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`font-mono font-bold text-sm py-2 px-3 border-2 ${
                        category.color.includes('bg-white') 
                          ? 'border-black hover:bg-black hover:text-white' 
                          : 'border-white hover:bg-white hover:text-black'
                      } transition-colors duration-200 transform hover:translate-x-2`}
                    >
                      <span className="opacity-60 mr-2">{String(skillIndex + 1).padStart(2, '0')}</span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16">
          <blockquote className="text-2xl md:text-3xl font-bold font-mono border-4 border-white bg-white text-black p-8 inline-block">
            "Code is like humor. When you have to explain it, it's bad."
            <footer className="text-sm mt-2 opacity-70">- Cory House</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Skills;