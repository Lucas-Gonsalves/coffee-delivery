import styled from "styled-components";

export const SucessContainer = styled.div`
  min-width: 32rem;
  width: 100%;
  
  height: 100%;


  main {
    width: 100%;
    height: max-content;

    padding: 0 2.4rem 8.3315rem;
    margin: auto;

    header {
      padding: 3.3rem 0 5.5rem;
    }
  }


  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    main {
      padding: 0 4.2rem;
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].l}) {
    main {
      padding: 0 8.2rem;
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xl}) {
    main {
      padding: 0 13rem;
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].g}) {
    main {
      padding: 0 16rem;
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xg}) {
    main {
      padding: 0 20rem;
    }
  }

`;


export const SucessContent = styled.section`

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {

    display: flex;
    justify-content: space-between;


    gap: 2.6rem;
  }
 
  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {
    gap: 3.2rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].l}) {
    gap: 8.6rem;
  }
`; 


const imgStyle = styled.div`
  max-width: 32.2rem;
  max-height:  32.2rem;

  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
  }
`;


export const ImgDeliveryManMobile = styled(imgStyle)`
  margin: 0 auto;


  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    display: none;
  }
`;


export const TitleContent = styled.div`
  max-width: max-content;
  
  margin: auto;
  padding-top: 2rem;

  h1 {
    text-align: center;

    font-family: ${props => props.theme.font.family.title};
    font-size: ${props => props.theme.font.size.g};
    font-weight: ${props => props.theme.font.weight.extraBold};
    
    line-height: ${props => props.theme["line-height"].common};
    color: ${props => props.theme.colors["yellow-200"]};
  }

  p {
    text-align: center;
    padding-top: .8rem;

    font-size: ${props => props.theme.font.size.s};
    font-weight: ${props => props.theme.font.weight.regular};
    
    line-height: ${props => props.theme["line-height"].common};
    color: ${props => props.theme.colors["brown-400"]};
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xs}) {
    
    h1 {
      font-size: ${props => props.theme.font.size.gg};
    }

    p {
      font-size: ${props => props.theme.font.size.m};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    margin: 0;
    
    h1 {
      text-align: start;
      font-size: ${props => props.theme.font.size.xl};
    }

    p {
      text-align: start;
      font-size: ${props => props.theme.font.size.xs};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {

    h1 {
      font-size: ${props => props.theme.font.size.xxl};
    }

    p {
      font-size: ${props => props.theme.font.size.m};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].l}) {

    h1 {
      font-size: ${props => props.theme.font.size.g};
    }

    p {
      font-size: ${props => props.theme.font.size.l};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xl}) {

    h1 {
      font-size: ${props => props.theme.font.size.gg};
    }

    p {
      font-size: ${props => props.theme.font.size.xl};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].g}) {
    h1 {
      font-size: ${props => props.theme.font.size.xg};
    }
  }
`;


export const BoxAdressAndButtonSet = styled.div`
  min-width: 24.4rem;
  
  display: flex;
  flex-direction: column;
  gap: 8rem;

> button {
    max-width: 36.14rem;
    margin: auto;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    max-width: max-content;
    gap: 4rem;

    
    > button {
      max-width: 100%;

      margin: 0;
    }
  }
`;

export const BoxAdressInformation = styled.div`
  max-width: max-content;

  padding: 2.6rem;
  margin: 0 auto;

  position: relative;
  z-index: 1;
  
  background: blue;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;



  &::before,  &::after {
    content: "";
    width: 100%;
    height: 100%;

    position: absolute;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    border-radius: 6px 36px;
  }

  &::before {
    padding: 1px 2px 1px 1px;
    background: linear-gradient(to right, #DBAC2C, #8047F8);

    z-index: -2;
  }

  &::after {
    background: ${props => props.theme.colors["white-100"]};
    z-index: -1;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    max-width: 100%;

    margin: 0;
    padding: 2.2rem 1.8rem;
  }
  
  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {
    padding: 2.2rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].l}) {
    padding: 3.3rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xl}) {
    padding: 4rem;
  }
`;


export const Topic = styled.div`
  width: 100%;
  max-width: max-content;

  height: max-content;

  display: flex;
  align-items: center;

  gap: .8rem;

  div {
    display: flex;
    flex-direction: column;

    gap: 0.4rem;

    span, strong {
      max-width: max-content;

      font-size: ${props => props.theme.font.size.xs};
      
      line-height: ${props => props.theme["line-height"].common};
      color: ${props => props.theme.colors["brown-400"]};
    }

    span {
      font-weight: ${props => props.theme.font.weight.regular};
    }

    strong {
      font-weight: ${props => props.theme.font.weight.extraBold};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xs}) {
  
    > div span, div strong {
      font-size: ${props => props.theme.font.size.s};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    > div span, div strong {
      font-size: ${props => props.theme.font.size.xs};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].l}) {
    > div span, div strong {
      font-size: ${props => props.theme.font.size.s};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xl}) {
    > div span, div strong {
      font-size: ${props => props.theme.font.size.m};
    }
  }
`;


export const ImgDeliveryManDesktop = styled(imgStyle)`
  display: none;


  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    max-height:  100%;
    max-width: 100%;

    display: flex;
    
    img {
      width: 100%;
      height: min-content;
      margin: auto auto 7.5rem;
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].g}) {
    max-width: 60rem;
  }
`;  