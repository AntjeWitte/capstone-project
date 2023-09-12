import styled from "styled-components";
import { CldUploadButton } from "next-cloudinary";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledButton = styled.button`
  margin: 5px;
  background-color: var(--primary-font-color);
  color: var(--secondary-background);
  padding: 8px 10px 8px 10px;
  border-radius: 24px;
  margin: 5px;
  border: 2px solid var(--tertiary-font-color);
  font-family: var(--primary-font);
  min-width: 30px;
  text-align: center;
  font-size: var(--primary-font-size);
  &:hover {
    background-color: var(--secondary-font-color);
    border: 1px solid var(--tertiary-font-color);
    cursor: pointer;
  }
`;

export const StyledButtonOrange = styled.button`
  margin: 5px;
  background-color: var(--secondary-font-color);
  color: var(--secondary-background);
  padding: 8px 10px 8px 10px;
  border-radius: 24px;
  margin: 5px;
  border: 2px solid var(--tertiary-font-color);
  font-family: var(--primary-font);
  min-width: 30px;
  text-align: center;
  font-size: var(--primary-font-size);
  &:hover {
    background-color: var(--secondary-font-color);
    border: 1px solid var(--tertiary-font-color);
    cursor: pointer;
  }
`;

export const StyledButtonBig = styled.button`
  margin: 5px;
  background-color: var(--primary-font-color);
  color: var(--secondary-background);
  padding: 8px 10px 8px 10px;
  border-radius: 24px;
  margin: 5px;
  grid-column: span 2;
  border: 2px solid var(--tertiary-font-color);
  font-family: var(--primary-font);
  min-width: 30px;
  text-align: center;
  font-size: var(--primary-font-size);
  &:hover {
    background-color: var(--secondary-font-color);
    border: 1px solid var(--tertiary-font-color);
    cursor: pointer;
  }
`;

export const StyledLink = styled.a`
  color: var(--primary-font-color);
  font-family: var(--primary-font);
  font-size: var(--primary-font-size);
`;

export const StyledUploadButton = styled(CldUploadButton)`
  margin: 5px;
  background-color: var(--primary-font-color);
  color: var(--secondary-background);
  padding: 8px 10px 8px 10px;
  border-radius: 24px;
  margin: 5px;
  border: 2px solid var(--tertiary-font-color);
  font-family: var(--primary-font);
  min-width: 25px;
  text-align: center;
  font-size: var(--primary-font-size);
  &:hover {
    background-color: var(--secondary-font-color);
    border: 1px solid var(--tertiary-font-color);
    cursor: pointer;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Container = styled.div`
  border: 2px solid var(--tertiary-font-color);
  padding: 5px;
  border-radius: 16px;
  background: rgba(190, 194, 203, 0.4);

  /* background-image: var(--grey-background);
  height: "80vh";
  background-size: cover; */
`;
