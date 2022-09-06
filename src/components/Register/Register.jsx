import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';



const Register = () => {
    const handlesubmit =(e) =>{
        e.preventDefaul();
    }
    const [email,setEmail] =useState('');
    const [FName, setFName] =useState('');
    const [LName, setLName] = useState('');
    const [pwd1, setPwd1] = useState('');
    const [Cpwd1, setCpwd1] = useState('');
  return (
    <div className='main-Register'>
    
     <div className='right-side'>
         <div className='body-right'>
              <div className='container'>
                  <h1>Create Account</h1>
                  <form className='forms-lists' onSubmit={handlesubmit}>
                   <div className='input-group'>
                        <h5>First Name</h5>
                        <input type="text"
                         name="Fname" 
                        value={FName}
                        onChange= {(e)=>{setFName(e.target.value)}}
                         id="fname" />
                    </div>
                    <div className='input-group'>
                        <h5>Last Name</h5>
                        <input 
                        type="text"
                         name="Lname"
                         value={LName}
                         onChange={(e)=>{setLName(e.target.value)}}
                         id="lname" />
                    </div>
                    <div className='input-group'>
                        <h5>Email</h5>
                        <input 
                        type="Email" 
                        name="email" 
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        id="email1" />
                    </div>
                    <div className='input-group'>
                        <h5>Password</h5>
                        <input 
                        type="password" 
                        name="pwd"
                        value={pwd1}
                        onChange={(e)=>{setPwd1(e.target.value)}}
                        id="fpwd1" />
                    </div>
                    <div className='input-group'>
                        <h5>Confirm Password</h5>
                        <input 
                        type="password" 
                        name="pwd" 
                        value={Cpwd1}
                        onChange={(e)=>{setCpwd1(e.target.value)}}
                        id="pwd1" />
                    </div>
                        <input type="submit" id="register-btn" value="Submit" />
                        <p>Already have an Account?
                             <Link id="Links-signIn" to="/logincontroller"> Sign In</Link>
                            </p>
                    </form>
                </div>
          </div>
       
     </div>
    </div>
  )
}

export default Register