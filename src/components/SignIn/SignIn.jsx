import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.scss'; 
import logo from '../images/loginlogo.jpg';

const SignIn = () => {
    const [emailValue, setEmailValue]=useState ('');
    const [pwdValue, setPwdValue]= useState('');

    const handlesubmit=(e)=>{
        e.preventDefault();

    }
  return (
    <div className='main-login'>
        <div className='login-contain'>
          <div className='left-side'>
            <div className='img-class' >
              <i className="ri-login-box-line img-icon" ></i>
            </div>
            <form onSubmit={handlesubmit}>
            <label for="emi11">Email</label>
                <input placeholder="Enter your email.... " 
                type="mail" 
                value={emailValue}
                onChange={(e)=>{setEmailValue(e.target.value)}} 
                id="emi11"/>

            <label for="pws11">Password</label>
                <input placeholder='Enter password' type="password" 
                value={pwdValue} 
                onChange={(e)=>{setPwdValue(e.target.value)}}
                id="pws11"/>
                <button type="submit" id="sub_butt">Login</button>
            </form>
            <div className="log-in-footer">
              <h6>Don't have an Account ? <Link className='link' to="/register">Register Now </Link>
              </h6>
            </div>
          </div>
         
          <div className='right-side'>
            <div className='welcomeNote'>
                <h3>Welcome Back!</h3>
            </div>
            <div className='welcomeImg'>
                <img src={logo} id="wel-img-id" alt='' />

            </div>
            
          </div>
 
        </div>
         
    </div>
    
  )
}
export default SignIn;