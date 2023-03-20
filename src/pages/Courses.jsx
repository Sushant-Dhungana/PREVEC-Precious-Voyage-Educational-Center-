import React, { useEffect, useState } from 'react'
import axiosBaseURL from '../baseUrl';
import coursesbanner from "../images/banner.png";
import "../styles/courses.css";
import "../styles/button.css"
import SpinnerMain from '../components/Spinner';
import { Helmet } from 'react-helmet';
import { baseUrl } from '../baseUrl';
import { Link } from 'react-router-dom';

const Courses = () => {

    const [courseData, setCourseData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        window.scrollTo(0, 0)
        axiosBaseURL.get(`/api/course`)
            .then((res) => {
                setLoading(false);
                setCourseData(res?.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    return (
        <div>
            <Helmet>
                <title>Courses</title>
            </Helmet>
            <div className="banner_main">
                <div className="banner">
                    <img src={coursesbanner} alt="courses" />
                    <h4>Courses</h4>
                </div>
            </div>
            {loading ? <SpinnerMain /> :
                <>
                    {
                        courseData?.courseCategories?.map((item, index) => (
                            <div className="container courses" key={index}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="course_head">
                                            <h4>Courses In <span>{item?.title}</span></h4>
                                            <div className="after_line_courses"></div>
                                        </div>
                                    </div>
                                    {
                                        item?.courses?.map((eq, index) => (
                                            <div className="col-md-3 course_card_col" key={index}>
                                                <div className="course_card">
                                                    <img src={baseUrl + "/images/course/" + eq?.image} alt="courses" />
                                                    <div className="course_logo">
                                                        <img src={baseUrl + "/images/course/logo/" + eq?.logo} alt="logo" />
                                                    </div>
                                                    <h4>{eq?.title}</h4>
                                                    <div className="enroll_button">
                                                        <button><Link to={"/contactus"}>Enroll Now</Link></button>
                                                    </div>
                                                </div>
                                            </div>
                                        )

                                        )
                                    }

                                </div>
                            </div>
                        ))
                    }
                </>

            }





        </div>
    )
}

export default Courses