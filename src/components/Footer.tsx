import React from 'react';
import { TrendingUp, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl">
                <TrendingUp className="text-white" size={24} />
              </div>
              <div className="text-xl font-bold">StockSage Pro</div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Advanced AI-powered stock prediction platform helping investors make informed decisions with confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Features', 'Live Market', 'Predictions', 'Pricing', 'Trading Partners'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {['Help Center', 'API Documentation', 'Terms of Service', 'Privacy Policy', 'Contact Support'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-emerald-400" />
                <span className="text-gray-400">support@stocksagepro.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-emerald-400" />
                <span className="text-gray-400">+91 8449779923</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-emerald-400" />
                <span className="text-gray-400">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 StockSage Pro. All rights reserved. Built with React & Tailwind CSS.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Powered by Alpha Vantage API</span>
              <span>•</span>
              <span>SEBI Registered Partners</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;