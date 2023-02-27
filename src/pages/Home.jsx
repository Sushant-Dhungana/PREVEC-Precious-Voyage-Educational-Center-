import React, {useState, useEffect} from "react";
import CarouselMain from '../components/Carousel'
import "../styles/home.css"
import "../styles/navbar.css"
import { IoRocketSharp, IoTelescope } from "react-icons/io5";
import { GiTargetArrows } from "react-icons/gi";
import img2 from "../images/graduate.png";
import img3 from "../images/banner.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import StudyAbroad from '../components/StudyAbroad';
import axios from "axios";
import OurServices from "../components/OurServices";


const baseUrl = "http://192.168.1.2:8000/api";

const Index = () => {
  const [homeData, setHomeData] = useState([]);
  useEffect(() => {
    axios.get(baseUrl, {
    }).then((res) => {
      setHomeData(res.data);
    }) 
  }, [setHomeData])
  // const studyAbroad = homeData.abroads;

  return (
    <div>
          <CarouselMain slider={homeData.sliders}/>
      <section className='mission_vision_goal'>
        <div className="container-fluid banner_below">
          <div className="row">
            <div className="col-md-4 mission">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 main_logo">
                    <IoRocketSharp size={70} color="#fff" />
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
                    <IoTelescope size={70} color="#fff" />
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
                    <GiTargetArrows size={70} color="#fff" />
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
      </section>
      <section className="functions">
        <div className="container">
          <div className="row">
            <div className="col-md-3 functions_column">
              <div className="function_section">
                <div className="circle">
                  <img src={img2} alt="logo" />
                </div>
                <h5>Study In Abroad</h5>
              </div>
            </div>
            <div className="col-md-3 functions_column">
              <div className="function_section">
                <div className="circle">
                  <img src={img2} alt="logo" />
                </div>
                <h5>Study In Abroad</h5>
              </div>
            </div>
            <div className="col-md-3 functions_column">
              <div className="function_section">
                <div className="circle">
                  <img src={img2} alt="logo" />
                </div>
                <h5>Study In Abroad</h5>
              </div>
            </div>
            <div className="col-md-3 functions_column">
              <div className="function_section">
                <div className="circle">
                  <img src={img2} alt="logo" />
                </div>
                <h5>Study In Abroad</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about_us">
        <div className="container">
          <div className="row">
            <div className="col-md-6 index_about_img">
              <img src={img3} alt="logo" />
            </div>
            <div className="col-md-6 index_about_content">
              <h6>Welcome</h6>
              <h3>one of the best education</h3>
              <div className="after_line"></div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae id eos provident quia a delectus, tempore, optio itaque magni et inventore cum totam sed. Error laborum ducimus dolor nostrum vitae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim inventore corrupti modi ullam est commodi. Hic, illum nesciunt. Ex libero iste alias debitis dignissimos iusto beatae in rem maiores! Natus!
              </p>
              <button className="read_more">Read More <AiOutlineArrowRight /></button>
            </div>
          </div>
        </div>
      </section>
      <section className='study_abroad'>
        <h3>Study Abroad</h3>
        <div className="after_line_abroad"></div>
        <StudyAbroad studyabroad = {homeData.abroads}/>
      </section>
      <section className="index_services">
      <OurServices services = {homeData.features} />
      </section>
    </div>
  )
}

export default Index
