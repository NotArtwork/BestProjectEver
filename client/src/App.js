import React, { useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './components/Home'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Course from './components/Courses/Course';


const App = () => {

  const [schoolData, setSchoolData] = useState([])
  const [currentCourse, setCurrentCourse] = useState({})



  //I don't think we need to useEffect if we are using asynch
  useEffect(() => {

    const getSchool = async () => {
      let req = await fetch('http://localhost:3000')
      let res = await req.json()
      setSchoolData(res)
    }
    getSchool()
  }, [])


  


  return (
    <BrowserRouter>
      <Header/>
      <NavBar/>
      <Routes > 
        <Route path="/" element={ <Home schoolData={schoolData} setCurrentCourse={setCurrentCourse}/>} />
        <Route path="/course/fuckit" element={<Course course={currentCourse} name={schoolData[0]}/>} />
        {/* <Route path="/course/fcaw" element={<Course schoolData={schoolData[1]}/>} />
        <Route path="/course/dftjd" element={<Course schoolData={schoolData[2]}/>} /> */}

      </Routes > 
    </BrowserRouter>
  );
}

export default App;
