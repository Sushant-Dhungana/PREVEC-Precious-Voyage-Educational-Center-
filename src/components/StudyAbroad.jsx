import React from 'react';
import banner from '../images/banner.png';
import '../styles/studyabroad.css';
import  "../styles/button.css"
const StudyAbroad = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 card_col">
                        <div className="card_main">
                            <img src={banner} alt="logo" className='card_image' />
                            <div className="above_abroad">
                                <img src={banner} alt="logo" />
                            </div>
                            <h6>Study In Japan</h6>
                            <div className="learn_more">
                            <button>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudyAbroad