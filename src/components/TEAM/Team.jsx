import React from 'react'
import './team.css'
import EmpCards from '../employee details/EmpCards'
import Navbar from '../NAVBAR/Navbar'
import Footer from '../FOOTER/Footer'
const Team = () => {
  return (
    <>
     {/* <div className="bg-image"></div> */}
        <Navbar/>
     <div id='teamPageWrapper' className="pad">
        <EmpCards/>
        <Footer/>
        </div>
    </>
  )
}

export default Team