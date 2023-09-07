import styled from "styled-components";
// import Link from "next/link";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledButton = styled.button`
  background-color: var(--tertiary-font-color);
  border: 1px solid var(--secondary-background);
  color: var(--primary-font-color);
  font-family: var(--primary-font);
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  min-width: 25px;
  text-align: center;
  border-radius: 16px;
  font-size: var(--primary-font-size);
  &:hover {
    background-color: var(--secondary-font-color);
    border: 1px solid var(--tertiary-font-color);
  }
`;

export const StyledLink = styled.a`
  color: var(--primary-font-color);
  font-family: var(--primary-font);
  font-size: var(--primary-font-size);
`;
