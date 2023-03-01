
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css"
import NavBar from './NavBar';

const imageUrl = process.env.baseUrl || "http://192.168.1.11:8000/images/slider/"

const CarouselMain = (props) => {
    const slider = props.slider;
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
                    {
                        slider && slider.map((item, index) => (
                            <div key={index}>
                                <h3>
                                    <img src={imageUrl + item.image} alt= {item.title} />
                                </h3>
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <NavBar />
        </div>
    )
}

export default CarouselMain