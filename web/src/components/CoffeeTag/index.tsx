import { CoffeeTagContainer, TagColors } from "./styles";


interface CoffeeTagProps {
  "tag-title": string;
  "tag-color"?: TagColors;
};

export function CoffeeTag({
  
  "tag-title": tagTitle,
  "tag-color": tagColor

}: CoffeeTagProps) {

  return(
    <CoffeeTagContainer
      data-tag-color={tagColor}
    >
      { tagTitle }
    </CoffeeTagContainer>
  );
};