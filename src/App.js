import React from "react";
// temp - bootstrap
import { Alert } from "react-bootstrap";

function App() {
  return (
    <>
      <Alert style={{ textAlign: "center" }}>
        This website is a work in progress, check out the codebase <a href="https://github.com/cubecademy/cubecademy.net">here</a>.
      </Alert>
      <h1>Cubecademy</h1>
      <p>
        We organize opportunities for curious minds to learn about Speedcubing.
      </p>
      <h2>View our social media profiles</h2>
      <h2>Learn about our latest outreach</h2>
      <h2>View our picture gallery</h2>
      <h2>View our teaching cirriculum</h2>
      <h2>Learn about our founding story</h2>
    </>
  );
}

export default App;
