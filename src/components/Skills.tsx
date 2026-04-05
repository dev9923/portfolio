"use client"

import {
    Code,
    Server,
    Database,
    Cpu,
    GitBranch
} from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            icon: Code,
            color: 'from-blue-500 to-cyan-500',
            skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3']
        },
        {
            title: 'Backend',
            icon: Server,
            color: 'from-emerald-500 to-teal-500',
            skills: ['Java 21', 'Spring Boot', 'RESTful APIs', 'Node.js', 'Express.js', 'Maven']
        },
        {
            title: 'Database',
            icon: Database,
            color: 'from-purple-500 to-violet-500',
            skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Database Design', 'Data Modeling']
        },
        {
            title: 'DevOps & Monitoring',
            icon: GitBranch,
            color: 'from-orange-500 to-amber-500',
            skills: ['Jenkins', 'Grafana', 'Kibana', 'Argo CD']
        },
        {
            title: 'Languages',
            icon: Cpu,
            color: 'from-pink-500 to-rose-500',
            skills: ['Java', 'Python', 'C', 'C++']
        }
    ];

    const currentlyLearning = [
        { name: 'Spring Boot & Microservices', progress: 80, color: 'bg-emerald-500' },
        { name: 'DevOps & CI/CD', progress: 70, color: 'bg-orange-500' },
        { name: 'System Design', progress: 65, color: 'bg-purple-500' }
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
