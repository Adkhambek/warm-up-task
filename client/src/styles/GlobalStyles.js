import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

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
}

body {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 2rem;
}
`;

export default GlobalStyles;
