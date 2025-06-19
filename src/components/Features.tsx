import React from 'react';
import { Brain, TrendingUp, Shield, Zap, BarChart3, Globe, MessageSquare, Target, PieChart, Bell, Eye, Cpu } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Predictions',
      description: 'Neural networks trained on 10+ years of market data with 95% accuracy for banking sector predictions.',
      color: 'from-purple-500 to-indigo-500',
      highlight: 'NEW'
    },
    {
      icon: MessageSquare,
      title: 'Real-Time Sentiment Analysis',
      description: 'Multi-language NLP analysis of news, social media, and analyst reports with context understanding.',
      color: 'from-blue-500 to-cyan-500',
      highlight: 'EXCLUSIVE'
    },
    {
      icon: Target,
      title: 'AI Portfolio Optimizer',
      description: 'Modern portfolio theory implementation with dynamic rebalancing and risk parity models.',
      color: 'from-emerald-500 to-teal-500',
      highlight: 'PREMIUM'
    },
    {
      icon: BarChart3,
      title: 'Complete Banking Coverage',
      description: 'Live data for all major Indian banks including public, private, and small finance banks.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Eye,
      title: 'Advanced Market Scanner',
      description: 'Real-time pattern recognition with technical indicators, volume analysis, and breakout detection.',
      color: 'from-yellow-500 to-orange-500',
      highlight: 'NEW'
    },
    {
      icon: Bell,
      title: 'Smart Alert System',
      description: 'AI-powered alerts for price movements, pattern breakouts, and sentiment changes with custom triggers.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Shield,
      title: 'Risk Assessment Engine',
      description: 'Multi-factor risk models with beta analysis, volatility tracking, and correlation matrices.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Cpu,
      title: 'Quantum-Speed Processing',
      description: 'Process millions of data points in real-time with our proprietary high-frequency analysis engine.',
      color: 'from-teal-500 to-emerald-500',
      highlight: 'EXCLUSIVE'
    },
    {
      icon: Globe,
      title: 'Institutional-Grade APIs',
      description: 'Professional API access with 99.9% uptime, real-time data feeds, and custom integrations.',
      color: 'from-green-500 to-emerald-500',
      highlight: 'ENTERPRISE'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Revolutionary Features
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Industry-leading technology that sets StockSage Pro apart from every other platform
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 group"
              >
                {feature.highlight && (
                  <div className="absolute -top-3 -right-3">
                    <div className={`px-3 py-1 text-xs font-bold text-white rounded-full ${
                      feature.highlight === 'NEW' ? 'bg-emerald-500' :
                      feature.highlight === 'EXCLUSIVE' ? 'bg-purple-500' :
                      feature.highlight === 'PREMIUM' ? 'bg-blue-500' : 'bg-orange-500'
                    }`}>
                      {feature.highlight}
                    </div>
                  </div>
                )}
                
                <div className={`p-4 bg-gradient-to-r ${feature.color} text-white rounded-xl shadow-md mb-6 inline-block group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200">
                    Learn More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Unique Differentiators */}
        <div className="mt-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-12 rounded-3xl text-white">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">🚀 What Makes Us Extraordinary</h3>
            <p className="text-xl text-indigo-100">Features you won't find anywhere else in the market</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🧠</div>
              <h4 className="text-xl font-bold mb-2">Proprietary AI Models</h4>
              <p className="text-indigo-100">Custom-built neural networks specifically trained on Indian banking sector data</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h4 className="text-xl font-bold mb-2">Microsecond Latency</h4>
              <p className="text-indigo-100">Ultra-low latency data processing faster than institutional platforms</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-xl font-bold mb-2">95%+ Accuracy</h4>
              <p className="text-indigo-100">Highest prediction accuracy in the industry with transparent backtesting</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔮</div>
              <h4 className="text-xl font-bold mb-2">Future-Proof Technology</h4>
              <p className="text-indigo-100">Quantum-ready algorithms and next-generation market analysis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;