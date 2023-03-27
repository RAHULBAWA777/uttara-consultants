import React from 'react'
import Navbar from '../NAVBAR/Navbar'
import Footer from '../FOOTER/Footer'
import ListView from '../HOME/ListView'
import './servicesPage.css'

const ServicesPage = () => {
  return (
    <>
      <div id="servicePageWrapper">
        <div className="bg-image"></div>
        <Navbar />
        <div className="marginTop">
          <ListView />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default ServicesPage