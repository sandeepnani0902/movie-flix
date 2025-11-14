import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate()
  function handleUserLogedout(){
    if(confirm("are sure to logout")){
      navigate("/")
    }
    
  }
  return (
    <div className="sidebar">
      <ul>
        <li><NavLink to="/dashboard" end><i className="bi bi-columns-gap"></i> <span>Dashboard</span></NavLink></li>
        <li><NavLink to="/dashboard/languages"><i className="bi bi-translate"></i><span>Languages</span></NavLink></li>
        <li><NavLink to="/dashboard/genre"><i className="bi bi-collection-play"></i><span>Genre</span></NavLink></li>
        <li><NavLink to="/dashboard/webseries"><i className="bi bi-tv"></i><span>Web Series</span></NavLink></li>
        <li><NavLink to="/dashboard/movies"><i className="bi bi-film"></i><span>Movies</span></NavLink></li>
        <li><NavLink to="/dashboard/profilesettings"><i className="bi bi-gear"></i><span>Profile Settings</span></NavLink></li>
      </ul>
      <div className="logout">
        <button  onClick={handleUserLogedout}><i class="bi bi-box-arrow-left"></i> <span>Logout</span></button>
      </div>
    </div>
  );
}

export default Sidebar;



















// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import './sidebar.css';
// import { Route,Routes} from 'react-router-dom';
// import Dashboard from '../Dashboard/Dashboard';
// import { Link } from 'react-router-dom';
// function Sidebar() {

//   return (
//     <>
//     <div className='sidebar'>
//         <div className='pages'>
//           <Routes>
//              <Route path='/dashboard' element={<Dashboard />} />
//           </Routes>
//           <ul>
//             <li> <Link to="/dashboard">Dashboard</Link>
//                </li>
//             <li><a ><img src="" alt="" /> Languages</a></li>
//             <li><a href=""><img src="" alt="" /> Genre</a></li>
//             <li><a href=""><img src="" alt="" /> Web Series</a></li>
//             <li><a href="">Movies</a></li>
//             <li><a href="">Profile Settings</a></li>
//           </ul>
//         </div>
//         <div><ul><li href=''>Logout</li></ul></div>
//     </div>
     
//     </>
//   );
// }

// export default Sidebar;
