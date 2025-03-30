import React from 'react';
import { ShoppingBag, Barcode, ThumbsUp, AlertTriangle } from 'lucide-react';

const SmartShopping = () => {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Smart Shopping</h1>
        <p className="text-gray-600 mt-2">Make informed and eco-conscious purchasing decisions</p>
      </header>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <Barcode className="h-6 w-6 text-emerald-600 mr-2" />
          <h2 className="text-xl font-semibold">Product Scanner</h2>
        </div>
        <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
          <ShoppingBag className="h-12 w-12 mx-auto text-gray-400 mb-2" />
          <p className="text-gray-600">Scan a product barcode to get sustainability information</p>
          <button className="mt-4 bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700">
            Start Scanning
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Eco-friendly Alternatives</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search for a product..."
                className="flex-1 p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-r hover:bg-emerald-700">
                Search
              </button>
            </div>
            <div className="text-gray-500 text-center py-8">
              <p>Search for products to find eco-friendly alternatives</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Shopping List</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Add item to list..."
                className="flex-1 p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-r hover:bg-emerald-700">
                Add
              </button>
            </div>
            <div className="text-gray-500 text-center py-8">
              <p>Your shopping list is empty</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <ThumbsUp className="h-5 w-5 text-green-500 mr-2" />
            <h2 className="text-xl font-semibold">Recommended Products</h2>
          </div>
          <div className="text-gray-500 text-center py-8">
            <p>Start scanning products to get personalized recommendations</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
            <h2 className="text-xl font-semibold">Products to Avoid</h2>
          </div>
          <div className="text-gray-500 text-center py-8">
            <p>Scan products to identify non-sustainable options</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartShopping;