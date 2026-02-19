"use client"

import { Building2, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: 'UIDAI (Ministry of Electronics & Information Technology)',
            role: 'SDE Intern',
            location: 'Head Office, New Delhi',
            period: 'Jun 2025 – Present',
            description: [
                'Contributed to the Aadhaar Verification Portal, ASK Feedback System, and Aadhaar Document Checker, a mission-critical project enabling secure and efficient identity authentication for millions of users.',
                'Developed and maintained full stack features including front-end interfaces, back-end APIs, and database workflows.',
                'Implemented secure authentication protocols and improved system scalability and performance.',
                'Collaborated with senior developers and government stakeholders to ensure high-quality, reliable solutions.'
            ],
            projects: [
                {
                    name: 'Aadhaar Document Checker',
                    description: 'An official web application to guide 1.4B+ Indian residents through Aadhaar enrolment/update processes. Features a Document Checker Wizard, interactive checklists, and 40+ document type advisory system.',
                    technologies: ['React', 'Vite', 'Tailwind CSS', 'Redux', 'Radix UI']
                },
                {
                    name: 'ASK Feedback System',
                    description: 'Developed a comprehensive feedback collection system for Aadhaar Seva Kendras to monitor service quality and user satisfaction across verified operational centers.',
                    technologies: ['Node.js', 'Express', 'MongoDB', 'React']
                },
                {
                    name: 'Aadhaar Verification Portal',
                    description: 'Contributed to core backend services for Aadhaar ecosystem, optimizing data processing and ensuring high availability for critical identity services.',
                    technologies: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL']
                }
            ],
            color: 'from-orange-500 to-red-500'
        }
    ];

    return (
        <section id="experience" className="py-20 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Work Experience
                    </motion.h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 pb-12 last:pb-0"
                        >
                            {/* Timeline Dot */}
                            <div className={`absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} ring-4 ring-white dark:ring-black`} />

                            <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-slate-800">
                                <div className="flex flex-wrapjustify-between items-start gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.role}</h3>
                                        <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-semibold text-lg">
                                            <Building2 size={20} />
                                            <span>{exp.company}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-white dark:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                                        <Calendar size={16} />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                <ul className="space-y-4">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                {exp.projects && (
                                    <div className="mt-6 pt-6 border-t border-gray-100 dark:border-slate-800">
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Projects</h4>
                                        <div className="grid gap-4">
                                            {exp.projects.map((project, idx) => (
                                                <div key={idx} className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-slate-700">
                                                    <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-1">{project.name}</h5>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.description}</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.technologies.map((tech) => (
                                                            <span key={tech} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs rounded-md font-medium">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
