import React, { useState } from "react";
import styled from "styled-components";
import LandingBG from "../Components/LandingBG";
import LineBreak from "../Components/LineBreak";
import Navbar from "../Components/Navbar";
import { MainColors } from "../styles/MainColors";

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
  `;

  return (
    <div>
      <Up href="#" className={ScrollY > 300 ? "toUp" : "toUp d-none"}>
        up
      </Up>
      <Navbar SCY={ScrollY} />
      <LandingBG />
      <LineBreak />
    </div>
  );
};

export default Header;
