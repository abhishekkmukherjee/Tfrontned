
import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="info" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Tongue Bit</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#download">Download</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#write">Write Your Experience</Nav.Link>
          <Nav.Link href="#review">Reviews</Nav.Link>
          <Nav.Link href="#contactus">Contact us</Nav.Link>


       
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  )
}
