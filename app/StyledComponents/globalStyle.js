import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.5;
    letter-spacing: -0.5px;
    background-color: #1D1F21;
    color: black;
    margin: 0;
    padding: 0;
  }

  ul, li {
    list-style-type: none;
    margin: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

`;

export default GlobalStyle;
