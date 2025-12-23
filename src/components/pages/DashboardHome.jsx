import React, { useEffect, useState } from 'react'
import './dashboardhome.css'
function DashboardHome() {
  // const [videocard, setVideocard] = useState(["video1", "video2","video3", "video4", "video5", "video6", "video7", "video8", "video9"])
  const [Laguage, setLanguageList] = useState([])
  const [Genre, setGenreList]  = useState([])
  const [Movies, setMovies] = useState([])
  const [WebSeries, setWebSeries] = useState([])
  const categories ={
    Laguage,
    Genre,
    Movies,
    WebSeries
  }
  useEffect(()=>{
    fetchLanguage()
    fetchGenres()
    fetchMovies()
    fetWebseries()
  },[])

    const fetchLanguage = async()=>{
      try{
         const res = await fetch("http://localhost:2025/movieflix/languages", 
        {method:"get"}
      )
      const data = await res.json() 
      setLanguageList(data.data)
      } 
      catch(err){
        console.error(err)
      } 
    }
    const fetchGenres = async () => {
    try {
      const res = await fetch("http://localhost:2025/movieflix/genre",{
        method:"get"
      }); 
      const data =await res.json()
      if (data.success) {
        setGenreList(data.data);
      }
      else{
        console.error("Failed to fetch genres");
      }
    
    } catch (err) {
      console.error("Error fetching genres:", err);
    } 
    }
    const fetchMovies = async () => {
       const res = await fetch("http://localhost:2025/movieflix/movies",{
        method:"get"
       })
       const data =await res.json()
       if(data.success){
        setMovies(data.data)
       }
    }
    const fetWebseries = async ()=> {
      const res = await fetch("http://localhost:2025/movieflix/webseries",{
        method:'get'
      })
      const data = await res.json()
      if(data.success){
        setWebSeries(data.data)
      }
    }
  return (
    <>
      <div className="dashboard-home-container">
        <div className="dashboardhome-header">
        <h1>Dashboard</h1>
      </div>
      <div className='video-card-gallery'>
        {Object.keys(categories).map((cate) => 
          <div  className='video-card' id={cate}>
              <h5>{cate}</h5>
              <h6>{categories[cate].length}</h6>
          
          </div>
        )
        }
      </div>
      </div>
      
    </>
  )
}

export default DashboardHome