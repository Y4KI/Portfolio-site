import styled from "styled-components";

export const AboutWr = styled.div`
  background-color: #090e35;
  .row {
    padding: 40px 0 100px;
    .image {
      div {
        display: flex;
        justify-content: center;
        img {
          border: 8px solid #311d52;
          border-radius: 50%;
          max-width: 400px;
          height: 400px;
          object-fit: cover;
        }
      }
    }
    .right {
      text-align: center;
      h1 {
        font-family: Poppins, sans-serif;
        letter-spacing: 1px;
        color: #d1a135;
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
