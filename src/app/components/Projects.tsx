import React from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'FLUTTER MOBILE APP',
      description: 'Cross-platform mobile application built with Flutter and Dart. Features pixel-perfect UI, fluid performance, and seamless multiplatform experience with cloud integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Flutter', 'Dart', 'AWS', 'DynamoDB'],
      github: '#',
      live: '#',
      icon: Globe
    },
    {
      title: 'AWS MICROSERVICES',
      description: 'Cloud-native microservices architecture using AWS Lambda, API Gateway, and DynamoDB. Built for scale with serverless design and optimized performance.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Python'],
      github: '#',
      live: '#',
      icon: Globe
    },
    {
      title: 'FULL-STACK WEB APP',
      description: 'Enterprise-scale web application with React frontend and NestJS backend. Features robust architecture, clean code, and scalable design patterns.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'NestJS', 'PostgreSQL', 'TypeScript'],
      github: '#',
      live: '#',
      icon: Code
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black font-mono mb-6">
            <span className="gradient-primary text-white px-8 py-4 rounded-2xl border border-white/20 shadow-glow">
              PROJECTS
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent to-accent-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl font-semibold max-w-3xl mx-auto text-gray-600 leading-relaxed">
            A showcase of my recent work - each project tells a story of <span className="text-accent font-bold">problem-solving</span>, 
            <span className="text-accent-secondary font-bold"> creativity</span>, and <span className="text-accent-tertiary font-bold">technical excellence</span>.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Image */}
                <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-3xl"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    {/* Modern Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-3xl flex items-end justify-center pb-8">
                      <div className="flex space-x-4">
                        <a
                          href={project.github}
                          className="gradient-primary text-white p-4 rounded-2xl shadow-glow border border-white/20 hover:scale-110 transition-transform duration-200"
                        >
                          <Github className="w-6 h-6" />
                        </a>
                        <a
                          href={project.live}
                          className="gradient-secondary text-white p-4 rounded-2xl shadow-glow border border-white/20 hover:scale-110 transition-transform duration-200"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="space-y-8">
                    {/* Project Header */}
                    <div className="flex items-center space-x-6">
                      <div className="gradient-primary p-4 rounded-2xl shadow-glow border border-white/20">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black font-mono bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
                      <p className="text-lg leading-relaxed text-gray-700 font-medium">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className={`px-5 py-3 rounded-xl font-bold font-mono text-sm border border-white/20 shadow-lg hover:scale-105 transition-all duration-200 ${
                            techIndex % 3 === 0 ? 'gradient-primary text-white shadow-glow' :
                            techIndex % 3 === 1 ? 'gradient-secondary text-white shadow-glow' :
                            'bg-accent-tertiary text-white shadow-glow'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="group flex items-center space-x-3 gradient-primary text-white font-bold font-mono px-8 py-4 rounded-2xl shadow-glow border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                      >
                        <Github className="w-5 h-5" />
                        <span>VIEW CODE</span>
                      </a>
                      <a
                        href={project.live}
                        className="group flex items-center space-x-3 glass-effect text-gray-900 font-bold font-mono px-8 py-4 rounded-2xl shadow-lg border border-accent hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>LIVE DEMO</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;