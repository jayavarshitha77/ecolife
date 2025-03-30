import React from 'react';
import { Leaf, Droplet, Zap, Recycle } from 'lucide-react';

const Sustainability = () => {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Sustainability Tracker</h1>
        <p className="text-gray-600 mt-2">Monitor and improve your environmental impact</p>
      </header>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Leaf className="h-6 w-6 text-green-500 mb-3" />
          <h3 className="font-semibold">Carbon Footprint</h3>
          <p className="text-2xl font-bold">0 kg</p>
          <p className="text-sm text-gray-500">CO₂ this month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Droplet className="h-6 w-6 text-blue-500 mb-3" />
          <h3 className="font-semibold">Water Usage</h3>
          <p className="text-2xl font-bold">0 L</p>
          <p className="text-sm text-gray-500">This month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Zap className="h-6 w-6 text-yellow-500 mb-3" />
          <h3 className="font-semibold">Energy Saved</h3>
          <p className="text-2xl font-bold">0 kWh</p>
          <p className="text-sm text-gray-500">This month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Recycle className="h-6 w-6 text-emerald-500 mb-3" />
          <h3 className="font-semibold">Waste Reduced</h3>
          <p className="text-2xl font-bold">0 kg</p>
          <p className="text-sm text-gray-500">This month</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Daily Eco-Tips</h2>
          <div className="space-y-4">
            <div className="p-4 bg-emerald-50 rounded-lg">
              <p className="text-emerald-800">
                Start tracking your daily activities to receive personalized eco-friendly tips!
              </p>
            </div>
            <button className="w-full bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700">
              Get Started
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Impact Goals</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Set a new sustainability goal..."
                className="flex-1 p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-r hover:bg-emerald-700">
                Add
              </button>
            </div>
            <div className="text-gray-500 text-center py-8">
              <p>No goals set yet</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-6">Sustainability Progress</h2>
        <div className="space-y-4">
          <div className="bg-gray-100 rounded-full h-4">
            <div
              className="bg-emerald-500 h-4 rounded-full"
              style={{ width: '0%' }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Current Impact</span>
            <span>Goal</span>
          </div>
          <button className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700">
            Set New Goal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;