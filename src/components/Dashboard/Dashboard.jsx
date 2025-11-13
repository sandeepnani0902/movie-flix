import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import dropdownImg from "../../assets/dropdown.svg";
import Viewprofile from './Dropdownpages/Viewprofile';
import './dashboard.css'; 

function Dashboard() {
  const [checkdropdown, setCheckdropdown] = useState(false);
  const [rotate, setRotate] = useState("0deg");
  const [activedropdown, setActivedropdown] = useState('User Name');
  
  const location =  useLocation()
  const subpath = location.pathname;
  

  const navigate = useNavigate();

  function handleDropDown() {
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

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <div className="dashboard-header">
          <h3>Admin</h3>
          <div className="user-section">
            <div className="profile-circle">S</div>
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

        <div className="dashboard-content">
          <Outlet />
          {/* <div className='dropdownactivecontainer'>
              { true && < Viewprofile />}
          </div> */}
          
        </div>

        <footer>ramanasoftnocopyrights@2025</footer>
      </div>
    </div>
  );
}

export default Dashboard;
