import React from 'react'

import { Container, Navbar, Nav, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Link to='/'>
            <Navbar.Brand>Proshop</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">             
                <NavLink to='/cart' as={Link}><i className="fas fa-shopping-cart"></i>Cart</NavLink>                           
                <NavLink to='/login'as={Link}><i className="fas fa-user"></i>Sign In</NavLink>              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header
