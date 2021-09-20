import React, { useState } from "react";
import { NavbarWr } from "../styles/NavbarWr";
import { GoThreeBars } from "react-icons/go";

const Navbar = ({ SCY }) => {
  const [bar, setbar] = useState(false);
  return (
    <NavbarWr className={SCY < 80 ? "" : "TP"}>
      <div className="container d-flex justify-content-between">
        <a href="/">
          <span>PORT</span>FOLIO
        </a>
        <ul className="d-sm-flex d-none m-0">
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
        <div className="d-block d-sm-none bar">
          <button
            onClick={() => {
              setbar(!bar);
            }}
          >
            <GoThreeBars />
          </button>
          <ul className={`${bar ? "active" : ""} ${SCY < 80 ? "" : "TP"}`}>
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
      </div>
    </NavbarWr>
  );
};

export default Navbar;
