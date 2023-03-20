
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css"
import { baseUrl } from '../baseUrl';

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
                        slider && slider?.map((item, index) => (
                            <div key={index}>
                                <h3>
                                    <img src={baseUrl+"/images/slider/" + item.image} alt= {item.title} />
                                </h3>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default CarouselMain