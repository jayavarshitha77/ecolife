import React from 'react';
import { Activity, Heart, Dumbbell, Trophy } from 'lucide-react';

const HealthFitness = () => {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Health & Fitness</h1>
        <p className="text-gray-600 mt-2">Track your workouts and monitor your wellness journey</p>
      </header>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Heart className="h-6 w-6 text-red-500 mb-2" />
          <h3 className="font-medium">Heart Rate</h3>
          <p className="text-2xl font-bold">-- bpm</p>
          <p className="text-sm text-gray-500">Connect device to track</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Activity className="h-6 w-6 text-blue-500 mb-2" />
          <h3 className="font-medium">Daily Steps</h3>
          <p className="text-2xl font-bold">0</p>
          <p className="text-sm text-gray-500">Goal: 10,000</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Dumbbell className="h-6 w-6 text-purple-500 mb-2" />
          <h3 className="font-medium">Workouts</h3>
          <p className="text-2xl font-bold">0</p>
          <p className="text-sm text-gray-500">This week</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Trophy className="h-6 w-6 text-yellow-500 mb-2" />
          <h3 className="font-medium">Achievement Points</h3>
          <p className="text-2xl font-bold">0</p>
          <p className="text-sm text-gray-500">Keep going!</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Workout Planner</h2>
          <p className="text-gray-600 mb-4">Get AI-powered workout recommendations based on your goals and fitness level.</p>
          <button className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700">
            Create Workout Plan
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Wellness Insights</h2>
          <p className="text-gray-600 mb-4">Track your progress and get personalized recommendations for improvement.</p>
          <button className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700">
            View Insights
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
        <div className="text-gray-600 text-center py-8">
          <Activity className="h-12 w-12 mx-auto text-gray-400 mb-2" />
          <p>No activities recorded yet</p>
          <button className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700">
            Log Activity
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthFitness;