import React, { useState } from 'react'
import './dashboardhome.css'
function DashboardHome() {
  const [videocard, setVideocard] = useState(["video1", "video2","video3", "video4", "video5", "video6", "video7", "video8", "video9"])
  return (
    <>
      <div className="dashboard-home-container">
        <div className="dashboardhome-header">
        <h1>Dashboard</h1>
      </div>
      <div className='video-card-gallery'>
          {videocard?.map((video, index)=>{
            return <div key={index} className='video-card'>{video}</div>
          })}
      </div>
      </div>
      
    </>
  )
}

export default DashboardHome