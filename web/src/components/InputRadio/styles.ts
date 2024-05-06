import styled from "styled-components";




export const InputRadioContainer = styled.label`
  width: 100%;
  height: min-content;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.colors["white-400"]};

  z-index: 0;
  position: relative;

  border-radius: 6px;

  cursor: pointer;



  > input + div {
    border-style: solid;
    border-width: 1px;
    border-color:  transparent;
  }
  
  > input:checked + div {

    transition: .8s ease;

    border-style: solid;
    border-width: 1px;
    border-color: ${(props) => {
   
    if(props["aria-invalid"]){
      return props.theme.colors["red-50"]
    }
    
    return props.theme.colors["purple-200"]}
  };

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
  padding: .88rem;
  

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

    background: ${(props) => {
    
      if(props["aria-invalid"]) {
        return props.theme.colors["red-75"]
      }
      
      return props.theme.colors["purple-150"]
    }};
    
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

    
    color: ${(props) => {
   
      if(props["aria-invalid"]){
        return props.theme.colors["red-100"]
      }
      
      return props.theme.colors["purple-200"]}
    };
  }

  span {
    font-size: ${props => props.theme.font.size.xs};
    line-height: ${props => props.theme["line-height"].common};
  }
  
  
  @media (min-width: ${props => props.theme["device-breackpoints"].xs}) {
    padding: 1.31rem;
  
    span {
      font-size: ${props => props.theme.font.size.s};
    }

    svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  } 

  
  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    padding: .98rem;

    span {
      font-size: ${props => props.theme.font.size.xs};
    }
  
    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
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

  @media (min-width: ${props => props.theme["device-breackpoints"].xl}) {
    span {
      text-transform: uppercase;
    }
  }
`;