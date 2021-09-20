import styled from "styled-components";
import { MainColors } from "./MainColors";

export const CardWr = styled.div`
  div {
    div {
      cursor: pointer;
      align-items: center;
      min-height: 250px;
      @media screen and (max-width: 720px) {
        min-height: 220px;
      }
      img {
        border: 5px solid ${MainColors.orange_1};
        transition: all 0.5s ease;
        border-radius: 10px;
        max-width: 350px;
        opacity: 0.7;
        @media screen and (max-width: 720px) {
          max-width: 250px;
        }
        &:hover {
          opacity: 1;
          max-width: 355px;
          object-fit: scale-down;
          border-radius: 0;
        }
      }
    }
  }
`;
