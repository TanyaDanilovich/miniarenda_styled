import {createGlobalStyle} from "styled-components";
import {OpenSansFont} from './mixins';

export const GlobalStyle = createGlobalStyle`




  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    ${OpenSansFont({})};
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({theme}) => theme.colors.black};
    background-color: ${({theme}) => theme.colors.white};
  }


  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: inherit;
    font-weight: ${({theme}) => theme.fonts.weight.bold};
    color: inherit;
  }


  h1,
  h2,
  h3 {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: ${({theme}) => theme.fonts.size.h3}
  }

  ,

  h4,
  h5,
  h6 {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  p {
    margin: 0 0 10px;
    line-height: 1.4;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;

  }


  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */

  ul,
  ol {
    list-style: none;
  }


  li {
    list-style-type: none;
  }

  button {
    background-color: unset;
    border: none;
    font-family: inherit;
    cursor: pointer;
  }


  /* Inherit fonts for inputs and buttons */

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  img {
    vertical-align: middle;
  }


`;
