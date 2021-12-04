import React, { useState } from "react";
import LandingBG from "../Components/LandingBG";
import Navbar from "../Components/Navbar";
import { FiArrowUp } from "react-icons/fi";
import { Up } from "../styles/CustomLink";

const Header = () => {
  const [ScrollY, setScrollY] = useState(0);
  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  return (
    <div>
      <Up href="#" className={ScrollY > 300 ? "toUp" : "toUp d-none"}>
        <FiArrowUp />
      </Up>
      <Navbar ScrollY={ScrollY} />
      <LandingBG />
    </div>
  );
};

export default Header;
