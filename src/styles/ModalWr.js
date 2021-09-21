import styled from "styled-components";

export const ModalWr = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 10;
  top: 50px;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #00000080;
  .contentWrap {
    width: 500px;
    height: 600px;
    background-color: #fff;
    z-index: 11;
    padding: 10px;
    margin: 50px 0 0;
  }
`;
