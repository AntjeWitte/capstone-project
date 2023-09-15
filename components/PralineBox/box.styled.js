import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: grid;
  background-image: var(--gold-folie);
  background-size: contain;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 20px;
  padding: 10px;
  border-radius: 16px;
  gap: 10px;
  print-color-adjust: exact;
  print-color-adjust: exact;
`;

export const StyledBox = styled.div`
  color: black;
  background-color: var(--primary-font-color);
  box-shadow: inset -4px -4px 15px 8px var(--secondary-background);
  opacity: 0.7;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  padding: 3px;
  print-color-adjust: exact;
  print-color-adjust: exact;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const Print = styled.div`
  @media print {
    position: fixed;
    z-index: 99;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 24px;
    background-color: white;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

export const StyledH2 = styled.h2`
  text-align: center;
  color: var(--primary-font-color);
  font-family: var(--primary-font);
  font-size: var(--secondary-font-size);
`;

export const StyledDivBold = styled.div`
  color: var(--primary-font-color);
  font-family: var(--primary-font);
  font-size: var(--primary-font-size);
  font-weight: bold;
`;

export const StyledDiv = styled.div`
  color: var(--primary-font-color);
  font-family: var(--primary-font);
  font-size: var(--primary-font-size);
  font-weight: normal;
`;

export const StyledH1 = styled.h1`
  text-align: center;
  color: var(--primary-font-color);
  font-family: var(--primary-font);
  font-size: 25px;
`;
