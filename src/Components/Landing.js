import React from "react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { LandingWr } from "../styles/LandingWr";

const Landing = () => {
  return (
    <div className="particlesCover">
      <LandingWr id="home">
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
          <button>
            <Link
              className="test6"
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={100}
            >
              CONTACT ME
            </Link>
          </button>
        </div>
      </LandingWr>
    </div>
  );
};

export default Landing;
