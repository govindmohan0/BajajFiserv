import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
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
          <h1 className='font-bold'>Dashboard</h1>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Users</h3>
              <p>120</p>
            </div>
            <div className="stat-card">
              <h3>Active Sessions</h3>
              <p>35</p>
            </div>
            <div className="stat-card">
              <h3>Reports</h3>
              <p>8 Pending</p>
            </div>
          </div>
        </section>
        <section className="user-management">
          <h2>User Management</h2>
          <p>Manage user accounts, roles, and permissions.</p>
          <button className="manage-users-btn">Manage Users</button>
        </section>
        <section className="settings">
          <h2>Settings</h2>
          <p>Adjust application settings, security, and preferences.</p>
          <button className="settings-btn">Go to Settings</button>
        </section>
      </main>
    </div>
  );
};

export default Admin;
