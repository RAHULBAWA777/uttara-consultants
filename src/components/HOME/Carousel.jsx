import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import p1 from '../../assets/appliance/uttara1.jpg'
import p2 from '../../assets/appliance/uttara2.jpg'
import p3 from '../../assets/appliance/uttara3.jpg'
import p4 from '../../assets/appliance/uttara4.jpg'
import p5 from '../../assets/appliance/uttara5.jpg'
import './carousel.css'


const Carousel = () => {
    return (
        <>

            <OwlCarousel className='owl-theme' items={1} dots={false} autoplay={true} lazyLoad={true} autoPlay={true} loop={true}>

                <div className='item'><h1>Innovate Designing</h1>
                    <img src={p1} alt="img" /></div>

                <div className='item'><h1>Here’s to your New Beginning!</h1>
                    <img src={p2} alt="img" /></div>

                <div className='item'><h1>Exceptional Service Exceeding Expectations</h1>
                    <img src={p3} alt="img" /></div>

                <div className='item'><h1>Multi-Disciplined Engineering Solutions</h1>
                    <img src={p4} alt="img" /></div>
                    
                <div className='item'><h1>Next Level Interior Designing</h1>
                    <img src={p5} alt="img" /></div>

            </OwlCarousel>;
    
        </>
    )
}

export default Carousel
