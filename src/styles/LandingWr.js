import styled from "styled-components";

export const LandingWr = styled.div`
  background-color: transparent !important;
  min-height: 90vh;
  justify-content: center;
  display: flex;
  align-items: center;
  font-family: Poppins, sans-serif;
  div {
    text-align: center;
    h1 {
      font-size: 60px;
      color: #d1a135;
      letter-spacing: 5px;
    }
    p {
      font-size: 40px;
      color: #00c0ff;
      letter-spacing: 5px;
      margin: 10px 0 30px;
    }
    button {
      background-color: #00000020;
      color: #ffffff90;
      padding: 15px 30px;
      border: 2px solid #a40043;
      transition: 0.4s;
      letter-spacing: 1.5px;
      font-size: 20px;
      &:hover {
        background-color: #00000040;
        letter-spacing: 1.75px;
        color: #fff;
      }
    }
  }
`;
