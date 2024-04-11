import styled from "styled-components";

export const InputCounterContainer = styled.div`
  width: max-content;
  height: min-content;

  display: flex;
  align-items: center;
  gap: .4rem;

  padding: .8rem 1.2rem;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0);


  background: ${props => props.theme.colors["white-500"]};
  border-radius: 6px;
  
  transition: .3s;

  &:hover {
    transition: .3s;

    transform: scale(1.03);

    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
    background: ${props => props.theme.colors["brown-100"]};
  }

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
    transition: transform .3s;

    svg {
      border-radius: 50%;
      padding: .1rem;

      color: ${props => props.theme.colors["purple-200"]};
    }

    &:hover {

      svg {
        transform: scale(1);
        transition: transform .3s;

        color: ${props => props.theme.colors["purple-300"]};
      }
    }

    &:active {
      transform: scale(1.5);
      transition: transform .3s;
    }
  }

  button svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`;
