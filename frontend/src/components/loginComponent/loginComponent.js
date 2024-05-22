import React, { Component } from 'react'

class LoginComponent extends Component {
  constructor(props){
    super(props)

    this.state = {
       
        email : "", 
        password :""
    }
}
emailHandler = (event)=>{
  this.setState(
      {
          email : event.target.value
      }
  )
}

passwordHandler = (event)=>{
  this.setState(
      {
          password : event.target.value
      }
  )
}

formSubmitHandler = (event) =>{
  event.preventDefault();
  console.log(
    this.state.email,
    this.state.password
);
fetch('http://localhost:8000/api/v1/auth/login',{
            method:'POST',
            crossDomain: true,
            headers: {
                'Content-type':'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify({
              
                email : this.state.email,
                password:this.state.password


            })
        })
        .then((response)=> response.json())
        .then((data)=>{
            console.log(data);
            if(data.status === 'OK')
            {
              alert('login successfull!!!!')
              console.log(data.token)
              window.localStorage.setItem('token',data.token)
              window.location.href='/userdata'
            }
        })
        .catch((error)=>{
            console.error('Error:',error);
        });



    
}



  render() {
    const {email,password}=this.state
    return (
      
      <form onSubmit = {this.formSubmitHandler}>
        <div className='mb-3'>
            <label>Email:</label>
            <input
            type='email'
            className='form-control'
            value={email}
            onChange={this.emailHandler}

            placeholder='Enter your email'
            required
            />
        </div>
        <div className='mb-3'>
            <label>PassWord:</label>
            <input
            type='password'
            className='form-control'
            value={password}
            onChange={this.passwordHandler}
            placeholder='Enter your password'
            required/>
        
        </div>
        <div className='mb-3'>
          <div className='custom-checkbok custom-control'>
            <input
            type='checkbox'
            className='custom-control-input'
            id='customCheck1'
            />

            <label className='custom-control-label' 
            htmlFor='customCheck1'>
              Remember me?
            </label>
          

          </div>
          <div className='d-grid'>
            <button type='submit' className='btn btn-primary'>Sign Up</button>
        </div>

        <p className='forget-password text-right'>
            Forget <a href='/login'>password?</a>
        </p>
        <p className='text-right'>
            Forget <a href='/signup'>Register here?</a>
        </p>

        </div>
      </form>

    )
  }
}

export default LoginComponent