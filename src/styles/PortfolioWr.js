import styled from "styled-components";
import { MainColors } from "./MainColors";

export const PortfolioWr = styled.div`
  background-color: ${MainColors.dark_1};
  .content {
    h1 {
      font-family: Poppins, sans-serif;
      color: ${MainColors.yellow};
      text-align: center;
      font-size: 20px;
      padding: 10px 0 50px;
    }
  }
`;
