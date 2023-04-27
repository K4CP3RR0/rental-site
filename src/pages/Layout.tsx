import { Outlet, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
//import IonIcon from "@reacticons/ionicons";

const Layout = () => {
    
  return (
    <>
       <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>   
            <Navbar.Brand as={Link} to="/">808 Rent</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" >
                  <Nav.Item>
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link  as={Link} to="/vehicles">Vehicles</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                  </Nav.Item>
                </Nav>
            <Nav>
            
            <Nav.Link as={Link} to="/login" disabled>Log in 
            {/* <IonIcon name="log-in-outline" size="large"></IonIcon>  */}
            </Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
              </Navbar>

      <Outlet />
    </>
  )
};

export default Layout;