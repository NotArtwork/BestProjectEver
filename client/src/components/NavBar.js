import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'


const NavBar = () => {
    let navigate = useNavigate(); 

    const handleClickHome=()=>{
        navigate ('./')
    }


  return (
    <div id="nav">
    <div className="navbar">
<<<<<<< HEAD
      <p id='logo'> Almost Illegal </p>
      <div id='menu'>
        <div id='nav-item'>
    <p onClick={handleClickHome} id='nav-link'>Home</p>
        </div>
        <div id='nav-item'>
    <p id='nav-link'>Courses</p>
        </div>
        <div id='nav-item'>
    <p id='nav-link'>About Us</p>
        </div>
     </div>
    </div>
=======
      <h4 onClick={handleClickHome}>Home</h4>
>>>>>>> 83a758bb56975aa9b795cff4f92d9b61fa0532c2
    </div>
  );
}

export default NavBar;
