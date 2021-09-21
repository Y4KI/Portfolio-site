import React, { useState } from "react";
import { CardWr } from "../styles/CardWr";
import Modal from "./Modal";

const Cards = () => {
  const [Modal1, setModal1] = useState(false);
  const openModal1 = () => {
    setModal1(true);
  };
  return (
    <CardWr className="row gx-5">
      {Modal1 ? (
        <Modal close={() => setModal1(false)} open={() => setModal1(true)} />
      ) : (
        ""
      )}
      <div className="FlipCard col-lg-4 col-md-6 d-flex justify-content-center ">
        <div className="FlipCard__Cover" onClick={openModal1}>
          <div className="FlipCard__Front">
            <img src="/TODO.jpg" alt="TODOAPP" />
          </div>
          <div className="FlipCard__Back">
            <div>
              <h2>CLICK</h2>
            </div>
          </div>
          <div className="FlipCard__Back"></div>
        </div>
      </div>
      <div className="FlipCard col-lg-4 col-md-6 d-flex justify-content-center ">
        <div className="FlipCard__Cover" onClick={openModal1}>
          <div className="FlipCard__Front">
            <img src="/DB.jpg" alt="TODOAPP" />
          </div>
          <div className="FlipCard__Back">
            <div>
              <h2>CLICK</h2>
            </div>
          </div>
          <div className="FlipCard__Back"></div>
        </div>
      </div>
    </CardWr>
  );
};

export default Cards;
