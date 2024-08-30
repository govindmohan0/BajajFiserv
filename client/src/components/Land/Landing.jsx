import React from 'react';
import { Link } from 'react-router-dom';

const HealthIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M..." fill="#4f46e5" />
  </svg>
);

const AutoIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M..." fill="#ec4899" />
  </svg>
);

const InvestmentIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M..." fill="#10b981" />
  </svg>
);

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 px-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold mb-6">Empower Your Future</h1>
          <p className="text-lg mb-10">Unlock the potential of good advice and smart investments.</p>
          <Link to="/upload" className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition">
            Upload Your Docs Here
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-8">
        <h2 className="text-5xl font-bold text-indigo-900 mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-6">
              <HealthIcon />
            </div>
            <h3 className="text-3xl font-semibold text-center text-indigo-900">Health Bazaar</h3>
            <p className="text-center text-gray-700 mt-4">Explore comprehensive health plans, health ID, and more.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-6">
              <AutoIcon />
            </div>
            <h3 className="text-3xl font-semibold text-center text-indigo-900">Auto World</h3>
            <p className="text-center text-gray-700 mt-4">Get the best deals on car loans and more.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-6">
              <HealthIcon />
            </div>
            <h3 className="text-3xl font-semibold text-center text-indigo-900">Doctor Consultation</h3>
            <p className="text-center text-gray-700 mt-4">Book online consultations with top doctors.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-6">
              <AutoIcon />
            </div>
            <h3 className="text-3xl font-semibold text-center text-indigo-900">New Car Finance</h3>
            <p className="text-center text-gray-700 mt-4">Finance your new car at unbeatable rates.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-6">
              <HealthIcon />
            </div>
            <h3 className="text-3xl font-semibold text-center text-indigo-900">Family Insurance</h3>
            <p className="text-center text-gray-700 mt-4">Get comprehensive insurance plans for your family.</p>
          </div>
        </div>
      </div>

      {/* Investment Bazaar Section */}
      <div className="bg-gray-200 py-20 px-8">
        <h2 className="text-5xl font-bold text-indigo-900 mb-12 text-center">Investment Bazaar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-6">
              <InvestmentIcon />
            </div>
            <h3 className="text-3xl font-semibold text-center text-indigo-900">Fixed Deposit</h3>
            <p className="text-center text-gray-700 mt-4">Secure your money with high-interest FDs.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-6">
              <InvestmentIcon />
            </div>
            <h3 className="text-3xl font-semibold text-center text-indigo-900">SIP</h3>
            <p className="text-center text-gray-700 mt-4">Invest in SIPs for long-term goals.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-6">
              <InvestmentIcon />
            </div>
            <h3 className="text-3xl font-semibold text-center text-indigo-900">Digital FD</h3>
            <p className="text-center text-gray-700 mt-4">Open digital FDs easily online.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-6">
              <InvestmentIcon />
            </div>
            <h3 className="text-3xl font-semibold text-center text-indigo-900">Systematic Deposit Plan</h3>
            <p className="text-center text-gray-700 mt-4">Invest systematically with flexible plans.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-6">
              <InvestmentIcon />
            </div>
            <h3 className="text-3xl font-semibold text-center text-indigo-900">ELSS</h3>
            <p className="text-center text-gray-700 mt-4">Save tax and grow wealth with ELSS.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
