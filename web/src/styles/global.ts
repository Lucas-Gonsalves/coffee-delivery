import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;

    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-family: ${props => props.theme.font.family.default};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, text-area, button {
    font-size: ${props => props.theme.font.size.s};
    font-weight: ${props => props.theme.font.weight.regular};
    color: ${props => props.theme.colors["brown-300"]};
  }
`;