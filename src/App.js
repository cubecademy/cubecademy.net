import React from "react";
// router (csr)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// each page components
import Home from "./pages";
import Outreach from "./pages/outreach";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/outreach" element={<Outreach />} />
      </Routes>
    </Router>
  );
}

export default App;
