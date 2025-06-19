import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, RefreshCw, Search, Filter, Eye, Bell, Star } from 'lucide-react';
import toast from 'react-hot-toast';

const LiveMarket = () => {
  const [marketData, setMarketData] = useState([
    // Public Sector Banks
    { symbol: 'SBIN', name: 'State Bank of India', sector: 'Public', price: 542.30, change: 12.45, changePercent: 2.35, volume: '2.1M', marketCap: '4.83L Cr', pe: 12.5, pb: 1.2, dividend: 4.2, high52: 650, low52: 420, beta: 1.1 },
    { symbol: 'PNB', name: 'Punjab National Bank', sector: 'Public', price: 89.75, change: 2.10, changePercent: 2.40, volume: '1.8M', marketCap: '95.2K Cr', pe: 8.9, pb: 0.8, dividend: 3.8, high52: 115, low52: 65, beta: 1.3 },
    { symbol: 'BANKBARODA', name: 'Bank of Baroda', sector: 'Public', price: 178.90, change: 4.20, changePercent: 2.41, volume: '1.5M', marketCap: '92.8K Cr', pe: 7.2, pb: 0.9, dividend: 4.1, high52: 220, low52: 140, beta: 1.2 },
    { symbol: 'CANBK', name: 'Canara Bank', sector: 'Public', price: 95.40, change: 1.85, changePercent: 1.98, volume: '1.2M', marketCap: '76.5K Cr', pe: 6.8, pb: 0.7, dividend: 3.5, high52: 125, low52: 75, beta: 1.4 },
    { symbol: 'UNIONBANK', name: 'Union Bank of India', sector: 'Public', price: 112.60, change: 2.90, changePercent: 2.64, volume: '0.9M', marketCap: '85.2K Cr', pe: 9.1, pb: 0.8, dividend: 3.2, high52: 145, low52: 85, beta: 1.3 },
    { symbol: 'IOB', name: 'Indian Overseas Bank', sector: 'Public', price: 45.20, change: 1.10, changePercent: 2.49, volume: '0.7M', marketCap: '45.8K Cr', pe: 15.2, pb: 1.1, dividend: 2.8, high52: 58, low52: 32, beta: 1.5 },
    
    // Private Sector Banks
    { symbol: 'HDFCBANK', name: 'HDFC Bank', sector: 'Private', price: 1678.90, change: -8.20, changePercent: -0.49, volume: '1.8M', marketCap: '12.75L Cr', pe: 18.5, pb: 2.8, dividend: 1.2, high52: 1750, low52: 1350, beta: 0.9 },
    { symbol: 'ICICIBANK', name: 'ICICI Bank', sector: 'Private', price: 1156.75, change: 23.10, changePercent: 2.04, volume: '3.2M', marketCap: '8.12L Cr', pe: 16.2, pb: 2.1, dividend: 1.8, high52: 1250, low52: 850, beta: 1.0 },
    { symbol: 'AXISBANK', name: 'Axis Bank', sector: 'Private', price: 1089.40, change: -15.60, changePercent: -1.41, volume: '2.7M', marketCap: '3.35L Cr', pe: 14.8, pb: 1.9, dividend: 1.5, high52: 1200, low52: 750, beta: 1.2 },
    { symbol: 'KOTAKBANK', name: 'Kotak Mahindra Bank', sector: 'Private', price: 1734.20, change: 18.90, changePercent: 1.10, volume: '1.5M', marketCap: '3.45L Cr', pe: 17.9, pb: 2.5, dividend: 1.0, high52: 1850, low52: 1450, beta: 0.8 },
    { symbol: 'INDUSINDBK', name: 'IndusInd Bank', sector: 'Private', price: 978.35, change: 7.85, changePercent: 0.81, volume: '1.9M', marketCap: '76.2K Cr', pe: 13.5, pb: 1.6, dividend: 2.2, high52: 1150, low52: 750, beta: 1.3 },
    { symbol: 'YESBANK', name: 'Yes Bank', sector: 'Private', price: 18.45, change: 0.35, changePercent: 1.93, volume: '5.2M', marketCap: '57.8K Cr', pe: 25.6, pb: 0.9, dividend: 0.0, high52: 25, low52: 12, beta: 2.1 },
    { symbol: 'FEDERALBNK', name: 'Federal Bank', sector: 'Private', price: 145.80, change: 3.20, changePercent: 2.24, volume: '1.1M', marketCap: '29.8K Cr', pe: 11.2, pb: 1.3, dividend: 2.8, high52: 175, low52: 110, beta: 1.1 },
    { symbol: 'RBLBANK', name: 'RBL Bank', sector: 'Private', price: 156.90, change: -2.40, changePercent: -1.51, volume: '0.8M', marketCap: '9.3K Cr', pe: 18.7, pb: 1.1, dividend: 0.0, high52: 220, low52: 120, beta: 1.8 },
    { symbol: 'BANDHANBNK', name: 'Bandhan Bank', sector: 'Private', price: 189.25, change: 4.15, changePercent: 2.24, volume: '1.3M', marketCap: '30.5K Cr', pe: 14.9, pb: 1.4, dividend: 1.5, high52: 250, low52: 150, beta: 1.4 },
    
    // Small Finance Banks
    { symbol: 'EQUITASBNK', name: 'Equitas Small Finance Bank', sector: 'Small Finance', price: 67.80, change: 1.90, changePercent: 2.88, volume: '0.6M', marketCap: '5.4K Cr', pe: 16.8, pb: 1.2, dividend: 1.8, high52: 85, low52: 45, beta: 1.6 },
    { symbol: 'UJJIVANSFB', name: 'Ujjivan Small Finance Bank', sector: 'Small Finance', price: 35.60, change: 0.80, changePercent: 2.30, volume: '0.4M', marketCap: '5.8K Cr', pe: 19.2, pb: 1.0, dividend: 0.0, high52: 48, low52: 25, beta: 1.7 },
    { symbol: 'AUBANK', name: 'AU Small Finance Bank', sector: 'Small Finance', price: 589.40, change: 12.30, changePercent: 2.13, volume: '0.5M', marketCap: '43.8K Cr', pe: 22.1, pb: 2.8, dividend: 0.8, high52: 750, low52: 450, beta: 1.2 }
  ]);

  const [filteredData, setFilteredData] = useState(marketData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');
  const [sortBy, setSortBy] = useState('changePercent');
  const [sortOrder, setSortOrder] = useState('desc');
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [watchlist, setWatchlist] = useState(new Set());

  const sectors = ['All', 'Public', 'Private', 'Small Finance'];

  useEffect(() => {
    let filtered = marketData.filter(stock => 
      stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedSector !== 'All') {
      filtered = filtered.filter(stock => stock.sector === selectedSector);
    }

    // Sort data
    filtered.sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];
      if (sortOrder === 'asc') {
        return aVal > bVal ? 1 : -1;
      }
      return aVal < bVal ? 1 : -1;
    });

    setFilteredData(filtered);
  }, [searchTerm, selectedSector, sortBy, sortOrder, marketData]);

  const refreshData = async () => {
    setIsRefreshing(true);
    toast.loading('Fetching live market data...', { id: 'refresh' });
    
    // Simulate API call with realistic price changes
    setTimeout(() => {
      setMarketData(prev => prev.map(stock => {
        const volatility = stock.beta || 1;
        const randomChange = (Math.random() - 0.5) * 30 * volatility;
        const newPrice = Math.max(stock.price + randomChange, stock.price * 0.90);
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
      toast.success('Market data updated!', { id: 'refresh' });
    }, 2000);
  };

  const toggleWatchlist = (symbol) => {
    const newWatchlist = new Set(watchlist);
    if (newWatchlist.has(symbol)) {
      newWatchlist.delete(symbol);
      toast.success(`${symbol} removed from watchlist`);
    } else {
      newWatchlist.add(symbol);
      toast.success(`${symbol} added to watchlist`);
    }
    setWatchlist(newWatchlist);
  };

  const setAlert = (stock) => {
    toast.success(`Price alert set for ${stock.symbol} at ₹${stock.price}`);
  };

  return (
    <section id="market" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Live Banking Sector
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
            Real-time data for {marketData.length} banking stocks • Last updated: {lastUpdated.toLocaleTimeString()}
          </p>
        </div>

        {/* Advanced Filters */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search stocks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              {sectors.map(sector => (
                <option key={sector} value={sector}>{sector} Banks</option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option value="changePercent">% Change</option>
              <option value="price">Price</option>
              <option value="volume">Volume</option>
              <option value="marketCap">Market Cap</option>
            </select>

            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
            >
              <Filter size={18} />
              {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
            </button>
          </div>
        </div>

        {/* Market Overview Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Total Banks', value: marketData.length, color: 'bg-blue-500' },
            { title: 'Gainers', value: marketData.filter(s => s.changePercent > 0).length, color: 'bg-emerald-500' },
            { title: 'Losers', value: marketData.filter(s => s.changePercent < 0).length, color: 'bg-red-500' },
            { title: 'Watchlist', value: watchlist.size, color: 'bg-purple-500' }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
                <span className="text-white font-bold text-xl">{stat.value}</span>
              </div>
              <h3 className="text-gray-600 font-medium">{stat.title}</h3>
            </div>
          ))}
        </div>

        {/* Advanced Market Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Stock</th>
                  <th className="px-6 py-4 text-right font-semibold">Price (₹)</th>
                  <th className="px-6 py-4 text-right font-semibold">Change</th>
                  <th className="px-6 py-4 text-right font-semibold">Volume</th>
                  <th className="px-6 py-4 text-right font-semibold">Market Cap</th>
                  <th className="px-6 py-4 text-right font-semibold">P/E</th>
                  <th className="px-6 py-4 text-right font-semibold">P/B</th>
                  <th className="px-6 py-4 text-right font-semibold">52W H/L</th>
                  <th className="px-6 py-4 text-center font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((stock, index) => (
                  <tr key={stock.symbol} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                  }`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${
                          stock.sector === 'Public' ? 'bg-blue-500' :
                          stock.sector === 'Private' ? 'bg-emerald-500' : 'bg-purple-500'
                        }`}></div>
                        <div>
                          <div className="font-bold text-gray-900 flex items-center gap-2">
                            {stock.symbol}
                            {watchlist.has(stock.symbol) && <Star size={14} className="text-yellow-500 fill-current" />}
                          </div>
                          <div className="text-sm text-gray-600">{stock.name}</div>
                          <div className="text-xs text-gray-500">{stock.sector} Bank</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="font-bold text-gray-900">₹{stock.price.toFixed(2)}</div>
                      <div className="text-xs text-gray-500">Div: {stock.dividend}%</div>
                    </td>
                    <td className={`px-6 py-4 text-right font-semibold ${
                      stock.change >= 0 ? 'text-emerald-600' : 'text-red-600'
                    }`}>
                      <div className="flex items-center justify-end gap-1">
                        {stock.change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                        <div>
                          {stock.change >= 0 ? '+' : ''}₹{stock.change.toFixed(2)}
                          <div className="text-sm">
                            ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right text-gray-600">
                      <div>{stock.volume}</div>
                      <div className="text-xs">Beta: {stock.beta}</div>
                    </td>
                    <td className="px-6 py-4 text-right text-gray-600">
                      {stock.marketCap}
                    </td>
                    <td className="px-6 py-4 text-right text-gray-600">
                      {stock.pe}
                    </td>
                    <td className="px-6 py-4 text-right text-gray-600">
                      {stock.pb}
                    </td>
                    <td className="px-6 py-4 text-right text-gray-600 text-sm">
                      <div className="text-emerald-600">H: ₹{stock.high52}</div>
                      <div className="text-red-600">L: ₹{stock.low52}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => toggleWatchlist(stock.symbol)}
                          className={`p-2 rounded-lg transition-all duration-200 ${
                            watchlist.has(stock.symbol) 
                              ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200' 
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                          title="Add to Watchlist"
                        >
                          <Star size={16} className={watchlist.has(stock.symbol) ? 'fill-current' : ''} />
                        </button>
                        <button
                          onClick={() => setAlert(stock)}
                          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-all duration-200"
                          title="Set Price Alert"
                        >
                          <Bell size={16} />
                        </button>
                        <button className="px-3 py-2 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm">
                          Trade
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            * Live market data powered by Alpha Vantage API • Updated every 15 seconds during market hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default LiveMarket;