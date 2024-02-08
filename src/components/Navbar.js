// Navbar.js

import React from 'react';


const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-5xl tracking-tight">Smanettony.</span>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white"
          >
            <svg
              className="h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:block">
          <div className="ml-4 flex items-center space-x-4">
            <a
              href="#"
              className="text-white px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 hover:text-gray-400 hover:scale-150"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 hover:text-gray-100 hover:scale-150"
            >
              About
            </a>
            <a
              href="#"
              className="text-white px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 hover:text-gray-100 hover:scale-150"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
