import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "../styles/associations.css"
import { baseUrl } from '../baseUrl';

const Associations = ({association}) => {
    const associations = association;
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        // navText: ["Prev", "Next"],
      
        autoplayHoverPause: true,
        slidetransition: 'linear',
        autoplaySpeed: 30000,
        autoplayTimeout: 5000,
        loop: true,
        responsive: {
            0: {
                items: 2,
            },
            400: {
                items: 2,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        },
      };
      
  return (
    <div>
<OwlCarousel className="slider-items owl-carousel" {...options}>
    {associations && associations.map((item, index) => (
                      <div className="item" key={index}><img src={baseUrl+"/images/association/" + item.image} alt={item.id}/></div>
    ))}

                  </OwlCarousel>
                  </div>
  )
}

export default Associations