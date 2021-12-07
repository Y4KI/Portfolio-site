import styled from "styled-components";
import { MainColors } from "./MainColors";

export const AboutWr = styled.div`
  background-color: ${MainColors.dark_1};
  .row {
    .image {
      div {
        display: flex;
        justify-content: center;
        img {
          border: 8px solid ${MainColors.blue};
          margin-bottom: 20px;
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
        letter-spacing: 1px;
        color: ${MainColors.blue};
      }
      p {
        color: #fff;
        text-transform: capitalize;
        line-height: 50px;
        text-align: justify;
        .marked {
          font-size: 20px;
          color: ${MainColors.yellow};
        }
      }
      @media screen and (max-width: 768px) {
        p {
          line-height: 30px;
        }
      }
    }
  }
`;
