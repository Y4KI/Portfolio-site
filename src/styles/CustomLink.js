import { Link } from "react-scroll";
import styled from "styled-components";
import { MainColors } from "../data/MainColors";

export const Up = styled(Link)`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background-color: ${MainColors.dark_2};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 20px;
  bottom: 20px;
  z-index: 1000;
  opacity: 0.8;
  backdrop-filter: blur(10px);
`;
