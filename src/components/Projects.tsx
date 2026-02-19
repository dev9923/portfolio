"use client"


import { Github, Music, Clock, Phone, Bot, TrendingUp, Network } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Multi-Agent AI System',
      description:
        'A sophisticated multi-agent document router system that accepts inputs in Email, JSON, or PDF format and processes functionality through various specialized agents with collaborative intelligence.',
      icon: Bot,
      color: 'from-purple-500 to-indigo-500',
      tags: ['Node.js', 'AI Integration', 'Multi-Agent Systems', 'PDF Processing', 'Distributed Computing'],
      features: [
        'Collaborative Intelligence: Multiple AI agents communicate and coordinate to solve complex tasks efficiently',
        'Real-World Simulation: Autonomous agents for smart traffic management and resource allocation',
        'Scalable Architecture: Distributed decision-making showcasing intelligent behavior'
      ],
      github: 'https://github.com/dev9923/multi_agent_router.git'
    },
    {
      title: 'Stock Closing Price Prediction',
      description:
        'A comprehensive machine learning project for forecasting future stock closing prices using historical market data, trend analysis, and advanced predictive modeling techniques.',
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-500',
      tags: ['Python', 'Machine Learning', 'LSTM', 'Linear Regression', 'Pandas', 'Matplotlib'],
      features: [
        'Predictive Modeling: Built models using linear regression and LSTM for improved accuracy',
        'Data-Driven Insights: Advanced data preprocessing and visualization techniques',
        'Trend Analysis: Historical market data analysis to uncover actionable patterns'
      ],
      github: 'https://github.com/dev9923/Stock-Closing-Price-Prediction.git'
    },
    {
      title: 'Premium Music Website',
      description:
        'A modern and responsive design to promote a premium music subscription service with sleek UI, smooth user experience, and engaging interactive elements.',
      icon: Music,
      color: 'from-pink-500 to-rose-500',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'UI/UX'],
      features: [
        'Modern Design: Sleek and contemporary interface with premium aesthetics',
        'Responsive Layout: Optimized for all devices and screen sizes',
        'Interactive Elements: Engaging user interactions and smooth animations'
      ],
      github: 'https://github.com/dev9923/premium_music.git'
    },
    {
      title: 'Mobile Number Tracker',
      description:
        'A web-based mobile number tracker built with Node.js that allows users to trace mobile numbers using integrated APIs and comprehensive database systems.',
      icon: Phone,
      color: 'from-blue-500 to-cyan-500',
      tags: ['Node.js', 'Express.js', 'API Integration', 'MongoDB', 'Real-time Data'],
      features: [
        'API Integration: Seamless integration with multiple tracking APIs',
        'Database Management: Efficient data storage and retrieval systems',
        'Real-time Processing: Instant number tracking and location services'
      ],
      github: 'https://github.com/dev9923/mobile_number_tracker.git'
    },
    {
      title: 'Stopwatch Application',
      description:
        'A precision timer application with advanced JavaScript logic, responsive layout, and comprehensive timing features including millisecond accuracy.',
      icon: Clock,
      color: 'from-orange-500 to-amber-500',
      tags: ['JavaScript', 'CSS3', 'DOM Manipulation', 'Local Storage', 'Performance'],
      features: [
        'Precision Timing: Millisecond accuracy with start, stop, and reset functionality',
        'Local Storage: Persistent timing data and user preferences',
        'Responsive Design: Optimized interface for all device types'
      ],
      github: 'https://github.com/dev9923/stopwatch.git'
    },
    {
      title: 'Real-Time Poll Rooms',
      description:
        'A dynamic polling application enabling instant feedback and voting in dedicated rooms. Features accurate real-time updates and an intuitive user interface for seamless interaction.',
      icon: Network,
      color: 'from-red-500 to-pink-500',
      tags: ['Next.js', 'Socket.io', 'Node.js', 'Real-time', 'Tailwind CSS'],
      features: [
        'Live Polling: Instant vote updates using WebSockets',
        'Room Architecture: Dedicated private or public rooms for poll management',
        'Interactive UI: Clean and responsive design for enhanced user engagement'
      ],
      github: 'https://github.com/dev9923/Real-Time-Poll-Rooms.git'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
            A showcase of innovative projects demonstrating full-stack development, AI integration, and machine learning expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl dark:shadow-slate-900/50 transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-slate-700"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 bg-gradient-to-r ${project.color} text-white rounded-xl shadow-md`}>
                    <IconComponent size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-lg">{project.description}</p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wide mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub Link Only */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg font-medium hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-200"
                  >
                    <Github size={18} />
                    Code
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            { number: '5+', label: 'Projects Completed', icon: Network },
            { number: '3+', label: 'AI/ML Projects', icon: Bot },
            { number: '100%', label: 'Client Satisfaction', icon: TrendingUp }
          ].map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.label} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl dark:border dark:border-slate-700">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full mb-4">
                  <IconComponent size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
