import React from 'react'

import '../styles/indexservices.css';
const mvgUrl = process.env.baseUrl || "http://precious-voyage.onvirotech.com"

const OurServices = (props) => {
  const services = props.services

  return (
    <div>
      <div className="container">
        <div className="row">
          
          {
            services && services?.slice(0,3).map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <div className="services_key" key={index}>
                    <div className="col-md-9 services_content">
                      <h4>{item.title}</h4>
                      <p dangerouslySetInnerHTML={{__html:item.description}}></p>
                    </div>
                    <div className="col-md-3 services_image">
                      <img src={mvgUrl +"/images/service/"+ item.image} alt="logo" />
                    </div>
                    </div>
                )
              } else {
                return (
                   <div className="services_key" key={index}>
                    <div className="col-md-3 services_image">
                      <img src={mvgUrl +"/images/service/"+ item.image} alt="logo" />
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
        </div>
      </div>
    </div>
  )
}

export default OurServices;