import styled from "styled-components";
import { MainColors } from "../data/MainColors";

export const LineBreakWr = styled.div`
  .dark {
    height: 20px;
    background-color: ${MainColors.dark_1};
  }
  .light {
    height: 100px;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.4976540958180147) 0%,
        rgba(0, 0, 0, 0.5021358885351015) 80%,
        rgba(0, 0, 0, 1) 99%
      ),
      url("/Landing.jpg");
    background-position: 20% 80%;
    background-size: cover;
    background-attachment: fixed;
  }
`;
