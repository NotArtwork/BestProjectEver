import React from 'react'
import { useNavigate } from 'react-router-dom'
import SchoolCard from './SchoolCard'
import video from './video.mp4'


const Home = ({schoolData, setCurrentCourse}) => {

  //handle click to see individual courses
  let navigate = useNavigate()

  const handleCourseClick =(course)=>{
    setCurrentCourse(course)
    navigate ('./course')
  }        
  //handle click to see individual courses  


  const mappedSchools = schoolData.map (school => 
    <SchoolCard 
      key={school.id} 
      school={school} 
      setCurrentCourse={setCurrentCourse} 
      handleCourseClick={handleCourseClick}
    />)
  


  return (
    <div className="home">
      <video 
            autoPlay 
            loop
            playsInline
            className="video-background" 
            muted
      >
          <source src={video} type="video/mp4"/>
      </video>
        {mappedSchools}
    </div>
  );
}

export default Home;
