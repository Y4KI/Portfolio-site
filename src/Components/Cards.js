import React, { useState } from "react";
import { CardWr } from "../styles/CardWr";
import Modal from "./Modal";

const Cards = () => {
  const [Modal1, setModal1] = useState(false);
  const openModal1 = () => {
    setModal1(true);
    console.log("ishladi");
  };
  return (
    <CardWr className="row gx-5">
      <div className="col-lg-4 col-md-6 d-flex justify-content-center">
        {Modal1 ? (
          <Modal close={() => setModal1(false)} open={() => setModal1(true)} />
        ) : (
          ""
        )}
        <div>
          <img src="/TODO.jpg" alt="TODOAPP" onClick={openModal1} />
        </div>
      </div>
      <div className="col-lg-4 col-md-6 d-flex justify-content-center">
        <div onClick={openModal1}>
          <img src="/DB.jpg" alt="TODOAPP" />
        </div>
      </div>
    </CardWr>
  );
};

export default Cards;
