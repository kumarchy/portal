import React, { useContext, useState } from 'react';
import './Login.css';
import { assets } from '../../assets/assets';

const Login = ({ setShowLogin, type,loginNavigate}) => {
  const [currState, setCurrState] = useState("Login");

  const handleSubmit=(event)=>{
    event.preventDefault(); 
    loginNavigate(type);
    setShowLogin(false);
  }
  
  return (
    <div className='login'>
      <form className='login-container' onSubmit={handleSubmit}>
        <div className='login-title'>
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        
        <div className='thumb-image'>
          {type === "parent" ? <img src={assets.parent_thumb} alt="Parent Thumbnail" /> : <img src={assets.student_thumb} alt="Student Thumbnail" />}
        </div>

        <div className='login-inputs'>
          {currState === "Login" ? null : <input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your email' required />
          <input type="password" placeholder='Password' required />
        </div>
        
        <button type='submit'>{currState === "Sign Up" ? "Create account" : "Login"}</button>

        <div className='login-condition'>
          <input type="checkbox" required />
          <p>By Continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        )}
      </form>
    </div>
  );
};

export default Login;
