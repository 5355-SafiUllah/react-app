import React, { useState } from "react";
import logo from "C:/Users/MY-PC/Desktop/ReactApp/react-app/src/images/logo.png";
import logo1 from "C:/Users/MY-PC/Desktop/ReactApp/react-app/src/images/logo1.png";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [brandlogo, setBrandlogo] = useState(logo);
  const [darkbody, setDarkbody] = useState({
    backgroundColor: "black",
    color: "white",
  });
  const [btnmode, setBtnmode] = useState("Dark");
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // Define isNavbarOpen state

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const changemode = () => {
    if (darkbody.backgroundColor === "black") {
      setBtnmode("Light");
      setDarkbody({
        backgroundColor: "white",
        color: "black",
      });
      setBrandlogo(logo1);
    } else {
      setBtnmode("Dark");
      setDarkbody({
        backgroundColor: "black",
        color: "white",
      });
      setBrandlogo(logo);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg" style={darkbody}>
      <div className="container headnav">
        <div className="row">
          <div className="col-md-3">
            <a className="navbar-brand" href="/">
              <img src={brandlogo} width={200} alt="brand" />
            </a>
          </div>
          <div className="col-md-7">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleNavbar} // Add your toggle function here
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    {props.Home}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Industries
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Blogs
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-2">
            <form className="d-flex search" role="darkmode">
              <input
                type="button"
                onClick={changemode}
                value={btnmode}
                className="darkmode"
              />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
