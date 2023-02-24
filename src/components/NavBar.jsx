import React from 'react';
import "../styles/navbar.css";
import Logo from "../images/logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavBar = () => {
  return (
    
    <>
      {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
        <div className="navbar_top">
        <Navbar key={expand} expand={expand} className="mb-3">
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
                  <Nav.Link href="#">Home</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#">Action</NavDropdown.Item>
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
                  <Nav.Link href="#">Link</Nav.Link>
                  <Nav.Link href="#">Link</Nav.Link>
                  <Nav.Link href="#">Link</Nav.Link>
                  <Nav.Link href="#">Link</Nav.Link>
                  <Nav.Link href="#">Link</Nav.Link>
                  <Nav.Link href="#">Link</Nav.Link>
                  <Nav.Link href="#">Link</Nav.Link>
              
                </Nav>
             
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </div>
      ))}
    </>
  );
}

export default NavBar
