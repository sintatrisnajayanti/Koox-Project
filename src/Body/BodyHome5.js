import { Box, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

export default function BodyHome5() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" color="black">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto"
              style={{ bottom: '500px', paddingLeft: '300px', margin: '10px' }}
            >
              <Nav.Link
                href="#home"
                style={{
                  padding: '20px',
                  paddingRight: '50px',
                  fontWeight: '500',
                  color: '#215732',
                  fontSize: '19px',
                  letterSpacing: '5',
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#menu"
                style={{
                  padding: '20px',
                  paddingRight: '50px',
                  fontWeight: '500',
                  color: '#215732',
                  fontSize: '19px',
                  letterSpacing: '5',
                }}
              >
                Menu
              </Nav.Link>
              <Nav.Link
                href="#about"
                style={{
                  padding: '20px',
                  paddingRight: '50px',
                  fontWeight: '500',
                  color: '#215732',
                  fontSize: '19px',
                  letterSpacing: '5',
                }}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#ordernow"
                style={{
                  padding: '20px',
                  paddingRight: '50px',
                  fontWeight: '500',
                  color: '#215732',
                  fontSize: '19px',
                  letterSpacing: '5',
                }}
              >
                Order Now
              </Nav.Link>
              <Nav.Link
                href="contact"
                style={{
                  padding: '20px',
                  paddingRight: '50px',
                  fontWeight: '500',
                  color: '#215732',
                  fontSize: '19px',
                  letterSpacing: '5',
                }}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Flex style={{ position: 'absolute', zIndex: '2', top: '330px' }}>
        <Box p="7" bg="#215732">
          <img src="logo.png" alt="logo" style={{ paddingRight: '15px' }}></img>
        </Box>
      </Flex>
      <Flex
        style={{
          position: 'absolute',
          zIndex: '2',
          marginLeft: '1550px',
          top: '330px',
        }}
      >
        <Box p="7" bg="#215732">
          <img
            src="buttom.png"
            alt="logo"
            style={{
              paddingRight: '20px',
              paddingLeft: '20px',
              paddingTop: '5px',
              paddingBottom: '5px',
            }}
          ></img>
        </Box>
      </Flex>
      <img
        src="hal5.png"
        alt="gambar"
        style={{
          zIndex: '1',
          padding: '0',
          width: '81%',
          top: '37px',
          letterSpacing: '7px',
          position: 'absolute',
          marginLeft: '120px',
        }}
      ></img>
      <Box
        w="87%"
        p={122}
        color="#215732"
        style={{
          marginRight: '60px',
          marginLeft: '120px',

          backgroundColor: '#F0EEED',
          fontWeight: '700',
          textAlign: 'center',
          letterSpacing: '4px',
        }}
      >
        <p
          style={{
            fontSize: '170px',
            textAlign: 'center',
            paddingLeft: '200px',
            paddingRight: '200px',
          }}
        >
          menu
        </p>
        <h6 style={{ letterSpacing: '3' }}>Discover now</h6>
      </Box>

      <Navbar
        style={{
          paddingTop: '50px',
          paddingBottom: '23px',
          marginLeft: '120px',
          marginRight: '110px',
        }}
      >
        <Navbar.Brand
          style={{
            color: '#6A6A6A',
            fontSize: '19px',
            fontWeight: '600',
            letterSpacing: '2px',
            zIndex: '2',
          }}
        >
          &copy; 2021 Dark Points Network LTD • Credits • Legals
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand>
            <a href="https://www.instagram.com/koox.london/">
              <div>
                <img
                  src="instagram.jpg"
                  alt="icon"
                  height="25px"
                  width="25px"
                ></img>
              </div>
            </a>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
