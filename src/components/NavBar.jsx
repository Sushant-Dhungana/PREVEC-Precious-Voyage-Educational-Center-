import React from 'react';
import "../styles/navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from "../images/logo.png";

const NavBar = ({ navData }) => {
  const navbarData = navData?.serviceCategories;
  const abroadData = navData?.abroads;
  //   return (
  //     <>

  // <Navbar bg="light" expand="lg">
  //       <Container fluid>
  //         <Navbar.Toggle aria-controls="navbarScroll" />
  //         <Navbar.Collapse id="navbarScroll">
  //           <Nav
  //             className="me-auto my-2 my-lg-0"
  //             style={{ maxHeight: '100px' }}
  //             navbarScroll
  //           >
  //             <Nav.Link href="#action1">Home</Nav.Link>
  //             <Nav.Link href="#action2">Link</Nav.Link>
  //             {
  //               navbarData && navbarData?.length > 0 ? (
  //                 <NavDropdown title="Link" id="navbarScrollingDropdown">
  //                 { 
  //                   navbarData?.map((item, index) => (
  //                     <NavDropdown.Item key= {index} as={Link} to={`/services/${item?.slug}`}>{item?.title}</NavDropdown.Item>
  //                   ))
  //                 }
  //               </NavDropdown>
  //               ) : "null"
  //             } 

  //             <Nav.Link href="#" >
  //               Link
  //             </Nav.Link>
  //           </Nav>
  //         </Navbar.Collapse>
  //       </Container>
  //     </Navbar>
  //     </>
  //   );
  return (
    <>
      {['xxl'].map((expand) => (

        <Navbar key={expand} expand={expand} className="mb-3 navbar_top">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={Logo} alt="logo" className='logo_top' />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-between flex-grow-1 pe-3">
                  <Nav.Link as={Link} to={"/"} >Home</Nav.Link>
                  {
                    navbarData && navbarData?.length > 0 ? (
                      <NavDropdown title="Services" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                        {
                          navbarData?.map((item, index) => (
                            <NavDropdown.Item key={index} as={Link} to={`/services/${item?.slug}`}>{item?.title}</NavDropdown.Item>
                          ))
                        }
                      </NavDropdown>
                    ) : "null"
                  }
                  {
                    abroadData && abroadData?.length > 0 ? (
                  <NavDropdown
                    title="Study Abroad"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    {
                         abroadData?.map((eq, index)=> (
                          <NavDropdown.Item key={index} as={Link} to={`/abroad-study/${eq?.id}`}>{eq?.title}</NavDropdown.Item>
                        )) 
                    }
                     </NavDropdown>
                    ) : "null"
            }
                   
                 
                  <NavDropdown
                    title="About"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item as={Link} to={"/aboutus"}>About</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Something else here
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Preparation"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#">Preparation</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Something else here
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
               
                  <NavDropdown
                    title="Courses"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#">Courses</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Something else here
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#">Gallery</Nav.Link>
                  <NavDropdown
                    title="Career"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#">Career</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Something else here
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#asas">Information</Nav.Link>
                  <Nav.Link href="#asa">Contact Us</Nav.Link>
                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

      ))}
    </>
  );
}

export default NavBar
