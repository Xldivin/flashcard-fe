import { Link } from "react-router-dom"
import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { useNavigate } from 'react-router-dom';
import { LOGIN_MUTATION } from "../lib/auth";

function Login() {  
const navigate = useNavigate();
const [email, setEmail]= useState('')
const [password, setPassword]= useState('')
const [login] = useMutation(LOGIN_MUTATION, {
  variables: {email,password},
  onCompleted: ({ login }) => {
    localStorage.setItem("token", login.token);
    navigate('/cards');
  }
});
const handleSubmit=(e:any)=>{
  e.preventDefault();
    if (email === '' || password === '') {
      return alert('Please fill in all fields')
    }
  login()
  setEmail('')
  setPassword('')
  alert("User Logged In")
}
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
      <p className='login'>LOGIN TO FLASH-CARD APP</p>
      <input
      className='input1'
      placeholder='Enter Email'
      name="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
      <input
      className='input2'
      placeholder='Enter Password'
      name="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
      <p className='signup'>
        <Link to="/signup" className="signuplink">
          Don't have an account yet
        </Link>
      </p>
      <br />
      <button className='loginbutton'>Login</button>
      </form>
    </div>
  )
}

export default Login