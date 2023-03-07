import React, { useState, useEffect, useRef } from "react";
import CarouselMain from '../components/Carousel'
import "../styles/home.css"
import "../styles/navbar.css"
import img3 from "../images/banner.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import StudyAbroad from '../components/StudyAbroad';
import OurServices from "../components/OurServices";
import Associations from "../components/Associations";
import MVG from "../components/MVG";
import axiosBaseURL from "../baseUrl";
import Testimonials from "../components/Testimonials";
import NewsEvents from "../components/NewsEvents";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import Callback from "../components/Callback";
import StudyInIndividual from "../components/StudyInIndividual";
import NavBar from "../components/NavBar";

const Index = ({homeData}) => {

    return (
      <div>
        <div className="carousel_home">
        <CarouselMain slider={homeData.sliders} />
        </div>
        <section className='mission_vision_goal'>
          <MVG feature={homeData.features} />
        </section>
        <section className="functions">
          <StudyInIndividual abroadindividual = {homeData.abroads}/>
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
          <StudyAbroad studyabroad={homeData.abroads} />
        </section>
        <section className="index_services">
          <OurServices services={homeData.features} />
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
                  <h3>News & Events</h3>
                </div>
                <div className="after_line_news"></div>
              </div>
            </div>
          </div>
          <NewsEvents news={homeData.news} />
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
           <Callback/>
          </div>
        </section>
      </div>
    )
  }


export default Index
