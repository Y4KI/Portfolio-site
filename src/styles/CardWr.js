import styled from "styled-components";
import { MainColors } from "./MainColors";

export const CardWr = styled.div`
  padding: 0 0 80px;
  .FlipCard:hover .FlipCard__Cover {
    transform: rotateY(180deg);
  }
  .FlipCard {
    perspective: 1000px;
    &__Cover {
      position: relative;
      width: 100%;
      height: 100%;
      transition: all 0.8s ease-in-out;
      transform-style: preserve-3d;
      transform: rotateY(-15deg);
    }
    &__Front {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      justify-content: center;
    }
    &__Back {
      transform: rotateY(180deg);
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      justify-content: center;
      color: ${MainColors.orange_2};
      div {
        display: flex;
        justify-content: center;
        background-color: ${MainColors.blue};
        width: 100%;
        height: 100%;
        backdrop-filter: blur(20px);
        border-radius: 20px;
        perspective: 100px;
        @media screen and (max-width: 768px) {
          width: 70%;
          height: 70%;
        }
        h2 {
          font-family: Poppins, sans-serif;
          font-weight: 500;
          font-size: 50px;
          letter-spacing: 3px;
          transform: translateZ(10px);
        }
      }
    }
  }
  div {
    div {
      cursor: pointer;
      align-items: center;
      min-height: 250px;
      @media screen and (max-width: 768px) {
        min-height: 220px;
      }
      img {
        border: 5px solid ${MainColors.orange_1};
        transition: all 0.5s ease;
        border-radius: 10px;
        height: 80%;
        max-width: 100%;
        opacity: 0.7;
        @media screen and (max-width: 768px) {
          max-width: 70%;
        }
      }
    }
  }
`;
