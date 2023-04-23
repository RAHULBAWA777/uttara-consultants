import React from 'react'
import Footer from '../FOOTER/Footer'
import Navbar from '../NAVBAR/Navbar'

import About from './About'
import Carousel from './Carousel'
import Map from './EMBEDED MAP/Map'

import './home.css'
import ListView from './ListView'
import OurProjects from './OurProjects'
import Sponsors from '../MARQUEE/Sponsors'

const Home = () => {
  return (
    <>
      <div id="homeMainDiv">
        <Navbar />
        <Carousel />
        <Sponsors/>
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