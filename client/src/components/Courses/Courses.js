import CourseCard from './CourseCard' 

const Courses = ({schoolData, setCurrentCourse, teacherData, courseData}) => {




    const mappedCourses = courseData.map (course =>
            <CourseCard 
                key={course.id} 
                course={course}
                schoolData={schoolData} 
                setCurrentCourse={setCurrentCourse} 
                teacherData ={teacherData}
            />)



    return(

        <div className="courses-table">
            <table>
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Teacher</th>
                        <th>Course Capacity</th>
                        <th>School</th>
                    </tr>
                </thead>
                <tbody>
                {mappedCourses}
                </tbody>

            </table>
        
        </div>
            
    )
}

export default Courses;