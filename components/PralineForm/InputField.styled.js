import styled from "styled-components";

export const StyledInputLabel = styled.label`
  color: var(--primary-font-color);
  font-family: var(--primary-font);
  font-size: var(--primary-font-size);
  font-weight: bold;
  white-space: nowrap;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledInputField = styled.input`
  color: var(--secondary-background);
  font-family: var(--primary-font);
  font-size: var(--primary-font-size);
  margin-left: 5px;
  padding: 5px 10px 5px 10px;
  flex-grow: 1;
  width: 70%;
  border-radius: 16px;
  background-color: var(--secondary-font-color);
  border: 1px solid var(--tertiary-font-color);
  outline: none;
  &:focus {
    border: 2px solid var(--tertiary-font-color);
  }
`;
