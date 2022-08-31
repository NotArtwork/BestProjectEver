import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'





const SchoolCard = ({school, setCurrentCourse}) => {
    let navigate = useNavigate(); 


    const handleCourseClick =(course)=>{
      console.log("I am being clicked", course)
      setCurrentCourse(course)
      navigate ('./course')
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