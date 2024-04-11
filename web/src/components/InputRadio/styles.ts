import styled from "styled-components";


export const InputRadioContainer = styled.label`
  width: 100%;
  height: min-content;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props => props.theme.colors["white-400"]};

  z-index: 0;
  position: relative;

  border-radius: 6px;

  cursor: pointer;

  > input:checked + div {

    transition: .8s ease;

    border-style: solid;
    border-width: 1px;
    border-color: ${props => props.theme.colors["purple-200"]};

    div {
      width: 100%;
    }
  }

  > input {
    opacity: 0;
    position: absolute;

    z-index: -1;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;



export const InputRadioContent = styled.div`
  width: 100%;
  height: min-content;

  display: flex;
  align-items: center;
  justify-content: center;
  
  gap: .8rem;
  padding: 1.1rem;
  
  background: transparent;

  border-width: 1px;
  border-style: solid;
  border-color: transparent;

  
  z-index: 0;
  position: relative;

  border-radius: 6px;

  
  div {
    width: 0%;
    height: 100%;

    z-index: -1;
    left: 0;
    
    position: absolute;


    background: ${props => props.theme.colors["purple-150"]};
    
    transition: .8s;
    border-radius: 6px;
  }
  
  &:hover {
    
    > div {
      width: 100%;
    }
  }
  
  svg {
    width: 1.6rem;
    height: 1.6rem;

    color: ${props => props.theme.colors["purple-200"]};
  }

  span {
    font-size: ${props => props.theme.font.size.xs};
    line-height: ${props => props.theme["line-height"].common};
  }
  
  
  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    padding: 1.3rem;
  } 
  
  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {
    padding: 1.5rem .6rem;

    span {
      font-size: ${props => props.theme.font.size.xs};
    }
  
    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`;