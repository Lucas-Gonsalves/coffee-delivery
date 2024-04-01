import styled from "styled-components";


export const PresentationContainer = styled.div`
  width: 100%;
  height: 100%;
  
  margin-top: 1.6rem;

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    max-width: max-content;
  }
`;


export const TitleSet = styled.div`
  text-align: center;

  h1 {
    max-width: 37rem;
    margin: 0 auto 1.6rem;

    color: ${props => props.theme.colors["brown-500"]};
    line-height: ${props => props.theme["line-height"].common};

    font-size: ${props => props.theme.font.size.g};
    font-weight: ${props => props.theme.font.weight.extraBold};
    font-family: ${props => props.theme.font.family.title};
  }

  p {
    max-width: 28rem;
    margin: 0 auto 4.6rem;

    font-size: ${props => props.theme.font.size.xs};
    line-height: ${props => props.theme["line-height"].common};

    color: ${props => props.theme.colors["brown-500"]};
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    
    h1 {
      max-width: 38rem;
      line-height: ${props => props.theme["line-height"].default};
      font-size: ${props => props.theme.font.size.xg};
    }
    
    p {
      font-size: ${props => props.theme.font.size.m};
    }
  }
  
  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {
    text-align: start;

    h1 {
      margin: 0 0 1.6rem;
      font-size: ${props => props.theme.font.size.g};
    }
    
    p {
      margin: 0 0 4.6rem;
      max-width: 40rem;
      font-size: ${props => props.theme.font.size.s};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].l}) {
    
    h1 {
      max-width: 42rem;
      font-size: ${props => props.theme.font.size.xg};
    }

    p {
      max-width: 44.8rem;
      font-size: ${props => props.theme.font.size.m};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xl}) {
    
    h1 {
      max-width: 60rem;
      font-size: ${props => props.theme.font.size.xxg};
    }

    p {
      max-width: 60rem;
      font-size: ${props => props.theme.font.size.xl};
    }
  }
`;


export const IconsSet = styled.div`
  width: min-content;

  display: flex;
  flex-direction: column;

  background: ${props => props.theme.colors["white-300"]};
  padding: 2.6rem;
  border-radius: 16px;

  gap: 1.6rem;
  margin: 0 auto;

  > div {
    width: 23.2rem;
    display: flex;

    flex-direction: column;
    gap: 1.6rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {
    width: min-content;
    margin: 0;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].l}) {
    width: 100%;
    background: none;


    flex-direction: row;
    flex-wrap: wrap;
    
    gap: 4rem;

    margin: 0;
    padding: 0;

    > div {
      width: max-content;
      
      gap: 2rem;
    }
  }
`;