import React, { useState } from 'react';

const Dropdown = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleDropdown = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const dropdownData = [
        { question: "What insurance plans does Bajaj Finserv offer?", answer: "Bajaj Finserv offers a wide range of insurance plans, including health insurance, motor insurance, home insurance, travel insurance, and life insurance. Each plan is designed to cater to different needs and provides comprehensive coverage." },
        { question: "How can I purchase an insurance policy from Bajaj Finserv?", answer: "You can purchase an insurance policy through the Bajaj Finserv website or mobile app. Simply choose the insurance product that suits your needs, fill in the required details, and make the payment online. You can also visit any of our branches for assistance." },
        { question: "Are there any benefits for existing Bajaj Finserv customers?", answer: "Yes, existing Bajaj Finserv customers can enjoy exclusive benefits such as discounts on premiums, faster claim processing, and access to special offers on other financial products like loans and credit cards." },
        { question: "How can I file a claim with Bajaj Finserv?", answer: "Filing a claim with Bajaj Finserv is easy and convenient. You can file a claim online through our website or mobile app. Alternatively, you can visit the nearest Bajaj Finserv branch or contact our customer support team for assistance. Ensure you have all the necessary documents ready to expedite the process." },
        { question: "What should I do if I have a query or need assistance?", answer: "If you have any queries or need assistance, you can reach out to Bajaj Finserv through our customer care helpline, email, or by visiting one of our branches. We also have an extensive FAQ section on our website that covers common queries related to our insurance products and services." },
    ];

    return (
        <div className="flex flex-row-reverse items-start space-x-8 bg-blue-50 py-10">
            <div className="flex-2 w-full max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-14 px-10 border border-blue-200">
                <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Got Questions? We're Here to Help!</h2>
                {dropdownData.map((item, index) => (
                    <div key={index} className="mb-6">
                        <div
                            className="cursor-pointer py-4 px-6 bg-blue-500 rounded-lg shadow-md flex justify-between items-center transition-transform duration-300 ease-in-out transform hover:bg-blue-400"
                            onClick={() => toggleDropdown(index)}
                            aria-expanded={activeIndex === index}
                            aria-controls={`dropdown-content-${index}`}
                        >
                            <span className="text-white text-lg font-medium">{item.question}</span>
                            <span className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : ''} text-white`}>
                                ▼
                            </span>
                        </div>
                        <div
                            id={`dropdown-content-${index}`}
                            className={`mt-3 px-6 py-4 bg-blue-100 text-gray-700 rounded-lg shadow-md transition-all duration-300 ease-in-out ${activeIndex === index ? 'block' : 'hidden'}`}
                        >
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
