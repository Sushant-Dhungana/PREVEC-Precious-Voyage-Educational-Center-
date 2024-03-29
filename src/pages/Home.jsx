import React from "react";
import CarouselMain from '../components/Carousel'
import "../styles/home.css"
import "../styles/navbar.css"
import img3 from "../images/banner.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import StudyAbroad from '../components/StudyAbroad';
import OurServices from "../components/OurServices";
import Associations from "../components/Associations";
import MVG from "../components/MVG";
import Testimonials from "../components/Testimonials";
import Blogs from "../components/Blogs";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import Callback from "../components/Callback";
import StudyInIndividual from "../components/StudyInIndividual";
import { FcServices } from "react-icons/fc";
import { Link } from "react-router-dom";

const Index = ({ homeData }) => {

  return (
    <div>
      <div className="carousel_home">
        <CarouselMain slider={homeData.sliders} />
      </div>
      <section className='mission_vision_goal'>
        <MVG feature={homeData.features} />
      </section>
      <section className="functions">
        <StudyInIndividual abroadindividual={homeData.abroads} />
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
              <p> The goal of Prevec Educational Consultancy is to help students achieve their academic and career goals by providing them with the guidance and support they need to succeed. The company's consultants are knowledgeable about the admissions requirements and application procedures for these universities and can help students navigate the process. Additionally, Prevec Educational Consultancy offers services to help students adjust to life in a new country, including orientation sessions and cultural activities. 
              </p>
              <button className="read_more"><Link to={"/aboutus"}>Read More </Link><AiOutlineArrowRight /></button>
            </div>
          </div>
        </div>
      </section>
      <section className='study_abroad'>
        <h3>Study Abroad</h3>
        <div className="after_line_abroad"></div>
        <StudyAbroad studyabroad={homeData.abroads} />
      </section>
      <section className="index_services">
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
            <OurServices services={homeData.services} />
          </div>
        </div>
      </section>
      <section className="index_associations">
        <div className="container">
          <div className="row">
            <div className="col-md-12 associations_head">
              <h3>Our Associated Universities</h3>
              <div className="after_line_associations"></div>
              <Associations association={homeData.associations} />
            </div>
          </div>
        </div>
      </section>
      <section className="index_news">
        <div className="container">
          <div className="row">
            <div className="col-md-12 news_main">
              <div className="news_header">
                < BsFillCalendarCheckFill size={30} style={{ color: "rgb(167 4 4 / 69%)" }} />
                <h3>Blogs & Information</h3>
              </div>
              <div className="after_line_news"></div>
            </div>
          </div>
        </div>
        <Blogs news={homeData.news.slice(0, 4)} />
      </section>
      <section className="index_testimonials">
        <div className="container">
          <div className="row">
            <div className="col-md-12 testimonials_head">
              <h3>What People Says About Us</h3>
              <div className="after_line_testimonials"></div>
            </div>
            <div className="col-md-12 about_us">
              <Testimonials testimonal={homeData.testimonals} /></div>
          </div>
        </div>
      </section>
      <section className="index_callback">
        <div className="container">
          <Callback />
        </div>
      </section>
    </div>
  )
}


export default Index
