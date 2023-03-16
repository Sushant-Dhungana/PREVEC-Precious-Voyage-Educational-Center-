
import React from 'react'
import { useParams } from 'react-router-dom';
import axiosBaseURL from '../baseUrl';
import ApplyNow from '../components/ApplyNow';
import SpinnerMain from '../components/Spinner';
import "../styles/abroad.css"
import "../styles/responsive.css"
import { BsFillInfoCircleFill, BsCashStack } from 'react-icons/bs';
import { HiCurrencyDollar } from 'react-icons/hi';
import { FaLanguage, FaUsers } from 'react-icons/fa';
import { BiBuildings } from 'react-icons/bi';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Universities from '../components/Universities';


const Abroad = ({ props }) => {
  const { id } = useParams();
  const [abroadPageData, setAbroadPageData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    window.scrollTo(0, 0)
    axiosBaseURL.get(`/api/abroad-study/${id}`)
      .then(res => {
        setAbroadPageData(res.data);
        setIsLoading(false);

      }
      )
      .catch(err => console.log(err))
  }, [props?.match?.params?.id, id]);
  const abroadData = abroadPageData.abroadStudy;

  return (
    <>
      {isLoading ? <SpinnerMain /> :
        <div>
          <div className="abroads_main">
            <div className="abroads_banner">
              <img src={"http://precious-voyage.onvirotech.com/images/abroad/banner/" + abroadData?.banner} alt="abroad study" />
              <div className="banner_above">
                <img src={"http://precious-voyage.onvirotech.com/images/abroad/" + abroadData?.image} alt="abroad study" />
                <h5>{abroadData?.title}</h5>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="overview_abroad">
                    <h4>overview </h4> <p dangerouslySetInnerHTML={{ __html: abroadData?.overview }}></p>
                  </div>
                </div>
                <div className="col-md-4 apply_col">
                  <ApplyNow id={id} />
                </div>
              </div>
            </div>
            <section className='basic_info'>
              <div className="container">
                <div className="row">
                  <div className="col-md-12 basic">
                    <div className="basic_info_main">
                      <BsFillInfoCircleFill size={30} style={{ color: "#C75934" }} />
                      <h5>Basic Information</h5>
                    </div>
                    <div className="information">
                      <div className="information_main">
                        <HiCurrencyDollar size={50} style={{ color: "#C75934" }} />
                        <h5>Currency</h5>
                        <h6>{abroadData.currency}</h6>
                      </div>
                      <div className="information_main">
                        <FaLanguage size={50} style={{ color: "#C75934" }} />
                        <h5>Language</h5>
                        <h6>{abroadData.language}</h6>
                      </div>
                      <div className="information_main">
                        <FaUsers size={50} style={{ color: "#C75934" }} />
                        <h5>Institutions</h5>
                        <h6>{abroadData.institution}</h6>
                      </div>
                      <div className="information_main">
                        <BiBuildings size={50} style={{ color: "#C75934" }} />
                        <h5>Capital</h5>
                        <h6>{abroadData.capital}</h6>
                      </div>
                      <div className="information_main">
                        <BsCashStack size={50} style={{ color: "#C75934" }} />
                        <h5>Per Capita  Income</h5>
                        <h6>{abroadData.per_capita}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 tabs">
                    <div className="tabs_main">
                      <Tabs>
                        <TabList>
                          <Tab>Why {abroadData.title} ?</Tab>
                          <Tab>Career Opportunities</Tab>
                          <Tab>Work While Studying</Tab>
                          <Tab>Others</Tab>
                        </TabList>
                        <TabPanel>
                          <p dangerouslySetInnerHTML={{__html:abroadData?.why}}></p>
                        </TabPanel>
                        <TabPanel>
                        <p dangerouslySetInnerHTML={{__html:abroadData.career_opportunity}}></p>
                        </TabPanel>
                        <TabPanel>
                        <p dangerouslySetInnerHTML={{__html:abroadData.work_while_studying}}></p>
                        </TabPanel> 
                        <TabPanel>
                        <p dangerouslySetInnerHTML={{__html:abroadData.other}}></p>
                        </TabPanel>
                      </Tabs>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="description_main">
                    <p dangerouslySetInnerHTML={{__html:abroadData.description}}></p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="universities_main">
                      <div className="university_head">
                      <h4>Universities in {abroadData.title}</h4>
                      <div className="after_line_university"></div>
                      </div>
                          <Universities data = {abroadData?.universities} />
                    </div>
                  </div>

                </div>
              </div>
            </section>
          </div>
        </div>
      }
    </>
  )
}

export default Abroad