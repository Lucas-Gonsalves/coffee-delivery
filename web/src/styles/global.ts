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
    background: ${props => props.theme.colors["white-200"]};
    -webkit-font-smoothing: antialiased;
    
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    touch-action: manipulation;
  }
  
  body, input, text-area, button, select {
    font-family: ${props => props.theme.font.family.default};
    font-size: ${props => props.theme.font.size.s};
    font-weight: ${props => props.theme.font.weight.regular};
    color: ${props => props.theme.colors["brown-300"]};
    line-height: ${props => props.theme["line-height"].default};
  }
`;