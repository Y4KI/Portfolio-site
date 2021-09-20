import React from "react";
import { ModalWr } from "../styles/ModalWr";

const Modal = ({ close, open }) => {
  return (
    <ModalWr>
      <div className="contentWrap">
        <div>
          <p>
            here will be content soon... <span onClick={close}>x</span>
          </p>
        </div>
      </div>
    </ModalWr>
  );
};

export default Modal;
