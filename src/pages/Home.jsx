import React from "react";
import CarouselMain from '../components/Carousel'
import "../styles/home.css"
import "../styles/navbar.css"
import { IoRocketSharp, IoTelescope } from "react-icons/io5";
import { GiTargetArrows } from "react-icons/gi";
import img2 from "../images/graduate.png";
import img3 from "../images/banner.png";
import img4 from "../images/servicesimage.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import StudyAbroad from '../components/StudyAbroad';
import {FcServices} from "react-icons/fc";

const Index = () => {
  // const [user, setUser] = useState([]);

  // const fetchData = () => {
  //   return fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => setUser(data));
  // }

  // useEffect(() => {
  //   fetchData();
  // }, [])
  // console.log(user);

  return (
    <div>
      <CarouselMain />
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
        {/* {user &&
          user.map((item, index) => (
            <StudyAbroad key={index} {...item} />
          ))}
        </div> */}
        <StudyAbroad />
      </section>
      <section className="index_services">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="services_head">
                <FcServices size={50}/>
                <h3>Our Services</h3>
              </div>
              <div className="after_line_services"></div>
              <h5 className="services_motto">We Provide Better and Lifting Up Opportunities</h5>
            </div>
            <div className="col-md-9 services_content">
              <h4>Study Abroad</h4>
              <p>Are you preparing to study abroad? Study in USA, Australia, UK, Canada, New-Zealand, Europe etc. We provide you tips and advice on studying abroad,choosing the right country, university and program. Students studying abroad become generation of globally-minded adventurers and leaders - and we want more of you to do it!...</p>
            </div>
            <div className="col-md-3 services_image">
              <img src={img4} alt="logo" />
            </div>
            <div className="col-md-3 services_image">
              <img src={img4} alt="logo" />
            </div>
            <div className="col-md-9 services_content">
              <h4>Study Abroad</h4>
              <p>Are you preparing to study abroad? Study in USA, Australia, UK, Canada, New-Zealand, Europe etc. We provide you tips and advice on studying abroad,choosing the right country, university and program. Students studying abroad become generation of globally-minded adventurers and leaders - and we want more of you to do it!...</p>
            </div>
            <div className="col-md-9 services_content">
              <h4>Study Abroad</h4>
              <p>Are you preparing to study abroad? Study in USA, Australia, UK, Canada, New-Zealand, Europe etc. We provide you tips and advice on studying abroad,choosing the right country, university and program. Students studying abroad become generation of globally-minded adventurers and leaders - and we want more of you to do it!...</p>
            </div>
            <div className="col-md-3 services_image">
              <img src={img4} alt="logo" />
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Index
