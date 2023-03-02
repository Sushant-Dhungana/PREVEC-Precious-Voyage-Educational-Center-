import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/testimonials.css"


const testimonialUrl = process.env.baseUrl || "http://192.168.1.12:8000/images/testimonal/"

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
                                    <img src={testimonialUrl+ item.image} alt={item.title} />
                                    <div className="testimonial_second">
                                        <h5>{item.title}</h5>
                                        <h6>{item.role}</h6>
                                        <p>{item.description.substring(0, 250)}</p>
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