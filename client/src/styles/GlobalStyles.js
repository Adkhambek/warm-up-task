import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
  font-size: 10px;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  list-style: none;
  font-family: 'Montserrat', sans-serif;
}

body {
  background-color: aliceblue;
}

a {
  text-decoration: none;
  font-size: 2rem;
}
`;

export default GlobalStyles;
