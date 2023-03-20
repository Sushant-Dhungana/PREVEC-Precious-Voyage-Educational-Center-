import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/universities.css";
import { baseUrl } from '../baseUrl';

const Universities = (data) => {
    const  universities =data ;
    var settings= {
        dots: false,
        infinite: false,
        arrows: false,
        speed: 500,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        loop: true,
        responsive: [
            {
                breakpoint: 765,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    vertical: false,
                    arrows: false,
                },
            },
        ],
    };
  return (
    <div><div className='universitiess'>
        <div className="slick_slider">
            <Slider {...settings}>
                {
                    universities?.data && universities?.data?.map((item, index) => (
                        <div className='universitiess_main' key={index}>
                            <img src={baseUrl+item?.university_image} alt={item.abroad_study_id} />
                            </div>
                    ))
                }
            </Slider>
        </div>
    </div>
</div>
  )
}

export default Universities;