import React from 'react';
import { TrendingUp, BarChart3, DollarSign, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full text-emerald-700 font-medium">
            <Zap size={16} />
            <span>AI-Powered Stock Predictions</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                StockSage Pro
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-700 font-semibold">
              Advanced Stock Prediction Platform
            </p>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Harness the power of AI and machine learning to make informed investment decisions. 
              Get real-time market data, predictive analytics, and seamless trading integration.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-lg text-gray-600 max-w-4xl mx-auto">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Live Market Data</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>AI Predictions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Trading Integration</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={() => scrollToSection('predictions')}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Predicting
            </button>
            <button
              onClick={() => scrollToSection('market')}
              className="px-8 py-4 border-2 border-emerald-500 text-emerald-600 rounded-full font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300"
            >
              View Live Market
            </button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 pt-12 max-w-4xl mx-auto">
            {[
              { icon: TrendingUp, value: '95%', label: 'Prediction Accuracy' },
              { icon: BarChart3, value: '500+', label: 'Stocks Tracked' },
              { icon: DollarSign, value: '₹10M+', label: 'Trading Volume' }
            ].map((stat) => {
              const IconComponent = stat.icon;
              return (
                <div key={stat.label} className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-full mb-4">
                    <IconComponent size={24} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;