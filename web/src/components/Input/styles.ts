import styled from "styled-components";


export const InputContainer = styled.label`
  width: 100%;

`;


export const InputSuffixSet = styled.div`
  input {
    width: 100%;
    min-width: min-content;

    height: min-content;

    padding: .8rem;

    transition: ease .3s;

    ${(props) => {

      if(props["aria-invalid"] === "true") {
        return `
          background: ${props.theme.colors["red-25"]};
          border-color: ${props.theme.colors["red-50"]};
        `;
      }

      return `
        background: ${props.theme.colors["white-400"]};
        border-color: ${props.theme.colors["white-500"]};
      `;
    }}
    
    outline: none;

    font-size: ${props => props.theme.font.size.xs};
    font-weight: ${props => props.theme.font.weight.medium};
    
    border-radius: 4px;

    border-width: 1px;
    border-style: solid;

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px ${(props) => props.theme.colors["white-400"]} inset;
      -webkit-text-fill-color: ${(props) => props.theme.colors["brown-300"]};
    }

    &::placeholder {
      color: ${props => props.theme.colors["brown-200"]};
      font-weight: ${props => props.theme.font.weight.medium};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xs}) {
    input {
      padding: 1.2rem;
      font-size: ${props => props.theme.font.size.s};
    }
  }
`;


export const SuffixContainer = styled.span``;


export const ErrorContianer = styled.span``;