import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
--primary-font-color: #bec2cb; //hellgrau
--secondary-font-color: #b8733a; //orange
--tertiary-font-color: #794228; //dunkelrot
--primary-background: #372214; //braun
--secondary-background: #34302c; //schwarz
--primary-font: Verdana;
--primary-font-size: 13px;
--secondary-font-size: 16px;
--primary-background-image: url("https://images.unsplash.com/photo-1599599811214-3d44be99547f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80");
--secondary-background-image: url("https://images.unsplash.com/photo-1602101025912-f4a36c505e28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80");  
--gold-folie: url("https://images.unsplash.com/photo-1545873692-64145c8c42ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80");
}

  body {
    margin: 0;
    font-family: system-ui;
    padding: 2rem;
  }
`;
