import React from 'react';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function FooterHome() {
  return (
    <div>
      <Navbar
        style={{
          paddingTop: '23px',
          paddingBottom: '23px',
          marginLeft: '100px',
          marginRight: '90px',
        }}
      >
        <Navbar.Brand
          style={{
            color: '#6A6A6A',
            fontSize: '13px',
            fontWeight: '500',
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
                <img src="instagram.jpg" alt="icon" height="100px"></img>
              </div>
            </a>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
