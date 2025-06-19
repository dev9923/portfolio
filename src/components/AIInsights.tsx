import React, { useState, useEffect } from 'react';
import { Brain, Zap, Target, AlertTriangle, TrendingUp, TrendingDown, Activity } from 'lucide-react';

const AIInsights = () => {
  const [insights, setInsights] = useState([
    {
      id: 1,
      type: 'bullish',
      title: 'Banking Sector Rally Expected',
      description: 'AI models predict a 15-20% upward movement in banking stocks over the next 2 weeks based on RBI policy changes and credit growth data.',
      confidence: 92,
      timeframe: '2 weeks',
      impact: 'High',
      stocks: ['SBIN', 'HDFCBANK', 'ICICIBANK'],
      reasoning: 'Positive credit growth, improved NPA ratios, and favorable policy environment'
    },
    {
      id: 2,
      type: 'bearish',
      title: 'Private Bank Correction Incoming',
      description: 'Technical analysis suggests private banks may face 5-8% correction due to profit booking after recent gains.',
      confidence: 78,
      timeframe: '1 week',
      impact: 'Medium',
      stocks: ['KOTAKBANK', 'AXISBANK', 'INDUSINDBK'],
      reasoning: 'Overbought conditions, high valuations, and profit booking pressure'
    },
    {
      id: 3,
      type: 'neutral',
      title: 'Small Finance Banks Consolidation',
      description: 'Small finance banks expected to trade in a narrow range as market awaits regulatory clarity on lending norms.',
      confidence: 85,
      timeframe: '3 weeks',
      impact: 'Low',
      stocks: ['AUBANK', 'EQUITASBNK', 'UJJIVANSFB'],
      reasoning: 'Regulatory uncertainty, mixed earnings, and sector consolidation trends'
    }
  ]);

  const [aiMetrics, setAiMetrics] = useState({
    accuracy: 94.2,
    totalPredictions: 1247,
    successfulTrades: 1175,
    avgReturn: 12.8,
    riskScore: 'Low',
    marketSentiment: 'Bullish'
  });

  const getInsightIcon = (type) => {
    switch (type) {
      case 'bullish': return <TrendingUp className="text-emerald-500" size={24} />;
      case 'bearish': return <TrendingDown className="text-red-500" size={24} />;
      default: return <Activity className="text-blue-500" size={24} />;
    }
  };

  const getInsightColor = (type) => {
    switch (type) {
      case 'bullish': return 'from-emerald-50 to-emerald-100 border-emerald-200';
      case 'bearish': return 'from-red-50 to-red-100 border-red-200';
      default: return 'from-blue-50 to-blue-100 border-blue-200';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full">
              <Brain size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              AI Market Insights
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Advanced AI algorithms analyze market patterns, news sentiment, and technical indicators to provide actionable insights
          </p>
        </div>

        {/* AI Performance Metrics */}
        <div className="grid md:grid-cols-6 gap-6 mb-12">
          {[
            { label: 'AI Accuracy', value: `${aiMetrics.accuracy}%`, color: 'bg-emerald-500' },
            { label: 'Predictions', value: aiMetrics.totalPredictions.toLocaleString(), color: 'bg-blue-500' },
            { label: 'Success Rate', value: `${((aiMetrics.successfulTrades / aiMetrics.totalPredictions) * 100).toFixed(1)}%`, color: 'bg-purple-500' },
            { label: 'Avg Return', value: `${aiMetrics.avgReturn}%`, color: 'bg-orange-500' },
            { label: 'Risk Level', value: aiMetrics.riskScore, color: 'bg-teal-500' },
            { label: 'Sentiment', value: aiMetrics.marketSentiment, color: 'bg-indigo-500' }
          ].map((metric, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className={`w-12 h-12 ${metric.color} rounded-lg flex items-center justify-center mb-4`}>
                <Zap className="text-white" size={20} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* AI Insights Cards */}
        <div className="space-y-6">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className={`bg-gradient-to-r ${getInsightColor(insight.type)} p-8 rounded-2xl border-2 shadow-sm hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  {getInsightIcon(insight.type)}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{insight.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">{insight.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-2">
                    <Target size={18} className="text-blue-600" />
                    <span className="text-sm font-medium text-gray-600">Confidence</span>
                  </div>
                  <div className="text-3xl font-bold text-blue-600">{insight.confidence}%</div>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div>
                  <div className="text-sm font-medium text-gray-600 mb-1">Timeframe</div>
                  <div className="text-lg font-semibold text-gray-900">{insight.timeframe}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-600 mb-1">Impact Level</div>
                  <div className={`text-lg font-semibold ${
                    insight.impact === 'High' ? 'text-red-600' :
                    insight.impact === 'Medium' ? 'text-orange-600' : 'text-green-600'
                  }`}>{insight.impact}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-600 mb-1">Affected Stocks</div>
                  <div className="flex flex-wrap gap-1">
                    {insight.stocks.map((stock) => (
                      <span key={stock} className="px-2 py-1 bg-white/70 text-gray-700 rounded text-sm font-medium">
                        {stock}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-600 mb-1">AI Reasoning</div>
                  <div className="text-sm text-gray-700">{insight.reasoning}</div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/50">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <AlertTriangle size={16} />
                  <span>AI-Generated Insight • Updated 5 minutes ago</span>
                </div>
                <button className="px-4 py-2 bg-white/80 hover:bg-white text-gray-700 rounded-lg font-medium transition-all duration-200">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* AI Features Highlight */}
        <div className="mt-16 bg-gradient-to-r from-purple-500 to-indigo-600 p-8 rounded-2xl text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">🚀 Exclusive AI Features</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl mb-3">🧠</div>
                <h4 className="text-xl font-semibold mb-2">Neural Network Analysis</h4>
                <p className="text-purple-100">Deep learning models trained on 10+ years of market data</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📊</div>
                <h4 className="text-xl font-semibold mb-2">Real-time Pattern Recognition</h4>
                <p className="text-purple-100">Identifies complex market patterns invisible to human analysis</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="text-xl font-semibold mb-2">Instant Market Adaptation</h4>
                <p className="text-purple-100">AI models adapt to changing market conditions in real-time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInsights;