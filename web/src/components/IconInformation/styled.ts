import styled from "styled-components";
import { TagColors } from "../Tag/styles";

interface IconInformationContainerProps {
  "data-icon-color"?: TagColors;
};

export const IconInformationContainer = styled.div`
  min-width: max-content;

  display: flex;
  align-items: center;

  transition: transform .3s;

  gap: 1.2rem;

  transition: .3s ease;
  filter: opacity(.85);

  &:hover {
    transition: .3s ease;
    transform: scale(1.01);
    filter: opacity(1);
  }

  &:active {
    transition: .3s ease;
    transform: scale(1);
  }

  p {
    font-size: ${props => props.theme.font.size.xs};
  }


  @media (min-width: ${props => props.theme["device-breackpoints"].xl}) {
    
    p {
      font-size: ${props => props.theme.font.size.m};
    }
  }
`;


export const IconImage = styled.div<IconInformationContainerProps>`
  width: min-content;
  height: min-content;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: .8rem;

  background: ${props => {
    const { theme: { colors }, "data-icon-color": iconColor } = props;

    switch(iconColor) {

      case "yellow": return `${colors["yellow-200"]}`;
      case "yellow-dark": return `${colors["yellow-300"]}`;
      case "purple": return `${colors["purple-200"]}`;
      case "brown": return `${colors["brown-300"]}`;

      default: `${colors["yellow-300"]}`
    };
  }};

  border-radius: 50%; 

  svg {
    width: 1.6rem;
    height: 1.6rem;

    color: ${props => props.theme.colors["white-200"]}
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xl}) {
    
    svg {
      width: 2.4rem;
      height: 2.4rem;

    }
  }
`;