import React from 'react';
import { motion } from 'framer-motion';

// Modern SVG Icon component
const ModernIcon = ({ type, ariaLabel }) => {
  const icons = {
    health: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={ariaLabel}
      >
        <path
          d="M12 2.25C6.6 2.25 2.25 6.6 2.25 12C2.25 17.4 6.6 21.75 12 21.75C17.4 21.75 21.75 17.4 21.75 12C21.75 6.6 17.4 2.25 12 2.25ZM11.25 16.5V12.75H7.5V11.25H11.25V7.5H12.75V11.25H16.5V12.75H12.75V16.5H11.25Z"
          fill="currentColor"
        />
      </svg>
    ),
    auto: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={ariaLabel}
      >
        <path
          d="M4 17.25V16.75H3.25V12.5C3.25 11.13 4.38 10 5.75 10H18.25C19.62 10 20.75 11.13 20.75 12.5V16.75H20V17.25C20 17.6642 19.6642 18 19.25 18C18.8358 18 18.5 17.6642 18.5 17.25V16.75H5.5V17.25C5.5 17.6642 5.16421 18 4.75 18C4.33579 18 4 17.6642 4 17.25ZM6.75 12.5C6.19772 12.5 5.75 12.9477 5.75 13.5V15.5H18.25V13.5C18.25 12.9477 17.8023 12.5 17.25 12.5H6.75ZM6.75 7.75C7.44036 7.75 8 8.30964 8 9C8 9.69036 7.44036 10.25 6.75 10.25C6.05964 10.25 5.5 9.69036 5.5 9C5.5 8.30964 6.05964 7.75 6.75 7.75ZM17.25 7.75C17.9404 7.75 18.5 8.30964 18.5 9C18.5 9.69036 17.9404 10.25 17.25 10.25C16.5596 10.25 16 9.69036 16 9C16 8.30964 16.5596 7.75 17.25 7.75Z"
          fill="currentColor"
        />
      </svg>
    ),
    investment: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={ariaLabel}
      >
        <path
          d="M6 9C6 7.89543 6.89543 7 8 7H16C17.1046 7 18 7.89543 18 9V15C18 16.1046 17.1046 17 16 17H8C6.89543 17 6 16.1046 6 15V9ZM8 9V15H16V9H8ZM5 18.25H19C19.4142 18.25 19.75 18.5858 19.75 19C19.75 19.4142 19.4142 19.75 19 19.75H5C4.58579 19.75 4.25 19.4142 4.25 19C4.25 18.5858 4.58579 18.25 5 18.25Z"
          fill="currentColor"
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
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
  >
    <div className="flex items-center justify-center mb-4">
      <ModernIcon type={iconType} ariaLabel={title} />
    </div>
    <h3 className="text-2xl font-semibold text-center text-gray-800">{title}</h3>
    <p className="text-center text-gray-600 mt-2">{description}</p>
  </motion.div>
);

// Services Component
const Services = () => {
  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Our Services
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ServiceCard
            title="Health Bazaar"
            description="Comprehensive health plans and wellness services."
            iconType="health"
          />
          <ServiceCard
            title="Auto World"
            description="The best auto financing and insurance options."
            iconType="auto"
          />
          <ServiceCard
            title="Investment Plans"
            description="Grow your wealth with smart investment options."
            iconType="investment"
          />
          {/* Add more ServiceCards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Services;
