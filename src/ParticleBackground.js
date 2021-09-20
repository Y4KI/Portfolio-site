import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";
import ParticleConfig from "./Config/Particle-config";

const ParticlesWr = styled(Particles)`
  position: absolute;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.4976540958180147) 0%,
      rgba(0, 0, 0, 0.5021358885351015) 80%,
      rgba(0, 0, 0, 1) 99%
    ),
    url("/Landing.jpg");
  background-position: 20% 80%;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  width: 100%;
`;
export default function ParticleBackground() {
  return <ParticlesWr params={ParticleConfig} className="d-none d-md-block" />;
}
