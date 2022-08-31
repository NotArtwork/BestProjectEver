import React, { useState, useEffect} from 'react'




const SchoolCard = ({school}) => {


  console.log(school.courses)
    const handleCourseClick =(event)=>{

    }

    
    return (
      <div className="school-card">
      <h3>{school.name}</h3>
 
     {school.courses.map( (course) => {
      return (
        <li className= "course" onClick={handleCourseClick} key={course.id}>{
          course.name}
        </li>
     )}
      )}
            

        </div>
      );
}

export default SchoolCard;