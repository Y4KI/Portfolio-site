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
              <img src="/Image.jpg" alt="IMAGE" />
            </div>
          </div>
          <div className="col-lg-6 right">
            <h1>Saida'lo Buzrukov</h1>
            <p>
              <span className="marked">Saida'lo Buzrukov</span> 20 years old
              young boy Who has got a big passion for Web Programming! Lives in
              a <span className="marked">small street</span> in Tashkent.
              Currently he's studying in a one of the Most Famous univercity in
              <span className="marked"> UZBEKISTAN</span> known by name Tashkent
              Univercity International Technologies{" "}
              <span className="marked">(TUIT)</span>. Coding is a part of his
              life as <span className="marked">Hobby and Job</span>!
            </p>
          </div>
        </div>
      </div>
      <LineBreak />
    </AboutWr>
  );
};

export default About;
