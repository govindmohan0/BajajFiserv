/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/Navbar.css'
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Company Logo */}
      <Link to="/">
        <div className="text-3xl font-bold text-blue-500">
          Bajaj Finance
        </div>
      </Link>
      {/* Navigation Links */}
      <ul className="flex space-x-8">
        <li>
          <Link
            to="/"
            className="nav-link text-blue-500 font-semibold hover:text-blue-600 transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="nav-link text-blue-500 font-semibold hover:text-blue-600 transition duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/tests"
            className="nav-link text-blue-500 font-semibold hover:text-blue-600 transition duration-300"
          >
            Tests
          </Link>
        </li>
        <li>
          <Link
            to="/getstarted"
            className="nav-link text-blue-500 font-semibold hover:text-blue-600 transition duration-300"
          >
            Upload Docs
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="nav-link text-blue-500 font-semibold hover:text-blue-600 transition duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Admin Login Button */}
      <div>
        <Link to="/login-admin">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
            Admin Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
