import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
 
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="mx-auto w-40 h-40 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
          <img src="/images/IMG (2).jpg" 
            alt="My Photo" 
            width={200} 
            className="rounded-full shadow-md" 
            />

          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-gray-600 font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-emerald-500 bg-clip-text text-transparent">
                  DEVANSH BANSAL
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Passionate Web Developer and Software Engineer with a focus on building modern, scalable, and user-friendly solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-600 max-w-3xl mx-auto">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>BTech CSE Core @ SRM University</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Full-Stack Development</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>AI & Machine Learning</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            > 
              View My Work
            </button>
           <a
            href="/mnt/data/Resume (3).pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all"
            >
            Download CV
          </a>

          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/dev9923"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 text-gray-600 hover:text-blue-700"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/devansh-bansal-329ab7b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 text-gray-600 hover:text-blue-700"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:devanshbansal500@gmail.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 text-gray-600 hover:text-blue-700"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto">
                <div className="w-1 h-3 bg-gray-400 rounded-full mx-auto mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
