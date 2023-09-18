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
--grey-background: url("https://images.unsplash.com/photo-1549007860-1927001d0502?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80");
--default-praline: url("https://cdn.pixabay.com/photo/2023/05/12/15/39/praline-7988789_1280.png");
--silber-folie: url("https://images.unsplash.com/photo-1550731879-14c16845e2b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80");
}

  body {
    margin: 0;
    font-family: system-ui;
    padding: 20px 25px 8px 25px;
  }
`;
