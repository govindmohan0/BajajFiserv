import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-900 dark:text-white">Bajaj Finance</div>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className=" text-purple-700 hover:text-purple-500 dark:text-purple-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" className="text-purple-700 hover:text-purple-500 dark:text-purple-300">
            Services
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-purple-700 hover:text-purple-500 dark:text-purple-300">
            About
          </Link>
        </li>
        <li>
          <Link to="/testimonials" className="text-purple-700 hover:text-purple-500 dark:text-purple-300">
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="/upload" className="text-purple-700 hover:text-purple-500 dark:text-purple-300">
            Upload Docs
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-purple-700 hover:text-purple-500 dark:text-purple-300">
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="bg-purple-500 text-white px-4 py-2 rounded-full"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <Link to="/admin">
        <button className="bg-purple-500 text-white px-4 py-2 rounded-full">
          Admin Login
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
