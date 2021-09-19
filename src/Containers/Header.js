import React from "react";
import LandingBG from "../Components/LandingBG";
import LineBreak from "../Components/LineBreak";
import Navbar from "../Components/Navbar";

const Header = () => {
  return (
    <div>
      <Navbar />
      <LandingBG />
      <LineBreak />
    </div>
  );
};

export default Header;
