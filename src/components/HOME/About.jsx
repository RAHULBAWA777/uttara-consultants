import React from 'react'
import './about.css'
import bussinessCard from '../../assets/Uttara logo for card 2.jpg'
const About = () => {
    return (
        <>
            <div className='aboutWrapper pad'>
                <div className="aboutLeft">
                    <h1 className='commonHeading'><span>about</span> uttara consultants</h1>
                    <p className="commonPara">The Company has a wide range of experience in offering Architecture
                        Consultancy, Services for Engineering Intensive Construction Projects
                        like Commercial Complexes, High Rise Buildings, Residential Projects,
                        Corporate Office Buildings, Hotels, Retail Centers, Shopping Malls,
                        Leisure Facilities etc., and also are consultants in the field of self
                        supporting Steel Lattice Towers viz., Telecom Passive Infrastructure
                        etc., Uttara continues to play an integral role in many high profile
                        projects in India, including Project Management, Civil & Structural
                        Engineering.</p>
                        <br />
                    <p className="commonPara">
                        The Company has professionals with vast experienced team of
                        professionals specializations in, Marketing, Construction, Project
                        Management, Business Development, Engineering, Reverse Engineering
                        for Telecom, Structural Design, Interior Design and so on. We are backed
                        by state of the art infrastructure to provide the best Architectural &
                        Engineering services. The staff has undergone extensive training and
                        are experienced in the evaluation of projects, development of
                        engineering design, cost estimates, contract administration, inspection
                        services and complete project management services.

                    </p>
                </div>
                <div className="aboutRight">
                    <img src={bussinessCard} alt="bussinessCard" />
                </div>
            </div>
        </>
    )
}

export default About