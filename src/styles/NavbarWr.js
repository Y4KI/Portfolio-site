import styled from "styled-components";
import { MainColors } from "../data/MainColors";

export const NavbarWr = styled.nav`
  background-color: #ffffff20;
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: 0.5s;
  &.TP {
    background-color: ${MainColors.dark_1};
  }
  a {
    color: #fff;
  }
  div {
    align-items: center;
    a {
      font-size: 24px;
      letter-spacing: 2px;
      span {
        color: ${MainColors.orange_2};
      }
    }
    ul {
      justify-content: space-between;
      li {
        transition: all 0.2s ease-in-out;
        border-top: 3px solid transparent;
        &:hover {
          border-top: 3px solid ${MainColors.yellow};
        }
        &.bordered {
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
    button {
      padding: 5px 8px;
      background-color: transparent;
      border: none;
      color: ${MainColors.yellow};
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  .bar {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: -100%;
    background-color: ${MainColors.dark_1};
    transition: 400ms all ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &.active {
      left: 0;
    }
    ul {
      align-items: center;
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      transition: all 0.5s;
      padding: 0;
      margin: 0;
      height: 60%;
      li {
        margin: 10px 0;
        button {
          transform: scale(1.5);
        }
      }
    }
  }
`;
