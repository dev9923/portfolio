import React from 'react';
import { 
  Code, 
  Server, 
  Database, 
  Palette, 
  GitBranch, 
  Terminal,
  Globe,
  Layers
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-emerald-500 to-emerald-600',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication']
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-purple-500 to-purple-600',
      skills: ['MongoDB', 'MySQL', 'Database Design', 'Data Modeling']
    },
    {
      title: 'Template Engines',
      icon: Layers,
      color: 'from-orange-500 to-orange-600',
      skills: ['EJS', 'EJS Mate', 'Dynamic Rendering']
    },
    {
      title: 'Tools & Others',
      icon: Terminal,
      color: 'from-gray-500 to-gray-600',
      skills: ['Git', 'GitHub', 'VS Code', 'npm/yarn']
    }
  ];

  const currentlyLearning = [
    { name: 'EJS', progress: 75, color: 'bg-emerald-500' },
    { name: 'Advanced React', progress: 85, color: 'bg-blue-500' },
    { name: 'MongoDB Optimization', progress: 60, color: 'bg-purple-500' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} text-white rounded-xl`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 text-gray-700 hover:text-blue-700 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Currently Learning Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🌱 Currently Learning
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {currentlyLearning.map((item) => (
              <div key={item.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">{item.name}</span>
                  <span className="text-sm text-gray-600">{item.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 ${item.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;