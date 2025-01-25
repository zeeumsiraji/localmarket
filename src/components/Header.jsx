import React from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/singin");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User logged in:", user);
    } else {
      console.log("User is signed out");
    }
  });

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About Us</Nav.Link>
              {auth.currentUser && (
                <NavDropdown title={auth.currentUser.displayName} id="navbarScrollingDropdown">
                  <NavDropdown.Item href="">My Profile</NavDropdown.Item>
                  <NavDropdown.Item>{auth.currentUser.email}</NavDropdown.Item>
                  <NavDropdown.Item>
                    <button onClick={handleLogOut}>Log Out</button>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
