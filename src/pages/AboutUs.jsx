import React from 'react'
import axiosBaseURL from '../baseUrl'
import "../styles/aboutus.css"
import banner from "../images/banner.png"
import DOMPurify from 'dompurify';

const AboutUs = () => {
  const [aboutUsData, setAboutUsData] = React.useState({})
  const clean = DOMPurify.sanitize(aboutUsData?.aboutUs?.description);
  console.log(clean,"i am cleaned")
  React.useEffect(()=>{
    axiosBaseURL.get("/api/about-us",{

    })
      .then(res => {
        setAboutUsData(res.data)
      }
      )
      .catch(err => console.log(err))

  },[]);
  console.log(aboutUsData)

  return (
    <div className="about_us_main">
      <div className="about_us_banner">
        <div className="banner">
        <img src={banner} alt="about banner" className='banner_image'/>
        <h4>About Us</h4>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 about_content">
            <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(aboutUsData?.aboutUs?.description)}} ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs