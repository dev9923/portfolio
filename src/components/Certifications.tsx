import React from 'react';
import { Award, BookOpen, Brain, BarChart3, CaseSensitive as University, Building2 } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Graph Theory Programming',
      institution: 'Algo University',
      icon: Brain,
      color: 'from-purple-500 to-indigo-500',
      description: 'Advanced algorithms and data structures focusing on graph theory applications and optimization techniques.',
      skills: ['Graph Algorithms', 'Dynamic Programming', 'Optimization', 'Problem Solving']
    },
    {
      title: 'Introduction to Generative AI',
      institution: 'Duke University',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      description: 'Comprehensive introduction to generative AI models, machine learning fundamentals, and practical applications.',
      skills: ['Machine Learning', 'AI Models', 'Neural Networks', 'Deep Learning']
    },
    {
      title: 'Data Science',
      institution: 'Infosys Springboard',
      icon: BarChart3,
      color: 'from-emerald-500 to-teal-500',
      description: 'Complete data science curriculum covering statistical analysis, data visualization, and predictive modeling.',
      skills: ['Python', 'Data Analysis', 'Statistics', 'Data Visualization']
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Courses & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Continuous learning through prestigious institutions and industry-leading platforms
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={cert.title}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 bg-gradient-to-r ${cert.color} text-white rounded-xl shadow-md flex-shrink-0`}>
                    <IconComponent size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <University size={16} />
                      <span className="font-medium">{cert.institution}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certificate Badge */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <Award size={18} />
                    <span className="font-semibold text-sm">Certified</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full">
                <Brain size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Continuous Learning</h3>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I believe in staying at the forefront of technology through continuous education. 
              These certifications represent my commitment to mastering emerging technologies 
              and applying cutting-edge solutions to real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;