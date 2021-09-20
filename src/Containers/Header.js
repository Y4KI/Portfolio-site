import React, { useState } from "react";
import styled from "styled-components";
import LandingBG from "../Components/LandingBG";
import Navbar from "../Components/Navbar";
import { MainColors } from "../styles/MainColors";
import { FiArrowUp } from "react-icons/fi";

const Header = () => {
  const [ScrollY, setScrollY] = useState(0);
  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });
  const Up = styled.a`
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background-color: ${MainColors.dark_2};
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 20px;
    bottom: 20px;
    z-index: 1000;
    opacity: 0.8;
    backdrop-filter: blur(10px);
  `;

  return (
    <div>
      <Up href="#" className={ScrollY > 300 ? "toUp" : "toUp d-none"}>
        <FiArrowUp />
      </Up>
      <Navbar SCY={ScrollY} />
      <LandingBG />
    </div>
  );
};

export default Header;
