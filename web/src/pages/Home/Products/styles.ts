import styled from "styled-components";


export const ProductsContainer = styled.main`
  width: 100%;

  padding-top: 14rem;

  
  h2 {
    text-align: center;

    font-family: ${props => props.theme.font.family.title};
    font-size: ${props => props.theme.font.size.g};
    font-weight: ${props => props.theme.font.weight.extraBold};

    color: ${props => props.theme.colors["brown-500"]};
    line-height: ${props => props.theme["line-height"].title};
  }

  section {
    padding-top: 5.4rem;
  }

  
  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    
    h2 {
      font-size: ${props => props.theme.font.size.xg};
    }
  }
  
  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {

    h2 {
      font-size: ${props => props.theme.font.size.g};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].l}) {

    h2 {
      font-size: ${props => props.theme.font.size.xg};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xl}) {

    h2 {
      text-align: start;
      font-size: ${props => props.theme.font.size.xg};
    }
  }
`;


export const Cards = styled.ul `
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
  gap: 4rem 2.4rem;

  > li {
    &:nth-child(odd) {
      > div > div:first-child > img:hover {
        transform: rotate(120deg);
        
      }
    }
  }
  
  
  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {
    justify-content: space-evenly;
  }
  
  @media (min-width: ${props => props.theme["device-breackpoints"].xl}) {
    gap: 3.2rem .8rem;
    justify-content: space-between;
  }
`;