import React, { useState, useEffect} from 'react'




const SchoolCard = ({school, setCurrentCourse}) => {


    const handleCourseClick =(course)=>{
      console.log("I am being clicked", course)
      setCurrentCourse(course)
    }

    
    return (
      <div className="school-card">
      <h3>{school.name}</h3>
 
     {school.courses.map( (course) => {
      return (
        <li className= "course" onClick={() => handleCourseClick(course)} key={course.id}>{
          course.name}
        </li>
     )}
      )}
            

        </div>
      );
}

export default SchoolCard;