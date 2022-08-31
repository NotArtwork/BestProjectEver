import React from 'react'


const SchoolCard = ({school}) => {

    const handleCourseClick =(event)=>{
        event.target.value
    }

    return (
        <div className="school-card">
         <h3>{school.name}</h3>
         <ul>
            {/* I'm too tired right now but I need to pull all the courses from the courses table into a list
            that have the school_id = the current {school.id} I think that's something like find_by(school_id: {school.id}) 
            and we want to be able to do an onClick event on each of these to navigate us to the specific Course.js (handleCourseClick)*/}
         </ul>
        </div>
      );
}

export default SchoolCard;