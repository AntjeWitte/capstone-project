import styled from "styled-components";

export const StyledBackground = styled.div`
  background-color: rgb(0 0 0 / 45%);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1fr;
`;

export const StyledModal = styled.div`
  background-image: var(--gold-folie);
  background-size: contain;
  border: 2px solid black;
  color: var(--tertiary-font-color);
  font-family: var(--primary-font);
  text-align: center;
  position: fixed;
  top: 24px;
  left: 8px;
  right: 8px;
  bottom: 8px;
  border-radius: 16px;

  overflow: auto;
  @media print {
    display: none;
  }
`;
