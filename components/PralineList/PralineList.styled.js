import styled from "styled-components";

// export const StyledPralineList = styled.div`
//   //background-image: var(--secondary-background-image);
//   background-color: var(--primary-font);
//   height: "100vh";
//   background-size: "cover";
//   border: 2px solid black;
//   color: var(--tertiary-font-color);
//   font-family: var(--primary-font);
//   text-align: center;
//   border-radius: 4px;
//   list-style: none;
// `;

export const StyledPralineListItem = styled.li`
  background-color: var(--primary-background);
  border: 2px solid black;
  color: var(--secondary-font-color);
  font-family: var(--primary-font);
  padding: 5px;
  list-style-type: none;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 10px;
  min-width: 25px;
  text-align: center;
  border-radius: 8px;
  font-size: var(--primary-font-size);
  grid-column: span 1;
`;
