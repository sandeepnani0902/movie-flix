import React from 'react';
import {Nav, NavDropdown }from 'react-bootstrap';
import './navbar.css'
function NavBar() {
  return (
    <>
      <nav className='navbar'>
     <div className='brand'>
        <h1>Movie Flix</h1>
     </div>
     <div className='admin'>
        <h2>Admin</h2>
     </div>
     <div className='userdetails'>
        <div className='userImg'>
            {/* <img src="" alt="" /> */}
            <span>S</span>
            
        </div>
        <div className="dropdown">
         <select name="select" id="dropdown">
            <option value="username">User Name</option>
            <option value="logout">View Profile</option>
            <option value="">Edit Profile</option>
            <option value="logout">Profie Setting</option>
            <option value="">Logout</option>
         </select>
        </div>
     </div>
   </nav>
    </>
 
  );
}

export default NavBar;