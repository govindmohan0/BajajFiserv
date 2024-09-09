/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Login_Client = () => {
  // State for form input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Handlers for input changes
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = (e) => setRememberMe(e.target.checked);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with', { username, password, rememberMe });
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full relative flex items-center justify-center">
        <img
          src="https://imgs.search.brave.com/oU60pK62yX-ZTguQftq22nIPElZ6prwP5vJWAUQRrZU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM3/MzY1OTc0MC9waG90/by9zaG90LW9mLWEt/eW91bmctZG9jdG9y/LXNoYXJpbmctaW5m/b3JtYXRpb24tZnJv/bS1oaXMtZGlnaXRh/bC10YWJsZXQtd2l0/aC1hbi1vbGRlci1w/YXRpZW50LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz14aS01/QmNleU5LREY5MTlv/U0szR2hlZWt1SUdU/SjVKbDNjY1dvcHo0/N0xFPQ"
          alt="Welcome"
          className="w-full h-auto object-cover"
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-40">
          <h1 className="text-white text-4xl lg:text-5xl font-bold mb-2 lg:mb-4">Welcome to</h1>
          <h2 className="text-2xl lg:text-3xl font-semibold">Bajaj Finserv Community</h2>
          <p className="mt-4 text-lg">Home to Millions of satisfied customers worldwide.</p>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="lg:w-1/2 w-full flex items-center justify-center bg-gray-100 py-12 lg:py-0">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-600 mb-6">Login to your account</h2>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-blue-600 font-semibold mb-2" htmlFor="username">
                Your username or email
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-blue-600 font-semibold mb-2" htmlFor="password">
                Your password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                  className="mr-2"
                />
                <label htmlFor="rememberMe" className="text-blue-600">Remember me</label>
              </div>
              <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Log In
            </button>
          </form>

          <div className="flex items-center justify-center my-4">
            <span className="text-blue-600">or</span>
          </div>

          {/* Social Login Buttons */}
          <div className="flex justify-around">
            <button className="border border-blue-600 text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition duration-300">
              Google
            </button>
            <button className="border border-blue-600 text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition duration-300">
              LinkedIn
            </button>
          </div>

          {/* Sign up link */}
          <div className="text-center mt-6">
            <p className="text-blue-600">
              Don’t have an account?{' '}
              <a href="#" className="font-semibold hover:underline">Sign up</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login_Client;
