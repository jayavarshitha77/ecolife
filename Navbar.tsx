import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-emerald-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8" />
            <span className="text-xl font-bold">EcoSync</span>
          </Link>

          <div className="hidden md:flex space-x-4">
            <Link to="/diet-nutrition" className="hover:text-emerald-200">Diet & Nutrition</Link>
            <Link to="/health-fitness" className="hover:text-emerald-200">Health & Fitness</Link>
            <Link to="/finance" className="hover:text-emerald-200">Finance</Link>
            <Link to="/productivity" className="hover:text-emerald-200">Productivity</Link>
            <Link to="/smart-shopping" className="hover:text-emerald-200">Smart Shopping</Link>
            <Link to="/sustainability" className="hover:text-emerald-200">Sustainability</Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <Link to="/diet-nutrition" className="block py-2 hover:text-emerald-200">Diet & Nutrition</Link>
            <Link to="/health-fitness" className="block py-2 hover:text-emerald-200">Health & Fitness</Link>
            <Link to="/finance" className="block py-2 hover:text-emerald-200">Finance</Link>
            <Link to="/productivity" className="block py-2 hover:text-emerald-200">Productivity</Link>
            <Link to="/smart-shopping" className="block py-2 hover:text-emerald-200">Smart Shopping</Link>
            <Link to="/sustainability" className="block py-2 hover:text-emerald-200">Sustainability</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;