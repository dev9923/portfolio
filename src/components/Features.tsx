import React from 'react';
import { Brain, TrendingUp, Shield, Zap, BarChart3, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Predictions',
      description: 'Advanced machine learning algorithms analyze market patterns and predict stock movements with 95% accuracy.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Analytics',
      description: 'Live market data integration with Alpha Vantage API providing instant insights and trend analysis.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: BarChart3,
      title: 'Multi-Bank Coverage',
      description: 'Comprehensive analysis of all major Indian banks including SBI, HDFC, ICICI, Axis, and more.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Intelligent risk scoring system helps you make informed decisions with confidence levels.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Instant Alerts',
      description: 'Get notified immediately when your tracked stocks hit target prices or show significant movements.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Trading Integration',
      description: 'Seamless integration with major brokers for direct stock purchases with competitive commission rates.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Everything you need to make smart investment decisions in one comprehensive platform
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className={`p-4 bg-gradient-to-r ${feature.color} text-white rounded-xl shadow-md mb-6 inline-block`}>
                  <IconComponent size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;