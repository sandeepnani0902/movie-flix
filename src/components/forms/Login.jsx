import React, { useRef, useState } from 'react'
import './login.css'
import { NavLink, useNavigate } from 'react-router-dom'
// import bodybg from '../assets/bodybg'
function Login() {
    const [user, setUser] = useState({username:"",password:""})
    const navigate = useNavigate()
    const [showpassword, setShowpassword]  = useState(false)
    
    function handleinput(e){
        const {name, value} =e.target
        setUser( {...user, [name]:value})
    }

function handleform(e){
    e.preventDefault()
    if( user.username="sandeep" && user.password=="123"){
          navigate("/dashboard")
    }
    else{
         alert("enter valid data")
    }
   
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
                    <label >User Name  <span>:</span></label>
                    <input type="text" placeholder='Enter User Name' name="username" value={user.username} onChange={handleinput}/>
                </div>
                <div id='field'>
                    <label>Password <span>:</span></label>
                    <input type={ showpassword ? "text" : "password"} name='password' value={user.password}  placeholder='Enter Password' onChange={handleinput}/>
                </div>
                <div id='checkbox'>
                    <input type="checkbox"  onChange={showpasswordfunction} /> 
                    <label>Show password</label>
                </div>
                <div id='forgot-password'>
                   <a href="#">Forgot Password?</a>
                </div>
                <button type='submit' id='btn'>Sign In</button>
                <div className='keep-me-sign'>
                    <input type="checkbox"  />
                    <label> Keep Me Signed In</label>
                </div>
                <div id='register'>
                    <span>Don't have an account?</span>
                    <NavLink to="/register">Register Here</NavLink>
                </div>
                
                
            </form>
            </div>
        </div>
    </>

  )
}

export default Login