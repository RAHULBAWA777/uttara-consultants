import React from 'react'
import Footer from '../FOOTER/Footer'
import Navbar from '../NAVBAR/Navbar'

import About from './About'
import Carousel from './Carousel'
import Map from './EMBEDED MAP/Map'

import './home.css'
import ListView from './ListView'
import OurProjects from './OurProjects'

const Home = () => {
  return (
    <>
      <div id="homeMainDiv">
        <Navbar />
        <Carousel />
        <About />
        <OurProjects />
        <ListView />
        <Map />
        <Footer />
      </div>
    </>
  )
}

export default Home