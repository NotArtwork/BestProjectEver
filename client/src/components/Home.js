import React from 'react'
import SchoolCard from './SchoolCard'
import video from './video.mp4'


const Home = ({schoolData, setCurrentCourse}) => {

  const mappedSchools = schoolData.map (school => <SchoolCard key={school.id} school={school} setCurrentCourse={setCurrentCourse}/>)

  return (
    <div className="home">
      <video 
            autoPlay 
            loop
            playsInline
            className="video-background" 
            muted
            playbackRate={.05}
      >
          <source src={video} type="video/mp4"/>
      </video>
        {mappedSchools}
    </div>
  );
}

export default Home;
