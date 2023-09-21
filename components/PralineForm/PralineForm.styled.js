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
    color: gold;
    cursor: pointer;
  }
`;

export const StyledButtonOrange = styled.button`
  margin: 5px;
  background-color: var(--secondary-font-color);
  //color: var(--secondary-background);
  color: gold;
  padding: 8px 10px 8px 10px;
  border-radius: 24px;
  margin: 5px;
  border: 2px solid var(--tertiary-font-color);
  font-family: var(--primary-font);
  min-width: 100px;
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
    color: gold;
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
    color: gold;
    cursor: pointer;
  }
`;

export const StyledButtonGrid = styled.button`
  background-color: var(--primary-font-color);
  color: var(--secondary-background);
  padding: 4px 10px 4px 10px;
  border-radius: 24px;
  margin: 5px;
  border: 2px solid var(--tertiary-font-color);
  font-family: var(--primary-font);
  width: 45px;
  grid-column: 3;
  grid-row: 2;
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

export const GridContainerRows = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const Container = styled.div`
  border: 2px solid var(--tertiary-font-color);
  padding: 5px;
  border-radius: 16px;
  background: rgba(190, 194, 203, 0.4);
`;

export const StyledLogo = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 3px solid var(--tertiary-font-color);
  background-image: url("/../logo_heart.png"), var(--gold-folie);
  background-position: center;
  background-size: 150%;
  grid-column: 1;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledH1 = styled.h1`
  text-align: center;
  color: gold;
  font-family: var(--primary-font);
  font-size: 22px;
  display: grid;
  grid-template-columns: 27% 73%;
`;

export const P = styled.p`
  grid-column: 2;
`;
