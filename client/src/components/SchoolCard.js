import React from 'react'
import { useNavigate } from 'react-router-dom'



const SchoolCard = ({school}) => {

    const [courseData, setCourseData] = useState([]) //not convinced we need this here

    let navigate = useNavigate(); 

    
   
    useEffect(() => {

        const getCourse = async () => {
          let req = await fetch('http://localhost:3000/courses')
          let res = await req.json()
          console.log(res)
          setCourseData(res.map((element)=> school_id === {school.id}))
        //   I know that is incorrect but that's the gist of it
        }
        getCourse()
      }, [])


    const handleCourseClick =(event)=>{

        navigate ('./course')
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