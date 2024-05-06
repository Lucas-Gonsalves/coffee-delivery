import styled, { css } from "styled-components";


const cssBaseHoverAnimation = css`
  transition: .3s ease;
  filter: opacity(.85);

  &:hover {
    transition: .3s ease;
    filter: opacity(1);
  }

  &:active {
    transition: .3s ease;
    filter: opacity(.7);
  }
`


export const HeaderContainer = styled.header`
  width: 100%;
  height: max-content;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3.3rem 0 12.5rem;

  img {
    width: 7.5rem;

    cursor: pointer;
    ${cssBaseHoverAnimation}
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xs}) {
    img {
      width: 8.5rem;
    }
  }
`;


export const AdressMarketSet = styled.div`
  display: flex;
  align-items: center;

  gap: 1.2rem;
`;


export const Adress = styled.div`
  min-width: max-content;
  height: min-content;

  display: flex;
  align-items: center;
  
  cursor: pointer;


  gap: .4rem;
  padding: .8rem;

  background: ${props => props.theme.colors["purple-100"]};
  border-radius: 6px;

  transition: .3s ease;


  svg {
    width: 1.8rem;
    height: 1.8rem;

    color: ${props => props.theme.colors["purple-200"]};
  }

  p {
    color: ${props => props.theme.colors["purple-300"]};
    font-size: ${props => props.theme.font.size.xs};
  }

  ${cssBaseHoverAnimation}


  @media (min-width: ${props => props.theme["device-breackpoints"].xs}) {

    svg {
      width: 2rem;
      height: 2rem;
    }

    p {
      font-size: ${props => props.theme.font.size.s};
    }
  }  
  
  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {

    svg {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
`;


export const Market = styled.button`
  width: min-content;
  height: min-content;

  cursor: pointer;

  display: flex;
  align-items: center;

  position: relative;
  z-index: 0;

  background: ${props => props.theme.colors["yellow-100"]};
  
  border: none;
  border-radius: 6px;

  padding: .8rem;

  filter: opacity(.9);
  transition: .3s ;


  svg, span {
    transition: .3s ease;
  }

  svg {
    width: 1.8rem;
    height: 1.8rem;
    
    color: ${props => props.theme.colors["yellow-300"]};
  }

  ${cssBaseHoverAnimation}

  &:hover {
    filter: opacity(1);
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xs}) {
    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {
    svg {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
`;


export const MarketNotification = styled.div`
  width: 2rem;
  height: 2rem;


  background: ${props => props.theme.colors["yellow-300"]};

  position: absolute;
  z-index: 0;

  right: -.9rem;
  top: -.9rem;

  border-radius: 50%;
  
  span {
    width: min-content;
    height: min-content;

    text-align: center;

    color: ${props => props.theme.colors["white-300"]};
    
    font-size: ${props => props.theme.font.size.xxs};
    font-weight: ${props => props.theme.font.weight.bold};
    font-family: ${props => props.theme.font.family.default};
  }
`;