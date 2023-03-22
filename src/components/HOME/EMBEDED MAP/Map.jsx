import React from 'react'

const Map = () => {

    return (
        <>
        <div className="mapWrapper pad" >
            <h1 className="commonHeading"><span>Our</span> Location</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3282135311542!2d78.393591!3d17.491839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb918d3a955555%3A0xd09555914225cf82!2sUTTARA%20ARCHITECTS%20%26%20INTERIORS!5e0!3m2!1sen!2sin!4v1679470469861!5m2!1sen!2sin"
             width="100%" height="400" style={{border:'0'}} allowFullScreen=""
             loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

export default Map