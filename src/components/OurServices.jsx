import React from 'react'
import { FcServices } from "react-icons/fc";

const OurServices = (props) => {
  const regex = /(<([^>]+)>)/ig;
  const services = props.services
  console.log(services);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="services_head">
              <FcServices size={50} />
              <h3>Our Services</h3>
            </div>
            <div className="after_line_services"></div>
            <h5 className="services_motto">We Provide Better and Lifting Up Opportunities</h5>
          </div>
          {
            services && services.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <>
                    <div className="col-md-9 services_content">
                      <h4>{item.title}</h4>
                      <p>{item.description.replace(regex, '')}</p>
                    </div>
                    <div className="col-md-3 services_image">
                      <img src={"http://192.168.1.2:8000/images/feature/" + item.image} alt="logo" />
                    </div>
                  </>
                )
              } else {
                return (
                  <>
                    <div className="col-md-3 services_image">
                      <img src={"http://192.168.1.2:8000/images/feature/" + item.image} alt="logo" />
                    </div>
                    <div className="col-md-9 services_content">
                      <h4>{item.title}</h4>
                      <p>{item.description.replace(regex, '')}</p>
                    </div>
                  </>
                )
              }
            })
          }
        </div>
      </div>
    </div>
  )
}

export default OurServices;