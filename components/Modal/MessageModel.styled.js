import styled from "styled-components";

export const StyledMessageModal = styled.div`
  //background-image: var(--secondary-background-image);
  background-color: var(--primary-font-color);
  /* height: "100vh";
  background-size: "cover"; */
  /* background: white; */
  border: 2px solid black;
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
