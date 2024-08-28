import React, { createContext, useState, useContext } from 'react';

// Create a Context for Auth
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username, password) => {
    if (username === 'admin' && password === 'password') { // Validate username and password
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      alert('Invalid username or password'); // Optional: Show an alert for invalid credentials
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
