import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/testimonials.css"
import { baseUrl } from '../baseUrl';

const Testimonials = ({ testimonal }) => {
    const testimonials = testimonal;
    var settings= {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        loop: true,
        responsive: [
            {
                breakpoint: 765,
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
        <div className='testimonial_main'>
            <div className='carousel_main'>
                <div className="slick_slider">
                    <Slider {...settings}>
                        {
                            testimonials && testimonials.map((item, index) => (
                                <div className='testimonial_main' key={index}>
                                    <img src={baseUrl+"/images/testimonal/"+ item.image} alt={item.title} />
                                    <div className="testimonial_second">
                                        <h5>{item.title}</h5>
                                        <h6>{item.role}</h6>
                                        <p>{item.description.substring(0, 180)}</p>
                                    </div>
                                </div>
                            )
                            )
                        }

                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials