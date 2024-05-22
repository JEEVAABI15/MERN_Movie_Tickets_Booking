import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMovieComponent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to add a movie
  };

  return (
    <div>
    <h3>Add Movie</h3>
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label>Title:</label>
        <input
          type='text'
          className='form-control'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className='mb-3'>
        <label>Description:</label>
        <input
          type='text'
          className='form-control'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type='submit' className='btn btn-primary'>Add Movie</button>
    </form>
    <button className='btn btn-secondary mt-3' onClick={() => navigate('/admin/dashboard')}>
    Back to Dashboard
    </button>
    </div>
  );
};

export default AddMovieComponent;