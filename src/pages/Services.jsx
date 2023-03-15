import React from 'react'
import { useParams } from 'react-router-dom';
import axiosBaseURL from '../baseUrl';
import SpinnerMain from '../components/Spinner';
import NoDataFound from '../components/NoDataFound';
import "../styles/responsive.css"
import "../styles/banner.css"
import "../styles/services.css"
import bannerServices from "../images/banner.png"

const Services = (props) => {
  const { slug } = useParams();
  const [serviceData, setServiceData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect(() => {
    axiosBaseURL.get(`/api/service/${slug}`)
      .then(res => {
        setServiceData(res.data);
        setIsLoading(false);
      }
      )
      .catch(err => console.log(err))
  }, [props?.match?.params?.slug, slug])


  return (
    <>
      <div className="banner_main">
        <div className="banner">
          <img src={bannerServices} alt="about banner" className='banner_image' />
        </div>
      </div>
      {isLoading ? <SpinnerMain /> :

        serviceData.services && serviceData?.services?.length > 0 ? (
          <div className="services_main">
            <div className="container">
              <div className="row">
                {
                  serviceData?.services?.map((item, index) => (
                    <div>
                      <div className="col-md-12">
                        <div className="services_main">
                          <h4>{item?.title}</h4>
                          <div className="after_line_services_main"></div>
                        </div>
                      </div>
                      {index % 2 === 0 ? (
                        <div>
                          <div className="row">
                            <div className="col-md-4">
                              <div className="image_service_content">
                                <img src={"http://precious-voyage.onvirotech.com/images/service/" + item?.image} alt="service" className="image_service" />
                              </div>
                            </div>
                            <div className="col-md-8">
                              <div className="services_content_desc">
                                <p dangerouslySetInnerHTML={{ __html: item?.description }}></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                        : (
                          <div>
                            <div className="row">
                            <div className="col-md-8">
                              <div className="services_content_desc">
                                <p dangerouslySetInnerHTML={{ __html: item?.description }}></p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="image_service_content">
                                <img src={"http://precious-voyage.onvirotech.com/images/service/" + item?.image} alt="service" className="image_service" />
                              </div>
                            </div>
                            </div>
                          </div>
                        )
                      }
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

        ) : <NoDataFound />
      }
    </>
  )
}

export default Services
