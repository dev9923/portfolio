import React from 'react';
import { GraduationCap, Heart, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Hello! I'm a passionate Full-Stack Web Developer currently pursuing a BTech in CSE Core at SRM University. 
              I have a strong foundation in both frontend and backend technologies and enjoy creating responsive and 
              dynamic web applications.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              With internship experience at CodSoft and Oasis Infobyte, I've had the opportunity to work on real-world 
              projects and collaborate with experienced developers. I'm passionate about accessibility, design, and 
              performance optimization.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-emerald-600">
                <Zap size={20} />
                <span className="font-medium">Currently learning EJS</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-700 text-white rounded-full">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Education</h3>
                  <p className="text-gray-600">BTech in CSE Core</p>
                </div>
              </div>
              <p className="text-gray-700">SRM University</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-emerald-600 text-white rounded-full">
                  <Heart size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Passion</h3>
                  <p className="text-gray-600">What drives me</p>
                </div>
              </div>
              <p className="text-gray-700">Accessibility, Design & Performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;