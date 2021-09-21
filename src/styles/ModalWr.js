import styled from "styled-components";
import { MainColors } from "./MainColors";

export const ModalWr = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 10;
  top: 50px;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #00000080;
  .contentWrap {
    border-radius: 5px;
    width: 500px;
    height: 600px;
    background-color: #ffffff60;
    backdrop-filter: blur(15px);
    z-index: 11;
    padding: 10px;
    margin: 50px 0 0;
    font-family: Poppins, sans-serif;
    div {
      .flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:first-child {
          font-size: 20px;
          color: ${MainColors.yellow};
        }
        .btn {
          color: ${MainColors.yellow};
          font-size: 20px;
          border-radius: 6px;
          border: 1px solid ${MainColors.yellow};
          font-weight: 700;
        }
      }
    }
  }
`;
