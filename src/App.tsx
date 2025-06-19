import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import LiveMarket from './components/LiveMarket';
import PredictionDashboard from './components/PredictionDashboard';
import AIInsights from './components/AIInsights';
import SentimentAnalysis from './components/SentimentAnalysis';
import PortfolioOptimizer from './components/PortfolioOptimizer';
import Pricing from './components/Pricing';
import TradingPartners from './components/TradingPartners';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <Header />
      <Hero />
      <Features />
      <LiveMarket />
      <PredictionDashboard />
      <AIInsights />
      <SentimentAnalysis />
      <PortfolioOptimizer />
      <Pricing />
      <TradingPartners />
      <Footer />
    </div>
  );
}

export default App;