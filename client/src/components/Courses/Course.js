const Course = ({course, teacher}) => {


    const handleJoinClass =(user_id)=>{
        // update the seat in the course with the student id
        fetch('http://localhost:3000/seats', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                course_id: course.id,
                student_id: 1 // set this to user_id
            }),
        })
    }
    // console.log("school data", schoolData?.courses)


    console.log("course from Course.js", course)
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


            <div className='teacher-right'>

                <h1>{teacher.first_name}</h1>
                <h1>{teacher.last_name}</h1>

                <button onClick={handleJoinClass}>Join Class</button>

                

        </div>

    )
}

export default Course;