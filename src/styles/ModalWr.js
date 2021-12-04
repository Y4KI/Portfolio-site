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
  background-color: #00000099;
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .contentWrap {
    width: 400px;
    height: 500px;
    background-color: #ffffff80;
    backdrop-filter: blur(15px);
    padding: 10px;
    margin: 40px 2%;
    border-radius: 10px;
    .details {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;
      span {
        padding: 0 6px;
        cursor: pointer;
      }
    }
    .imgBox {
      width: 100%;
      height: 200px;
      img {
        width: 100%;
        height: 200px;
      }
    }
    .infoBox {
      width: 100%;
      h2 {
        text-align: center;
        margin: 10px 0 0;
        color: ${MainColors.dark_2};
      }
      p {
        text-align: center;
        font-style: italic;
        color: ${MainColors.dark_2};
      }
      .links {
        display: flex;
        flex-direction: column;
        a {
          text-align: center;
        }
      }
    }
  }
`;
