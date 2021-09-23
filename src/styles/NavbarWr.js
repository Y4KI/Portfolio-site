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
  transition: 0.5s;
  &.TP {
    background-color: #ffffff20;
    backdrop-filter: blur(5px);
  }
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
          cursor: pointer;
          font-size: 18px;
          letter-spacing: unset;
          margin: 0 8px;
        }
      }
    }
  }
  .bar {
    position: relative;
    button {
      padding: 5px 8px;
      background-color: transparent;
      border: none;
      color: ${MainColors.yellow};
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    ul {
      position: absolute;
      transition: all 0.5s;
      width: 0px;
      background-color: ${MainColors.dark_1};
      top: 50px;
      right: -55px;
      padding: 20px;
      li {
        padding: 10px 0;
        &:hover {
          border-bottom: 3px solid ${MainColors.yellow};
          border-top: none;
        }
      }
      &.TP {
        background-color: #ffffff20;
        backdrop-filter: blur(10px);
      }
      &.active {
        width: 200px;
      }
    }
  }
`;
