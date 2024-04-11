import styled from "styled-components";
import { scaleAnimation } from "../OrderForm/styles";


export const ItemsSelectedContainer = styled.div`
  max-width: 44.8rem;
  width: 100%;

  height: min-content;

  margin: 0 auto;

  h2 {
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
    
    h2 {
      font-size: ${props => props.theme.font.size.gg};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {

    h2 {
      text-align: start;
      font-size: ${props => props.theme.font.size.l};
    }
  }
`;


export const ItemsSelectedContent = styled.div`
  width: 100%;
  height: 100%;

  background: ${props => props.theme.colors["white-300"]};
  
  border-radius: 6px 44px;

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


export const CoffeeCardsSmallSet = styled.ul`
  list-style: none;

  li {
    padding-bottom: 2.4rem;
    margin-bottom: 2.4rem;

    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.theme.colors["white-500"]};
  
    &:nth-child(odd) {
      > div > img:hover {
        transform: rotate(360deg);
      }
    }
  }
`;


export const PayInformations = styled.div`
  width: 100%;

  padding-bottom: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  div {

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: .8rem;
    
    span {
      font-size: ${props => props.theme.font.size.xs};
      font-weight: ${props => props.theme.font.weight.regular};
    }

    strong {
      font-size: ${props => props.theme.font.size.l};
      color: ${props => props.theme.colors["brown-400"]};
      font-weight: ${props => props.theme.font.weight.bold};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {
    
    div {
    
      span {
        font-size: ${props => props.theme.font.size.s};
      }

      strong {
        font-size: ${props => props.theme.font.size.xl};
      }
    }
  }
`;