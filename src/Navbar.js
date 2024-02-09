import './App.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src="https://www.medianews4u.com/wp-content/uploads/2021/06/Crediwatch.jpg" alt="crediwatch" style={{ height: "48px",width:"100px"}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="dropup">
          <Nav className="ms-auto" style={{ marginRight: '20px' }}>
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">Features</Nav.Link>
          </Nav>
          <select style={{background:"#002b80",color:"white",height:"30px",width:"100px",borderRadius:"6px"}} selected>
            <option value="aboutUs" selected>About Us</option>
            <option value="contactUs">Contact Us</option>
          </select>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
