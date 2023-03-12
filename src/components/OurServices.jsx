import React from 'react'

import '../styles/indexservices.css';
const mvgUrl = process.env.baseUrl || "http://precious-voyage.onvirotech.com/images/feature/"

const OurServices = (props) => {
  const services = props.services

  return (
    <div>
      <div className="container">
        <div className="row">
          
          {
            services && services.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <div className="services_key" key={index}>
                    <div className="col-md-9 services_content">
                      <h4>{item.title}</h4>
                      <p dangerouslySetInnerHTML={{__html:item.description}}></p>
                    </div>
                    <div className="col-md-3 services_image">
                      <img src={mvgUrl + item.image} alt="logo" />
                    </div>
                    </div>
                )
              } else {
                return (
                   <div className="services_key" key={index}>
                    <div className="col-md-3 services_image">
                      <img src={mvgUrl + item.image} alt="logo" />
                    </div>
                    <div className="col-md-9 services_content">
                      <h4>{item.title}</h4>
                      <p dangerouslySetInnerHTML={{__html:item.description}}></p>
                    </div>
                    </div>
                )
              }
            })
          }
          {/* {
            services && services.map((item, index) => (
              <>
              <div className={`col-md-6 ${index %2===0 ? " services_content":" services_image"}`}>
                <h4>{item.title}</h4>
                <p>{item.description.replace(regex, '')}</p>
              </div>
              <div className={`col-md-6 ${index %2 !==0 ? " services_image" :" services_content"}`}>
                <img src={"http://192.168.1.2:8000/images/feature/" + item.image} alt="logo" />
              </div>
            </>
            ))
          } */}
        </div>
      </div>
    </div>
  )
}

export default OurServices;