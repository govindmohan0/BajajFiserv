/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from './Services';
import InvestmentBazaar from '../Investment';
import Uploadclient from '../Uploadclient';
const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-white py-24 px-8 flex items-center justify-center"
      >
        <div className="text-center">
          <motion.h1
            className="text-6xl font-extrabold mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Empower Your Future
          </motion.h1>
          <motion.p
            className="text-lg mb-10"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Unlock the potential of good advice and smart investments.
          </motion.p>
          <Link
            to="/upload"
            className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Get started
          </Link>
        </div>
      </motion.div>

      {/* Services Section */}
     <Services></Services>
<InvestmentBazaar></InvestmentBazaar>
      </div>
   
  );
};

export default Landing;
