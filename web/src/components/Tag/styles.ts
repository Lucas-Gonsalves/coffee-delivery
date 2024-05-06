import styled from "styled-components";


export type TagColors = "yellow" | "yellow-dark" | "purple" | "brown";

interface TagContainerProps {
  "data-tag-color"?: TagColors;
};


export const TagContainer = styled.span<TagContainerProps>`
  width: max-content;
  height: min-content;

  padding: .4rem .8rem;
  
  font-size: ${props => props.theme.font.size.xxs};
  font-weight: ${props => props.theme.font.weight.bold};
  line-height: ${props => props.theme["line-height"].common};

  border-radius: 100px;
  cursor: default;


  ${(props) => {
    const { theme: {colors}, "data-tag-color": dataTagColor } = props

    switch(dataTagColor) {

      case "yellow":
        return `background: ${colors["yellow-100"]}; color: ${colors["yellow-200"]};`;

      case "yellow-dark":
        return `background: ${colors["yellow-200"]}; color: ${colors["yellow-300"]};`;
        
      case "brown":
        return `background: ${colors["brown-100"]}; color: ${colors["brown-200"]};`;

      case "purple":
        return `background: ${colors["purple-100"]}; color: ${colors["purple-200"]};`;

      default:
        return `background: ${colors["yellow-100"]}; color: ${colors["yellow-200"]};`;
    }
  }}

  transition: .3s ease;

  &:hover {
    transition: .3s ease;
    filter: opacity(.8);
  }
`;