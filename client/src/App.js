import React, { useState, useEffect} from 'react'
import { BrowserRouter as Routes, Route } from 'react-router-dom';


import Home from './components/Home'
import Header from './components/Header'
import NavBar from './components/NavBar'


const App = () => {

  const [schoolData, setSchoolData] = useState([])
  const [courseData, setCourseData] = useState([])



  //I don't think we need to useEffect if we are using asynch
  useEffect(() => {

    const getSchool = async () => {
      let req = await fetch('http://localhost:3000/courses')
      let res = await req.json()
      console.log(res)
      setCourseData(res)
    }
    getSchool()
  }, [])

  



  return (
    <BrowserRouter>
      <Header/>
      <NavBar/>
      <Routes > 
        <Route path="/" element={ <Home schoolData={schoolData}/>} />
        {/* <Route path="/course" element={<Course courseData={courseData}/>} /> */}
      </Routes > 
    </BrowserRouter>
  );
}

export default App;