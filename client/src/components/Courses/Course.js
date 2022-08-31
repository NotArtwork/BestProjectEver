
const Course = ({course}) => {
 

    const handleJoinClass =()=>{
        // update the seat in the course with the student id
    }
    // console.log("school data", schoolData?.courses)

    console.log(course)
    return(

        <div>
            <h1>*CourseName*</h1>
            <div className='teacher-left'>
                <h1>Teacher</h1>
                <img src="https://thumbs.dreamstime.com/b/strict-muslim-teacher-controls-strict-muslim-teacher-controls-her-students-sitting-desk-woman-works-school-144410793.jpg"/>
            </div>

            <div className='teacher-right'>
                <h1>teacher first name</h1>
                <h1>teacher last name</h1>
                <button onClick={handleJoinClass}>Join Class</button>

            </div>

            <div className='teacher-bottom'>
                <h1>Course Description</h1>
                <p>*Course Description*
                    <br/>
                    *available seats from capacity*
                </p>
            
            </div>

        </div>



            

    )


}


export default Course;