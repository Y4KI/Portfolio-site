import styled from "styled-components";
import { MainColors } from "./MainColors";

export const CardWr = styled.div`
  div {
    cursor: pointer;
    div {
      align-items: center;
      min-height: 250px;
      img {
        border: 5px solid ${MainColors.orange_1};
        transition: all 0.5s ease;
        &:hover {
          max-width: 355px;
          object-fit: scale-down;
          border-radius: 0;
        }
        max-width: 350px;
        border-radius: 10px;
      }
    }
  }
`;
