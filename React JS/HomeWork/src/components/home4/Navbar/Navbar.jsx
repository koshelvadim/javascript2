import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import { BrowserRouter as  Router, Routes, Route, Link } from "react-router-dom";
import Home from '../Home';
import About from '../About';
import { useRef } from 'react';

function BasicExample() {

  const buttonHome = useRef();
  const buttonAbout = useRef();

  const clickButtonHome = () => {
    buttonHome.current.classList.add('active');
    buttonAbout.current.classList.remove('active');
  }

  const clickButtonAbout = () => {
    buttonAbout.current.classList.add('active');
    buttonHome.current.classList.remove('active');
  }

  return (
    <>
      <Router>
          <Navbar fixed="top" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand  as={Link} to="/" style={{ color: "green" }} onClick={clickButtonHome}>React-Bootstrap-Navbar</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link  as={Link} to="/" ref={buttonHome} className='active' onClick={clickButtonHome}>Home</Nav.Link>
                  <Nav.Link as={Link} to="/about" ref={buttonAbout} onClick={clickButtonAbout}>About</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>

      </Router>
    </>
  );
}

export default BasicExample;