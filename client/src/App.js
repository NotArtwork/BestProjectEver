import './styling/headerNav.css'
import './styling/home.css'
import './styling/course.css'
import './App.css'


import React, { useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Course from './components/Courses/Course';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css'



const App = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState({})

    const handleLogin = (user) => {
      setIsLoggedIn(true)
      setUser(user)
    }
    
    const handleLogout = () => {
      setIsLoggedIn(false)
      setUser({})
    
  }

  const loginStatus = async () => {
     let req = await fetch('http://localhost:3001/logged_in')
     let res = await req.json()
     if (res.logged_in) {
      handleLogin(res)
     } else {
      handleLogout()
     }
  };

  useEffect(() => {
    loginStatus()
    console.log(user)
  }, [])
  

  const [schoolData, setSchoolData] = useState([])
  const [teacherData, setTeacherData] = useState([])
  const [currentCourse, setCurrentCourse] = useState({})
  const [studentsInCourse, setStudentsInCourse] = useState([])
  const [seatData, setSeatData] = useState([])
  const [studentData, setStudentData] = useState([])


  // console.log('teacher data', teacherData)
  // console.log('current course', currentCourse)
  // console.log('currentCoursekeyslength', Object.keys(currentCourse).length)



  //I don't think we need to useEffect if we are using asynch
  useEffect(() => {

    const getSchool = async () => {
      let req = await fetch('http://localhost:3001/')
      let res = await req.json()
      setSchoolData(res)
    }
    getSchool()

    const getTeachers = async () => {
      let req = await fetch('http://localhost:3001/teachers')
      let res = await req.json()
      setTeacherData(res)
    }
    getTeachers()

    const getSeats = async () => {
      let req = await fetch('http://localhost:3001/seats')
      let res = await req.json()
      setSeatData(res)
    }
    getSeats()


    
  }, [])

  useEffect(() => {
    const getStudentsThroughCourse = async () => {
      let req = await fetch(`http://localhost:3001/courses/${currentCourse.id}/students`)
      let res = await req.json()
      setStudentsInCourse(res)
      // console.log('studentsInCourse', res)

    }
    if (Object.keys(currentCourse).length !== 0){getStudentsThroughCourse()}

  }, [currentCourse])

// console.log('currentCourse', currentCourse.id)

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes > 
        <Route path="/" element={ <Home schoolData={schoolData} setCurrentCourse={setCurrentCourse}/>} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/course" element={<Course seatData={seatData} course={currentCourse} teacher={teacherData.find(teacher => teacher.id === currentCourse.teacher_id)} studentsInCourse={studentsInCourse}/>} />
        {/* <Route path="/course/fcaw" element={<Course schoolData={schoolData[1]}/>} />
        <Route path="/course/dftjd" element={<Course schoolData={schoolData[2]}/>} /> */}

      </Routes > 
    </BrowserRouter>
  );
}

export default App;
