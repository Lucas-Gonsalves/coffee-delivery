import styled from "styled-components";


export const HeaderContainer = styled.header`
  width: 100%;
  height: 9rem;

  background: red;
  margin: auto;


  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {
    max-width: 78.6rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].l}) {
    max-width: 90.88rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xl}) {
    max-width: 113.2rem;
  }
`;