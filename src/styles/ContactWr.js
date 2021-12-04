import styled from "styled-components";
import { MainColors } from "./MainColors";

export const ContactWr = styled.div`
  background-color: ${MainColors.dark_1};
  padding: 100px 0;
  form {
    display: flex;
    margin: 20px 0;
    div {
      display: flex;
      flex-direction: column;
      input {
        outline: none;
        padding: 5px;
        margin-bottom: 10px;
        background-color: ${MainColors.dark_1};
        border: none;
        border-bottom: 1px solid ${MainColors.yellow};
        color: #fff;
        &:focus {
          border-bottom: 1px solid ${MainColors.orange_1};
        }
      }
      label {
        color: ${MainColors.orange_2};
      }
      textarea {
        outline: none;
        flex-grow: 1;
        padding: 5px;
        background-color: ${MainColors.dark_1};
        border: none;
        border-bottom: 1px solid ${MainColors.yellow};
        color: #fff;
        margin-bottom: 10px;
      }
    }
    button {
      color: ${MainColors.blue};
      font-weight: 500;
      border: 2px solid ${MainColors.yellow};
      background-color: transparent;
      padding: 10px 0;
      margin: 12px 0 0;
      flex-grow: 1;
    }
  }
`;
