import styled from "styled-components";
import { MainColors } from "../data/MainColors";

export const PortfolioWr = styled.div`
  background-color: ${MainColors.dark_1};
  overflow: hidden;
  .content {
    h1 {
      color: ${MainColors.yellow};
      text-align: center;
      font-size: 20px;
      padding: 10px 0 50px;
    }
  }
`;
