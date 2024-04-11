import styled, { keyframes, css } from "styled-components";


export const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(.99);
  }

  100% {
    transform: scale(1);
  }
`;


const baseLocationDetails = css`
  display: flex;
  gap: 1.2rem;
`;

export const baseFormBox = css`

  background: ${props => props.theme.colors["white-300"]};
  
  border-radius: 6px;

  padding: 2.6rem;
  
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  transition: box-shadow .6s ease;

  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4);
    transition: box-shadow .6s ease;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xs}) {
    padding: 2.6rem 3.6rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    padding: 2.6rem 2rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {
    padding: 3.6rem 3.6rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].l}) {
    padding: 4rem;
  }
`;

export const StyleContentTitle = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .8rem;

  padding-bottom: 3.2rem;

  svg {
    width: 2.6rem;
    height: 2.6rem;
  }

  > div {
    text-align: center;

    h3 {
      font-size: ${props => props.theme.font.size.s};
      color: ${props => props.theme.colors["brown-400"]};
      line-height: ${props => props.theme["line-height"].default};
      font-weight: ${props => props.theme.font.weight.regular};

      margin-bottom: .2rem;
    }

    p {
      font-size: ${props => props.theme.font.size.xs};
    }
  }

  
  @media (min-width: ${props => props.theme["device-breackpoints"].xs}) {
    
    svg {
      width: 2.8rem;
      height: 2.8rem;
    }

    > div h3 {
      font-size: ${props => props.theme.font.size.m};
    }

    > div p {
      font-size: ${props => props.theme.font.size.s};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    
    flex-direction: row;
    align-items: flex-start;

    svg {
      width: 2.2rem;
      height: 2.2rem;
    }

    div {
      text-align: start;

      h3 {
        font-size: ${props => props.theme.font.size.s};
      }

      p {
        font-size: ${props => props.theme.font.size.xs};
        line-height: ${props => props.theme["line-height"].common};
      }
    }
  }
`;


export const OrderFormContainer = styled.div`
  width: 100%;

  h1 {
    text-align: center;

    margin-bottom: 2.5rem;
    color: ${props => props.theme.colors["brown-400"]};
    
    font-family: ${props => props.theme.font.family.title};
    font-size: ${props => props.theme.font.size.g};
    font-weight: ${props => props.theme.font.weight.bold};
    line-height: ${props => props.theme["line-height"].default};
    
    animation: ${scaleAnimation} 5s ease infinite;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xs}) {
    
    h1 {
      font-size: ${props => props.theme.font.size.gg};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {

    h1 {
      text-align: start;
      font-size: ${props => props.theme.font.size.l};
    }
  }
`;


export const Form = styled.form`
  max-width: 46rem;
  height: max-content;


  @media (min-width: ${props => props.theme["device-breackpoints"].xs}) {
    margin: 0 auto;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    max-width: 64rem;

    margin: 0;
  }
`;


export const AdressInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  ${baseFormBox}
`;


export const AdressTitle = styled(StyleContentTitle)`
  svg {
    color: ${props => props.theme.colors["yellow-300"]};
  }
`;


export const InputSet = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 1.6rem;
  

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {

    label div input {
  
      font-size: ${props => props.theme.font.size.xs};
      padding: 1rem 1.2rem;
    }
  
    div #label_numero_casa {
      max-width: 12rem;
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {

    div #label_bairro {
      max-width: 20rem;
    }

    div #label_numero_casa {
      max-width: 14rem;
    }
  }
`;


export const CepUFContainer = styled.div`
  ${baseLocationDetails}
  justify-content: space-between;

  #label_UF{
    max-width: 6rem;

    > div input {
      text-align: center;
    }
  }

  #label_cep {
    max-width: 20rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    justify-content: flex-start;
  }

`;


export const CityNeighborhoodContainer = styled.div`
  ${baseLocationDetails}
`;


export const HomeNumberRoadContainer = styled.div`
  ${baseLocationDetails}

  #label_numero_casa {
    max-width: 8rem;
  }


  @media (min-width: ${props => props.theme["device-breackpoints"].l}) {
    
    #label_numero_casa {
      max-width: 20rem;
    }
  }
`;


export const PaymentType = styled.div`
  width: 100%;
  height: max-content;

  margin-top: 1.2rem;

  ${baseFormBox}
`

export const PaymentTitle = styled(StyleContentTitle)`

  svg {
    color: ${props => props.theme.colors["purple-200"]};
  }
`;


export const RadiosSet = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  
  gap: .8rem;

    > div {
      width: 100%;

      display: flex;
      flex-direction: column;

      gap: .8rem;
    }
  
  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {

    > div {
      flex-direction: row;
      gap: .8rem;
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xl}) {
    > div label span {
      text-transform: uppercase;
    }
  }
`;