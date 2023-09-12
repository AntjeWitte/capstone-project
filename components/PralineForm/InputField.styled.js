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
  background-color: white;
  color: var(--secondary-background);
  font-family: var(--primary-font);
  font-size: var(--primary-font-size);
  margin-left: 5px;
  padding: 8px 10px 8px 10px;
  border-radius: 24px;
  flex-grow: 1;
  width: 70%;
  border: 2px solid var(--secondary-font-color);
  outline: none;
  &:focus {
    border: 2px solid var(--tertiary-font-color);
  }
`;
