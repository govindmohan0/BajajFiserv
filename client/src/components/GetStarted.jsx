/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-green-100 to-white">
      {/* For Client Section */}
      <div className="flex-1 flex flex-col items-center justify-center bg-white px-8 py-16 shadow-lg">
        <h3 className="text-blue-600 font-bold text-xs uppercase mb-2">Client</h3>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">For Clients</h2>
        <p className="text-center text-gray-600 mb-6 max-w-md">
          Access our platform to manage your Medical bills, collaborate with company, and track progress in real-time.
        </p>
        <Link
          to="/login-client"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Login
        </Link>
        <div className="text-center mt-4">
          <p className="text-gray-600">Don’t have an account?</p>
          <Link to="/contact" className="text-blue-500 font-bold">
            Contact support
          </Link>{' '}
          or{' '}
          <Link to="/signup-client" className="text-blue-500 font-bold">
            Create an account.
          </Link>
        </div>
      </div>

      {/* For Admin Section */}
      <div className="flex-1 flex flex-col items-center justify-center bg-white px-8 py-16 shadow-lg">
        <h3 className="text-blue-600 font-bold text-xs uppercase mb-2">Admin</h3>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">For Admins</h2>
        <p className="text-center text-gray-600 mb-6 max-w-md">
          Manage platform settings, oversee client and documents activities, and ensure smooth operations.
        </p>
        <Link
          to="/login-admin"
          className="border-2 border-blue-500 text-blue-500 py-2 px-6 rounded-lg font-semibold hover:bg-blue-100 transition"
        >
          Login
        </Link>
        <div className="text-center mt-4">
          <p className="text-gray-600">Don’t have an account?</p>
          <Link to="/signup-admin" className="text-blue-500 font-bold">
            Request admin access.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
