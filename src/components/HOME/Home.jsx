import React from 'react'
import About from './About'
import Carousel from './Carousel'

import './home.css'
import OurProjects from './OurProjects'

const Home = () => {
  return (
    <>
    <div id="homeMainDiv">
        <Carousel/>
        <About/>
        <OurProjects/>
    </div>
    </>
  )
}

export default Home