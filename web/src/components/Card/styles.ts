import styled from "styled-components";


export const CardContianer = styled.div`
  width: 25.6rem;
  height: 31rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;

  background: ${props => props.theme.colors["white-300"]};
  border-radius: 6px 36px;

  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);

  transition: .6s ease;

  &:hover {
    transition: .6s ease;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.4);
  }
`;


export const ImageTagContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.2rem;

  img {
    width: 12rem;
    height: 12rem;

    margin-top: -5rem;
    transition: .6s ease-in-out;
  }

  img:hover {
    transition: .6s ease-in-out;

    transform: rotate(-120deg);
  }
`;


export const Tags = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;

  list-style: none;

  gap: .4rem;
`;

export const TitleContent = styled.div`
  text-align: center;


  h3 {
    padding-top: 1.6rem;

    font-size: ${props => props.theme.font.size.m};
    color: ${props => props.theme.colors["brown-400"]};
  }

  p {
    padding-top: .8rem;

    font-size: ${props => props.theme.font.size.xs};

    color: ${props => props.theme.colors["brown-200"]};
    font-weight: ${props => props.theme.font.weight.medium};
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    
    h3 {
      font-size: ${props => props.theme.font.size.l};
    }
    
    p {
      font-size: ${props => props.theme.font.size.s};
    }
  }
  
  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {

    h3 {
      font-size: ${props => props.theme.font.size.xl};
    }
  }


  @media (min-width: ${props => props.theme["device-breackpoints"].l}) {    

    h1 {
      font-size: ${props => props.theme.font.size.xg};
    }
  }
`;


export const PriceBuyActionsContent = styled.div`
  padding-top: 3.3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: .8rem;
`;


export const Price = styled.div`

  span {
    font-size: ${props => props.theme.font.size.xs};
  }

  strong {
    font-size: ${props => props.theme.font.size.xl};
    font-weight: ${props => props.theme.font.weight.extraBold};
  }


  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {
    span {
      font-size: ${props => props.theme.font.size.s};
    }
    
    strong {
      font-size: ${props => props.theme.font.size.xxl};
    }

  }
`;


export const BuyActions = styled.div`
  display: flex;
  align-items: center;

  gap: .8rem;
`;