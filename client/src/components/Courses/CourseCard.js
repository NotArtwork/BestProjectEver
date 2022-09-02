import { useNavigate } from 'react-router-dom'


const CourseCard = ({course, schoolData, setCurrentCourse, teacherData}) => {


    //handle click to see individual courses
    let navigate = useNavigate()

    const handleCourseClick =()=>{
        setCurrentCourse(course)
        navigate ('./course')
    }        
    //handle click to see individual courses  

    // let teacher = teacherData.find_by{}

    const teacher = teacherData.find(teacher => {return (teacher.id === course.teacher_id)})
    const school = schoolData.find(school => {return (school.id === course.school_id)})


    console.log(school)
   
    return(

            <tr className="course-item" onClick={() => handleCourseClick(course)} >
                <td>{course.name}</td>
                <td>{teacher.first_name} {teacher.last_name}</td>
                <td> {course.capacity}</td>
                <td>school name{school.name}</td>
            </tr>

                                

    )
}

export default CourseCard;

        
    