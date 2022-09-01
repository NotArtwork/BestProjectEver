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
  const [seatData, setSeatData] = useState([])
  console.log('teacher data', teacherData)
  console.log('current course', currentCourse)



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

    const getSeats = async () => {
      let req = await fetch('http://localhost:3000/seats')
      let res = await req.json()
      setSeatData(res)
    }
    getSeats()
  }, [])



  // console.log("App.js seatData", seatData)


  return (
    <BrowserRouter>
      <Header/>
      <NavBar/>
      <Routes > 
        <Route path="/" element={ <Home schoolData={schoolData} setCurrentCourse={setCurrentCourse}/>} />

        <Route path="/course" element={<Course seatData={seatData} course={currentCourse} teacher={teacherData.find(teacher => teacher.id === currentCourse.teacher_id)}/>} />

        {/* <Route path="/course/fcaw" element={<Course schoolData={schoolData[1]}/>} />
        <Route path="/course/dftjd" element={<Course schoolData={schoolData[2]}/>} /> */}

      </Routes > 
    </BrowserRouter>
  );
}

export default App;
