import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  min-width: 32rem;

  height: 100%;

  padding: 2rem;

  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {
    padding: 19.8rem 4rem;
  }
`;


export const WelcomeContent = styled.section`
  max-width: 48rem;
  
  margin: 0 auto;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  img {
    width: 28rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    
    img {
      width: 32rem;
    }
  }
  
  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {
    max-width: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: center;

    gap: 3.6rem;

    img {
      width: 35rem;
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].l}) {
    gap: 4.6rem;
    

    img {
      width: 40.6rem;
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xl}) {
    gap: 5.6rem;

    img {
      width: 47.6rem;
    }
  }
`; 
