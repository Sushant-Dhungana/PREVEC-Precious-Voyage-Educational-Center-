import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "../styles/associations.css"

const associationsUrl = process.env.baseUrl || "http://precious-voyage.onvirotech.com/images/association/"

const Associations = ({association}) => {
    const associations = association;
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        // navText: ["Prev", "Next"],
        smartSpeed: 1000,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
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
                      <div className="item" key={index}><img src={associationsUrl + item.image} alt={item.id}/></div>
    ))}

                  </OwlCarousel>
                  </div>
  )
}

export default Associations