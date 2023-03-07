import React from 'react'
import '../styles/newsevents.css'
const newsUrl = process.env.baseUrl || "http://192.168.1.9:8000/images/news/"


const NewsEvents = ({news}) => {
    const newsEvents = news;
    const regex = /(<([^>]+)>)/ig;
    return (
        <div className="news_head">
            <div className="container">
                <div className="row">
                    {
                        newsEvents && newsEvents.map((item, index) => (
                            <div className="col-md-3" key={index}>
                            <div className='news_card'>
                                <div className="image_section">
                                    <img src={newsUrl + item.image} alt="news_image"/>
                                    <p>{new Date(item.created_at).toLocaleDateString()}</p>
                                </div>
                                <h6>{item.description.replace(regex, '').substring(0, 40)}</h6>
                            </div>
                        </div>
                        ))
                    }
                   
                </div>
            </div>
        </div>
    )
}

export default NewsEvents