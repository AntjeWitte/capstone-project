import styled from "styled-components";

export const StyledList = styled.li`
  color: var(--primary-font-color);
  font-family: var(--primary-font);
  font-size: var(--primary-font-size);
`;

export const StyledInputFieldIngredient = styled.input`
  color: var(--secondary-background);
  font-family: var(--primary-font);
  font-size: var(--primary-font-size);
  margin: 5px;
  padding: 5px 10px 5px 10px;
  width: 30%;
  flex-grow: 1;
  border-radius: 16px;
  background-color: var(--secondary-font-color);
  border: 1px solid var(--tertiary-font-color);
  outline: none;
  &:focus {
    border: 2px solid var(--tertiary-font-color);
  }
`;

export const StyledInputFieldWeight = styled.input`
  color: var(--secondary-background);
  font-family: var(--primary-font);
  font-size: var(--primary-font-size);
  margin: 5px;
  padding: 5px 10px 5px 10px;
  width: 15%;
  border-radius: 16px;
  background-color: var(--secondary-font-color);
  border: 1px solid var(--tertiary-font-color);
  outline: none;
  &:focus {
    border: 2px solid var(--tertiary-font-color);
  }
`;
