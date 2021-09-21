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
      transition: all 800ms ease-in-out;
      transform-style: preserve-3d;
      transform: rotateY(0deg);
      transform-style: preserve-3d;
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
        border-radius: 10px;
        @media screen and (max-width: 768px) {
          width: 70%;
          height: 70%;
        }
        h2 {
          font-family: Poppins, sans-serif;
          font-weight: 500;
          font-size: 50px;
          letter-spacing: 3px;
          text-shadow: 5px 10px 15px black;
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
        border: 1px solid ${MainColors.orange_1};
        transition: all 0.5s ease;
        border-radius: 10px;
        height: 100%;
        max-width: 100%;
        @media screen and (max-width: 768px) {
          max-width: 70%;
        }
      }
    }
  }
`;
