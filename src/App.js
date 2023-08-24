import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Testform from "./components/testform";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";

document.title = "ASTRA GALAXY LLC";
function App() {
  return (
    <Router>
      <div>
        <Navbar Home="Home" />
        <br />
        <Routes>
          <Route
            exact
            path="/"
            element={<Testform title="Enter Your Text Here" />}
          />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
