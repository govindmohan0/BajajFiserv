import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Land/Navbar';
import Home from './components/Land/Home';
import Services from './components/Land/Services';
import About from './components/Land/About';
import Testimonials from './components/Land/Testimonials';
import Contact from './components/Land/Contact';
import Notfound from './components/Land/Notfound';
import Uploadclient from './components/Uploadclient';
import Admin from './components/Admin';
import Login from './components/Login';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute'; // Ensure the path is correct

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/upload" element={<Uploadclient />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/login" element={<Login />} />
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
