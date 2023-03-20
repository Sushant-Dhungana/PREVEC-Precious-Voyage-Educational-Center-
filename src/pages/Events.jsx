import React from 'react'
import eventBanner from '../images/banner.png'
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import axiosBaseURL from '../baseUrl';
import Spinner from '../components/Spinner';
import { Helmet } from 'react-helmet';
import { baseUrl } from '../baseUrl';

const Events = () => {
    const [events, setEvents] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        window.scrollTo(0, 0)
        setLoading(true)
        axiosBaseURL.get('/api/event').then(res => {
            setEvents(res.data)
            setLoading(false)
        }).catch(err => {
            console.log(err)
        });
    }, [])

    return (
        <div>
            <Helmet>
                <title>Events (past and future)</title>
            </Helmet>
            <div className="banner_main">
                <div className="banner">
                    <img src={eventBanner} alt="banner" />
                    <h4>Events (Happened and Ongoing)</h4>
                </div>
            </div>
            {
                loading ? <Spinner /> : 
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 news_main">
                                <div className="news_header">
                                    < BsFillCalendarCheckFill size={30} style={{ color: "rgb(167 4 4 / 69%)" }} />
                                    <h3>Events</h3>
                                </div>
                                <div className="after_line_news"></div>
                            </div>
                            <div className="past_events">
                                <div className="col-md-12">
                                    <div className="events_header">
                                        <h4>Past Events</h4>
                                        <div className="after_line_events"></div>
                                    </div>
                                </div>
                            </div>

                            {
                                events?.pastEvents?.map((item, index) => (

                                    <div className="col-md-3" key={index}>
                                        <div className='news_card'>
                                            <div className="image_section">
                                                <img src={baseUrl +"/images/event/"+ item.image} alt="news_image" />
                                                <p>{new Date(item?.event_date).toLocaleDateString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                            </div>
                                            <Link to={`/information/${item?.id}`} ><h6 dangerouslySetInnerHTML={{ __html: item.description }}></h6></Link>
                                        </div>
                                    </div>
                                ))}
                            <div className="past_events">
                                <div className="col-md-12">
                                    <div className="events_header">
                                        <h4>UpComing Events</h4>
                                        <div className="after_line_events"></div>
                                    </div>
                                </div>
                            </div>
                            {
                                events?.upComingEvents?.map((item, index) => (

                                    <div className="col-md-3" key={index}>
                                        <div className='news_card'>
                                            <div className="image_section">
                                                <img src={baseUrl +"/images/event/"+ item.image} alt="news_image" />
                                                <p>{new Date(item?.event_date).toLocaleDateString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                            </div>
                                            <Link to={`/information/${item?.id}`} ><h6 dangerouslySetInnerHTML={{ __html: item.description }}></h6></Link>
                                        </div>
                                    </div>

                                ))}
                        </div>
                    </div>
}  
        </div>
    )
}

export default Events