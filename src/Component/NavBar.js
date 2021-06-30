import React, { Component } from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import LoginButton from "./user/LoginButton";

import "./NavBar.css";
import logo from "./logo.png";

export class NavBar extends Component {
  render() {
    const { user, isAuthenticated, logout } = this.props.auth0;

    return (
      <div className="navbarall">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <img className="imagelogo" src={logo} alt="logo" />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  href="/"
                  style={{ color: "whitesmoke" }}
                  className="textlink"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="/store"
                  style={{ color: "whitesmoke" }}
                  className="textlink"
                >
                  Store
                </Nav.Link>
                <Nav.Link
                  href="/news"
                  style={{ color: "whitesmoke" }}
                  className="textlink"
                >
                  News
                </Nav.Link>

                <Nav.Link
                  href="/aboutUs"
                  style={{ color: "whitesmoke" }}
                  className="textlink"
                >
                  {" "}
                  About us
                </Nav.Link>
              </Nav>
              <Nav className="other_side">
                {isAuthenticated && (
                  <>
                    <Nav.Link href="/cart" style={{ color: "whitesmoke" }}>
                      cart 🛒{" "}
                    </Nav.Link>

                    <NavDropdown
                      title={`${user.name}`}
                      id="collasible-nav-dropdown"
                    >
                      <NavDropdown.Item
                        href="/wishlist"
                        style={{ color: "gray" }}
                        className="Dropdown"
                      >
                        My WishList ♥️
                      </NavDropdown.Item>

                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        style={{ color: "gray" }}
                        className="Dropdown"
                        href="/logout"
                        onClick={() => {
                          logout({ returnTo: window.location.origin });
                        }}
                      >
                        log out
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
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
