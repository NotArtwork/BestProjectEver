
import React from 'react'
import SchoolCard from './SchoolCard';


const Home = ({schoolData}) => {

  const mappedSchools = schoolData.map (school => <SchoolCard key={school.id} school={school}/>)
  
  return (
    <div className="home">
        {mappedSchools}
    </div>
  );
}

export default Home;
