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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
              voluptatum, explicabo repudiandae voluptatibus ipsa quae
              perspiciatis placeat accusantium. Ducimus ex perferendis in cum
              explicabo nisi tempore voluptas quibusdam porro at! Lorem ipsum
              dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <LineBreak />
    </AboutWr>
  );
};

export default About;
