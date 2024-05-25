import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboardComponent = () => {
  return (
    <div>
      <h2>Welcome Admin</h2>
      <ul>
        <li><Link to="/admin/add-movie">Add Movie</Link></li>
        <li><Link to="/admin/add-theatre">Add Theatre</Link></li>
        <li><Link to="/admin/view-bookings">View Bookings</Link></li>
      </ul>
    </div>
  );
};

export default AdminDashboardComponent;