import React from 'react'
import './team.css'
import EmpCards from '../employee details/EmpCards'
import Navbar from '../NAVBAR/Navbar'
import Footer from '../FOOTER/Footer'
const Team = () => {
  return (
    <>
     <div id='teamPageWrapper'>
     <div className="bg-image"></div>
        <Navbar/>
        <EmpCards/>
        <Footer/>
        </div>
    </>
  )
}

export default Team