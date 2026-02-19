"use client"


import {
    Code,
    Server,
    Database,
    Terminal,
    Layers,
    Cpu,
    Blocks
} from 'lucide-react';
import { motion } from 'framer-motion';

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
        },
        {
            title: 'Languages',
            icon: Cpu,
            color: 'from-pink-500 to-rose-600',
            skills: ['C', 'C++', 'Python', 'Java']
        },
        {
            title: 'Emerging Tech',
            icon: Blocks,
            color: 'from-amber-500 to-yellow-600',
            skills: ['Blockchain', 'Smart Contracts', 'AI & Machine Learning']
        }
    ];

    const currentlyLearning = [
        { name: 'EJS', progress: 75, color: 'bg-emerald-500' },
        { name: 'Advanced React', progress: 85, color: 'bg-blue-500' },
        { name: 'MongoDB Optimization', progress: 60, color: 'bg-purple-500' }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Skills & Technologies
                    </motion.h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-purple-600 mx-auto rounded-full"></div>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
                        A comprehensive toolkit for building modern, scalable web applications
                    </p>
                </div>

                {/* Skills Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                >
                    {skillCategories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <motion.div
                                key={category.title}
                                variants={item}
                                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-lg dark:shadow-slate-900/50 transition-all duration-300 hover:scale-105 border border-transparent dark:border-slate-700"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`p-3 bg-gradient-to-r ${category.color} text-white rounded-xl shadow-md`}>
                                        <IconComponent size={24} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
                                </div>
                                <div className="space-y-3">
                                    {category.skills.map((skill) => (
                                        <div
                                            key={skill}
                                            className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200"
                                        >
                                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                            <span className="font-medium">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Currently Learning Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm dark:shadow-slate-900/50 border border-transparent dark:border-slate-700"
                >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                        🌱 Currently Learning
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {currentlyLearning.map((item) => (
                            <div key={item.name} className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-gray-800 dark:text-gray-200">{item.name}</span>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">{item.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.progress}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className={`h-3 ${item.color} rounded-full`}
                                    ></motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
