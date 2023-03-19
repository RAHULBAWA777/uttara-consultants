import React, { useState, useEffect } from 'react'
import './Navbar.css'


const Navbar = () => {
  const [isOpen, setIsopen] = useState(true);

  useEffect(() => {
    const handleResize = ()=>{
      if (window.innerWidth < 1024 && isOpen) {
        setIsopen(false)
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
        <div id="logo">nwoiendcoiwencoiwnqciop</div>
        <ul>
          <li><a href="">HOME</a></li>
          <li><a href="">ABOUT</a></li>
          <li><a href="">SERVICES</a></li>
          <li><a href="">PROJECTS</a></li>
          <li><a href="">CONTACT</a></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar