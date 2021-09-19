import styled from "styled-components";
import { MainColors } from "./MainColors";

export const PageTitleWr = styled.div`
  text-align: center;
  padding: 20px 0;
  h1 {
    color: ${MainColors.yellow};
  }
  div {
    display: flex;
    justify-content: center;
    div {
      width: 80px;
      height: 5px;
      background-color: ${MainColors.orange_1};
    }
  }
`;
