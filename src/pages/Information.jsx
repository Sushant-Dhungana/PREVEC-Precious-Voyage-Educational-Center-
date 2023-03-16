import React, { useEffect } from 'react'
import NewsEvents from '../components/Blogs'
import axiosBaseURL from '../baseUrl'
import '../styles/banner.css'
import bannerInformation from '../images/banner.png'
import SpinnerMain from '../components/Spinner'

const Information = () => {

    const [newsEvents, setNewsEvents] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
        setLoading(true)
        axiosBaseURL.get('/api/news')
            .then((res) => {
                setNewsEvents(res?.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, []);
    return (
        <div>
            <div className="banner_main">
                <div className="banner">
                    <img src={bannerInformation} alt="information" />
                    <h4>Blogs & Information</h4>
                </div>
            </div>
            {loading ? <SpinnerMain /> :
                <>
                    <div style={{ marginTop: "2%" }} >
                        <NewsEvents news={newsEvents?.news} />
                    </div>
                </>}


        </div>
    )
}

export default Information