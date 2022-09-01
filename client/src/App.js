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
      <NavBar/>
      <Routes > 
        <Route path="/" element={ <Home schoolData={schoolData} setCurrentCourse={setCurrentCourse}/>} />
        <Route path="/course" element={<Course course={currentCourse} teacher= {teacherData[currentCourse.teacher_id]}/>} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/course/fcaw" element={<Course schoolData={schoolData[1]}/>} />
        <Route path="/course/dftjd" element={<Course schoolData={schoolData[2]}/>} /> */}

      </Routes > 
    </BrowserRouter>
  );
}

export default App;
