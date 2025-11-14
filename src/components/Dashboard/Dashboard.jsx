import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import dropdownImg from "../../assets/dropdown.svg";
// import Viewprofile from './Dropdownpages/Viewprofile';
import './dashboard.css'; 

function Dashboard({profile}) {
  const [checkdropdown, setCheckdropdown] = useState(false);
  const [rotate, setRotate] = useState("0deg");
  const [activedropdown, setActivedropdown] = useState('User Name');
  const [menu, setMenu] = useState(false)
  // const [screenwidth, setScreensize] = useState(window.width)
  
  // const [sidebar, setSidebar] =useState({width:0, opacity:0})
  const location =  useLocation()
  const subpath = location.pathname;
  

  const navigate = useNavigate();

  function handleDropDown() {

    if(checkdropdown){
      setCheckdropdown(false)
    }
    else{
      setCheckdropdown(true)
    }

    setCheckdropdown(!checkdropdown);
    setRotate(checkdropdown ? "0deg" : "180deg");
  }


  function hanldedropdownoption(e) {
    e.preventDefault();
    const name = e.target.dataset.name;
    if (!name) return;
  
    setActivedropdown(name);
    setCheckdropdown(false);
    setRotate("0deg");

    if (name === "Logout") {
      alert("are you sure to logout")
      console.log("Logging out...");
    }
     else {
      console.log("next root")
      navigate(`/${subpath }/${name.toLowerCase().replace(" ", "")}`);
    }
  }
 function handletoggle(){
    if(!menu){
    setMenu(true)
    }
    else{
      setMenu(false)
    }
 }
 
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="logo">
          <h2>Movie Flix</h2>
        </div>
          <div className="user-section">
            <div className="profile-circle">{profile ? (
                <img
                  src={profile}
                  alt="Profile"
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  className="profile-image"
                />) : "s" }
                </div>
            <div className="dropdown">
              <div className="selectDropDown-section">
                <div className="selectDropDown" onClick={handleDropDown}>
                  <span className="activedropdown">{activedropdown}</span>
                  <img 
                    style={{ transform: `rotate(${rotate})`, transition: "transform 0.3s ease" }}
                    src={dropdownImg}
                    alt="Dropdown icon"
                  />
                </div>
              </div>
              {checkdropdown && (
                <ul className="dropdown-content">
                  <li data-name="User Name" onClick={hanldedropdownoption}>User Name</li>
                  <li data-name="View Profile" onClick={hanldedropdownoption}>View Profile</li>
                  <li data-name="Edit Profile" onClick={hanldedropdownoption}>Edit Profile</li>
                  <li data-name="Logout" onClick={hanldedropdownoption}>Logout</li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="dashboard-main">
            <div className="menu" onClick={handletoggle}>
              <i class="bi bi-list"></i>
            </div>
            <div className="sidebar-block">
            <Sidebar />
            </div>
            <div className="dashboard-content">
              <Outlet />
            </div>
        </div>
        <footer>ramanasoftnocopyrights@2025</footer>
    </div>
  );
}

export default Dashboard;
