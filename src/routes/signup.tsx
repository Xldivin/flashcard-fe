import { Link } from "react-router-dom"
import { useState } from 'react';
import { SIGNUP_MUTATION } from "../lib/auth";
import { useMutation } from "@apollo/client";
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {email,password,name},
    onCompleted: ({ signup }) => {
      localStorage.setItem("token", signup.token);
      navigate('/cards');
    }
  });
  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      return alert('Please fill in all fields')
    }
    signup()
    setName('')
    setEmail('')
    setPassword('')
    alert("User Signed In")
  }
  return (
    <div>
              <form className='form2' onSubmit={handleSubmit}>
              <p className='login'>SIGNUP TO FLASH-CARD APP</p>
              <input
              className='input3'
              name="username"
              placeholder='Enter Your Username'
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
              <input
              className='input4'
              name="email"
              placeholder='Enter Your Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <input
              className='input5'
              name="password"
              placeholder='Enter Your Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              <p className='signup'>
              <Link to="/login" className="signuplink">
                  Already have an account
              </Link>
              </p>
              <br />
              <button className='loginbutton'>SignUp</button>
          </form>
</div>
  )
}

export default Signup