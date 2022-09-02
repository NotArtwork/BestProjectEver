import './styling/headerNav.css'
import './styling/home.css'
import './styling/course.css'
import './styling/login.css'
import './styling/navbar.css'
import './styling/courses.css'
import './App.css'


import React, { useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import NavBar from './components/NavBar'
import Course from './components/Courses/Course';
import Login from './components/Login';
import Signup from './components/Signup';
import Courses from './components/Courses/Courses';



const App = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState({})
    const [schoolData, setSchoolData] = useState([])
    const [teacherData, setTeacherData] = useState([])
    const [currentCourse, setCurrentCourse] = useState({})
    const [studentsInCourse, setStudentsInCourse] = useState([])
    const [seatData, setSeatData] = useState([])
    const [studentData, setStudentData] = useState([])
    const [courseData, setCourseData] = useState([])

  

  



    //all login functionality
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
  //all login functionality


  // fetching all data from backend 
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

    const getCourses = async () => {
      let req = await fetch('http://localhost:3001/courses')
      let res = await req.json()
      setCourseData(res)
  }
    getCourses()


  }, [])

  useEffect(() => {
    const getStudentsThroughCourse = async () => {
      let req = await fetch(`http://localhost:3001/courses/${currentCourse.id}/students`)
      let res = await req.json()
      setStudentsInCourse(res)
    }
    if (Object.keys(currentCourse).length !== 0){getStudentsThroughCourse()}

  }, [currentCourse])
  // fetching all data from backend 




  return (
    <BrowserRouter>
      <NavBar/>
      <Routes > 
        <Route path="/" element={ <Home schoolData={schoolData} setCurrentCourse={setCurrentCourse}/>} />
        <Route path="/courses" element={<Courses schoolData={schoolData} setCurrentCourse={setCurrentCourse} teacherData={teacherData} courseData={courseData} />} />
        <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/course" element={<Course seatData={seatData} course={currentCourse} teacher={teacherData.find(teacher => teacher.id === currentCourse.teacher_id)} studentsInCourse={studentsInCourse}/>} />
      </Routes > 
    </BrowserRouter>
  );
  
}

export default App;
