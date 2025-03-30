import React from 'react';
import { Wallet, TrendingUp, PiggyBank, LineChart } from 'lucide-react';

const Finance = () => {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Finance & Savings</h1>
        <p className="text-gray-600 mt-2">Track your finances and make sustainable investment choices</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Balance</h2>
            <Wallet className="h-6 w-6 text-emerald-600" />
          </div>
          <p className="text-3xl font-bold">$0.00</p>
          <p className="text-sm text-gray-500 mt-1">Available funds</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Savings</h2>
            <PiggyBank className="h-6 w-6 text-emerald-600" />
          </div>
          <p className="text-3xl font-bold">$0.00</p>
          <p className="text-sm text-gray-500 mt-1">Total saved</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Investments</h2>
            <TrendingUp className="h-6 w-6 text-emerald-600" />
          </div>
          <p className="text-3xl font-bold">$0.00</p>
          <p className="text-sm text-gray-500 mt-1">Portfolio value</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Spending Overview</h2>
          <LineChart className="h-6 w-6 text-emerald-600" />
        </div>
        <div className="text-center py-12 text-gray-500">
          <p>No spending data available yet</p>
          <button className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700">
            Add Transaction
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Sustainable Investment Options</h2>
          <p className="text-gray-600 mb-4">
            Discover eco-friendly investment opportunities that align with your values.
          </p>
          <button className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700">
            Explore Options
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Budget Planning</h2>
          <p className="text-gray-600 mb-4">
            Create and manage your budget with smart recommendations for sustainable spending.
          </p>
          <button className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700">
            Create Budget
          </button>
        </div>
      </div>
    </div>
  );
};

export default Finance;