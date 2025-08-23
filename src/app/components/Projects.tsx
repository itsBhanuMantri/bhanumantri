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
    <section id="projects" className="py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black font-mono mb-4">
            <span className="bg-black text-white px-4 py-2 border-4 border-black">PROJECTS</span>
          </h2>
          <div className="w-24 h-2 bg-black mx-auto mb-8"></div>
          <p className="text-xl font-bold max-w-2xl mx-auto">
            A showcase of my recent work - each project tells a story of problem-solving, 
            creativity, and technical excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Image */}
                <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="border-4 border-black bg-black p-4 transform transition-all duration-300 group-hover:scale-105">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 flex items-center justify-center transition-all duration-300">
                    <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.github}
                        className="bg-white text-black p-3 border-4 border-black hover:bg-black hover:text-white hover:border-white transition-all duration-200"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                      <a
                        href={project.live}
                        className="bg-black text-white p-3 border-4 border-white hover:bg-white hover:text-black hover:border-black transition-all duration-200"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="space-y-6">
                    {/* Project Header */}
                    <div className="flex items-center space-x-4">
                      <div className="bg-black p-3 border-4 border-black">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black font-mono">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="bg-black text-white p-6 border-4 border-black transition-transform duration-200">
                      <p className="text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-white text-black font-bold font-mono px-4 py-2 border-4 border-black hover:bg-black hover:text-white hover:border-white transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 bg-black text-white font-bold font-mono px-6 py-3 border-4 border-black hover:bg-white hover:text-black hover:border-black transition-all duration-200"
                      >
                        <Github className="w-5 h-5" />
                        <span>CODE</span>
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center space-x-2 bg-white text-black font-bold font-mono px-6 py-3 border-4 border-black hover:bg-black hover:text-white hover:border-white transition-all duration-200"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>LIVE</span>
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