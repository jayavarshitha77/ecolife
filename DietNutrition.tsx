import React from 'react';
import { Salad, Scan as Scanner, Calendar } from 'lucide-react';

const DietNutrition = () => {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Diet & Nutrition</h1>
        <p className="text-gray-600 mt-2">Track your nutrition and make eco-conscious food choices</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Calendar className="h-5 w-5 text-emerald-600" />
            Meal Planner
          </h2>
          <p className="text-gray-600 mt-2">Plan your meals with AI-powered suggestions that consider both nutrition and environmental impact.</p>
          <button className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700">
            Create Meal Plan
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Scanner className="h-5 w-5 text-emerald-600" />
            Food Scanner
          </h2>
          <p className="text-gray-600 mt-2">Scan food items to get detailed nutritional information and environmental impact scores.</p>
          <button className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700">
            Scan Product
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <Salad className="h-5 w-5 text-emerald-600" />
          Today's Nutrition
        </h2>
        
        <div className="grid md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-700">Calories</h3>
            <p className="text-2xl font-bold text-emerald-600">0</p>
            <p className="text-sm text-gray-500">of 2000 kcal</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-700">Protein</h3>
            <p className="text-2xl font-bold text-emerald-600">0g</p>
            <p className="text-sm text-gray-500">of 50g</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-700">Carbs</h3>
            <p className="text-2xl font-bold text-emerald-600">0g</p>
            <p className="text-sm text-gray-500">of 275g</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-700">Fat</h3>
            <p className="text-2xl font-bold text-emerald-600">0g</p>
            <p className="text-sm text-gray-500">of 55g</p>
          </div>
        </div>

        <button className="mt-6 bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700">
          Log Food
        </button>
      </div>
    </div>
  );
};

export default DietNutrition;