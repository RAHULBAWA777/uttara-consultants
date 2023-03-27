import React from 'react'
import './projectPage.css'
import ProShowcaseSkeleton from '../Project Showcase skeleton/ProShowcaseSkeleton'
import Navbar from '../NAVBAR/Navbar'
import Footer from '../FOOTER/Footer'
import ProjectData from '../Project Showcase skeleton/ProjectContent'


const createCard = (data) => {
  return <ProShowcaseSkeleton name={data.name} img={data.imgURL} location={data.location} key={data.id} />
}

const ProjectPage = () => {
  return (
    <>
      <div id="projectPageWrapper" >
        <div className="bg-image"></div>
        <Navbar />
        <div className="marginTop">
          <div className="pad">
          <h1 className="commonHeading"><span>Our </span>projects</h1>
          <div className="projectPageWrapperSemi">
            {ProjectData.map(createCard)}
          </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default ProjectPage