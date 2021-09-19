import styled from "styled-components";
import { MainColors } from "./MainColors";

export const ContactWr = styled.div`
  background-color: ${MainColors.dark_1};
  padding: 100px 0;
  form {
    display: flex;
    div {
      display: flex;
      flex-direction: column;
      input {
        outline: none;
        padding: 5px;
        margin-bottom: 10px;
        background-color: ${MainColors.dark_2};
        border: none;
        border-bottom: 1px solid ${MainColors.yellow};
        color: #fff;
      }
      textarea {
        outline: none;
        flex-grow: 1;
        padding: 5px;
        background-color: ${MainColors.dark_2};
        border: none;
        border-bottom: 1px solid ${MainColors.yellow};
        color: #fff;
        margin-bottom: 10px;
      }
    }
  }
`;
