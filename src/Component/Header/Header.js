import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';
import './Header.css'

const Header = () => {
  const { user, logout } = useAuth();
  console.log(user)
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={HashLink} to="/home">
      <img
        src="https://i.ibb.co/c2DyzDW/Untitled-1.png"
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
                        {user?.email ?
                                <Button onClick={logout} variant="dark">LogOut</Button> :
                                <>
                                <Nav.Link as={HashLink} to="/login">LogIn</Nav.Link>
                                </>} 
                                
                                <Navbar.Text>
                            Signed in :  <a href="/login">{user?.displayName}</a>
                        </Navbar.Text>
                        <Navbar.Brand href="/home" className='ms-2 '>
                                            <img
                                            alt=""
                                            src={user?.photoURL}
                                            width="40"
                                            height="40"
                                            className="d-inline-block align-top rounded-circle"
                                            />
                        </Navbar.Brand>
                        </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>

    );
};

export default Header;