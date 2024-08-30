import React from 'react';

const Services = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900">Our Services</h2>
        <p className="text-lg text-gray-600 mt-2">
          We offer a wide range of services to meet your needs.
        </p>
      </div>
      <div className="flex justify-around">
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h3 className="text-xl font-bold text-purple-700">Service 1</h3>
            <p className="text-gray-700 mt-2">
              Description of the first service offered.
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h3 className="text-xl font-bold text-purple-700">Service 2</h3>
            <p className="text-gray-700 mt-2">
              Description of the second service offered.
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h3 className="text-xl font-bold text-purple-700">Service 3</h3>
            <p className="text-gray-700 mt-2">
              Description of the third service offered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
