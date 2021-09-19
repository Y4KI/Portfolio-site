import styled from "styled-components";

export const NavbarWr = styled.nav`
  background-color: #311d52;
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
        color: #00c0ff;
      }
    }
    ul {
      align-items: center;
      justify-content: space-between;
      li {
        transition: all 0.2s ease-in-out;
        &:hover {
          border-top: 3px solid #e8d5b5;
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
