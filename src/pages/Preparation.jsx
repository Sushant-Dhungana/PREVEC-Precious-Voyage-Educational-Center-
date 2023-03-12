import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import banner from '../images/banner.png'
import '../styles/preparation.css'
import axiosBaseURL from '../baseUrl'
import ApplyPreparation from '../components/ApplyPreparation'

const Preparation = ({ props }) => {
    const [preparationData, setPreparationData] = React.useState({})
    const { slug } = useParams();

    useEffect(() => {
        axiosBaseURL.get(`/api/preparation/${slug}`)
            .then((res) => {
                setPreparationData(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [props?.match?.params?.slug, slug]);
    const id = preparationData?.preparation?.id;
    console.log(id);
    return (
        <div className='preparation_main'>
            <div className="preparation_banner">
                <img src={banner} alt="preparation banner" className='banner_image' />
                <h4>Preparation</h4>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 preparation_content">
                        <div dangerouslySetInnerHTML={{ __html: preparationData?.preparation?.description }}></div>
                    </div>
                    <div className="col-md-4 apply_preparation">
                        <div className="preparation_form">
                            <ApplyPreparation  id = {id}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preparation