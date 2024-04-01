import styled from "styled-components";


export const CoffeeCardContianer = styled.div`
  width: 25.6rem;
  height: 33.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;

  background: ${props => props.theme.colors["white-300"]};
  border-radius: 6px 36px;


  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {

    h1 {
      font-size: ${props => props.theme.font.size.xg};
    }
    
    p {
      font-size: ${props => props.theme.font.size.m};
    }
  }
  
  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {    
    text-align: start;

    h1 {
      font-size: ${props => props.theme.font.size.g};
    }
    
    p {
      font-size: ${props => props.theme.font.size.s};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].l}) {    

    h1 {
      font-size: ${props => props.theme.font.size.xg};
    }

    p {
      font-size: ${props => props.theme.font.size.m};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xl}) {
    
    h1 {
      font-size: ${props => props.theme.font.size.xxg};
    }

    p {
      font-size: ${props => props.theme.font.size.xl};
    }
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

    margin-top: -4rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;

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
    
    h1 {
      font-size: ${props => props.theme.font.size.l};
    }
    
    p {
      font-size: ${props => props.theme.font.size.s};
    }
  }
  
  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {

    h1 {
      font-size: ${props => props.theme.font.size.xl};
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