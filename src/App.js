import React from "react";
// temp - bootstrap
import Alert from "react-bootstrap/Alert";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <>
      <Alert style={{ textAlign: "center" }}>
        This website is a work in progress, check out the codebase{" "}
        <a href="https://github.com/cubecademy/cubecademy.net">here</a>.
      </Alert>
      <Nav
        activeKey="/home"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://www.instagram.com/cubecademy/">Our Instagram</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/outreach">Outreach</Nav.Link>
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
      <section style={{ textAlign: "center", marginTop: "1rem" }}>
        <h1>Cubecademy</h1>
        <p style={{ fontSize: "1rem" }}>
          We organize opportunities for curious minds to learn about
          Speedcubing.
        </p>
        <img
          src="/BackgroundTemp.PNG"
          style={{ width: "50%", marginBottom: "2rem", height: "50%" }}
        />
      </section>
    </>
  );
}

export default App;
