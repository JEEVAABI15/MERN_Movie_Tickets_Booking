import React from 'react';
import { useNavigate } from 'react-router-dom';

const ViewBookingsComponent = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h3>View Bookings</h3>
      {/* Display bookings here */}
      <button className='btn btn-secondary mt-3' onClick={() => navigate('/admin/dashboard')}>
        Back to Dashboard
      </button>
    </div>
  );
};

export default ViewBookingsComponent;
