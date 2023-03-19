import React from 'react';
import banner from '../images/associatedbanner.png';
import '../styles/messageceo.css';
import "../styles/responsive.css"
import { AiFillFacebook, AiOutlineTwitter, AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import {BsFillCalendarCheckFill} from 'react-icons/bs';
import axiosBaseURL from '../baseUrl';
import NewsEvents from '../components/Blogs';
import "../styles/banner.css"
import { Helmet } from 'react-helmet';
import {baseUrl} from '../baseUrl';

const MessageCEO = () => {
    const [messageData, setMessageData] = React.useState({})
    React.useEffect(() => {
        axiosBaseURL.get("/api/ceo").then(res => {
            setMessageData(res.data)
        }).catch(err => console.log(err));
    }, []);
    console.log(messageData);
    return (
        <>
        <Helmet>
            <title>Message from CEO</title>
        </Helmet>
        <div className='messageceo_main'>
            <div className="banner">
                <img src={banner} alt="message banner" className='banner_image' />
                <h4>Message from CEO</h4>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="message_content_head">
                            <img src={baseUrl+ "/images/ceo/"+ messageData?.ceo?.image} alt="message banner" className='banner_image' />
                            <h5>{messageData?.ceo?.title}</h5>
                            <p>Founder Ceo</p>
                            <div className="social_media_links">
                                <a href={messageData?.ceo?.facebook}><AiFillFacebook size={30} style={{ color: "#3b5998" }} /></a>
                                <a href={messageData?.ceo?.twitter}> <AiOutlineTwitter size={30} style={{ color: "#00acee " }} /> </a>
                                <a href={messageData?.ceo?.linkedin}><AiFillLinkedin size={30} style={{ color: "#0072b1" }} /></a>
                                <a href={`tel:${messageData?.ceo?.whatsapp}`}><AiOutlineWhatsApp size={30} style={{ color: "#25D366" }} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="message_paragraph">
                            <p dangerouslySetInnerHTML={{ __html: messageData?.ceo?.description }}></p>
                        </div>
                    </div>
                </div>
            </div>
            <section className='news_n_events'>
            <div className="container">
            <div className="row">
              <div className="col-md-12 news_main">
                <div className="news_header">
                  < BsFillCalendarCheckFill size={30} style={{ color: "rgb(167 4 4 / 69%)" }} />
                  <h3>News & Events</h3>
                </div>
                <div className="after_line_news"></div>
                <h6>We are organizing the different workshop for the boosting student's confidence and to provide better knowledge about abroad life style.</h6>
              </div>
            </div>
          </div>
                <NewsEvents news={messageData?.news?.slice(0,4)}/>
            </section>
        </div>
        </>
    )
}

export default MessageCEO