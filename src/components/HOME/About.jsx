import React from 'react'
import './about.css'
import bussinessCard from '../../assets/Uttara logo for card 2.jpg'
const About = () => {
    return (
        <>
            <div className='aboutWrapper'>
                <div className="aboutLeft">
                    <h1 className='commonHeading'><span>about</span> uttara</h1>
                    <p className="commonPara">The Company has a wide range of experience in offering Architecture
                        Consultancy, Services for Engineering Intensive Construction Projects
                        like Commercial Complexes, High Rise Buildings, Residential Projects,
                        Corporate Office Buildings, Hotels, Retail Centers, Shopping Malls,
                        Leisure Facilities etc., and also are consultants in the field of self
                        supporting Steel Lattice Towers viz., Telecom Passive Infrastructure
                        etc., Uttara continues to play an integral role in many high profile
                        projects in India, including Project Management, Civil & Structural
                        Engineering.</p>
                </div>
                <div className="aboutRight">
                    <img src={bussinessCard} alt="bussinessCard" />
                </div>
            </div>
        </>
    )
}

export default About