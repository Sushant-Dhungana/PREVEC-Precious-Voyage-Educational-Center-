
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../images/banner.png"
import "../styles/carousel.css"
import NavBar from './NavBar';
const CarouselMain = () => {
    var settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    vertical: false,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <div className='carousel_main'>
            <div className="slick_slider">
            <Slider {...settings}>
                <div>
                    <h3><img src={banner} alt="banner" /></h3>
                </div>
                <div>
                    <h3><img src={banner} alt="banner" /></h3>
                </div>
                <div>
                    <h3><img src={banner} alt="banner" /></h3>
                </div>
                <div>
                    <h3><img src={banner} alt="banner" /></h3>
                </div>
                <div>
                    <h3><img src={banner} alt="banner" /></h3>
                </div>
                <div>
                    <h3><img src={banner} alt="banner" /></h3>
                </div>
            </Slider>
            </div>
        <NavBar/>
        </div>
    )
}

export default CarouselMain