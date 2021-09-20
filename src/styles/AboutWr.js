import styled from "styled-components";
import { MainColors } from "./MainColors";

export const AboutWr = styled.div`
  background-color: ${MainColors.dark_1};
  .row {
    padding: 40px 0 100px;
    .image {
      div {
        display: flex;
        justify-content: center;
        img {
          border: 8px solid ${MainColors.blue};
          border-radius: 50%;
          max-width: 400px;
          height: 400px;
          object-fit: cover;
          @media screen and (max-width: 720px) {
            max-width: 250px;
            height: 250px;
          }
        }
      }
    }
    .right {
      text-align: center;
      h1 {
        font-family: Poppins, sans-serif;
        letter-spacing: 1px;
        color: ${MainColors.blue};
      }
      p {
        font-family: Poppins, sans-serif;
        color: #fff;
        text-transform: capitalize;
        line-height: 50px;
        text-align: justify;
      }
    }
  }
`;
