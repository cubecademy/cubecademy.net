import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Nav
      activeKey="/home"
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Nav.Item>
        <Nav.Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://www.instagram.com/cubecademy/" target="_blank">
          Our Instagram
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link to="/outreach" style={{ textDecoration: "none" }}>
            Outreach
          </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/picture-gallery">Picture Gallery</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/curriculum">Curriculum</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/founding">Founding Story</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
