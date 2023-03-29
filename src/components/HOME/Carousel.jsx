import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import p1 from '../../assets/1.jpg'
import p2 from '../../assets/2.jpg'
import p3 from '../../assets/3.jpg'
import './carousel.css'


const Carousel = () => {
    return (
        <>

            <OwlCarousel className='owl-theme' items={1} width={78} height={100} dots={false} autoplay={true} lazyLoad={true} autoPlay={true}>

                <div className='item'><h1>Innovate Designing</h1>
                    <img src={p1} alt="img" /></div>

                <div className='item'><h1>Innovate Designing</h1>
                    <img src={p2} alt="img" /></div>

                <div className='item'><h1>Innovate Designing</h1>
                    <img src={p3} alt="img" /></div>
            </OwlCarousel>;

        </>
    )
}

export default Carousel
