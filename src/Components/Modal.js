import React from "react";
import { ModalWr } from "../styles/ModalWr";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ close, index }) => {
  const ModalInfo = [
    {
      image: "/TODO.jpg",
      title: "TODOAPP",
      subtitle:
        "Here is Todo Application which contains lots of functions. Click the link below to visit it or if you interested in coding style also you can see the Source code by clicking GitHub",
      link: "https://todoapp-yaki.netlify.app/",
      github: "https://github.com/Y4KI/TodoAppUsingRedux",
    },
    {
      image: "/DB.jpg",
      title: "DASHBOARD",
      subtitle:
        "Here is a simple designed Dashboard. Click the link below to visit it or if you interested in coding style also you can see the Source code by clicking GitHub",
      link: "https://dashboard-yaki.netlify.app/",
      github: "https://github.com/Y4KI/axios-dashboard",
    },
  ];
  return (
    <ModalWr>
      <div className="overlay" onClick={close}></div>
      <div className="contentWrap">
        <div className="details">
          <p className="m-0">You can see some details below</p>
          <span onClick={close} className="btn btn-danger">
            <AiOutlineClose />
          </span>
        </div>
        <div className="imgBox">
          <img src={ModalInfo[index].image} alt="PORTFOLIO" />
        </div>
        <div className="infoBox">
          <h2>{ModalInfo[index].title}</h2>
          <p>{ModalInfo[index].subtitle}</p>
          <div className="links">
            <a href={ModalInfo[index].link} target="_blank">
              Visit the Site
            </a>
            <a href={ModalInfo[index].github} target="_blank">
              Code source is here
            </a>
          </div>
        </div>
      </div>
    </ModalWr>
  );
};

export default Modal;
