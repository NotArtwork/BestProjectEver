import './styling/headerNav.css'
import './styling/home.css'
import './styling/course.css'
import './App.css'


import React, { useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './components/Home'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Course from './components/Courses/Course';


const App = () => {

  const [schoolData, setSchoolData] = useState([])
  const [teacherData, setTeacherData] = useState([])
  const [currentCourse, setCurrentCourse] = useState({})



  //I don't think we need to useEffect if we are using asynch
  useEffect(() => {

    const getSchool = async () => {
      let req = await fetch('http://localhost:3000')
      let res = await req.json()
      setSchoolData(res)
    }
    getSchool()

    const getTeachers = async () => {
      let req = await fetch('http://localhost:3000/teachers')
      let res = await req.json()
      setTeacherData(res)
    }
    getTeachers()
  }, [])



  console.log("teacherData", teacherData)


  return (
    <BrowserRouter>
      <Header/>
      <NavBar/>
      <Routes > 
        <Route path="/" element={ <Home schoolData={schoolData} setCurrentCourse={setCurrentCourse}/>} />
        <Route path="/course" element={<Course course={currentCourse} teacher= {teacherData[currentCourse.teacher_id - 1]}/>} />
        {/* <Route path="/course/fcaw" element={<Course schoolData={schoolData[1]}/>} />
        <Route path="/course/dftjd" element={<Course schoolData={schoolData[2]}/>} /> */}

      </Routes > 
    </BrowserRouter>
  );
}

export default App;
