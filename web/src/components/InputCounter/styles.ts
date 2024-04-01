import styled from "styled-components";

export const InputCounterContainer = styled.div`
  width: max-content;
  height: min-content;

  display: flex;
  align-items: center;
  gap: .4rem;

  padding: .8rem 1.2rem;

  background: ${props => props.theme.colors["white-500"]};
  border-radius: 6px;


  input {
    max-width: 2rem;
      
    background: none;
    border: none;
    outline: none;

    text-align: center;
    
    
    &::-webkit-inner-spin-button, 
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  button {
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background: none;

    transform: scale(0.95);
    transition: .3s ease;

    svg {
      transition: .3s ease;
      color: ${props => props.theme.colors["purple-200"]};
    }

    &:hover {

      svg {
        transition: .3s ease;
        color: ${props => props.theme.colors["purple-300"]};
      }
    }

    &:active {
      transform: scale(1.5);
      transition: .3s ease;
    }
  }

  button svg {
    width: 1.4rem;
    height: 1.4rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {
    

    input {
      font-size: ${props => props.theme.font.size.m};
    }
  }
`;
