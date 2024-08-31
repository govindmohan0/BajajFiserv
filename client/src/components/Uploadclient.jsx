import React, { useState } from "react";

const Uploadclient = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "", // Updated to phone_number
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone_number", formData.phone_number); // Updated to phone_number
    formDataToSend.append("image", formData.file);

    try {
      const response = await fetch("http://localhost:8000/api", {
        method: "POST",
        body: formDataToSend,
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        alert("Form submitted successfully");
        window.location.href = "/admin";
      } else {
        console.error(data);
        alert("Error submitting form");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-xl shadow-md mt-10 border border-purple-200">
      <h2 className="text-2xl font-bold text-center text-purple-600 mb-6">
        Upload Your Details
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            className="block text-purple-700 font-semibold mb-2"
            htmlFor="name"
          >
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
          <label
            className="block text-purple-700 font-semibold mb-2"
            htmlFor="email"
          >
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
          <label
            className="block text-purple-700 font-semibold mb-2"
            htmlFor="phone_number" // Updated to phone_number
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone_number" // Updated to phone_number
            name="phone_number" // Updated to phone_number
            value={formData.phone_number} // Updated to phone_number
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:border-purple-500"
            placeholder="Your Phone Number"
            required
          />
        </div>
        <div>
          <label
            className="block text-purple-700 font-semibold mb-2"
            htmlFor="file"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
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
