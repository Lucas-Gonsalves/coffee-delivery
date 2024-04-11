import styled from "styled-components";


export const ButtonRemoveContainer = styled.button`
  width: max-content;
  height: min-content;

  padding: .65rem .8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: .4rem;
  
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0);
  transition: .3s;

  border: none;
  border-radius: 6px;

  outline: none;
  cursor: pointer;

  background: ${props => props.theme.colors["white-500"]};

  svg {
    width: 1.6rem;
    height: 1.6rem;

    color: ${props => props.theme.colors["purple-200"]};
  }

  span {
    font-size: ${props => props.theme.font.size.xxs};
    font-weight: ${props => props.theme["line-height"].title};
  }

  &:hover {
    transition: .3s ease;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);


    background: ${props => props.theme.colors["brown-100"]};
    transform: scale(1.03);
  }

  &:active {
    transition: .3s ease;

    transform: scale(1);
  }
`;