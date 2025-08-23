import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'EMAIL',
      value: 'manthrybhanu@gmail.com',
      href: 'mailto:manthrybhanu@gmail.com'
    },
    {
      icon: Phone,
      label: 'PHONE',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'LOCATION',
      value: 'Available Globally',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black font-mono mb-4">
            <span className="bg-white text-black px-4 py-2 border-4 border-white">CONTACT</span>
          </h2>
          <div className="w-24 h-2 bg-white mx-auto mb-8"></div>
          <p className="text-xl font-bold max-w-2xl mx-auto">
            Let's collaborate on your next project. Drop me a line and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="bg-white text-black p-8 border-4 border-white transition-transform duration-300">
              <h3 className="text-2xl font-bold font-mono mb-6 text-center">SEND MESSAGE</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono font-bold mb-2">NAME*</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border-4 border-black font-mono focus:outline-none focus:border-gray-600 transition-colors duration-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block font-mono font-bold mb-2">EMAIL*</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border-4 border-black font-mono focus:outline-none focus:border-gray-600 transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block font-mono font-bold mb-2">SUBJECT*</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border-4 border-black font-mono focus:outline-none focus:border-gray-600 transition-colors duration-200"
                    placeholder="Project Discussion"
                  />
                </div>
                
                <div>
                  <label className="block font-mono font-bold mb-2">MESSAGE*</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 border-4 border-black font-mono resize-none focus:outline-none focus:border-gray-600 transition-colors duration-200"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-black text-white font-bold font-mono py-4 border-4 border-black hover:bg-gray-800 transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  <span>SEND MESSAGE</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold font-mono mb-6">GET IN TOUCH</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 border-4 border-white hover:bg-white hover:text-black transition-all duration-200 group"
                    >
                      <Icon className="w-6 h-6" />
                      <div>
                        <div className="text-sm font-mono opacity-70">{info.label}</div>
                        <div className="font-bold">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold font-mono mb-6">CONNECT</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="bg-white text-black p-4 border-4 border-white hover:bg-black hover:text-white hover:border-white transition-all duration-200 transform hover:scale-110 hover:rotate-12"
                      title={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quote */}
            <div className="bg-white text-black p-6 border-4 border-white transition-transform duration-300">
              <blockquote className="font-mono text-lg font-bold">
                "The best time to plant a tree was 20 years ago. The second best time is now. 
                Let's plant some code together."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;