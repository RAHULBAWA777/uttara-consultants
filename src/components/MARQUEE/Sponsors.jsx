import React from 'react'
import Marquee from "react-fast-marquee";
import './sponsors.css'
const Sponsors = () => {
  
    const imgStyle = {
      width:'20rem',
      height:'fitContent'
    }
    const imgStyle2 = {
      width:'15rem',
      padding:'2rem'
    }
  
    return (

    <>
      <div className="pad">
        <h1 className="commonHeading"><span>Our </span>Clients</h1>
        <Marquee>
          <img style={imgStyle} src="https://zeevector.com/wp-content/uploads/2021/02/Titan-Logo-PNG.png" alt="" />
          <img style={imgStyle} src="https://download.logo.wine/logo/Bharat_Sanchar_Nigam_Limited/Bharat_Sanchar_Nigam_Limited-Logo.wine.png" alt="" />
          <img style={imgStyle2} src="https://seeklogo.com/images/C/cpwd-logo-51F0BE53D4-seeklogo.com.png" alt="" />
          <img style={imgStyle2} src="https://is1-2.housingcdn.com/0b8ad14c/c6c0511abac462ad907ad2afaebf7716/v1/medium.jpg" alt="" />
        </Marquee>
      </div>
    </>
  )
}

export default Sponsors