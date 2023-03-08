
import React from 'react'
import { useParams } from 'react-router-dom';
import axiosBaseURL from '../baseUrl';
import SpinnerMain from '../components/Spinner';
import "../styles/abroad.css"
import "../styles/responsive.css"
import { FiMail } from "react-icons/fi";

const Abroad = ({ props }) => {
  const { id } = useParams();
  const [abroadPageData, setAbroadPageData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    axiosBaseURL.get(`/api/abroad-study/${id}`)
      .then(res => {
        setAbroadPageData(res.data);
        setIsLoading(false);

      }
      )
      .catch(err => console.log(err))
  }, [props?.match?.params?.id, id]);
  const abroadData = abroadPageData.abroadStudy;
  console.log(abroadData);

  return (
    <>
      {isLoading ? <SpinnerMain /> :
        <div>
          <div className="abroads_main">
            <div className="abroads_banner">
              <img src={"http://192.168.1.9:8000/images/abroad/banner/" + abroadData?.banner} alt="abroad study" />
              <div className="banner_above">
                <img src={"http://192.168.1.9:8000/images/abroad/" + abroadData?.image} alt="abroad study" />
                <h5>{abroadData?.title}</h5>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-9">
                  <div className="overview_abroad">
                    <h4>overview </h4> <p dangerouslySetInnerHTML={{ __html: abroadData?.overview }}></p>
                  </div>
                </div>
                <div className="col-md-3 apply_col">
                  <div className="apply_online_form">
                    <div className="icon_apply">
                      <div className="icon_main">
                    <FiMail style={{color:"black"}} />
                    </div>
                    <h4>apply online</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      }
    </>
  )
}

export default Abroad