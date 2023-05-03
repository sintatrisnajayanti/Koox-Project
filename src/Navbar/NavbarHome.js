import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarHome() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" color="black">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto"
              style={{
                paddingLeft: '270px',
              }}
            >
              <Nav.Link
                href="#home"
                style={{
                  padding: '20px',
                  fontWeight: '500',
                  color: '#215732',
                  fontSize: '14',
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#menu"
                style={{
                  padding: '20px',
                  fontWeight: '500',
                  color: '#215732',
                  fontSize: '14',
                }}
              >
                Menu
              </Nav.Link>
              <Nav.Link
                href="#about"
                style={{
                  padding: '20px',
                  fontWeight: '500',
                  color: '#215732',
                  fontSize: '14',
                }}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#ordernow"
                style={{
                  padding: '20px',
                  fontWeight: '500',
                  color: '#215732',
                  fontSize: '14',
                }}
              >
                Order Now
              </Nav.Link>
              <Nav.Link
                href="contact"
                style={{
                  padding: '20px',
                  fontWeight: '500',
                  color: '#215732',
                  fontSize: '14',
                }}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
