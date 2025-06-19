import React from 'react';
import { Check, Crown, Zap, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '₹49',
      period: '/month',
      description: 'Perfect for individual investors getting started',
      icon: Zap,
      color: 'from-blue-500 to-blue-600',
      features: [
        'Live market data for 10 stocks',
        'Basic AI predictions (3 days)',
        'Email alerts',
        'Mobile app access',
        'Basic risk analysis'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '₹149',
      period: '/month',
      description: 'Advanced features for serious traders',
      icon: Crown,
      color: 'from-emerald-500 to-emerald-600',
      features: [
        'Live market data for 100+ stocks',
        'Advanced AI predictions (7 days)',
        'Real-time alerts & notifications',
        'Portfolio optimization',
        'Advanced risk assessment',
        'Technical analysis tools',
        'Priority customer support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '₹299',
      period: '/month',
      description: 'Complete solution for professional traders',
      icon: Star,
      color: 'from-purple-500 to-purple-600',
      features: [
        'Unlimited stock tracking',
        'Extended AI predictions (30 days)',
        'Custom alerts & automation',
        'Advanced portfolio analytics',
        'Institutional-grade risk models',
        'API access for integration',
        'Dedicated account manager',
        'Custom reporting & insights'
      ],
      popular: false
    }
  ];

  const handleUpgrade = (planName: string, price: string) => {
    // Extract numeric price
    const numericPrice = price.replace('₹', '');
    
    // Create payment URL with UPI details
    const upiId = '8449779923@pthdfc';
    const amount = numericPrice;
    const note = `StockSage Pro ${planName} Plan Subscription`;
    
    // Generate UPI payment link
    const upiLink = `upi://pay?pa=${upiId}&am=${amount}&tn=${encodeURIComponent(note)}&cu=INR`;
    
    // For web, we'll redirect to a payment page that shows QR code
    // In a real app, you'd integrate with payment gateways
    window.open(upiLink, '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Unlock the power of AI-driven stock predictions with our flexible pricing plans
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'ring-2 ring-emerald-500 ring-opacity-50' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex p-4 bg-gradient-to-r ${plan.color} text-white rounded-2xl mb-4`}>
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                        <Check size={12} className="text-emerald-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleUpgrade(plan.name, plan.price)}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-blue-600 text-white hover:shadow-lg hover:scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🔒 Secure Payment Processing
            </h3>
            <p className="text-gray-600 mb-6">
              All payments are processed securely through UPI. Your financial data is protected with bank-grade encryption.
            </p>
            <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
              <span>✓ 256-bit SSL Encryption</span>
              <span>✓ PCI DSS Compliant</span>
              <span>✓ 30-day Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;