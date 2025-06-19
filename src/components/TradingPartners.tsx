import React from 'react';
import { ExternalLink, Shield, Percent, Clock } from 'lucide-react';

const TradingPartners = () => {
  const partners = [
    {
      name: 'Zerodha',
      description: 'India\'s largest discount broker',
      commission: '0.03%',
      features: ['Zero brokerage on equity delivery', 'Advanced trading platforms', '24/7 support'],
      logo: '🟢'
    },
    {
      name: 'Upstox',
      description: 'Technology-first trading platform',
      commission: '0.05%',
      features: ['Low brokerage rates', 'Mobile-first experience', 'Research & analytics'],
      logo: '🟠'
    },
    {
      name: 'Angel One',
      description: 'Full-service stockbroker',
      commission: '0.25%',
      features: ['Comprehensive research', 'Investment advisory', 'Multiple trading platforms'],
      logo: '🔵'
    },
    {
      name: 'ICICI Direct',
      description: 'Bank-backed trading platform',
      commission: '0.55%',
      features: ['Banking integration', 'Premium research', 'Wealth management'],
      logo: '🟡'
    }
  ];

  const handleTradeRedirect = (brokerName: string) => {
    // In a real application, you would redirect to the actual broker's platform
    // with affiliate tracking and commission setup
    const brokerUrls = {
      'Zerodha': 'https://zerodha.com',
      'Upstox': 'https://upstox.com',
      'Angel One': 'https://angelone.in',
      'ICICI Direct': 'https://www.icicidirect.com'
    };
    
    window.open(brokerUrls[brokerName] || '#', '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trading Partners
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Execute your trades seamlessly through our trusted broker partners with competitive commission rates
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{partner.logo}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{partner.name}</h3>
                    <p className="text-gray-600">{partner.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-1">Our Commission</div>
                  <div className="text-xl font-bold text-emerald-600">{partner.commission}</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {partner.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleTradeRedirect(partner.name)}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Start Trading
                <ExternalLink size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-full mb-4">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Trading</h3>
            <p className="text-gray-600">All partner brokers are SEBI registered and offer secure trading environments</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-full mb-4">
              <Percent size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Low Commissions</h3>
            <p className="text-gray-600">Competitive commission rates to maximize your trading profits</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-full mb-4">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Execution</h3>
            <p className="text-gray-600">Execute trades instantly based on our AI predictions and market signals</p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Trading?</h3>
          <p className="text-lg mb-6 opacity-90">
            Combine our AI predictions with seamless trading execution for maximum profit potential
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default TradingPartners;