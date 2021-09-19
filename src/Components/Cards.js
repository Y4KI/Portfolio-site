import React from "react";
import { CardWr } from "../styles/CardWr";

const Cards = () => {
  return (
    <CardWr className="row g-3">
      <div className="col-lg-4 col-md-6 d-flex justify-content-center">
        <div>
          <img src="/TODO.jpg" alt="TODOAPP" />
        </div>
      </div>
      <div className="col-lg-4 col-md-6 d-flex justify-content-center">
        <div>
          <img src="/DB.jpg" alt="TODOAPP" />
        </div>
      </div>
    </CardWr>
  );
};

export default Cards;
