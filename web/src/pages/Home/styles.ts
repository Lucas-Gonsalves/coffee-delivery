import styled from "styled-components";


export const HomeContainer = styled.div`
  width: 100%;
  min-width: 32rem;

  height: max-content;

  position: relative;
  z-index: 0;

  padding: 0 2rem;

  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {
    padding: 0 4rem;
  }

  main {
    max-width: 113.2rem;
    margin: 0 auto; 
  }
`;


export const PresentationBackground = styled.img`
  width: 100%;
  height: 56.2rem;
  
  position: absolute;
  z-index: -1;

  top: 10.4rem;
  left: 50%;

  filter: blur(20px);

  transform: translate(-50%);

  display: none;

  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {
    display: block;
  }
`;


export const WelcomeContent = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  
  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {
  
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    gap: 3.6rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].l}) {
    gap: 4.6rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xl}) {
    gap: 5.6rem;
  }
`; 


export const WelcomeContentLogo = styled.img`
  width: 28rem;
  transition: .3s ease;

  &:hover {
    transform: rotate(-5deg);
    transition: .3s ease;
  }

  &:active {
    transform: rotate(5deg);
    transition: .3s ease;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    width: 32rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {
    width: 35rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].l}) {
    width: 40.6rem;
  }
  
  @media (min-width: ${props => props.theme["device-breackpoints"].xl}) {
    width: 47.6rem;
  }
`;