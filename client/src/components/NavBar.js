import React from 'react'
import { useNavigate } from 'react-router-dom'



const NavBar = () => {
    let navigate = useNavigate(); 

    const handleClickHome=()=>{
        navigate ('./')
    }


  return (
    <div className="navbar">
     <h3 onClick={handleClickHome}>Home</h3>
    </div>
  );
}

export default NavBar;
