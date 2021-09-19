import React from "react";
import ParticleBackground from "../ParticleBackground";
import Landing from "./Landing";
import LineBreak from "./LineBreak";

const LandingBG = () => {
  return (
    <div className="overflow-hidden" style={{ height: "90vh" }}>
      <ParticleBackground />
      <Landing />
    </div>
  );
};

export default LandingBG;
