import React from 'react';
import '../styles/studyabroad.css';
import "../styles/button.css"
const StudyAbroad = (props) => {
    const studyabroads = props.studyabroad;
    return (
        <div>
            <div className="container">
                <div className="row">
                    {studyabroads && studyabroads.map((item, index) => (
                        <div className="col-md-3 card_col" key={index}>
                            <div className="card_main">
                                <img src={"http://192.168.1.2:8000/images/abroad/"+ item.image} alt="logo" className='card_image' />
                                <div className="above_abroad">
                                    <img src={"http://192.168.1.2:8000/images/abroad/banner/"+ item.banner} alt="logo" />
                                </div>
                                <h6>{item.title}</h6>
                                <div className="learn_more">
                                    <button>Learn More</button>
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