import React, { Component } from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import LoginButton from "./user/LoginButton";
import LogoutButton from "./user/LogoutButton";
import "./NavBar.css";
import logo from "./logo_final ";

export class NavBar extends Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;

    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              {" "}
              <img className="imagelogo" src={logo} alt="logo" />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/store">Store</Nav.Link>
                <Nav.Link href="/news">News</Nav.Link>
                <Nav.Link href="/community"> Our Community</Nav.Link>
                <Nav.Link href="/aboutUs"> About us</Nav.Link>
              </Nav>
              <Nav className="other_side">
                {isAuthenticated && (
                  <NavDropdown
                    title={`${user.name}`}
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="/wishlist">
                      My Wish List
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/logout">log out</NavDropdown.Item>
                  </NavDropdown>
                )}

                {isAuthenticated ? " " : <LoginButton />}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default withAuth0(NavBar);
