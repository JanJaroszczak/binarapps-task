import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%;
  font-weight: 400;
}

body{
 font-family: 'Prompt', sans-serif;
}

button {
  cursor: pointer;
  font-family: 'Prompt', sans-serif;
  outline: none;
}
`;

export default GlobalStyle;
