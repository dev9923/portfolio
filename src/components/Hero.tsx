"use client"


import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-black dark:to-slate-900 pt-20 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    {/* Profile Image */}
                    <div className="mx-auto w-40 h-40 rounded-full overflow-hidden shadow-2xl ring-4 ring-white dark:ring-slate-800 relative">
                        <img
                            src="/Devansh.jpg"
                            alt="Devansh Bansal"
                            className="object-cover hover:scale-110 transition-transform duration-500 w-full h-full"
                        />
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">Hello, I'm</p>
                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                                <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-emerald-500 bg-clip-text text-transparent animate-gradient-x">
                                    DEVANSH BANSAL
                                </span>
                            </h1>
                        </div>

                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Passionate Web Developer and Software Engineer with a focus on building modern, scalable, and user-friendly solutions.
                        </p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
                        >
                            <div className="flex items-center gap-2 bg-white/50 dark:bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-100 dark:border-gray-800">
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>BTech CSE Core @ SRM Institute of Science and Technology, kattankulathur, Chennai</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/50 dark:bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-100 dark:border-gray-800">
                                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                                <span>Full-Stack Development</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/50 dark:bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-100 dark:border-gray-800">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                <span>AI & Machine Learning</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                    >
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="px-8 py-4 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 dark:shadow-blue-900/20"
                        >
                            View My Work
                        </button>
                        <a
                            href="/Devansh_Bansal.pdf"
                            download="Devansh_Bansal.pdf"
                            type="application/pdf"
                            className="px-8 py-4 border-2 border-blue-700 dark:border-blue-500 text-blue-700 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-700 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 flex items-center gap-2"
                        >
                            <Download size={20} />
                            Download CV
                        </a>

                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex justify-center space-x-6 pt-8"
                    >
                        <a
                            href="https://github.com/dev9923"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/devansh-bansal-329ab7b1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="mailto:devanshbansal500@gmail.com"
                            className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                            aria-label="Email"
                        >
                            <Mail size={24} />
                        </a>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="pt-12"
                    >
                        <div className="animate-bounce">
                            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full mx-auto">
                                <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mx-auto mt-2"></div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
