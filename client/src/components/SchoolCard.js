import React, { useState, useEffect} from 'react'


const SchoolCard = ({school, setCurrentCourse, handleCourseClick}) => {

    
    return (
      <div className="school-card">
        
        <h3>{school.name}</h3>
        <div className="course-list">

          {school.courses.map( (course) => {
            return (
              <li 
                className= "course-item" 
                onClick={() => handleCourseClick(course)} 
                key={course.id}>
                  {course.name}
              </li>
            )}
          )}

        </div>

      </div>
    );
}

export default SchoolCard;