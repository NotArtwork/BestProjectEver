import React, { useState, useEffect} from 'react'
import Home from './components/Home'
import Header from './components/Header'


const App = () => {

  const [schoolData, setSchoolData] = useState([])
  const [courseData, setCourseData] = useState([]) //not convinced we need this here


  useEffect(() => {

    const getSchool = async () => {
      let req = await fetch('http://localhost:3000/schools')
      let res = await req.json()
      console.log(res)
      setSchoolData(res)
    }
    getSchool()
  }, [])


  useEffect(() => {

    const getCourse = async () => {
      let req = await fetch('http://localhost:3000/courses')
      let res = await req.json()
      console.log(res)
      setCourseData(res)
    }
    getCourse()
  }, [])




  return (
    <BrowserRouter>
      <Header/>
      <Routes > 
        <Route path="/" element={ <Home schoolData={schoolData}/>} />
        <Route path="/course" element={<Course />} />
      </Routes > 
    </BrowserRouter>
  );
}

export default App;
