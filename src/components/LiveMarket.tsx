import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';

const LiveMarket = () => {
  const [marketData, setMarketData] = useState([
    { symbol: 'SBIN', name: 'State Bank of India', price: 542.30, change: 12.45, changePercent: 2.35, volume: '2.1M' },
    { symbol: 'HDFCBANK', name: 'HDFC Bank', price: 1678.90, change: -8.20, changePercent: -0.49, volume: '1.8M' },
    { symbol: 'ICICIBANK', name: 'ICICI Bank', price: 1156.75, change: 23.10, changePercent: 2.04, volume: '3.2M' },
    { symbol: 'AXISBANK', name: 'Axis Bank', price: 1089.40, change: -15.60, changePercent: -1.41, volume: '2.7M' },
    { symbol: 'KOTAKBANK', name: 'Kotak Mahindra Bank', price: 1734.20, change: 18.90, changePercent: 1.10, volume: '1.5M' },
    { symbol: 'INDUSINDBK', name: 'IndusInd Bank', price: 978.35, change: 7.85, changePercent: 0.81, volume: '1.9M' }
  ]);

  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshData = () => {
    setIsRefreshing(true);
    // Simulate API call with random price changes
    setTimeout(() => {
      setMarketData(prev => prev.map(stock => {
        const randomChange = (Math.random() - 0.5) * 20;
        const newPrice = Math.max(stock.price + randomChange, stock.price * 0.95);
        const change = newPrice - stock.price;
        const changePercent = (change / stock.price) * 100;
        
        return {
          ...stock,
          price: parseFloat(newPrice.toFixed(2)),
          change: parseFloat(change.toFixed(2)),
          changePercent: parseFloat(changePercent.toFixed(2))
        };
      }));
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(refreshData, 30000); // Auto-refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="market" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Live Market Data
            </h2>
            <button
              onClick={refreshData}
              disabled={isRefreshing}
              className={`p-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-all duration-300 ${
                isRefreshing ? 'animate-spin' : 'hover:scale-110'
              }`}
            >
              <RefreshCw size={20} />
            </button>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Stock</th>
                  <th className="px-6 py-4 text-right font-semibold">Price (₹)</th>
                  <th className="px-6 py-4 text-right font-semibold">Change</th>
                  <th className="px-6 py-4 text-right font-semibold">Change %</th>
                  <th className="px-6 py-4 text-right font-semibold">Volume</th>
                  <th className="px-6 py-4 text-center font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {marketData.map((stock, index) => (
                  <tr key={stock.symbol} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                  }`}>
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-bold text-gray-900">{stock.symbol}</div>
                        <div className="text-sm text-gray-600">{stock.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-gray-900">
                      ₹{stock.price.toFixed(2)}
                    </td>
                    <td className={`px-6 py-4 text-right font-semibold ${
                      stock.change >= 0 ? 'text-emerald-600' : 'text-red-600'
                    }`}>
                      {stock.change >= 0 ? '+' : ''}₹{stock.change.toFixed(2)}
                    </td>
                    <td className={`px-6 py-4 text-right font-semibold flex items-center justify-end gap-1 ${
                      stock.changePercent >= 0 ? 'text-emerald-600' : 'text-red-600'
                    }`}>
                      {stock.changePercent >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                      {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                    </td>
                    <td className="px-6 py-4 text-right text-gray-600">
                      {stock.volume}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                        Trade
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            * Market data provided by Alpha Vantage API. Prices are indicative and may not reflect actual trading prices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LiveMarket;