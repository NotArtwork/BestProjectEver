
const Course = ({course, teacher}) => {

    const handleJoinClass =()=>{
        // update the seat in the course with the student id
    }
    // console.log("school data", schoolData?.courses)


    console.log(course)
    return(

        <div className="course">

                <h1>{course.name}</h1>
                <div class= "teacher">
                    <img class= "teacher-image" src={teacher.picture} alt="image of teacher"/>
                    <h2>Teacher: <br/> {teacher.first_name} {teacher.last_name}</h2>

                </div>
                
                <div class= "description">                
                    <h2>Course Description</h2>
                    <p> {course.course_description} </p>
                </div>

               
                Course capacity: {course.capacity}
                <br></br>
                <br></br>


                <button onClick={handleJoinClass}>Join Class</button>

                

        </div>

    )
}

export default Course;