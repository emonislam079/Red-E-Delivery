import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={HashLink} to="/home">
      <img
        src="https://i.ibb.co/mNx61Gt/png-clipart-logo-brand-product-design-font-fast-courier-service.png"
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  <Navbar.Brand as={HashLink} to="/home" className='fs-1 fw-bold text-danger'>RED E</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
  <Nav className="me-auto">
      <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/about">About</Nav.Link>
      <Nav.Link as={HashLink} to="/tracking">Tracking</Nav.Link>
      <Nav.Link as={HashLink} to="/Pricing">Pricing</Nav.Link>
      <Nav.Link as={HashLink} to="/contact">Contact</Nav.Link>
      
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;