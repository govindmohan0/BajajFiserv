import React from 'react';
import { motion } from 'framer-motion';

// Modern colorful investment SVG Icon component
const InvestmentIcon = ({ type }) => {
  const icons = {
    fd: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke="#4A90E2" strokeWidth="2" />
        <rect x="9" y="6" width="6" height="12" fill="#4A90E2" />
        <path d="M9 15H15V9H9V15Z" fill="white" />
      </svg>
    ),
    sip: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="4" width="16" height="16" rx="8" fill="#50E3C2" />
        <path d="M12 7V12L14.5 14.5" stroke="white" strokeWidth="2" />
      </svg>
    ),
    digitalFd: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke="#F5A623" strokeWidth="2" />
        <path d="M8 8H16V16H8V8Z" fill="#F5A623" />
        <path d="M10 10H14V14H10V10Z" fill="white" />
      </svg>
    ),
    sdp: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="4" width="16" height="16" rx="8" fill="#B8E986" />
        <path
          d="M12 7V17M7 12H17"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    elss: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" fill="#7ED321" />
        <rect x="10" y="10" width="4" height="4" fill="white" />
      </svg>
    ),
    mutualFund: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="4" width="16" height="16" rx="8" fill="#F8E71C" />
        <path
          d="M12 8V12L14 14"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  };
  return icons[type] || null;
};

// Modern Service Card component
const ServiceCard = ({ title, description, iconType }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <div className="flex items-center justify-center mb-6">
      <InvestmentIcon type={iconType} />
    </div>
    <h3 className="text-3xl font-semibold text-center text-indigo-900">
      {title}
    </h3>
    <p className="text-center text-gray-700 mt-4">{description}</p>
  </motion.div>
);

const InvestmentBazaar = () => {
  return (
    <div className="bg-gray-200 py-20 px-8">
      <h2 className="text-5xl font-bold text-indigo-900 mb-12 text-center">
        Investment Bazaar
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <ServiceCard
          title="Fixed Deposit"
          description="Secure your money with high-interest FDs."
          iconType="fd"
        />
        <ServiceCard
          title="SIP"
          description="Invest in SIPs for long-term goals."
          iconType="sip"
        />
        <ServiceCard
          title="Digital FD"
          description="Open digital FDs easily online."
          iconType="digitalFd"
        />
        <ServiceCard
          title="Systematic Deposit Plan"
          description="Invest systematically with flexible plans."
          iconType="sdp"
        />
        <ServiceCard
          title="ELSS"
          description="Save tax and grow wealth with ELSS."
          iconType="elss"
        />
        <ServiceCard
          title="Mutual Fund"
          description="Diversify your portfolio with mutual funds."
          iconType="mutualFund"
        />
      </div>
    </div>
  );
};

export default InvestmentBazaar;
