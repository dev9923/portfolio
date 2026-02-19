"use client"

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white/95 dark:bg-black/95 backdrop-blur-sm shadow-sm border-b border-gray-200 dark:border-gray-800'
      : 'bg-transparent'
      }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex items-center gap-2">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-transparent hover:border-blue-500 transition-colors">
                <img
                  src="https://raw.githubusercontent.com/TheDudeThatCode/TheDudeThatCode/master/Assets/Developer.gif"
                  alt="Devansh"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white hidden sm:block">
                Devansh
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Skills', 'Experience', 'Certifications', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-colors duration-200 ${isScrolled
                  ? 'text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400'
                  : 'text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400'
                  }`}
              >
                {item}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              className={`p-2 transition-colors duration-200 ${isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-gray-800 dark:text-white'
                }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-black/95 backdrop-blur-sm rounded-b-lg animate-in slide-in-from-top-2">
            {['About', 'Skills', 'Experience', 'Certifications', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 rounded-lg"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
