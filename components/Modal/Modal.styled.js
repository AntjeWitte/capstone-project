import styled from "styled-components";

export const StyledBackground = styled.div`
  background-color: rgb(0 0 0 / 45%);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const StyledModal = styled.div`
  background-image: var(--secondary-background-image);
  height: "100vh";
  background-size: "cover";
  /* background: white; */
  border: 2px solid black;
  color: var(--primary-font-color);
  font-family: var(--primary-font);
  text-align: center;
  position: fixed;
  top: 110px;
  left: 8px;
  right: 8px;
  bottom: 8px;
  border-radius: 16px;
  overflow: auto;
  @media print {
    display: none;
  }
`;
