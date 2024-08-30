import React, { useState } from 'react';

const Uploadclient = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        file: null,
    });

    const [preview, setPreview] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            file,
        });

        // Create a preview URL for the selected file
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setPreview(previewUrl);
        } else {
            setPreview(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="max-w-lg mx-auto p-8 bg-white rounded-xl shadow-md mt-10 border border-purple-200">
            <h2 className="text-2xl font-bold text-center text-purple-600 mb-6">Upload Your Details</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-purple-700 font-semibold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:border-purple-500"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div>
                    <label className="block text-purple-700 font-semibold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:border-purple-500"
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div>
                    <label className="block text-purple-700 font-semibold mb-2" htmlFor="phone">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:border-purple-500"
                        placeholder="Your Phone Number"
                        required
                    />
                </div>
                <div>
                    <label className="block text-purple-700 font-semibold mb-2" htmlFor="file">
                        Upload Image
                    </label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={handleFileChange}
                        className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:border-purple-500"
                        required
                    />
                    {preview && (
                        <div className="mt-4">
                            <img
                                src={preview}
                                alt="Preview"
                                className="w-full h-auto border border-purple-300 rounded-lg"
                            />
                        </div>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition duration-300 ease-in-out"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Uploadclient;
