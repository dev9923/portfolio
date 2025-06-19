import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Brain, Target, TrendingUp, AlertTriangle } from 'lucide-react';

const PredictionDashboard = () => {
  const [selectedStock, setSelectedStock] = useState('SBIN');
  
  const predictionData = {
    SBIN: {
      current: 542.30,
      predicted: 578.45,
      confidence: 94,
      trend: 'bullish',
      riskLevel: 'low',
      timeframe: '7 days',
      data: [
        { day: 'Day 1', actual: 542, predicted: 545 },
        { day: 'Day 2', actual: null, predicted: 548 },
        { day: 'Day 3', actual: null, predicted: 552 },
        { day: 'Day 4', actual: null, predicted: 558 },
        { day: 'Day 5', actual: null, predicted: 565 },
        { day: 'Day 6', actual: null, predicted: 572 },
        { day: 'Day 7', actual: null, predicted: 578 }
      ]
    },
    HDFCBANK: {
      current: 1678.90,
      predicted: 1725.30,
      confidence: 91,
      trend: 'bullish',
      riskLevel: 'medium',
      timeframe: '7 days',
      data: [
        { day: 'Day 1', actual: 1679, predicted: 1685 },
        { day: 'Day 2', actual: null, predicted: 1692 },
        { day: 'Day 3', actual: null, predicted: 1698 },
        { day: 'Day 4', actual: null, predicted: 1705 },
        { day: 'Day 5', actual: null, predicted: 1712 },
        { day: 'Day 6', actual: null, predicted: 1719 },
        { day: 'Day 7', actual: null, predicted: 1725 }
      ]
    },
    ICICIBANK: {
      current: 1156.75,
      predicted: 1198.20,
      confidence: 89,
      trend: 'bullish',
      riskLevel: 'low',
      timeframe: '7 days',
      data: [
        { day: 'Day 1', actual: 1157, predicted: 1162 },
        { day: 'Day 2', actual: null, predicted: 1168 },
        { day: 'Day 3', actual: null, predicted: 1174 },
        { day: 'Day 4', actual: null, predicted: 1181 },
        { day: 'Day 5', actual: null, predicted: 1187 },
        { day: 'Day 6', actual: null, predicted: 1193 },
        { day: 'Day 7', actual: null, predicted: 1198 }
      ]
    }
  };

  const stocks = [
    { symbol: 'SBIN', name: 'State Bank of India' },
    { symbol: 'HDFCBANK', name: 'HDFC Bank' },
    { symbol: 'ICICIBANK', name: 'ICICI Bank' }
  ];

  const currentPrediction = predictionData[selectedStock];
  const priceChange = currentPrediction.predicted - currentPrediction.current;
  const changePercent = (priceChange / currentPrediction.current) * 100;

  return (
    <section id="predictions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI Prediction Dashboard
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Advanced machine learning models provide accurate stock price predictions with confidence intervals
          </p>
        </div>

        {/* Stock Selector */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {stocks.map((stock) => (
              <button
                key={stock.symbol}
                onClick={() => setSelectedStock(stock.symbol)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedStock === stock.symbol
                    ? 'bg-gradient-to-r from-emerald-500 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {stock.symbol}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Prediction Summary */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-full">
                  <Brain size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">AI Prediction</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Current Price</div>
                  <div className="text-2xl font-bold text-gray-900">₹{currentPrediction.current}</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-600 mb-1">Predicted Price ({currentPrediction.timeframe})</div>
                  <div className="text-2xl font-bold text-emerald-600">₹{currentPrediction.predicted}</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-600 mb-1">Expected Change</div>
                  <div className={`text-lg font-semibold ${priceChange >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                    {priceChange >= 0 ? '+' : ''}₹{priceChange.toFixed(2)} ({changePercent.toFixed(2)}%)
                  </div>
                </div>
              </div>
            </div>

            {/* Confidence & Risk */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <Target size={18} className="text-blue-600" />
                  <span className="text-sm font-medium text-gray-600">Confidence</span>
                </div>
                <div className="text-2xl font-bold text-blue-600">{currentPrediction.confidence}%</div>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle size={18} className="text-orange-600" />
                  <span className="text-sm font-medium text-gray-600">Risk Level</span>
                </div>
                <div className={`text-lg font-bold capitalize ${
                  currentPrediction.riskLevel === 'low' ? 'text-emerald-600' :
                  currentPrediction.riskLevel === 'medium' ? 'text-orange-600' : 'text-red-600'
                }`}>
                  {currentPrediction.riskLevel}
                </div>
              </div>
            </div>
          </div>

          {/* Prediction Chart */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">7-Day Price Prediction</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={currentPrediction.data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="actual" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    name="Actual Price"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="predicted" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    name="Predicted Price"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Premium Features Teaser */}
        <div className="mt-16 bg-gradient-to-r from-purple-500 to-indigo-600 p-8 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Unlock Premium Predictions</h3>
          <p className="text-lg mb-6 opacity-90">
            Get access to advanced analytics, longer-term predictions, and personalized investment strategies
          </p>
          <button className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
            Upgrade to Premium
          </button>
        </div>
      </div>
    </section>
  );
};

export default PredictionDashboard;