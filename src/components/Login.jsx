import React, { useRef, useState } from 'react'
import './login.css'
// import bodybg from '../assets/bodybg'
function Login() {
    const name = useRef()
    const password = useRef()
    // const checkbox =useRef()
    const [showpassword, setShowpassword]  = useState(false)
    
function handleform(e){
    e.preventDefault()
    console.log("name")
}

function showpasswordfunction(){
   
        setShowpassword(!showpassword)
    
   
}


  return (
    <>
        <div className='login'>
            <div className='form-block'>
                <form onSubmit={handleform}>
                <h3>Sign In</h3>
                <div className='username' id='field'>
                    <label>User Name </label><p> : </p>
                    <input type="text" placeholder='Enter User Name' ref={name}/>
                </div>
                <div id='field'>
                    <label>Password </label><p> : </p>
                    <input type={ showpassword ? "text" : "password"}  placeholder='Enter Password' ref={password}/>
                </div>
                <div id='checkbox'>
                    <input type="checkbox"  onChange={showpasswordfunction} /> 
                    <label>Show password</label>
                </div>
                <div id='forgot-password'>
                   <a href="#">Forgot Password?</a>
                </div>
                <button type='submit' id='login-btn'>Sign In</button>
                <div className='keep-me-sign'>
                    <input type="checkbox"  />
                    <label> Keep Me Signed In</label>
                </div>
                <div id='register'>
                    <span>Don't have an account?</span>
                    <a href="#">Register Here</a>
                </div>
                
                
            </form>
            </div>
        </div>
    </>

  )
}

export default Login