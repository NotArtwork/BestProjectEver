import { useState, useEffect} from 'react'

const Course = () => {
     
    const [teacherData, setTeacherData] = useState([])

    useEffect(() => {
  
      const getTeacher = async () => {
        let req = await fetch('http://localhost:3000/teachers')
        let res = await req.json()
        setTeacherData(res)
      }
      getTeacher()
    }, [])

    const handleJoinClass =()=>{
        
    }
    
    return(

        <div>
            <h1></h1>
            <div className='teacher-left'>
                <h1>Teacher</h1>
                <img src="https://thumbs.dreamstime.com/b/strict-muslim-teacher-controls-strict-muslim-teacher-controls-her-students-sitting-desk-woman-works-school-144410793.jpg"/>
            </div>

            <div className='teacher-right'>
                <h1>{teacherData.first_name}</h1>
                <h1>{teacherData.last_name}</h1>
                <button onClick={handleJoinClass}>Join Class</button>

            </div>

            <div className='teacher-bottom'>
                <h1>{teacherData.first_name}</h1>
                <h1>{teacherData.last_name}</h1>
                <button onClick={handleJoinClass}>Join Class</button>

                <img src/>
            
            </div>

            </div>



            

        </div>
    )


}


export default Course;