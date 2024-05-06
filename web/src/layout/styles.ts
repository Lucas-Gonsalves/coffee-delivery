import styled from "styled-components";


export const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {

    height: 100vh;

  }

`;

