import {createGlobalStyle} from "styled-components";
import {theme} from './Theme.styled';
import {font} from './mixins';


export const GlobalStyle = createGlobalStyle`

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    ${font({
      family: `${theme.fonts.family.base}, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif`
    })}
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font_dark};
    line-height: 1.2;
  }

  h1 {
    ${font({family: theme.fonts.family.accent, size: theme.fonts.size.h1, weight: theme.fonts.weight.bold})}
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: inherit;
    font-weight: ${theme.fonts.weight.medium};
    color: inherit;
  }


  h1,
  h2,
  h3 {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  h4,
  h5,
  h6 {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  p {
    margin: 0 0 10px;
    line-height: 1.4;
  }

  a {
    text-decoration: none;
    cursor: pointer;
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
