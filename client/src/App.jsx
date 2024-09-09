/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Land/Navbar';
import Home from './components/Land/Home';

import About from './components/Land/About';
import Tests from './components/Land/Tests';
import Contact from './components/Land/Contact';
import Notfound from './components/Land/Notfound';
import Uploadclient from './components/Uploadclient';
import Admin from './components/Auth/Admin';
import Login from './components/Auth/Login';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/Auth/ProtectedRoute'; // Ensure the path is correct
import GetStarted from './components/GetStarted';
import Login_Client from './components/Auth/Login_Client';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/upload" element={<Uploadclient />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/login-admin" element={<Login />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/login-client" element={<Login_Client />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
