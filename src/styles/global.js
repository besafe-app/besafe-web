import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html, body, #root {
    height: 100%;
  }

  body{
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }

  input[type=checkbox]{
    cursor: pointer;
    color:white;
    background-color: #FFFFFF;
    outline: 0;
    z-index: 3;
    width: 17px;
    height: 17px;
  }

  a{
    text-decoration: none !important;
    color: inherit !important;
  }

  html{
    scroll-behavior: smooth;
  }
`;
