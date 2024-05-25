import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginComponent from './components/loginComponent/loginComponent';
import SignupComponent from './components/signupComponent/signupComponent';
import AdminLoginComponent from './components/adminComponent/adminLoginComponent';
import AdminDashboardComponent from './components/adminComponent/adminDashboardComponent';
import AddMovieComponent from './components/adminComponent/adminActions/addMoviesComponent';
import AddTheatreComponent from './components/adminComponent/adminActions/addTheatreComponent';
import ViewBookingsComponent from './components/adminComponent/adminActions/viewBookingsComponent';


function App() {
  return (
    <Router>
      <div className="App">
        <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
          <div className='container'>
            <Link className='navbar-brand' to={'/'}>
              Book My Movie
            </Link>
            <div id='navbarTogglerDemo02'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <Link className='nav-link' to={'/login'}>Login</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to={'/signup'}>Sign Up</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to={'/login/admin'}>Admin Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <Routes>
              <Route exact path='/' element={<LoginComponent />} />
              <Route path='/login' element={<LoginComponent />} />
              <Route path='/signup' element={<SignupComponent />} />
              <Route path='/login/admin' element={<AdminLoginComponent />} />
              <Route path='/admin/dashboard' element={<AdminDashboardComponent />} />
              <Route path='/admin/add-movie' element={<AddMovieComponent />} />
              <Route path='/admin/add-theatre' element={<AddTheatreComponent />} />
              <Route path='/admin/view-bookings' element={<ViewBookingsComponent />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
