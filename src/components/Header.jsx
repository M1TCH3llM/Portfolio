import React from "react";
import "../styles/Header.css";
import Hamburger from "./Hamburger";
import { useState } from "react";

function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <header className="header">
      <div>Mitchell Morgan</div>
      <div className="dAndd">
        <a>Design</a>
        <div>&</div>
        <a>Development</a>
      </div>
      <div className="navBurger">
        <div>
          <div className="hamburger" onClick={toggleHamburger}>
            <Hamburger />
          </div>
        </div>
        {hamburgerOpen && (
          <div className="navigation">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Design</li>
              <li>Develop</li>
              <li>Resume</li>
              <li>Contact</li>
            </ul>
          </div>
        )}{" "}
      </div>
    </header>
  );
}

export default Header;
