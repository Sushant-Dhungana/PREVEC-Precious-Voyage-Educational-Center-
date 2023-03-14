import React from 'react'
import { useParams } from 'react-router-dom';
import axiosBaseURL from '../baseUrl';
import SpinnerMain from '../components/Spinner';
import NoDataFound from '../components/NoDataFound';
import "../styles/responsive.css"
import "../styles/banner.css"

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
      {isLoading ? <SpinnerMain/> : 
          
          serviceData.services && serviceData?.services?.length > 0 ? (
            <div className="services_main">
              {
                serviceData?.services?.map((item, index) => (
                  <div className='banner_main' key={index}>
                    <div className="banner">
                      <img src={"http://precious-voyage.onvirotech.com/images/service/" + item.image} alt={"services"} />
                        <h4>{item.title}</h4>
                      
                    </div>
                  </div>
                ))
              }
            </div>
          ) : <NoDataFound/>
        }
      </>
    )
  }

export default Services
