import React from 'react'
import Marquee from "react-fast-marquee";
import './sponsors.css'
import b1 from '../../assets/brands/cropped-new-siddharth-developers-logo.png'
import b2 from '../../assets/brands/image-233.jpg'
import b3 from '../../assets/brands/image-332.png'
const Sponsors = () => {
  
    const imgStyle = {
      width:'20rem',
      height:'fitContent',
      padding:'2rem'
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
          <img style={imgStyle} src="https://seeklogo.com/images/C/cpwd-logo-51F0BE53D4-seeklogo.com.png" alt="" />
          <img style={imgStyle} src="https://is1-2.housingcdn.com/0b8ad14c/c6c0511abac462ad907ad2afaebf7716/v1/medium.jpg" alt="" />
          <img style={imgStyle} src={b1} alt="brand pic" />
          <img style={imgStyle} src={b2} alt="brand pic" />
          <img style={imgStyle} src={b3} alt="brand pic" />
        </Marquee>
      </div>
    </>
  )
}

export default Sponsors