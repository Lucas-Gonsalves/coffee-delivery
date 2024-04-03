import styled from "styled-components";

interface ButtonMarketContainerProps {
  "data-is-button-active": boolean
}


export const ButtonMarketContainer = styled.button`
  width: max-content;
  height: min-content;
  
  padding: .8rem;
  position: relative;
  z-index: 0;

  transition: .5s ease;

  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.colors["purple-200"]};

  background: none;
  border-radius: 12px;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;


  svg {
    width: 1.8rem;
    height: 1.8rem;

    color: ${props => props.theme.colors["purple-200"]};
    transition: .5s ease;
  }

  
  &:hover {
    transform: scale(.9);
  
    svg {
      transition: .5s ease;
      color: ${props => props.theme.colors["white-300"]};
    }

    div {
      transition: .5s ease;
      transform: scale(1);
    }
  }

  &:active {
    transition: .5s ease;
    transform: scale(1);
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {

    svg {
      width: 2.2rem;
      height: 2.2rem;      
    }
  }
`;


export const ButtonMarketHoverContainer = styled.div<ButtonMarketContainerProps>`
  width: 100%;
  height: 100%;

  position: absolute;
  z-index: -1;

  background: ${props => props.theme.colors["purple-200"]};
  
  transform: scale(0);
  transition: .3s ease;

  border-radius: 8px;
`;