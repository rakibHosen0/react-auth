import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ isSignIn, name }) => {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className="navbar-border">
        <Navbar.Brand href="#home">Transport Rider</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/destination">Destination</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link>
              {isSignIn ? (
                { name }
              ) : (
                <Link to="/login">
                  {" "}
                  <Button className="btn" variant="primary">
                    Login
                  </Button>
                </Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
