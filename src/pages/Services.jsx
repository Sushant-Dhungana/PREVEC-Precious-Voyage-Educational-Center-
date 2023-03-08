import React from 'react'
import { useParams } from 'react-router-dom';
import "../styles/services.css"
import axiosBaseURL from '../baseUrl';
import SpinnerMain from '../components/Spinner';
import NoDataFound from '../components/NoDataFound';
import "../styles/responsive.css"
const Services = (props) => {
  const { slug } = useParams();
  const [serviceData, setServiceData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // const serviceSlug = props?.match?.params?.slug
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
                  <div className='services_main' key={index}>
                    <div className="services_banner">
                      <img src={"http://192.168.1.9:8000/images/service/" + item.image} alt={"services"} />
                      
                        <h5>{item.title}</h5>
                      
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
