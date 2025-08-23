'use client'

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Code, Database, Globe, Cpu } from "lucide-react";

const V2Portfolio = () => {
  const techStack = {
    languages: ['Dart', 'JavaScript', 'Python', 'Java & Kotlin', 'SQL'],
    frontend: ['Flutter', 'React & Next.js', 'Angular'],
    backend: ['Node.js & NestJS', 'FastAPI', 'AWS Microservices'],
    databases: ['MySQL, PostgreSQL', 'DynamoDB, MongoDB']
  }

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Header */}
      <header className="border-b border-white/20 px-4 py-4 md:px-8 md:py-6">
        <div className="max-w-none lg:max-w-[70%] mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold tracking-widest">BHANU PRASAD</h1>
          <nav className="space-x-4 md:space-x-6">
            {['About', 'Skills', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:underline transition-all">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-16 md:px-8 md:py-20 border-b border-white/20">
        <div className="max-w-none lg:max-w-[70%] mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            Building Systems That Scale & Experiences That Delight
          </motion.h2>
          <p className="mt-4 md:mt-6 text-gray-300 text-base md:text-lg">
            Software Engineer with 8 years of hands-on experience crafting digital products that deliver performance, resilience, and real-world impact.
          </p>
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 md:mt-8 px-4 md:px-6 py-2 md:py-3 border border-white flex items-center gap-2 hover:bg-white hover:text-black transition-all"
          >
            View My Work <ArrowRight size={18} />
          </motion.button>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 md:mt-10 border-4 border-white p-4 shadow-[4px_4px_0px_white]"
        >
          <div className="w-56 h-56 md:w-72 md:h-72 bg-gray-800 flex items-center justify-center text-5xl md:text-6xl">
            👨‍💻
          </div>
        </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 py-16 md:px-8 md:py-20 border-b border-white/20">
        <div className="max-w-none lg:max-w-[70%] mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 border-b-4 border-white inline-block pb-2">About Me</h3>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-4 md:space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I'm a <strong className="text-white">Software Engineer who builds magic with code</strong>. 
              I don't just write code—I craft digital products that deliver performance, resilience, and real-world impact.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From architecting full-stack solutions to launching slick mobile apps and optimizing cloud-native services, 
              I thrive in transforming ideas into elegant, high-performance software.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Whether it's a rapid prototype or a production-hardened platform, I bring <strong className="text-white">clarity to chaos, 
              structure to scale</strong>, and <strong className="text-white">delight to every user interaction</strong>.
            </p>
          </div>
          <div className="border border-white/30 p-4 md:p-6 shadow-[4px_4px_0px_white]">
            <h4 className="text-lg md:text-xl font-semibold mb-4">Core Values</h4>
            <ul className="space-y-2 md:space-y-3 text-gray-300">
              <li>• <strong className="text-white">Clean Architecture</strong> - Building maintainable systems</li>
              <li>• <strong className="text-white">Developer Empathy</strong> - Code that humans can understand</li>
              <li>• <strong className="text-white">Battle-tested Tech</strong> - Reliable, proven solutions</li>
              <li>• <strong className="text-white">User-centric Design</strong> - Experiences that stick</li>
            </ul>
          </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-4 py-16 md:px-8 md:py-20 border-b border-white/20">
        <div className="max-w-none lg:max-w-[70%] mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 border-b-4 border-white inline-block pb-2">Tech Arsenal</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Languages */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-white/30 p-4 md:p-6 hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_white]"
          >
            <div className="flex items-center mb-4">
              <Code className="mr-2" size={24} />
              <h4 className="text-lg md:text-xl font-semibold">Languages</h4>
            </div>
            <ul className="space-y-1 md:space-y-2 text-sm">
              {techStack.languages.map((lang, index) => (
                <li key={index}>• {lang}</li>
              ))}
            </ul>
          </motion.div>

          {/* Frontend */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="border border-white/30 p-4 md:p-6 hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_white]"
          >
            <div className="flex items-center mb-4">
              <Globe className="mr-2" size={24} />
              <h4 className="text-lg md:text-xl font-semibold">Frontend</h4>
            </div>
            <ul className="space-y-1 md:space-y-2 text-sm">
              {techStack.frontend.map((tech, index) => (
                <li key={index}>• {tech}</li>
              ))}
            </ul>
          </motion.div>

          {/* Backend */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border border-white/30 p-4 md:p-6 hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_white]"
          >
            <div className="flex items-center mb-4">
              <Cpu className="mr-2" size={24} />
              <h4 className="text-lg md:text-xl font-semibold">Backend</h4>
            </div>
            <ul className="space-y-1 md:space-y-2 text-sm">
              {techStack.backend.map((tech, index) => (
                <li key={index}>• {tech}</li>
              ))}
            </ul>
          </motion.div>

          {/* Databases */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="border border-white/30 p-4 md:p-6 hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_white]"
          >
            <div className="flex items-center mb-4">
              <Database className="mr-2" size={24} />
              <h4 className="text-lg md:text-xl font-semibold">Databases</h4>
            </div>
            <ul className="space-y-1 md:space-y-2 text-sm">
              {techStack.databases.map((db, index) => (
                <li key={index}>• {db}</li>
              ))}
            </ul>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-16 md:px-8 md:py-20">
        <div className="max-w-none lg:max-w-[70%] mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 border-b-4 border-white inline-block pb-2">Let's Build Something Awesome</h3>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-4 md:space-y-6">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              I'm always up for new challenges—whether it's crafting an app from scratch, 
              optimizing complex systems, or collaborating with a team that dreams big.
            </p>
            <p className="text-gray-300">
              If you're looking for <strong className="text-white">a problem-solver, a builder, and a creative coder</strong>, let's connect.
            </p>
            <div className="flex space-x-4 md:space-x-6 pt-4">
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Github size={32} />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Linkedin size={32} />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Mail size={32} />
              </a>
            </div>
          </div>
          
          <div className="border border-white/30 p-4 md:p-6 shadow-[4px_4px_0px_white]">
            <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Send a Message</h4>
            <form className="space-y-3 md:space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-black border border-white/30 px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
              />
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full bg-black border border-white/30 px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
              />
              <textarea
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full bg-black border border-white/30 px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full border border-white py-2 md:py-3 hover:bg-white hover:text-black transition-all font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 px-4 py-4 md:px-8 md:py-6 text-center text-sm text-gray-400">
        <div className="max-w-none lg:max-w-[70%] mx-auto">
          © {new Date().getFullYear()} Bhanu Prasad. All rights reserved. Built with passion and lots of coffee ☕
        </div>
      </footer>
    </div>
  )
}

export default V2Portfolio