import React, { useState } from "react";
import { NavbarWr } from "../styles/NavbarWr";
import { GoThreeBars } from "react-icons/go";
import { Link } from "react-scroll";

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
            <Link
              className="test6"
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="test6"
              to="exp"
              spy={true}
              smooth={true}
              offset={-80}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              className="test6"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-80}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className="test6"
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
            >
              Contact
            </Link>
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
              <a
                onClick={() => {
                  setbar(!bar);
                }}
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setbar(!bar);
                }}
                href="#exp"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setbar(!bar);
                }}
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setbar(!bar);
                }}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </NavbarWr>
  );
};

export default Navbar;
