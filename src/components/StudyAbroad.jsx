import React, { useState, useEffect } from 'react';
import banner from '../images/japan_falg.jpg';
import '../styles/studyabroad.css';
import "../styles/button.css"
const StudyAbroad = () => {
    const [user, setUser] = useState([]);

    const fetchData = () => {
        return fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUser(data));
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            <div className="container">
                <div className="row">
                    {user && user.slice(0, 4).map((item, index) => (
                        <div className="col-md-3 card_col" key={index}>
                            <div className="card_main">
                                <img src={banner} alt="logo" className='card_image' />
                                <div className="above_abroad">
                                    <img src={banner} alt="logo" />
                                </div>
                                <h6>{item.name}</h6>
                                <div className="learn_more">
                                    <button>{item.email}</button>
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