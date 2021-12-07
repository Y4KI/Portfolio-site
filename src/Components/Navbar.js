import React, { useState } from "react";
import { NavbarWr } from "../styles/NavbarWr";
import { GoThreeBars } from "react-icons/go";
import { Link } from "react-scroll";
import { NavbarData } from "../data/NavbarData";

const Navbar = ({ ScrollY }) => {
  const [bar, setbar] = useState(false);
  return (
    <NavbarWr className={!(ScrollY < 80) && "TP"}>
      <div className="container d-flex justify-content-between">
        <a href="/">
          <span>PORT</span>FOLIO
        </a>
        <ul className="d-md-flex d-none m-0">
          {NavbarData.map((e) => (
            <li
              key={e.id}
              className={
                ScrollY >= e.itemTop && ScrollY < e.itemBottom ? "bordered" : ""
              }
            >
              <Link
                className={`test6`}
                to={e.title.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-80}
                duration={100}
              >
                {e.title}
              </Link>
            </li>
          ))}
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
          {NavbarData.map((e) => (
            <li key={e.id}>
              <Link
                onClick={() => {
                  setbar(!bar);
                }}
                className="test6"
                to={e.title.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-80}
                duration={100}
              >
                {e.title}
              </Link>
            </li>
          ))}
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
