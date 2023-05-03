import { Box, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

export default function BodyHome2() {
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

      <Box
        w="86%"
        p={7}
        color="#215732"
        style={{
          marginRight: '60px',
          marginLeft: '120px',
          marginTop: '5px',
          backgroundColor: '#F0EEED',
          fontWeight: '700',
          textAlign: 'center',
          letterSpacing: '4px',
          zIndex: '999',
        }}
      >
        <Row>
          <Col></Col>
          <Col style={{ fontSize: '50px' }}>
            <h6 style={{ letterSpacing: '7' }}>.02.</h6>
            <p
              style={{
                paddingBottom: '30px',
                textAlign: 'center',
                paddingLeft: '200px',
                paddingRight: '200px',
              }}
            >
              100% organic
            </p>
            <p
              style={{
                paddingTop: '20px',
                textAlign: 'center',
                paddingLeft: '150px',
                paddingRight: '150px',
              }}
            >
              certified by Soil Association
            </p>
          </Col>
        </Row>
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
