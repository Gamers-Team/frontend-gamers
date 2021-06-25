import React, { Component } from "react";
import { Container, Navbar, NavDropdown,Nav} from 'react-bootstrap';
import './NavBar.css'


export class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Gamers </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">

                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/store">Store</Nav.Link>
                <Nav.Link href="/news">News</Nav.Link>
                <Nav.Link href="/community"> Our Community</Nav.Link>

              </Nav>
              <Nav className='other_side'>
                <button> log in</button>
                  <NavDropdown title="UserNameis here " id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/wishlist">
                    My Wish List 
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    log out 
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
