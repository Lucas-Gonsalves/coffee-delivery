import styled from "styled-components";

export const NotFoundContainer = styled.div`
  width: 100%;
  min-width: 32rem;

  height: 100vh;

  position: relative;
  z-index: 0;

  display: flex;
  flex-direction: column-reverse;

  align-items: center;
  justify-content: center;

  padding: 3.4rem;
  gap: 4.4rem;

  img {
    width: 20rem;
    height: 20rem;

    color: ${props => props.theme.colors["yellow-200"]};
  }
  
  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    flex-direction: row;

    img {
      width: 25rem;
      height: 25rem;
    } 
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].l}) {
    gap: 10.8rem;


    img {
      width: 30rem;
      height: 30rem;
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xl}) {
    gap: 12.8rem;

    img {
      width: 35rem;
      height: 35rem;
    }
  }
`;

export const ApresentationContent = styled.section`
  display: flex;
  flex-direction: column;

  gap: 5.6rem;
`;



export const TitleCotent  = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: ${props => props.theme.colors["brown-500"]};
    line-height: ${props => props.theme["line-height"].common};
    
    font-size: ${props => props.theme.font.size.eeg};
    font-weight: ${props => props.theme.font.weight.extraBold};
    font-family: ${props => props.theme.font.family.title};
  }

  span {
    font-size: ${props => props.theme.font.size.xl};
    line-height: ${props => props.theme["line-height"].common};
    font-weight: ${props => props.theme.font.weight.extraBold};

    color: ${props => props.theme.colors["brown-500"]};
  }


  @media (min-width: ${props => props.theme["device-breackpoints"].xs}) {
    h1 {
      font-size: ${props => props.theme.font.size.eeeg};
    }

    span {
      font-size: ${props => props.theme.font.size.g};
    }
  }
`;



export const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  h2 {
    font-size: ${props => props.theme.font.size.m};
    line-height: ${props => props.theme["line-height"].common};
    font-weight: ${props => props.theme.font.weight.extraBold};

    color: ${props => props.theme.colors["yellow-200"]};
  }

  div {
    display: flex;
    flex-direction: column;

    gap: .4rem;

    p {
      font-size: ${props => props.theme.font.size.s};
      line-height: ${props => props.theme["line-height"].common};
  
      color: ${props => props.theme.colors["brown-500"]};
    }
  }
  

  @media (min-width: ${props => props.theme["device-breackpoints"].xs}) {
    
    div p {
      font-size: ${props => props.theme.font.size.m};
    }
  }
  
  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {
    
    div p {
      font-size: ${props => props.theme.font.size.l};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].l}) {

    div p {
      font-size: ${props => props.theme.font.size.m};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xl}) {

    div p {
      font-size: ${props => props.theme.font.size.xl};
    }
  }
`;