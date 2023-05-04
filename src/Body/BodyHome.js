import { Box, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function BodyHome() {
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
        src="hal1.png"
        alt="gambar"
        style={{
          zIndex: '1',
          padding: '0',
          width: '99%',
          paddingLeft: '50px',
          top: '8px',
          letterSpacing: '7px',
          position: 'absolute',
        }}
      ></img>
      <Box
        w="87%"
        p={220}
        color="#215732"
        fontSize={65}
        style={{
          marginRight: '60px',
          top: '100px',
          marginLeft: '120px',
          marginTop: '5px',
          backgroundColor: '#F0EEED',
          fontWeight: '700',
          textAlign: 'center',
          letterSpacing: '7px',
        }}
      >
        Juice Farmacy
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
