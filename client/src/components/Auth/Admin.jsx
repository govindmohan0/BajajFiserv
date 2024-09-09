import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import AdminDashboard from './AdminDashboard'; // Import the AdminDashboard component
import './Admin.css'; // Import CSS for styling

const Admin = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout(); // Logs out the user
    navigate('/'); // Redirects to home page
  };

  return (
    <div className="admin-container">
      <aside className="sidebar mb-12">
        <h2>Admin Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Users</li>
          <li>Settings</li>
          <li>Reports</li>
          <li onClick={handleLogout} className="logout-btn">
            Logout
          </li>
        </ul>
      </aside>
      <main className="admin-content">
        <section className="dashboard">

          {/* Render the AdminDashboard component */}
          <AdminDashboard />
        </section>
      </main>
    </div>
  );
};

export default Admin;
