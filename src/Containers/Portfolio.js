import React from "react";
import Cards from "../Components/Cards";
import LineBreak from "../Components/LineBreak";
import PageTitle from "../Components/PageTitle";
import { PortfolioWr } from "../styles/PortfolioWr";

const Portfolio = () => {
  return (
    <PortfolioWr id="portfolio">
      <div className="container">
        <PageTitle title="PORTFOLIO" />
        <div className="content">
          <h1>HERE YOU CAN VISIT SOME SITES MADE BY ME</h1>
          <Cards />
        </div>
      </div>
      <LineBreak />
    </PortfolioWr>
  );
};

export default Portfolio;
