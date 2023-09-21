import styled from "styled-components";

export const StyledMessageBackground = styled.div`
  background-color: rgb(0 0 0 / 45%);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1fr;
`;

export const StyledMessageModal = styled.div`
  //background-image: var(--secondary-background-image);
  background-color: var(--primary-font-color);
  background-color: white;
  /* height: "100vh";
  background-size: "cover"; */
  /* background: white; */
  border: 4px solid var(--tertiary-font-color);
  color: var(--tertiary-font-color);
  font-family: var(--primary-font);
  font-size: var(--secondary-font-size);
  text-align: center;
  position: fixed;
  padding: 8px;
  top: 50px;
  left: 24px;
  right: 24px;
  bottom: 450px;
  border-radius: 24px;

  overflow: auto;
  @media print {
    display: none;
  }
`;
