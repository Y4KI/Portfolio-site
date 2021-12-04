import styled from "styled-components";
import { MainColors } from "./MainColors";

export const LandingWr = styled.div`
  background-color: transparent !important;
  min-height: 100vh;
  justify-content: center;
  display: flex;
  align-items: center;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.4976540958180147) 0%,
      rgba(0, 0, 0, 0.5021358885351015) 80%,
      rgba(0, 0, 0, 1) 99%
    ),
    url("/Landing.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  div {
    text-align: center;
    z-index: 1;
    h1 {
      font-size: 60px;
      color: ${MainColors.yellow};
      letter-spacing: 5px;
      @media screen and (max-width: 768px) {
        font-size: 40px;
      }
    }
    p {
      font-size: 40px;
      color: ${MainColors.orange_2};
      letter-spacing: 5px;
      margin: 10px 0 30px;
      background-color: ${MainColors.blue}40;
      backdrop-filter: blur(10px);
      @media screen and (max-width: 768px) {
        font-size: 25px;
      }
    }
    button {
      background-color: #00000020;
      color: #ffffff90;
      padding: 15px 30px;
      border: 2px solid ${MainColors.orange_1};
      transition: all 0.4s ease-in-out;
      letter-spacing: 1.5px;
      font-size: 20px;
      &:hover {
        background-color: #00000040;
        letter-spacing: 1.75px;
        color: #fff;
      }
      @media screen and (max-width: 768px) {
        padding: 10px 20px;
      }
    }
  }
`;
