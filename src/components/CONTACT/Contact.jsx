import React from 'react'
import Footer from '../FOOTER/Footer'
import Navbar from '../NAVBAR/Navbar'
import Form from './Contact components/Form'
import './contact.css'

const Contact = () => {
  return (
    <>
      <div className="bg-image"></div>
      <Navbar />
      <div id="contactWrapper">
        <h1 className="commonHeading"><span>Contact </span>us</h1>
        <Form />
        <Footer />
      </div>
    </>
  )
}

export default Contact