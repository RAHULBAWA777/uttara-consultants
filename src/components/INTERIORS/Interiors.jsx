import React from 'react'
import './interiors.css'
import Navbar from '../NAVBAR/Navbar'
import Footer from '../FOOTER/Footer'
import Cor from '../../assets/interiors/corridor.jpg'
import int1 from '../../assets/interiors/int1.jpg'
import int2 from '../../assets/interiors/int2.jpg'
import int3 from '../../assets/interiors/int3.jpg'
import int4 from '../../assets/interiors/int4.jpg'
import int5 from '../../assets/interiors/int5.jpg'
import int6 from '../../assets/interiors/int6.jpg'
import int7 from '../../assets/interiors/int7.jpg'
import int8 from '../../assets/interiors/int8.jpg'
import int9 from '../../assets/interiors/int9.jpg'
import int10 from '../../assets/interiors/int10.jpg'


const Interiors = () => {
    return (
        <>
            <div id="intPageWrapper">
                <div className="bg-image"></div>
                <Navbar />
                <div className="marginTop">
                    <div className="pad">
                        <h1 className="commonHeading"><span>our </span>interiors</h1>
                        <div className="intPageWrapperSemi">
                            <img src={Cor} alt="img-Interior" />
                            <img src={int1} alt="img-Interior" />
                            <img src={int2} alt="img-Interior" />
                            <img src={int3} alt="img-Interior" />
                            <img src={int4} alt="img-Interior" />
                            <img src={int5} alt="img-Interior" />
                            <img src={int6} alt="img-Interior" />
                            <img src={int7} alt="img-Interior" />
                            <img src={int8} alt="img-Interior" />
                            <img src={int9} alt="img-Interior" />
                            <img src={int10} alt="img-Interior" />                          
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Interiors