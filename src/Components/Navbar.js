import React from "react";
import { NavbarWr } from "../styles/NavbarWr";

const Navbar = () => {
  return (
    <NavbarWr>
      <div className="container d-flex justify-content-between">
        <a href="/">
          <span>PORT</span>FOLIO
        </a>
        <ul className="d-flex m-0">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </NavbarWr>
  );
};

export default Navbar;
