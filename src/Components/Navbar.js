import React, { useState } from "react";
import { NavbarWr } from "../styles/NavbarWr";
import { GoThreeBars } from "react-icons/go";
import { Link } from "react-scroll";

const Navbar = ({ SCY }) => {
  const [bar, setbar] = useState(false);
  return (
    <NavbarWr className={!(SCY < 80) && "TP"}>
      <div className="container d-flex justify-content-between">
        <a href="/">
          <span>PORT</span>FOLIO
        </a>
        <ul className="d-md-flex d-none m-0">
          <li>
            <Link
              className="test6"
              to="home"
              spy={true}
              smooth={true}
              offset={-80}
              duration={100}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="test6"
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={100}
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
              duration={100}
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
              duration={100}
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
              duration={100}
            >
              Contact
            </Link>
          </li>
        </ul>
        <button
          onClick={() => {
            setbar(!bar);
          }}
          className="d-md-none"
        >
          <GoThreeBars />
        </button>
      </div>
      <div className={` d-block d-md-none bar ${bar && "active"} `}>
        <ul>
          <li>
            <Link
              onClick={() => {
                setbar(!bar);
              }}
              className="test6"
              to="home"
              spy={true}
              smooth={true}
              offset={-80}
              duration={100}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setbar(!bar);
              }}
              className="test6"
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={100}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setbar(!bar);
              }}
              className="test6"
              to="exp"
              spy={true}
              smooth={true}
              offset={-80}
              duration={100}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setbar(!bar);
              }}
              className="test6"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-80}
              duration={100}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setbar(!bar);
              }}
              className="test6"
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={100}
            >
              Contact
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                setbar(!bar);
              }}
              className="d-md-none"
            >
              <GoThreeBars />
            </button>
          </li>
        </ul>
      </div>
    </NavbarWr>
  );
};

export default Navbar;
