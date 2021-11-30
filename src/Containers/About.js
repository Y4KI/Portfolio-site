import React from "react";
import LineBreak from "../Components/LineBreak";
import PageTitle from "../Components/PageTitle";
import { AboutWr } from "../styles/AboutWr";

const About = () => {
  return (
    <AboutWr id="about">
      <div className="container">
        <PageTitle title="ABOUT" />
        <div className="row">
          <div className="col-lg-6 image">
            <div>
              <img src="/Image.jpg" alt="portret" />
            </div>
          </div>
          <div className="col-lg-6 right">
            <h1>Saida'lo Buzrukov</h1>
            <p>
              <span className="marked">Saidalo Buzrukov</span> - 20 years old, a
              young boy who has a great passion for programming. Lives on a
              <span className="marked"> small street</span> in Tashkent.
              Currently he is studying at one of the famous universities in
              <span className="marked"> Uzbekistan</span>, Tashkent University
              of Information Technologies, known by name{" "}
              <span className="marked">TUIT </span>. Coding is a part of his
              life as a hobby and as a job!
            </p>
          </div>
        </div>
      </div>
      <LineBreak />
    </AboutWr>
  );
};

export default About;
