import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { LandingWr } from "../styles/LandingWr";
import { MainColors } from "../styles/MainColors";

const Landing = () => {
  return (
    <div className="particlesCover">
      <LandingWr>
        <div>
          <h1>FrontEnd Developer</h1>
          <p>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("HTML/CSS")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Javascript")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("ES6/ES6+")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("React JS")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Next JS")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("React Redux")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Rest API")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Bootstrap CSS")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("SASS/SCSS")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Styled Components")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Material UI")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </p>
          <button>Contact Me</button>
        </div>
      </LandingWr>
    </div>
  );
};

export default Landing;
