import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FallingLeaves from './components/FallingLeaves';
import Dashboard from './pages/Dashboard';
import DietNutrition from './pages/DietNutrition';
import HealthFitness from './pages/HealthFitness';
import Finance from './pages/Finance';
import Productivity from './pages/Productivity';
import SmartShopping from './pages/SmartShopping';
import Sustainability from './pages/Sustainability';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <FallingLeaves />
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/diet-nutrition" element={<DietNutrition />} />
            <Route path="/health-fitness" element={<HealthFitness />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/productivity" element={<Productivity />} />
            <Route path="/smart-shopping" element={<SmartShopping />} />
            <Route path="/sustainability" element={<Sustainability />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;