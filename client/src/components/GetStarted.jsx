/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Motion variants for animation
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const GetStarted = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-green-100 to-white overflow-hidden">
      {/* For Client Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="flex-1 flex flex-col items-center justify-center bg-white px-8 py-16 shadow-lg h-full relative"
      >
        <motion.img
          src="https://example.com/client-image.png"
          alt="Client"
          className="absolute top-10 left-10 w-20 opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3, transition: { delay: 0.8, duration: 0.8 } }}
        />
        <motion.h3
          variants={fadeInUp}
          className="text-blue-600 font-bold text-xs uppercase mb-2"
        >
          Client
        </motion.h3>
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          For Clients
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-center text-gray-600 mb-6 max-w-md"
        >
          Access our platform to manage your Medical bills, collaborate with
          company, and track progress in real-time.
        </motion.p>
        <motion.div variants={fadeInUp}>
          <Link
            to="/login-client"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Login
          </Link>
        </motion.div>
        <motion.div variants={fadeInUp} className="text-center mt-4">
          <p className="text-gray-600">Don’t have an account?</p>
          <Link to="/contact" className="text-blue-500 font-bold">
            Contact support
          </Link>{' '}
          or{' '}
          <Link to="/signup-client" className="text-blue-500 font-bold">
            Create an account.
          </Link>
        </motion.div>
      </motion.div>

      {/* For Admin Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="flex-1 flex flex-col items-center justify-center bg-white px-8 py-16 shadow-lg h-full relative"
      >
        <motion.img
          src="https://example.com/admin-image.png"
          alt="Admin"
          className="absolute top-10 right-10 w-20 opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3, transition: { delay: 0.8, duration: 0.8 } }}
        />
        <motion.h3
          variants={fadeInUp}
          className="text-blue-600 font-bold text-xs uppercase mb-2"
        >
          Admin
        </motion.h3>
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          For Admins
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-center text-gray-600 mb-6 max-w-md"
        >
          Manage platform settings, oversee client and documents activities, and
          ensure smooth operations.
        </motion.p>
        <motion.div variants={fadeInUp}>
          <Link
            to="/login-admin"
            className="border-2 border-blue-500 text-blue-500 py-2 px-6 rounded-lg font-semibold hover:bg-blue-100 transition"
          >
            Login
          </Link>
        </motion.div>
        <motion.div variants={fadeInUp} className="text-center mt-4">
          <p className="text-gray-600">Don’t have an account?</p>
          <Link to="#" className="text-blue-500 font-bold">
            Request admin access.
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GetStarted;
