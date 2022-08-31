import React from 'react'
import SchoolCard from './SchoolCard';


const Home = ({schoolData, setCurrentCourse}) => {

  const mappedSchools = schoolData.map (school => <SchoolCard key={school.id} school={school} setCurrentCourse={setCurrentCourse}/>)

  return (
    <div className="home">
        {mappedSchools}
    </div>
  );
}

export default Home;
