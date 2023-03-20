import React from 'react'
import '../styles/newsevents.css'
import { Link } from 'react-router-dom'
import { baseUrl } from '../baseUrl'


const Blogs = ({ news }) => {
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
                                        <img src={baseUrl+"/images/news/" + item.image} alt="news_image" />
                                        <p>{new Date(item.created_at).toLocaleDateString()}</p>
                                    </div>
                                    <Link to={`/information/${item?.id}`} ><h6>{item.description.replace(regex, '').substring(0, 25)}</h6></Link>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Blogs