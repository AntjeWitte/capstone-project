import styled from "styled-components";

export const StyledList = styled.li`
  color: var(--primary-font-color);
  font-family: var(--primary-font);
  font-size: var(--primary-font-size);
`;

export const StyledInputLabelWrap = styled.label`
  color: var(--primary-font-color);
  font-family: var(--primary-font);
  font-size: var(--primary-font-size);
  font-weight: bold;
  // white-space: nowrap;
  width: 100%;
  /* display: flex;
  flex-direction: row; */
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`;

export const StyledInputFieldIngredient = styled.input`
  background-color: white;
  color: var(--secondary-background);
  font-family: var(--primary-font);
  font-size: var(--primary-font-size);
  padding: 4px 10px 4px 10px;
  flex-grow: 1;
  grid-column: 2 / span 2;
  grid-row: 1 / span 1;
  border-radius: 16px;
  border: 2px solid var(--secondary-font-color);
  outline: none;
  &:focus {
    border: 2px solid var(--tertiary-font-color);
  }
`;

export const StyledInputFieldWeight = styled.input`
  background-color: white;
  color: var(--secondary-background);
  font-family: var(--primary-font);
  font-size: var(--primary-font-size);
  padding: 4px 10px 4px 10px;
  width: 100%;
  grid-row: 2 / span 1;
  grid-column: 2 / span 1;
  border-radius: 16px;
  border: 2px solid var(--secondary-font-color);
  outline: none;
  &:focus {
    border: 2px solid var(--tertiary-font-color);
  }
`;
