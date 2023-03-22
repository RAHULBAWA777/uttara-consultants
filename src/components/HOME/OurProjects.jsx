import React from 'react'
import './ourProject.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './carousel.css'
import ProShowcaseSkeleton from '../Project Showcase skeleton/ProShowcaseSkeleton'
import ProjectData from '../Project Showcase skeleton/ProjectContent'


const createCard = (data) => {
  return <ProShowcaseSkeleton name={data.name} img={data.imgURL} location={data.location} key={data.id} />
}

const OurProjects = () => {
  return (
    <>
      <div id="ourProjectWrapper" className='pad'>
        <h1 className="commonHeading"><span>Our </span>projects</h1>
        <OwlCarousel className='owl-theme' items={3} width={78} height={100} dots={true} autoplay={true} lazyLoad={true}  >
          {ProjectData.map(createCard)}
        </OwlCarousel>;
      </div>
    </>
  )
}

export default OurProjects
{/* <ProShowcaseSkeleton name="BHONODAYA CRYSTAL" img="https://lh3.googleusercontent.com/p/AF1QipO-hjf-cvegBpJMGWljjzIDKPE06mB71Gjw9Yjr=w960-h960-n-o-v1" location="GUNDLAPOCHAM PALLY , KOMPALLY, HYDERAD"/> */ }