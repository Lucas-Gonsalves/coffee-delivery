import styled from "styled-components";

export const CheckoutContainer = styled.div`
  min-width: 32rem;
  height: 100%;

  width: 100%;
  height: 100%;

  padding: 0 2rem 2rem;

  

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