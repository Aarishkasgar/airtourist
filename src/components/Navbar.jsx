import { Link } from "react-router-dom";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/logo.png";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            <img src={logo} alt="logo" width={125} />
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/hajjpackage"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Hajj Package
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/umrahpackage"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Umrah Package
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/gallery"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <CloseIcon />{" "}
              </span>
            ) : (
              <span className="icon">
                <MenuIcon />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
