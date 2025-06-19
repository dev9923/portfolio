import React, { useState, useEffect } from 'react';
import { MessageSquare, TrendingUp, TrendingDown, BarChart3, Globe, Twitter, Newspaper, Users } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const SentimentAnalysis = () => {
  const [sentimentData, setSentimentData] = useState({
    overall: 72,
    bullish: 45,
    bearish: 23,
    neutral: 32,
    sources: {
      news: 68,
      social: 75,
      analyst: 78,
      retail: 69
    }
  });

  const [trendingTopics, setTrendingTopics] = useState([
    { topic: 'RBI Policy Rate', sentiment: 85, mentions: 1247, trend: 'up' },
    { topic: 'Banking NPA', sentiment: 42, mentions: 892, trend: 'down' },
    { topic: 'Digital Banking', sentiment: 78, mentions: 1156, trend: 'up' },
    { topic: 'Credit Growth', sentiment: 71, mentions: 734, trend: 'up' },
    { topic: 'Merger News', sentiment: 55, mentions: 623, trend: 'neutral' }
  ]);

  const [historicalSentiment, setHistoricalSentiment] = useState([
    { date: '1W', sentiment: 65 },
    { date: '6D', sentiment: 68 },
    { date: '5D', sentiment: 71 },
    { date: '4D', sentiment: 69 },
    { date: '3D', sentiment: 74 },
    { date: '2D', sentiment: 76 },
    { date: '1D', sentiment: 72 }
  ]);

  const pieData = [
    { name: 'Bullish', value: sentimentData.bullish, color: '#10b981' },
    { name: 'Bearish', value: sentimentData.bearish, color: '#ef4444' },
    { name: 'Neutral', value: sentimentData.neutral, color: '#6b7280' }
  ];

  const getSentimentColor = (sentiment) => {
    if (sentiment >= 70) return 'text-emerald-600 bg-emerald-100';
    if (sentiment >= 50) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getSentimentLabel = (sentiment) => {
    if (sentiment >= 70) return 'Bullish';
    if (sentiment >= 50) return 'Neutral';
    return 'Bearish';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full">
              <MessageSquare size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Market Sentiment Analysis
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Real-time sentiment analysis from news, social media, and analyst reports using advanced NLP algorithms
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Overall Sentiment */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Overall Market Sentiment</h3>
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gray-200"></div>
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                  style={{
                    background: `conic-gradient(from 0deg, #3b82f6 0deg, #8b5cf6 ${sentimentData.overall * 3.6}deg, #e5e7eb ${sentimentData.overall * 3.6}deg)`
                  }}
                ></div>
                <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">{sentimentData.overall}%</span>
                </div>
              </div>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold ${getSentimentColor(sentimentData.overall)}`}>
                {sentimentData.overall >= 70 ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
                {getSentimentLabel(sentimentData.overall)}
              </div>
            </div>
          </div>

          {/* Sentiment Breakdown */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Sentiment Breakdown</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
              {pieData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm font-medium text-gray-600">{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Source Analysis */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Sentiment by Source</h3>
            <div className="space-y-4">
              {[
                { name: 'News Media', value: sentimentData.sources.news, icon: Newspaper },
                { name: 'Social Media', value: sentimentData.sources.social, icon: Twitter },
                { name: 'Analyst Reports', value: sentimentData.sources.analyst, icon: BarChart3 },
                { name: 'Retail Investors', value: sentimentData.sources.retail, icon: Users }
              ].map((source) => {
                const IconComponent = source.icon;
                return (
                  <div key={source.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <IconComponent size={20} className="text-gray-600" />
                      <span className="font-medium text-gray-700">{source.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                          style={{ width: `${source.value}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900 w-8">{source.value}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Trending Topics */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Trending Topics & Sentiment</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingTopics.map((topic, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-gray-900">{topic.topic}</h4>
                  <div className={`p-2 rounded-full ${
                    topic.trend === 'up' ? 'bg-emerald-100 text-emerald-600' :
                    topic.trend === 'down' ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {topic.trend === 'up' ? <TrendingUp size={16} /> : 
                     topic.trend === 'down' ? <TrendingDown size={16} /> : <BarChart3 size={16} />}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Sentiment Score</span>
                    <span className={`font-semibold ${getSentimentColor(topic.sentiment).split(' ')[0]}`}>
                      {topic.sentiment}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Mentions</span>
                    <span className="font-semibold text-gray-900">{topic.mentions.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        topic.sentiment >= 70 ? 'bg-emerald-500' :
                        topic.sentiment >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${topic.sentiment}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Historical Sentiment Trend */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">7-Day Sentiment Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={historicalSentiment}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="sentiment" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Sentiment Features */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">🎯 Advanced Sentiment Features</h3>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl mb-3">🌐</div>
                <h4 className="text-lg font-semibold mb-2">Multi-Language Analysis</h4>
                <p className="text-blue-100 text-sm">Analyzes sentiment in Hindi, English, and regional languages</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="text-lg font-semibold mb-2">Real-time Processing</h4>
                <p className="text-blue-100 text-sm">Processes 10,000+ posts and articles every minute</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="text-lg font-semibold mb-2">Context Understanding</h4>
                <p className="text-blue-100 text-sm">Advanced NLP understands sarcasm and context</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📈</div>
                <h4 className="text-lg font-semibold mb-2">Predictive Sentiment</h4>
                <p className="text-blue-100 text-sm">Predicts sentiment changes before they happen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SentimentAnalysis;