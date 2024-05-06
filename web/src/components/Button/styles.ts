import styled from "styled-components";


interface ButtonContainerColor {
  "data-color-background": "yellow"| "red";
};


export const ButtonContainer = styled.button<ButtonContainerColor>`
  width: 100%;
  height: min-content;

  padding: 1.1rem 0;
  cursor: pointer;

  position: relative;
  z-index: 0;

  border: none;
  border-radius: 6px;

  font-size: ${props => props.theme.font.size.xs};
  
  background: ${(props) => {

    switch(props["data-color-background"]) {

      case "yellow" : {
        return "rgba(219, 172, 44, 0.8);"
      };

      case "red" : {
        return props.theme.colors["red-100"];
      };
    }
  }};

  
  color: ${props => props.theme.colors["white-100"]};

  transition: .3s ease;

  filter: opacity(.9);

  &:hover {
    transition: .3s ease;
    filter: opacity(1);

    &:not(:disabled):before {
      transition: .6s ease;

      height: 100%;
      opacity: 1;
    }

    &:disabled {
      background: ${props => props.theme.colors["red-200"]};
    }
  }
  
  &:not(:disabled):active {
    transition: .6s ease;

    transform: scale(.98);
  }

  &:disabled {
    background: ${props => props.theme.colors["red-100"]};
    cursor: not-allowed;
  }

  &::before {
    content: "";

    width: 100%;
    height: 0%;

    position: absolute;
    z-index: -1;

    opacity: 0;

    bottom: 1%;
    left: 0;
    transform: translateY(0%) ;

    transition: .6s ease;
    border-radius: 6px;

    background: ${(props) => {

      switch(props["data-color-background"]) {

        case "yellow" : {
          return props.theme.colors["yellow-200"]
        };

        case "red" : {
          return props.theme.colors["red-200"];
        };
      }
    }};
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    padding: 1.3rem;
  } 

  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {
    font-size: ${props => props.theme.font.size.s};
  }
  @media (min-width: ${props => props.theme["device-breackpoints"].m}) {
    font-size: ${props => props.theme.font.size.s};
  }
`;


