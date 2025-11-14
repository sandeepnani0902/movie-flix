
import { Router,Routes, Route,NavLink,Link } from 'react-router-dom'
import './App.css'

import Login from './components/forms/Login'
import Register from './components/forms/Register'
import Dashboard from './components/Dashboard/Dashboard'
import DashboardHome from './components/pages/DashboardHome';
import Movies from './components/pages/Movies';
import Genre from './components/pages/Genre';
import WebSeries from './components/pages/WebSeries';
import ProfileSettings from './components/pages/ProfileSettings';
import Languages from './components/pages/Languages'
import Viewprofile from './components/Dashboard/Dropdownpages/Viewprofile';
import Editprofile from './components/Dashboard/Dropdownpages/Editprofile';
import ProfileSetting from './components/Dashboard/Dropdownpages/ProfileSetting'
import Username from './components/Dashboard/Dropdownpages/Username'
import { useState } from 'react'

function App() {
  const [profile, setProfile] = useState(null)

 
  return (
    <div className='app'>
      
      <Routes>
          <Route  path="/login" element={<Login />} />
          <Route path="/register" element={<Register setProfile={setProfile}/>} />
          <Route path="/dashboard" element={<Dashboard profile={profile}/>}>
  
  {/* Sidebar routes */}
      <Route index element={<DashboardHome />} />
      <Route path="languages" element={<Languages />} />
      <Route path="movies" element={<Movies />} />
      <Route path="genre" element={<Genre />} />
      <Route path="webseries" element={<WebSeries />} />
      <Route path="profilesettings" element={<ProfileSettings />} />

      {/* Dropdown pages */}
      {/* <Route path="viewprofile" element={<Viewprofile />} />
      <Route path="editprofile" element={<Editprofile />} />
      <Route path="username" element={<Username />} />
      <Route path="profilesetting" element={<ProfileSetting />} /> */}
    </Route>
      </Routes>
      
    </div>
  )
}

export default App
