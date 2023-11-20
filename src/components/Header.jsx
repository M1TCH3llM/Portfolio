import React from "react";
import "../styles/Header.css";
import Hamburger from "./Hamburger";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const closeMenu = () => {
    setHamburgerOpen(false);
  };

  return (
    <>
      <header className="header">
        <div id="name">Mitchell Morgan</div>

        <div className="navBurger">
          <div>
            <div className="hamburger" onClick={toggleHamburger}>
              <Hamburger isOpen={hamburgerOpen} />
            </div>
          </div>
          {hamburgerOpen && (
            <div className={`navigation ${hamburgerOpen ? "open" : ""}`}>
              <ul>
                <li>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "pink" }}
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="About"
                    style={{ textDecoration: "none", color: "pink" }}
                    onClick={closeMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="Design"
                    style={{ textDecoration: "none", color: "pink" }}
                    onClick={closeMenu}
                  >
                    Design
                  </Link>
                </li>
                <li>
                  <Link
                    to="Develop"
                    style={{ textDecoration: "none", color: "pink" }}
                    onClick={closeMenu}
                  >
                    Develop
                  </Link>
                </li>
                <li>
                  <Link
                    to="Resume"
                    style={{ textDecoration: "none", color: "pink" }}
                    onClick={closeMenu}
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link
                    to="Contact"
                    style={{ textDecoration: "none", color: "pink" }}
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}{" "}
        </div>
      </header>
    </>
  );
}

export default Header;
