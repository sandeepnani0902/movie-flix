import React, { useRef, useState } from 'react';
import axios from 'axios';
import './register.css';
import {  NavLink, useNavigate } from 'react-router-dom';

function Register() {
  const navigate= useNavigate()
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    confirmpassword: "",
    profile: null, // store actual File object, not name
  });

  const [preview, setPreview] = useState(null);
  const [error, setError] = useState();
  const profileRef = useRef();

  // ✅ Handle text inputs
  function handleInput(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // ✅ Handle image upload
  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      setForm((prev) => ({ ...prev, profile: file }));
    }
  }



  // ✅ Form submit
  async function handleForm(e) {
    e.preventDefault();
    // navigate("/login")
    const newerror = {};

    // ✅ First name validation
    if (!/^[a-zA-Z]{2,}$/.test(form.firstname)) {
      newerror.firstname = "Enter a first name";
    }
     if (!/^[a-zA-Z]{2,}$/.test(form.lastname)) {
      newerror.lastname = "Enter a  last name";
    }
    // ✅ Mobile validation
    if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newerror.mobile = "Enter a valid 10-digit mobile number";
    }

    // ✅ Email validation
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) {
      newerror.email = "Enter a valid email address";
    }
    if(!/^.{5}$/.test(form.password)){
      newerror.password ="Enter a  5 digit password"
    }

    // ✅ Password match
    if (form.password !== form.confirmpassword) {
      newerror.confirmpassword = "Passwords do not match";
    }

    // ✅ Profile image check
    if (!form.profile) {
      newerror.profile = "Please upload a profile picture";
    }
    // navigate("/login")

    // ❌ If there are any errors, show and stop submit
    if (Object.keys(newerror).length > 0) {
      setError(newerror);
      console.log("Validation Errors:", newerror);
      return;
    }
    // const formData = new FormData();

    // for (const key in form) {
    //   formData.append(key, form[key]);
    // }

    const adminsdata = localStorage.getItem("amdins") || []
    
   localStorage.setItem("admins", adminsdata.push(form) )
    navigate("/login")
    // try {
    //   const response = await axios.post("http://localhost:4000/register", formData, {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   });
    //   console.log("Server Response:", response.data);
    //   alert("Registration successful!");
    //   setForm({
    //     firstname: "",
    //     lastname: "",
    //     email: "",
    //     mobile: "",
    //     password: "",
    //     confirmpassword: "",
    //     profile: null,
    //   });
    //   setPreview(null);
    // } catch (err) {
    //   console.error("Error uploading:", err);
    //   alert("Something went wrong while submitting form!");
    // }
  }

  return (
    <div className='Register'>
      <div className='form-block'>
        <form onSubmit={handleForm}>

          <div className='profile'>
            <div className='image-block'>
              {preview ? (
                <img
                  src={preview}
                  alt="Profile"
                  style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                  className="profile-image"
                />
              ) : (
                <svg id="camera" width="32" height="29" viewBox="0 0 32 29" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.1818 8.7V5.8H23.2727V2.9H26.1818V0H29.0909V2.9H32V5.8H29.0909V8.7H26.1818ZM14.5455 23.925C16.3636 23.925 17.9093 23.2909 19.1825 22.0226C20.4558 20.7543 21.0919 19.2135 21.0909 17.4C21.0899 15.5865 20.4538 14.0461 19.1825 12.7788C17.9113 11.5115 16.3656 10.8769 14.5455 10.875C12.7253 10.8731 11.1801 11.5077 9.90982 12.7788C8.63952 14.05 8.00291 15.5904 8 17.4C7.99709 19.2096 8.6337 20.7505 9.90982 22.0226C11.1859 23.2947 12.7312 23.9289 14.5455 23.925ZM14.5455 21.025C13.5273 21.025 12.6667 20.6746 11.9636 19.9737C11.2606 19.2729 10.9091 18.415 10.9091 17.4C10.9091 16.385 11.2606 15.5271 11.9636 14.8262C12.6667 14.1254 13.5273 13.775 14.5455 13.775C15.5636 13.775 16.4242 14.1254 17.1273 14.8262C17.8303 15.5271 18.1818 16.385 18.1818 17.4C18.1818 18.415 17.8303 19.2729 17.1273 19.9737C16.4242 20.6746 15.5636 21.025 14.5455 21.025ZM2.90909 29C2.10909 29 1.42448 28.7163 0.855273 28.1488C0.286061 27.5814 0.000969697 26.8985 0 26.1V8.7C0 7.9025 0.285091 7.22003 0.855273 6.6526C1.42545 6.08517 2.11006 5.80097 2.90909 5.8H7.49091L10.1818 2.9H20.3636V8.7H23.2727V11.6H29.0909V26.1C29.0909 26.8975 28.8063 27.5804 28.2371 28.1488C27.6679 28.7172 26.9828 29.001 26.1818 29H2.90909Z"
                    fill="black" />
                </svg>
              )}
              <p className='error'>{error?.name}</p>
            </div>
            <div className='file-upload-loc'>
              <input
                type="file"
                accept='image/*'
                name='profile'
                id="profile"
                ref={profileRef}
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
              <label htmlFor="profile">Upload Image</label>
            </div>
          </div>

          {/* Text Fields */}
          <div id='field'>
            <label>First Name <span>:</span></label>
            <div>
               <input
              type="text"
              name='firstname'
              placeholder='Enter First Name'
              onChange={handleInput}
              value={form.firstname}
              
            />
            <p className='error'>{error?.firstname}</p>
            </div>
           
          </div>

          <div id='field'>
            <label>Last Name <span>:</span></label>
            <div>
               <input
              type="text"
              name='lastname'
              placeholder='Enter Last Name'
              onChange={handleInput}
              value={form.lastname}
              
            />
             <p className='error'>{error?.lastname }</p>
            </div>
           
          </div>

          <div id='field'>
            <label>Email <span>:</span></label>
            <div>
              <input
              type="email"
              name='email'
              placeholder='Enter Email'
              onChange={handleInput}
              value={form.email}
              
            />
             <p className='error'>{error?.email}</p>
            </div>
            
          </div>

          <div id='field'>
            <label>Mobile No <span>:</span></label>
            <div>
              <input
              type="text"
              name='mobile'
              placeholder='Enter Mobile Number'
              onChange={handleInput}
              value={form.mobile}
              
            />
             <p className='error'>{error?.mobile}</p>
            </div>
            
          </div>

          <div id='field'>
            <label>Password <span>:</span></label>
            <div>
               <input
              type="password"
              name='password'
              placeholder='Enter Password'
              onChange={handleInput}
              value={form.password}
              
            />
            <p className='error'>{error?.password}</p>
            </div>
           
          </div>

          <div id='field'>
            <label>Confirm Password <span>:</span></label>
            <div>
              <input
              type="password"
              name='confirmpassword'
              placeholder='Re-enter Password'
              onChange={handleInput}
              value={form.confirmpassword}
              
            />
            <p className='error'>{error?.confirmpassword}</p>
            </div>
            
          </div>

          <button type='submit' id='sign-btn'>Register</button>

          <div id='sign_in'>
            <span>Already have an account? </span>
            <NavLink to="/login" >Sign In</NavLink>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Register;
