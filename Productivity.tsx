import React from 'react';
import { Brain, CheckSquare, Clock, Target } from 'lucide-react';

const Productivity = () => {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Productivity & Lifestyle</h1>
        <p className="text-gray-600 mt-2">Track your habits and boost your daily efficiency</p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Brain className="h-6 w-6 text-purple-500 mb-3" />
          <h3 className="font-semibold">Focus Time</h3>
          <p className="text-2xl font-bold">0h</p>
          <p className="text-sm text-gray-500">Today</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <CheckSquare className="h-6 w-6 text-green-500 mb-3" />
          <h3 className="font-semibold">Tasks Completed</h3>
          <p className="text-2xl font-bold">0</p>
          <p className="text-sm text-gray-500">This week</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Clock className="h-6 w-6 text-blue-500 mb-3" />
          <h3 className="font-semibold">Time Saved</h3>
          <p className="text-2xl font-bold">0h</p>
          <p className="text-sm text-gray-500">This month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Target className="h-6 w-6 text-red-500 mb-3" />
          <h3 className="font-semibold">Goals Achieved</h3>
          <p className="text-2xl font-bold">0</p>
          <p className="text-sm text-gray-500">This month</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Task Manager</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input type="text" placeholder="Add a new task..." 
                className="flex-1 p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-r hover:bg-emerald-700">
                Add
              </button>
            </div>
            <div className="text-gray-500 text-center py-8">
              <p>No tasks added yet</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Habit Tracker</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input type="text" placeholder="Create a new habit..." 
                className="flex-1 p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-r hover:bg-emerald-700">
                Create
              </button>
            </div>
            <div className="text-gray-500 text-center py-8">
              <p>No habits tracked yet</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Focus Timer</h2>
        <div className="text-center">
          <p className="text-6xl font-bold mb-6">25:00</p>
          <div className="space-x-4">
            <button className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700">
              Start
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productivity;