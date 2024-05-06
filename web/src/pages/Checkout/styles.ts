import styled from "styled-components";
import { scaleAnimation } from "./OrderForm/styles";

export const CheckoutContainer = styled.div`
  min-width: 33rem;

  height: 100%;

  width: 100%;
  height: 100%;

  padding: 0 2rem 8.3315rem;

  

  header {
    padding-bottom:6.2125rem
  }

  main {
    max-width: 112rem;
    margin: 0 auto;
  }
`;


export const CheckoutContent = styled.section`
  display: flex;
  flex-direction: column;

  gap: 6.4rem;

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    
    flex-direction: row;
    justify-content: space-between;

    gap: 1.6rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {
    gap: 3.2rem;
  }
`;


export const CaseNoCartItems = styled.section`
  width: 50%;
  min-height: 32.557rem;

  margin: 4.9rem 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

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


  h3 {
    text-align: center;

    color: ${props => props.theme.colors["brown-400"]};
    
    font-family: ${props => props.theme.font.family.title};
    font-size: ${props => props.theme.font.size.g};
    font-weight: ${props => props.theme.font.weight.bold};
    line-height: ${props => props.theme["line-height"].default};
    
    animation: ${scaleAnimation} 5s ease infinite;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xs}) {
    
    h3 {
      font-size: ${props => props.theme.font.size.gg};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {

    h3 {
      text-align: start;
      font-size: ${props => props.theme.font.size.l};
    }
  }
`;

