import React, { useState, useEffect } from 'react'
import { Outlet, Link } from "react-router-dom";

import './Navbar.css'


const Navbar = () => {
  const [isOpen, setIsopen] = useState(true);

  useEffect(() => {
    const handleResize = ()=>{
      if (window.innerWidth < 1024 && isOpen) {
        setIsopen(false)
      }else if(window.innerWidth > 1024){
        setIsopen(true)
      }
    };
  window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [isOpen])
  

  // ##########################################
  return (
    <>
      <button  className='navButton' onClick={()=>setIsopen(!isOpen)} ><i className="fa-solid fa-bars"></i></button>

      <div className={`nav ${isOpen ? "nav-open" : "nav-closed"}`}>
        <div id="logo"></div>
        <ul>
          <li>
            <Link to="/">HOME</Link>
            </li>
          <li>
            <Link to="/About">ABOUT</Link>
            </li>
          <li>
            <Link to="/Services">SERVICES</Link>
            </li>
          <li>
            <Link to="/Projects">PROJECTS</Link>
            </li>
          <li>
            <Link to="">CONTACT</Link>
            </li>
        </ul>
      </div>
      <Outlet />
    </>
  )
}

export default Navbar