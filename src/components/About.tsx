"use client"


import { GraduationCap, Heart, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About Me
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Hello! I'm a passionate Full-Stack Developer and Software Engineer currently pursuing a BTech in CSE Core at SRM Institute of Science and Technology, Chennai (CGPA: 8.6/10).
              I specialize in building scalable backend systems and responsive web applications using Java, Spring Boot, TypeScript, React, and Node.js.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Currently working as an SDE Intern at Paytm, building high-traffic fintech microservices with Java 21, Spring Boot, and modern CI/CD workflows.
              Previously delivered secure authentication and verification features at UIDAI, supporting national-scale identity services for 1.4B+ residents.
              I'm passionate about continuous learning and translating creative ideas into production-grade digital experiences.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/10 px-4 py-2 rounded-full">
                <Zap size={20} />
                <span className="font-medium">Building at Paytm</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-900/50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-transparent dark:border-slate-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-700 text-white rounded-full">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400">BTech in CSE Core • CGPA: 8.6/10</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">SRM Institute of Science and Technology, Kattankulathur, Chennai (2022 – 2026)</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-slate-800 dark:to-slate-900/50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-transparent dark:border-slate-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-emerald-600 text-white rounded-full">
                  <Heart size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Passion</h3>
                  <p className="text-gray-600 dark:text-gray-400">What drives me</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Accessibility, Design & Performance</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
