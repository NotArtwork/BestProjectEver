
import React from 'react'


const Home = ({schoolData}) => {

  const mappedSchools = schoolData.map (school => <SchoolCard key={school.id} school={school}/>)
  return (
    <div className="home">
        <NavBar/>
        {mappedSchools}
    </div>
  );
}

export default Home;
