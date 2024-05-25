import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddTheatreComponent = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to add a theatre
  };

  return (
    <div>
    <h3>Add Theatre</h3>
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label>Name:</label>
        <input
          type='text'
          className='form-control'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className='mb-3'>
        <label>Location:</label>
        <input
          type='text'
          className='form-control'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <button type='submit' className='btn btn-primary'>Add Theatre</button>
    </form>
    <button className='btn btn-secondary mt-3' onClick={() => navigate('/admin/dashboard')}>
      Back to Dashboard
    </button>
  </div>
  );
};

export default AddTheatreComponent;
