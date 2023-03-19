import React from 'react';
import '../styles/studyabroad.css';
import "../styles/button.css"
import { Link } from 'react-router-dom';
const cardUrl = process.env.baseUrl || "http://precious-voyage.onvirotech.com"
const circleUrl = process.env.baseUrl || "http://precious-voyage.onvirotech.com"
const StudyAbroad = (props) => {
    const studyabroads = props.studyabroad;

    return (
        <div>
            <div className="container">
                <div className="row">
                    {studyabroads && studyabroads.map((item, index) => (
                        <div className="col-md-3 card_col" key={index}>
                            <div className="card_main">
                                <img src={cardUrl+"/images/abroad/"+ item.image} alt="logo" className='card_image' />
                                <div className="above_abroad">
                                    <img src={circleUrl+"/images/abroad/banner/"+ item.banner} alt="logo" />
                                </div>
                                <h6>{item.title}</h6>
                                <div className="learn_more">
                                    <Link to={`/abroad-study/${item?.id}`} >Learn More</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StudyAbroad