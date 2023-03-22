import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './carousel.css'


const Carousel = () => {
    const options = {
        responsive:{
            0:{
                items:1,
                
            },
            600:{
                items:3,
              
            },
            1024:{
                items:5,
               
            }
        }
    };
    return (
        <>

            <OwlCarousel className='owl-theme' items={1} width={78} height={100} dots={false} autoplay={true} lazyLoad={true} >
        
                <div className='item'><h1>Innovate Designing in Toronto</h1>
                <img src="https://duruthemes.com/demo/html/bauen/multipage-darksidebar/img/projects/1.jpg" alt="img" /></div>

                <div className='item'><h1>Innovate Designing in Toronto</h1>
                <img src="https://duruthemes.com/demo/html/bauen/multipage-darksidebar/img/projects/2.jpg" alt="img" /></div>
            </OwlCarousel>;

        </>
    )
}

export default Carousel
