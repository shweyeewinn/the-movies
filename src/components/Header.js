import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import SearchMovie from '../components/SearchMovie';

const Header = ({ onSearchTermChange }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">The Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <SearchMovie onSearchTermChange={onSearchTermChange} />
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Movies</Nav.Link>
            <Nav.Link href="#pricing">TV Series</Nav.Link>
            <NavDropdown title="Profile" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                User Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
