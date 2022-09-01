import {useEffect, useState} from 'react'

const Course = ({course, teacher, seatData, studentsInCourse}) => {
    
    const [isButtonClicked, setIsButtonClicked] = useState(false)
    // console.log('student lenth', studentsInCourse.length)
    
    const isClassFull = studentsInCourse.length >= course.capacity
    // console.log('is class full',isClassFull)
    useEffect(() => {
        isClassFull && alert("class is full")
    }, [studentsInCourse.length])
    
// console.log("course in Course.js", course)
// console.log("course.capacity", course.capacity)
// console.log("studentsInCourse.length_Course.js", studentsInCourse.length)

    const handleJoinClass =(user_id)=>{
        // update the seat in the course with the student id

        console.log("studentsInCourse.length < course.capacity in handleJoinClass", studentsInCourse.length < course.capacity)

        setIsButtonClicked(!isButtonClicked)
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

    const handleLeaveClass = () => {
        setIsButtonClicked(!isButtonClicked)

        fetch(`http://localhost:3000/seats/${course.id}/${1}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })




    }

    // console.log("school data", schoolData?.courses)


    // console.log("course from Course.js", course)
    return(

        <div>
            <h1>{course.name}</h1>
            <div className='teacher-left'>
                <h2>Teacher</h2>
                <img src={teacher?.picture} alt="image of teacher"/>
            </div>

            <div className='teacher-right'>

                <h1>{teacher.first_name}</h1>
                <h1>{teacher.last_name}</h1>
                
                

            {/* {isClassFull ? isButtonClicked ? <button onClick={handleLeaveClass}>Leave Class</button> : <button onClick={handleJoinClass}>Join Class</button> : alert("class is full")} */}
            {!isClassFull && (isButtonClicked ? <button onClick={handleLeaveClass}>Leave Class</button> : <button onClick={handleJoinClass}>Join Class</button>)}
            
            </div>

            <div className='teacher-bottom'>
                <h1>Course Description</h1>
                <p>*Course Description*
                    <br/>
                    Course capacity: {course.capacity}
                </p>
            
            </div>

        </div>



            

    )


}


export default Course;