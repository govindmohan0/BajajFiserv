import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Login.css'; // Importing the CSS file for styling (if needed)

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
    navigate('/admin');
  };

  return (
    <div className="login-container flex items-center justify-center min-h-screen bg-gray-100 relative overflow-hidden">
      <div className="background-animation absolute inset-0"></div>
      <div className="login-box bg-white border border-teal-950 shadow-lg rounded-lg p-8 w-full max-w-md flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h1>
        <form onSubmit={handleLogin} className="w-full">
          <div className="input-group mb-4">
            <label className="block text-gray-600 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700"
            />
          </div>
          <div className="input-group mb-6">
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700"
            />
          </div>
          <button type="submit" className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
