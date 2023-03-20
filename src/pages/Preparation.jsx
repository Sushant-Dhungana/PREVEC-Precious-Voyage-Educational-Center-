import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import banner from '../images/banner.png'
import '../styles/preparation.css'
import axiosBaseURL from '../baseUrl'
import ApplyPreparation from '../components/ApplyPreparation'
import "../styles/banner.css"
import { Helmet } from 'react-helmet'

const Preparation = ({ props }) => {
    const [preparationData, setPreparationData] = React.useState({})
    const [isLoading, setIsLoading] = React.useState(true)
    const { slug } = useParams();

    useEffect(() => {
        axiosBaseURL.get(`/api/preparation/${slug}`)
            .then((res) => {
                setPreparationData(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err)
                isLoading(true)
            })
    }, [props?.match?.params?.slug, slug, isLoading]);
    const id = preparationData?.preparation?.id;
    return (
        <>
            {isLoading ? <><Helmet>
                <title>Preparation |</title>
            </Helmet>
            </> :
                <Helmet>
                    <title>{`Preparation | ${preparationData?.preparation?.title} `}</title>
                </Helmet>
            }

            <div className='preparation_main'>
                <div className="banner_main">
                    <div className="banner">
                        <img src={banner} alt="preparation banner" className='banner_image' />
                        <h4>Preparation</h4>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 preparation_content">
                            <div dangerouslySetInnerHTML={{ __html: preparationData?.preparation?.description }}></div>
                        </div>
                        <div className="col-md-4 apply_preparation">
                            <div className="preparation_form">
                                <ApplyPreparation id={id} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Preparation