import React from 'react'
import '../styling/navbar.css'
import { useNavigate, Link } from 'react-router-dom'


const NavBar = () => {
    let navigate = useNavigate(); 

    const handleClickHome=()=>{
        navigate ('./')
    }


  return (
    <div id="nav">
    <div className="navbar">
      <p id='logo' onClick={handleClickHome}>Class Organizer </p>
      <div id='menu'>
        <div id='nav-item'>
    <p onClick={handleClickHome} id='nav-link'>Home</p>
        </div>
        <div id='nav-item'>
          <Link to="/login">
    <p id='nav-link'>Log in</p>
          </Link>
        </div>
        <div id='nav-item'>
    <p id='nav-link'>About Us</p>
        </div>
        <div id='nav-item'>
          <Link to="/courses">
    <p id='nav-link'>Courses</p>
          </Link>
        </div>
     </div>
    </div>
    </div>
  );
}

export default NavBar;
