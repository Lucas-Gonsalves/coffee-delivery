import styled from "styled-components";


export const InputContainer = styled.label`
  width: 100%;

`;


export const InputSuffixSet = styled.div`
  input {
    width: 100%;
    min-width: min-content;

    height: min-content;

    padding: 1.2rem;
    background: ${props => props.theme.colors["white-400"]};
    
    outline: none;

    font-size: ${props => props.theme.font.size.xs};
    font-weight: ${props => props.theme.font.weight.medium};
    
    border-radius: 4px;

    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.theme.colors["white-500"]};

    &::placeholder {
      color: ${props => props.theme.colors["brown-200"]};
      font-weight: ${props => props.theme.font.weight.medium};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xs}) {
    
    input {
      font-size: ${props => props.theme.font.size.s};
    }
  }
`;


export const SuffixContainer = styled.span``;


export const ErrorContianer = styled.span``;