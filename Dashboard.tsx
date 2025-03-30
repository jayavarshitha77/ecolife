import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Apple, Activity, Wallet, Brain, 
  ShoppingBag, Leaf, ArrowRight 
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to EcoSync
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your comprehensive companion for sustainable living, helping you make informed choices 
          across health, finance, and lifestyle while minimizing environmental impact.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Diet & Nutrition',
            icon: Apple,
            path: '/diet-nutrition',
            description: 'AI-driven meal plans and nutrition tracking for healthier, eco-friendly choices.',
            color: 'bg-red-500'
          },
          {
            title: 'Health & Fitness',
            icon: Activity,
            path: '/health-fitness',
            description: 'Personalized workout tracking and wellness insights.',
            color: 'bg-blue-500'
          },
          {
            title: 'Finance & Savings',
            icon: Wallet,
            path: '/finance',
            description: 'Smart budgeting and sustainable investment recommendations.',
            color: 'bg-green-500'
          },
          {
            title: 'Productivity',
            icon: Brain,
            path: '/productivity',
            description: 'AI-based habit tracking and task management tools.',
            color: 'bg-purple-500'
          },
          {
            title: 'Smart Shopping',
            icon: ShoppingBag,
            path: '/smart-shopping',
            description: 'Eco-conscious product recommendations and insights.',
            color: 'bg-yellow-500'
          },
          {
            title: 'Sustainability',
            icon: Leaf,
            path: '/sustainability',
            description: 'Track your carbon footprint and get actionable eco-friendly tips.',
            color: 'bg-emerald-500'
          }
        ].map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className={`inline-block p-3 rounded-full ${item.color} text-white mb-4`}>
              <item.icon className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {item.description}
            </p>
            <div className="flex items-center text-emerald-600 font-medium">
              Learn more <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-emerald-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Your Impact Dashboard
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-700">Carbon Footprint</h3>
            <p className="text-2xl font-bold text-emerald-600">0 kg CO₂</p>
            <p className="text-sm text-gray-500">Start tracking to see your impact</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-700">Eco-friendly Choices</h3>
            <p className="text-2xl font-bold text-emerald-600">0</p>
            <p className="text-sm text-gray-500">Track your sustainable decisions</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-700">Savings</h3>
            <p className="text-2xl font-bold text-emerald-600">$0</p>
            <p className="text-sm text-gray-500">Monitor your eco-savings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;