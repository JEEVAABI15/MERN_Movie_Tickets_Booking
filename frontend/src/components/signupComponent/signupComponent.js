import React, { Component } from 'react'

class SignupComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : "",
            email : "",
            password :""
        }
    }
    nameHandler = event=>{
        this.setState(
            {
                name : event.target.value
            }
        )
    }
    emailHandler = event=>{
        this.setState(
            {
                email : event.target.value
            }
        )
    }
    passwordHandler = event=>{
        this.setState(
            {
                password : event.target.value
            }
        )
    }
    formSubmitHandler = event => {
        event.preventDefault()
        console.log(
            this.state.name,
            this.state.email,
            this.state.password
        );

        fetch('http://localhost:8000/api/v1/signup',{
            method:'POST',
            //crossDomain: true,
            headers: {
                'Content-type':'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify({
                name:this.state.name,
                email : this.state.email,
                password:this.state.password


            })
        })
        .then((response)=> response.json())
        .then((data)=>{
            console.log(data);
        })
        .catch((error)=>{
            console.error('Error:',error);
        });

    }



  render() {

    const{name,email,password} = this.state
    return (
      <form onSubmit = {this.formSubmitHandler}>
        <h3>Sign up</h3>
        <div className='mb-3'>
            <label>Name:</label>
            <input
            type='text'
            className='form-control'
            placeholder='Enter your name'
            value={name}
            onChange={this.nameHandler}
            required
            />
        </div>
        
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

        <div className='d-grid'>
            <button type='submit' className='btn btn-primary'>Sign Up</button>
        </div>

        <p className='forget-password text-right'>
            Already registered, <a href='/login'>Log-in here?</a>
        </p>
        


      </form>
    )
  }
}

export default SignupComponent