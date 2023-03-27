import React from 'react'
import './aboutPage.css'
import Navbar from '../NAVBAR/Navbar'
import About from '../HOME/About'
import EmpCards from './about components/employee details/EmpCards'
import Footer from '../FOOTER/Footer'
import Strengths from './about components/our Strengths/Strengths'
const AboutPage = () => {
  return (
    <>
      <div id="aboutPageWrapper">
        <div className="bg-image"></div>
        <Navbar/>
        <div className="marginTop">
        <About/>
        <EmpCards/>
        <Strengths/>
        <Footer/>
        </div> 
      </div>
    </>
  )
}

export default AboutPage