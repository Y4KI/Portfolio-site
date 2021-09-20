import React from "react";
import ParticleBackground from "../ParticleBackground";
import Landing from "./Landing";

const LandingBG = () => {
  return (
    <div className="overflow-hidden" style={{ height: "100vh" }}>
      <ParticleBackground />
      <Landing />
    </div>
  );
};

export default LandingBG;
