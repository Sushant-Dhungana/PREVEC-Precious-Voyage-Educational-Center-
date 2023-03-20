import React from 'react'
import axiosBaseURL from '../baseUrl'
import "../styles/aboutus.css"
import "../styles/responsive.css"
import banner from "../images/banner.png"
import { MdMiscellaneousServices } from "react-icons/md";
import OurServices from '../components/OurServices'
import "../styles/banner.css"
import { Helmet } from 'react-helmet'
import { baseUrl } from '../baseUrl'

const AboutUs = () => {
  const [aboutUsData, setAboutUsData] = React.useState({})

  React.useEffect(() => {
      window.scrollTo(0, 0)
    axiosBaseURL.get("/api/about-us", {

    })
      .then(res => {
        setAboutUsData(res.data)
      }
      )
      .catch(err => console.log(err))

  }, []);

  return (
    <>
    <Helmet>
      <title>About Us</title>
    </Helmet>
    <div className="about_us_main">
      <div className="banner_main">
        <div className="banner">
          <img src={banner} alt="about banner" className='banner_image' />
          <h4>About Us</h4>
        </div>
      </div>
      <div className="container about">
        <div className="row">
          <div className="col-md-12 about_content">
            <div className='about_details' dangerouslySetInnerHTML={{ __html: aboutUsData?.aboutUs?.description }} ></div>
          </div>
        </div>
      </div>
      <section className='why'>
      <div className="container why">
        <div className="row">
          <div className="col-md-12 why_head">
            <h4>Why <span>PREVEC ?</span></h4>
            <div className="after_line_why"></div>
          </div>
          <div className="col-md-3 why_content">
            <div className="why_individual">
              <div className="why_icon">
                <MdMiscellaneousServices size={50} style={{ color: "#FFFF" }} />
              </div>
              <div className="why_content">
                <h5>Visa Services</h5>
                <p>consultancies focused their advisory services mainly on solving technical and financial concerns</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 why_content">
            <div className="why_individual">
              <div className="why_icon">
                <MdMiscellaneousServices size={50} style={{ color: "#FFFF" }} />
              </div>
              <div className="why_content">
                <h5>Visa Services</h5>
                <p>consultancies focused their advisory services mainly on solving technical and financial concerns</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 why_content">
            <div className="why_individual">
              <div className="why_icon">
                <MdMiscellaneousServices size={50} style={{ color: "#FFFF" }} />
              </div>
              <div className="why_content">
                <h5>Visa Services</h5>
                <p>consultancies focused their advisory services mainly on solving technical and financial concerns</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 why_content">
            <div className="why_individual">
              <div className="why_icon">
                <MdMiscellaneousServices size={50} style={{ color: "#FFFF" }} />
              </div>
              <div className="why_content">
                <h5>Visa Services</h5>
                <p>consultancies focused their advisory services mainly on solving technical and financial concerns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      <div className="about_us_component">
      <OurServices services = {aboutUsData.features}/>
      </div>
      <section className='our_teams'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="our_teams">
                <h4>Our <span>Team</span></h4>
                <div className="after_line_teams"></div>
              </div>
            </div>
            {
              aboutUsData?.teams?.map((team, index) => (
                <div className="col-md-3" key={index}>
                <div className="our_team_card">
                  <img src={baseUrl +"/images/team/" + team?.image} alt="team" />
                  <h5>{team?.title}</h5>
                  <p>{team?.role}</p>
                </div>
              </div>
              ))
            }
           
          </div>
        </div>

      </section>
    </div>
    </>
  )
}

export default AboutUs