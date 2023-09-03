import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: grid;
  background-color: grey;
  grid-template-columns: 30% 30% 30%;
  margin: 20px;
  border-radius: 16px;
  gap: 10px;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
`;

export const StyledBox = styled.div`
  color: black;
  margin: 20px;
  background-color: white;
  padding-top: 25px;
  padding-bottom: 25px;
  border-radius: 8px;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
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
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }
`;
