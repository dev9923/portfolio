import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import LiveMarket from './components/LiveMarket';
import PredictionDashboard from './components/PredictionDashboard';
import Pricing from './components/Pricing';
import TradingPartners from './components/TradingPartners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Features />
      <LiveMarket />
      <PredictionDashboard />
      <Pricing />
      <TradingPartners />
      <Footer />
    </div>
  );
}

export default App;