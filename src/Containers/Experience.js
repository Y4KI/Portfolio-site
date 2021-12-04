import React from "react";
import LineBreak from "../Components/LineBreak";
import PageTitle from "../Components/PageTitle";
import Timeline from "../Components/Timeline";
import { ExpWr } from "../styles/ExpWr";

const Experience = () => {
  return (
    <ExpWr id="experience">
      <PageTitle title="EXPERIENCE" />
      <Timeline />
      <LineBreak />
    </ExpWr>
  );
};

export default Experience;
