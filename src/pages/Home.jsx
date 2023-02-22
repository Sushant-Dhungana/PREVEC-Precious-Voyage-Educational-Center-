import React from 'react'
import CarouselMain from '../components/Carousel'
import "../styles/home.css"
import { IoRocketSharp,IoTelescope } from "react-icons/io5";
import { GiTargetArrows } from "react-icons/gi";

const Index = () => {
  return (
    <div>
      <CarouselMain/>
      <div className="container-fluid banner_below">
        <div className="row">
          <div className="col-md-4 mission">
            <div className="container">
              <div className="row">
                <div className="col-md-3 main_logo">
                <IoRocketSharp size={70} color="#fff"/>
                </div>
                <div className="col-md-9 mvg_main">
                  <h5>Mission</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 vision">
          <div className="container">
              <div className="row">
                <div className="col-md-3 main_logo">
                <IoTelescope size={70} color="#fff"/>
                </div>
                <div className="col-md-9 mvg_main">
                  <h5>vision</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 goal">
          <div className="container">
              <div className="row">
                <div className="col-md-3 main_logo">
                <GiTargetArrows size={70} color="#fff"/>
                </div>
                <div className="col-md-9 mvg_main">
                  <h5>Goal</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
