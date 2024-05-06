import styled from "styled-components";


export const CardSmallContainer = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: .8rem;
  padding: .8rem .4rem;

  img {
    width: 4.2rem;
    height: 4.2rem;

    transition: 2s ease;
  }

  img:hover {
    transition: 2s ease;
    transform: rotate(-360deg);
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xs}) {
    gap: 2rem;
 
    img {
      width: 5.2rem;
      height: 5.2rem;
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    gap: 1rem;

    img {
      width: 5rem;
      height: 5rem;
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {

    gap: 2rem;


    img {
      width: 5.6rem;
      height: 5.6rem;
    }
  }
`;


export const InformationsContent = styled.div`
  width: 100%;
`;


export const TitleContent = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: .8rem;
  gap: .4rem;

  h3 {
    min-width: 10.2rem;

    font-size: ${props => props.theme.font.size.xs};
    color: ${props => props.theme.colors["brown-400"]};
    line-height: ${props => props.theme["line-height"].default};
    font-weight: ${props => props.theme.font.weight.regular};
  }
  
  span, strong {
    font-size: ${props => props.theme.font.size.s};
    font-weight: ${props => props.theme.font.weight.bold};
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xs}) {

    h3 {
      font-size: ${props => props.theme.font.size.s}; 
    }

    span, strong {
      font-size: ${props => props.theme.font.size.m};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    gap: 0;

    h3 {
      font-size: ${props => props.theme.font.size.xs}; 
    }

    span, strong {
      font-size: ${props => props.theme.font.size.s};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {
    
    h3 {
      font-size: ${props => props.theme.font.size.s}; 
    }

    span, strong {
      font-size: ${props => props.theme.font.size.m};
    }
  }
`;


export const ButtonSet = styled.div`
  width: max-content;

  display: flex;
  align-items: center;

  gap: .8rem;

  > button {
    min-height: 3.419rem;
  }
`;