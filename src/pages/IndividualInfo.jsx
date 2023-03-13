import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axiosBaseURL from '../baseUrl'
import SpinnerMain from '../components/Spinner'
import individualbanner from '../images/banner.png'
import '../styles/banner.css'
import '../styles/individualinfo.css'
import "../styles/responsive.css"

const imageBaseUrl = "http://precious-voyage.onvirotech.com";

const IndividualInfo = ({props}) => {
  const {id} = useParams()
  console.log(id);

  const [individualData, setIndividualData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    axiosBaseURL.get(`/api/news/${id}`).then((res) => {
      setIndividualData(res?.data)
      setLoading(false)
    }).catch((err) => {
      console.log(err);
    })
  }, [props?.match?.params?.id, id]);
  console.log(individualData);
  return (
    <div>
      <div className="banner_main">
        <div className="banner">
          <img src={individualbanner} alt="information" />
          <h4>{individualData?.news?.title}</h4>
        </div>
      </div>
      {
        loading? <SpinnerMain/> :
        <>
<div className="container individual">
        <div className="row">
          <div className="col-md-12 created_at">
           <p>{new Date(individualData?.news?.created_at).toLocaleDateString()}</p> 
          </div>
          <div className="col-md-8">
            <div className="individual_info">
              <p dangerouslySetInnerHTML={{__html: individualData?.news?.description}}></p>
              </div>
          </div>
          <div className="col-md-4">
            <div className="individual_image">
              <img src={imageBaseUrl+"/images/news/"+individualData?.news?.image} alt="individual" />
            </div>
          </div>
        </div>
      </div>
        </>
      }
      
    </div>
  )
}

export default IndividualInfo