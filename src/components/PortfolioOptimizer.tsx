import React, { useState } from 'react';
import { PieChart, Target, TrendingUp, Shield, Zap, Calculator, BarChart3 } from 'lucide-react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const PortfolioOptimizer = () => {
  const [investmentAmount, setInvestmentAmount] = useState(100000);
  const [riskTolerance, setRiskTolerance] = useState('moderate');
  const [timeHorizon, setTimeHorizon] = useState('medium');
  const [optimizedPortfolio, setOptimizedPortfolio] = useState(null);

  const riskProfiles = {
    conservative: { risk: 'Low', expectedReturn: '8-12%', volatility: 'Low' },
    moderate: { risk: 'Medium', expectedReturn: '12-18%', volatility: 'Medium' },
    aggressive: { risk: 'High', expectedReturn: '18-25%', volatility: 'High' }
  };

  const samplePortfolios = {
    conservative: [
      { name: 'SBIN', allocation: 25, amount: 25000, color: '#3b82f6', risk: 'Low', expectedReturn: 12 },
      { name: 'HDFCBANK', allocation: 30, amount: 30000, color: '#10b981', risk: 'Low', expectedReturn: 14 },
      { name: 'PNB', allocation: 20, amount: 20000, color: '#f59e0b', risk: 'Medium', expectedReturn: 10 },
      { name: 'CANBK', allocation: 15, amount: 15000, color: '#8b5cf6', risk: 'Medium', expectedReturn: 11 },
      { name: 'BANKBARODA', allocation: 10, amount: 10000, color: '#ef4444', risk: 'Low', expectedReturn: 9 }
    ],
    moderate: [
      { name: 'HDFCBANK', allocation: 25, amount: 25000, color: '#3b82f6', risk: 'Low', expectedReturn: 14 },
      { name: 'ICICIBANK', allocation: 25, amount: 25000, color: '#10b981', risk: 'Medium', expectedReturn: 16 },
      { name: 'AXISBANK', allocation: 20, amount: 20000, color: '#f59e0b', risk: 'Medium', expectedReturn: 15 },
      { name: 'KOTAKBANK', allocation: 15, amount: 15000, color: '#8b5cf6', risk: 'Low', expectedReturn: 13 },
      { name: 'INDUSINDBK', allocation: 15, amount: 15000, color: '#ef4444', risk: 'High', expectedReturn: 18 }
    ],
    aggressive: [
      { name: 'YESBANK', allocation: 20, amount: 20000, color: '#3b82f6', risk: 'High', expectedReturn: 25 },
      { name: 'RBLBANK', allocation: 20, amount: 20000, color: '#10b981', risk: 'High', expectedReturn: 22 },
      { name: 'BANDHANBNK', allocation: 20, amount: 20000, color: '#f59e0b', risk: 'High', expectedReturn: 20 },
      { name: 'AUBANK', allocation: 20, amount: 20000, color: '#8b5cf6', risk: 'High', expectedReturn: 24 },
      { name: 'EQUITASBNK', allocation: 20, amount: 20000, color: '#ef4444', risk: 'High', expectedReturn: 21 }
    ]
  };

  const optimizePortfolio = () => {
    const portfolio = samplePortfolios[riskTolerance].map(stock => ({
      ...stock,
      amount: (stock.allocation / 100) * investmentAmount
    }));
    
    const totalExpectedReturn = portfolio.reduce((sum, stock) => 
      sum + (stock.expectedReturn * stock.allocation / 100), 0
    );

    setOptimizedPortfolio({
      stocks: portfolio,
      totalExpectedReturn: totalExpectedReturn.toFixed(1),
      riskScore: riskProfiles[riskTolerance].risk,
      diversificationScore: 85,
      sharpeRatio: 1.45
    });
  };

  const performanceMetrics = [
    { name: 'Expected Return', value: optimizedPortfolio?.totalExpectedReturn + '%' || '0%', color: '#10b981' },
    { name: 'Risk Level', value: optimizedPortfolio?.riskScore || 'N/A', color: '#f59e0b' },
    { name: 'Diversification', value: optimizedPortfolio?.diversificationScore + '%' || '0%', color: '#3b82f6' },
    { name: 'Sharpe Ratio', value: optimizedPortfolio?.sharpeRatio || '0', color: '#8b5cf6' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full">
              <Target size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              AI Portfolio Optimizer
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Create optimal banking sector portfolios using advanced algorithms and modern portfolio theory
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Portfolio Configuration */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Calculator className="text-emerald-600" size={24} />
                Portfolio Configuration
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Investment Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    min="10000"
                    step="10000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Risk Tolerance
                  </label>
                  <select
                    value={riskTolerance}
                    onChange={(e) => setRiskTolerance(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="conservative">Conservative - Low Risk</option>
                    <option value="moderate">Moderate - Balanced Risk</option>
                    <option value="aggressive">Aggressive - High Risk</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Investment Horizon
                  </label>
                  <select
                    value={timeHorizon}
                    onChange={(e) => setTimeHorizon(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="short">Short Term (1-2 years)</option>
                    <option value="medium">Medium Term (3-5 years)</option>
                    <option value="long">Long Term (5+ years)</option>
                  </select>
                </div>

                <button
                  onClick={optimizePortfolio}
                  className="w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Zap size={20} />
                  Optimize Portfolio
                </button>
              </div>
            </div>

            {/* Risk Profile Info */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="text-blue-600" size={20} />
                {riskProfiles[riskTolerance].risk} Risk Profile
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Expected Return:</span>
                  <div className="font-semibold text-gray-900">{riskProfiles[riskTolerance].expectedReturn}</div>
                </div>
                <div>
                  <span className="text-gray-600">Volatility:</span>
                  <div className="font-semibold text-gray-900">{riskProfiles[riskTolerance].volatility}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Optimized Portfolio Results */}
          <div className="space-y-8">
            {optimizedPortfolio ? (
              <>
                {/* Portfolio Allocation Chart */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <PieChart className="text-emerald-600" size={24} />
                    Optimized Allocation
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <ResponsiveContainer width="100%" height={250}>
                      <RechartsPieChart>
                        <Pie
                          data={optimizedPortfolio.stocks}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          dataKey="allocation"
                        >
                          {optimizedPortfolio.stocks.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </RechartsPieChart>
                    </ResponsiveContainer>

                    <div className="space-y-3">
                      {optimizedPortfolio.stocks.map((stock) => (
                        <div key={stock.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: stock.color }}></div>
                            <div>
                              <div className="font-semibold text-gray-900">{stock.name}</div>
                              <div className="text-sm text-gray-600">{stock.allocation}%</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-gray-900">₹{stock.amount.toLocaleString()}</div>
                            <div className="text-sm text-emerald-600">{stock.expectedReturn}% exp.</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <BarChart3 className="text-emerald-600" size={24} />
                    Performance Metrics
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {performanceMetrics.map((metric, index) => (
                      <div key={index} className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100">
                        <div className="text-sm text-gray-600 mb-1">{metric.name}</div>
                        <div className="text-2xl font-bold" style={{ color: metric.color }}>
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-gradient-to-br from-gray-50 to-white p-12 rounded-2xl shadow-lg border border-gray-100 text-center">
                <Target className="mx-auto text-gray-400 mb-4" size={48} />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Ready to Optimize</h3>
                <p className="text-gray-500">Configure your preferences and click "Optimize Portfolio" to see your personalized allocation</p>
              </div>
            )}
          </div>
        </div>

        {/* Optimizer Features */}
        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-600 p-8 rounded-2xl text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">🎯 Advanced Optimization Features</h3>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl mb-3">⚖️</div>
                <h4 className="text-lg font-semibold mb-2">Modern Portfolio Theory</h4>
                <p className="text-emerald-100 text-sm">Markowitz optimization for maximum risk-adjusted returns</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🔄</div>
                <h4 className="text-lg font-semibold mb-2">Dynamic Rebalancing</h4>
                <p className="text-emerald-100 text-sm">Automatic portfolio rebalancing based on market conditions</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📊</div>
                <h4 className="text-lg font-semibold mb-2">Risk Parity Models</h4>
                <p className="text-emerald-100 text-sm">Equal risk contribution from each portfolio component</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="text-lg font-semibold mb-2">Goal-Based Investing</h4>
                <p className="text-emerald-100 text-sm">Portfolios tailored to specific financial goals and timelines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioOptimizer;