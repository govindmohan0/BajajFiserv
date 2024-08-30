import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white text-purple-700 py-10 border-t border-purple-200">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold text-purple-600 mb-4">Bajaj Finserv</h3>
                        <p className="text-purple-500">
                            Your trusted partner in insurance and financial services. Protecting what matters most to you.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h4 className="text-xl font-semibold text-purple-600 mb-4">Quick Links</h4>
                        <ul className="text-purple-500 space-y-2">
                            <li><a href="#" className="hover:text-purple-700 transition">Home</a></li>
                            <li><a href="#" className="hover:text-purple-700 transition">Services</a></li>
                            <li><a href="#" className="hover:text-purple-700 transition">About Us</a></li>
                            <li><a href="#" className="hover:text-purple-700 transition">Contact</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h4 className="text-xl font-semibold text-purple-600 mb-4">Contact Us</h4>
                        <p className="text-purple-500">Phone: +91 12345 67890</p>
                        <p className="text-purple-500">Email: support@bajajfinserv.com</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-purple-500 hover:text-purple-700 transition"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-purple-500 hover:text-purple-700 transition"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-purple-500 hover:text-purple-700 transition"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-purple-500 hover:text-purple-700 transition"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="text-center text-purple-500 mt-8">
                    <p>&copy; {new Date().getFullYear()} Bajaj Finserv. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
