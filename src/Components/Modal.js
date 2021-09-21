import React from "react";
import { ModalWr } from "../styles/ModalWr";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ close }) => {
  const ModalInfo = [];
  return (
    <ModalWr>
      <div className="contentWrap">
        <div>
          <div className="flex">
            <span>You can see the site informations below</span>
            <span className="btn" onClick={close}>
              <AiOutlineClose />
            </span>
          </div>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, eum
            magnam nisi illo quidem minima laudantium ipsum voluptatem ut fugiat
            dolores enim quibusdam ullam mollitia dignissimos earum laborum
            repellendus eligendi.
          </h2>
        </div>
      </div>
    </ModalWr>
  );
};

export default Modal;
