import styled from "styled-components";
import { MainColors } from "./MainColors";

let size = "width: 100%; height: 100%;";
const position3d =
  "position: absolute; backface-visibility: hidden; display: flex;";

export const CardWr = styled.div`
  padding: 0 0 80px;
  .FlipCard:hover .FlipCard__Cover {
    transform: rotateY(180deg);
  }
  .FlipCard {
    perspective: 1000px;
    &__Cover {
      ${size}
      position: relative;
      transition: all 800ms ease-in-out;
      transform-style: preserve-3d;
      transform: rotateY(0deg);
    }
    &__Front {
      ${size}
      ${position3d}
      justify-content: center;
    }
    &__Back {
      ${size}
      ${position3d}
      transform: rotateY(180deg);
      justify-content: center;
      color: ${MainColors.orange_2};
      div {
        ${size}
        display: flex;
        justify-content: center;
        background-color: ${MainColors.blue};
        border-radius: 10px;
        h2 {
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
      img {
        ${size}
        border: 1px solid ${MainColors.orange_1};
        transition: all 0.5s ease;
        border-radius: 10px;
      }
    }
  }
`;
