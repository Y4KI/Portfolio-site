import React, { useState } from "react";
import { NavbarWr } from "../styles/NavbarWr";

const Navbar = () => {
  const [ScrollY, setScrollY] = useState(0);
  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  return (
    <NavbarWr className={ScrollY < 80 ? "" : "TP"}>
      <div className="container d-flex justify-content-between">
        <a href="/">
          <span>PORT</span>FOLIO
        </a>
        <ul className="d-flex m-0">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#exp">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </NavbarWr>
  );
};

export default Navbar;
