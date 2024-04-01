import styled from "styled-components";


export const ProductsContainer = styled.main`
  width: 100%;

  padding-top: 7.2rem;

  h1 {
    text-align: center;

    font-family: ${props => props.theme.font.family.title};
    font-size: ${props => props.theme.font.size.g};
    font-weight: ${props => props.theme.font.weight.extraBold};

    color: ${props => props.theme.colors["brown-500"]};
    line-height: ${props => props.theme["line-height"].title};
  }

  section {
    padding-top: 5.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-wrap: wrap;
    gap: 2.4rem;
  }

  
  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    
    h1 {
      font-size: ${props => props.theme.font.size.xg};
    }
  }
  
  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {
    max-width: 78.6rem;
    margin: auto;


    h1 {
      text-align: start;
      font-size: ${props => props.theme.font.size.g};
    }

    section {
      justify-content: flex-start;
      gap: 2.4rem .9rem;

    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].l}) {
    max-width: 90.88rem;


    h1 {
      font-size: ${props => props.theme.font.size.xg};
    }

    section {
      justify-content: space-between;

    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xl}) {
    max-width: 113.2rem;

    h1 {
      font-size: ${props => props.theme.font.size.xxg};
    }

    section {
      gap: 3.2rem;
      justify-content: flex-start;
    }
  }
`;