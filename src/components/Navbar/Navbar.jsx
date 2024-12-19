import React from 'react';
import { Link } from 'react-router-dom'; // Use this if your project uses React Router

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg p-4 flex justify-between items-center border-b border-gray-200">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <svg
          width="40"
          height="40"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
        >
          <circle cx="32" cy="32" r="30" fill="#4F46E5" stroke="#3B82F6" strokeWidth="2" />
          <path
            d="M32 20c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12h-4a8 8 0 11-16 0c0-4.4 3.6-8 8-8V20z"
            fill="white"
          />
          <path
            d="M32 14l4 4m-8 8 4 4m4 8h4m-12-4 4-4"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-gray-800 text-xl font-semibold">NutricareAI</span>
      </div>

      {/* Links Section */}
      <div className="flex space-x-8">
        <Link to="/" className="text-gray-600 hover:text-gray-800 transition">
          Home
        </Link>
        <Link to="/about" className="text-gray-600 hover:text-gray-800 transition">
          About
        </Link>
        <Link to="/features" className="text-gray-600 hover:text-gray-800 transition">
          Features
        </Link>
        <Link to="/contact" className="text-gray-600 hover:text-gray-800 transition">
          Contact
        </Link>
      </div>

      {/* Action Button */}
      <div>
        <Link
          to="/connect"
          className="mr-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Connect
        </Link>
        <Link
          to="/login"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
