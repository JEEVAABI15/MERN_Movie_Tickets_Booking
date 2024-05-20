import React, { useState } from 'react';

const AdminLoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(email, password);

    fetch('http://localhost:8000/api/v1/login/admin', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === 'OK') {
          alert('Admin login successful!');
          console.log(data.token);
          window.localStorage.setItem('token', data.token);
          // Redirect to admin dashboard or perform other admin actions
        } else {
          alert('Invalid credentials');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='mb-3'>
        <label>Email:</label>
        <input
          type='email'
          className='form-control'
          value={email}
          onChange={emailHandler}
          placeholder='Enter your email'
          required
        />
      </div>
      <div className='mb-3'>
        <label>Password:</label>
        <input
          type='password'
          className='form-control'
          value={password}
          onChange={passwordHandler}
          placeholder='Enter your password'
          required
        />
      </div>
      <div className='mb-3'>
        <div className='custom-checkbok custom-control'>
          <input type='checkbox' className='custom-control-input' id='customCheck1' />
          <label className='custom-control-label' htmlFor='customCheck1'>
            Remember me?
          </label>
        </div>
        <div className='d-grid'>
          <button type='submit' className='btn btn-primary'>
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default AdminLoginComponent;
