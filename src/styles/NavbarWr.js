import styled from "styled-components";
import { MainColors } from "./MainColors";

export const NavbarWr = styled.nav`
  background-color: ${MainColors.dark_1};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  a {
    color: #fff;
  }
  div {
    align-items: center;
    a {
      font-family: Poppins, sans-serif;
      font-size: 24px;
      letter-spacing: 2px;
      span {
        color: ${MainColors.orange_2};
      }
    }
    ul {
      align-items: center;
      justify-content: space-between;
      li {
        transition: all 0.2s ease-in-out;
        &:hover {
          border-top: 3px solid ${MainColors.yellow};
        }
        a {
          font-size: 18px;
          letter-spacing: unset;
          margin: 0 15px;
        }
      }
    }
  }
`;
